'use client'

import { useState } from "react";


export default function Page() {
  const [selected, setSelected] = useState("inbox");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [files, setFiles] = useState([
    { id: 1, name: "Fichier 1", content: "Contenu du fichier 1" },
    { id: 2, name: "Fichier 2", content: "Contenu du fichier 2" },
    { id: 3, name: "Fichier 3", content: "Contenu du fichier 3" },
    { id: 4, name: "Fichier 4", content: "Contenu du fichier 4" },
    { id: 5, name: "Fichier 5", content: "Contenu du fichier 5" },
    { id: 6, name: "Fichier 6", content: "Contenu du fichier 6" },
    { id: 7, name: "Fichier 7", content: "Contenu du fichier 7" },
    { id: 8, name: "Fichier 8", content: "Contenu du fichier 8" },
    { id: 9, name: "Fichier 9", content: "Contenu du fichier 9" },
    { id: 10, name: "Fichier 10", content: "Contenu du fichier 10" },
    { id: 11, name: "Fichier 11", content: "Contenu du fichier 11" },
    { id: 12, name: "Fichier 12", content: "Contenu du fichier 12" },
    { id: 13, name: "Fichier 13", content: "Contenu du fichier 13" },
    { id: 14, name: "Fichier 14", content: "Contenu du fichier 14" },
    { id: 15, name: "Fichier 15", content: "Contenu du fichier 15" },
    { id: 16, name: "Fichier 16", content: "Contenu du fichier 16" },
    { id: 17, name: "Fichier 17", content: "Contenu du fichier 17" },
    { id: 18, name: "Fichier 18", content: "Contenu du fichier 18" },
    { id: 19, name: "Fichier 19", content: "Contenu du fichier 19" },
    { id: 20, name: "Fichier 20", content: "Contenu du fichier 20" },
    { id: 21, name: "Fichier 21", content: "Contenu du fichier 21" },
    { id: 22, name: "Fichier 22", content: "Contenu du fichier 22" },
    { id: 23, name: "Fichier 23", content: "Contenu du fichier 23" },
    { id: 24, name: "Fichier 24", content: "Contenu du fichier 24" },
    { id: 25, name: "Fichier 25", content: "Contenu du fichier 25" },
    { id: 26, name: "Fichier 26", content: "Contenu du fichier 26" },
    { id: 27, name: "Fichier 27", content: "Contenu du fichier 27" },
    { id: 28, name: "Fichier 28", content: "Contenu du fichier 28" },
    { id: 29, name: "Fichier 29", content: "Contenu du fichier 29" },
    { id: 30, name: "Fichier 30", content: "Contenu du fichier 30" },
    { id: 31, name: "Fichier 31", content: "Contenu du fichier 31" },
    { id: 32, name: "Fichier 32", content: "Contenu du fichier 32" },
    { id: 33, name: "Fichier 33", content: "Contenu du fichier 33" },
    { id: 34, name: "Fichier 34", content: "Contenu du fichier 34" },
    { id: 35, name: "Fichier 35", content: "Contenu du fichier 35" },
    { id: 36, name: "Fichier 36", content: "Contenu du fichier 36" },
    { id: 37, name: "Fichier 37", content: "Contenu du fichier 37" },
    { id: 38, name: "Fichier 38", content: "Contenu du fichier 38" },
    { id: 39, name: "Fichier 39", content: "Contenu du fichier 39" },
    { id: 40, name: "Fichier 40", content: "Contenu du fichier 40" },
    { id: 41, name: "Fichier 41", content: "Contenu du fichier 41" },
    { id: 42, name: "Fichier 42", content: "Contenu du fichier 42" },
    { id: 43, name: "Fichier 43", content: "Contenu du fichier 43" },
    { id: 44, name: "Fichier 44", content: "Contenu du fichier 44" },
    { id: 45, name: "Fichier 45", content: "Contenu du fichier 45" },
    { id: 46, name: "Fichier 46", content: "Contenu du fichier 46" },
    { id: 47, name: "Fichier 47", content: "Contenu du fichier 47" },
    { id: 48, name: "Fichier 48", content: "Contenu du fichier 48" },
    { id: 49, name: "Fichier 49", content: "Contenu du fichier 49" },
    { id: 50, name: "Fichier 50", content: "Contenu du fichier 50" },
  ]);
  const [editing, setEditing] = useState<{ id: number; name: string; content: string } | null>(null);
  const [newName, setNewName] = useState('');
  const [newContent, setNewContent] = useState('');

  const menuItems = [
    { id: "inbox", label: "Mes fichiers", icon: "inbox" },
    { id: "send", label: "Fichiers Partagés", icon: "send" },
    { id: "drafts", label: "Brouillons", icon: "drafts" },
    { id: "trash", label: "Corbeille", icon: "delete" }
  ];

  const handleDelete = (id: number) => {
    setFiles(files.filter(file => file.id !== id));
  };

  const handleEdit = (file: { id: number; name: string; content: string }) => {
    setEditing(file);
    setNewName(file.name);
    setNewContent(file.content);
  };

  const handleSaveEdit = () => {
    if (editing) {
      const updatedFiles = files.map(file => {
        if (file.id === editing.id) {
          return { ...file, name: newName, content: newContent };
        }
        return file;
      });
      setFiles(updatedFiles);
      setEditing(null);
    }
  };

  return (
    <div className="flex flex-col">
      {/* Mobile toggle button */}
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="md:hidden p-4 text-white bg-primary rounded"
      >
        ☰
      </button>

      {/* Sidebar menu */}
      <div
        className={`w-full p-2 flex sm:flex-row gap-4 justify-center items-center shadow-md z-20 transition-transform 
          ${isSidebarOpen ? 'block flex-col' : 'hidden'} md:flex md:flex-row`}
      >
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setSelected(item.id)}
            className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm transition-all 
              ${selected === item.id ? "bg-primary text-white" : "hover:bg-gray-700 hover:text-white"}`}
          >
            <span className="material-symbols-outlined text-lg">{item.icon}</span>
            <span>{item.label}</span>
          </button>
        ))}
      </div>

      {/* Files content */}
      <div className="flex flex-wrap justify-center gap-3 mt-6 px-4 overflow-y-auto">
        {/* Assuming files array exists */}
        {files.map((file) => (
          <div key={file.id} className="card w-96 bg-gray-400 shadow-lg rounded-lg border border-gray-300">
            <div className="card-body p-6">
              <h2 className="card-title text-xl font-semibold text-gray-800">
                {editing && editing.id === file.id ? (
                  <input
                    type="text"
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-md shadow-sm"
                  />
                ) : (
                  file.name
                )}
              </h2>
              <p className="text-gray-800">
                {editing && editing.id === file.id ? (
                  <textarea
                    value={newContent}
                    onChange={(e) => setNewContent(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-md shadow-sm"
                  />
                ) : (
                  file.content
                )}
              </p>
              <div className="flex justify-end card-actions">
                {editing && editing.id === file.id ? (
                  <button
                    className="btn btn-primary bg-indigo-600 text-white hover:bg-indigo-700"
                    onClick={handleSaveEdit}
                  >
                    Enregistrer
                  </button>
                ) : (
                  <>
                    <button
                      className="btn bg-gray-500 text-white hover:bg-gray-600"
                      onClick={() => handleEdit(file)}
                    >
                      Modifier
                    </button>
                    <button
                      className="btn bg-red-500 text-white hover:bg-red-600"
                      onClick={() => handleDelete(file.id)}
                    >
                      Supprimer
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
