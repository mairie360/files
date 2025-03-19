# Define build arguments
ARG NODE_VERSION=23.10.0

# Stage 1: Builder
FROM node:${NODE_VERSION}-bookworm-slim AS builder

# Set working directory
WORKDIR /usr/src/files-web

# Copy the package files
COPY package.json package-lock.json ./

# Install dependencies
RUN npm ci

# Copy the source code
COPY . .

# Build the project
RUN npm run build

# Create non-root user and group
RUN groupadd --system files-web && useradd --no-log-init --system -g files-web files-web

# Set permissions
USER files-web

# Set entrypoint
ENTRYPOINT ["/usr/local/bin/npm"]
CMD ["run", "start"]
