ARG NODE_VERSION=23.10.0
FROM node:${NODE_VERSION}-bookworm-slim AS builder

# Install builder dependencies
RUN apt update && rm -rf /var/lib/apt/lists/*

# Set working directory
WORKDIR /usr/src/files

# Copy package files separately for better caching
COPY package.json package-lock.json ./

# Install dependencies
RUN npm ci

# Copy source code
COPY . .

# Build the project
RUN npm run build


FROM node:${NODE_VERSION}-bookworm-slim AS runner

# Install runner dependencies
RUN apt update && apt install -y --no-install-recommends \
    curl \
    && rm -rf /var/lib/apt/lists/*

# Set working directory
WORKDIR /usr/src/files

# Copy only the necessary built files from builder
COPY --from=builder /usr/src/files/.next .next
COPY --from=builder /usr/src/files/package.json package.json
COPY --from=builder /usr/src/files/package-lock.json package-lock.json

# Install only production dependencies
RUN npm ci --omit=dev

# Create non-root user
RUN useradd --system --home /usr/src/files --shell /usr/sbin/nologin files

# Set permissions
RUN chown -R files:files /usr/src/files
USER files

# Set environment variables
ENV NODE_ENV=production
ENV HOSTNAME="0.0.0.0"
ENV PORT=3000

# Start the app
CMD ["npm", "run", "start"]