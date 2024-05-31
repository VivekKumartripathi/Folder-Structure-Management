import React, { useState } from 'react';
import FolderTree from './components/FolderTree';
import FolderList from './components/FolderList';
import CreateFolderModal from './components/CreateFolderModal';
import EditFolderModal from './components/EditFolderModel';
import { initialFolders, createFolder, updateFolder, deleteFolder } from './utils/folderUtils';

const App = () => {
  const [folders, setFolders] = useState(initialFolders);
  const [selectedFolder, setSelectedFolder] = useState(null);
  const [showCreateModal, setShowCreateModal] = useState(false);
const [showEditModal, setShowEditModal] = useState(false);

  const handleFolderClick = (folder) => {
    setSelectedFolder(folder);
  };

  const handleEditFolder = (folder) => {
    setShowEditModal(true);
    setSelectedFolder(folder);
  };

  const handleDeleteFolder = (folder) => {
    const updatedFolders = deleteFolder(folder.id);
    setFolders(updatedFolders);
    setSelectedFolder(null);
  };

  const handleCreateFolder = (name, color, parentId) => {
    const newFolders = createFolder(name, color, parentId || selectedFolder.id);
    setFolders(newFolders);
  };

  const handleUpdateFolder = (folderId, name, color) => {
    const updatedFolders = updateFolder(folderId, name, color);
    setFolders(updatedFolders);
  };

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Folder Structure Management Application</h1>
      <div style={{ display: 'flex' }}>
        <div style={{ flex: 1 }}>
          <h2>Home</h2>
          <FolderTree
            folders={folders}
            onFolderClick={handleFolderClick}
            onEditFolder={handleEditFolder}
            onDeleteFolder={handleDeleteFolder}
          />
        </div>
        <div style={{ flex: 1 }}>
          <h2>Folder List</h2>
          <FolderList
            folders={folders}
            onFolderClick={handleFolderClick}
          />
        </div>
      </div>
      <div>
        <button onClick={() => setShowCreateModal(true)}>Create Folder</button>
      </div>
      <CreateFolderModal
        open={showCreateModal}
        onClose={() => setShowCreateModal(false)}
        onCreateFolder={handleCreateFolder}
        parentId={selectedFolder ? selectedFolder.id : null}
      />
      <EditFolderModal
        open={showEditModal}
        onClose={() => setShowEditModal(false)}
        folder={selectedFolder}
        onUpdateFolder={handleUpdateFolder}
      />
    </div>
  );
};

export default App;