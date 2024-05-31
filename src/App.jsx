// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
// import React, { useState } from 'react';
// import FolderTree from './components/FolderTree';
// import FolderList from './components/FolderList';
// import CreateFolderModal from './components/CreateFolderModal';
// import EditFolderModal from './components/EditFolderModal';
// import { initialFolders, createFolder, updateFolder, deleteFolder } from './utils/folderUtils';

// const App = () => {
//   // State variables and handlers for folder management
//   const [folders, setFolders] = useState(initialFolders);
//   const [selectedFolder, setSelectedFolder] = useState(null);
//   const [showCreateModal, setShowCreateModal] = useState(false);
//   const [showEditModal, setShowEditModal] = useState(false);

//   // Functions to handle folder interactions

//   return (
//     <div>
//       <h1>Folder Structure Management</h1>
//       {/* Render folder tree and folder list */}
//       <div style={{ display: 'flex' }}>
//         <div style={{ flex: 1 }}>
//           <FolderTree
//             folders={folders}
//             onFolderClick={handleFolderClick}
//             onEditFolder={handleEditFolder}
//             onDeleteFolder={handleDeleteFolder}
//           />
//         </div>
//         <div style={{ flex: 1 }}>
//           <FolderList
//             folders={folders}
//             onFolderClick={handleFolderClick}
//           />
//         </div>
//       </div>
//       {/* Button to open create folder modal */}
//       <button onClick={() => setShowCreateModal(true)}>Create Folder</button>
//       {/* Render modals */}
//       <CreateFolderModal
//         open={showCreateModal}
//         onClose={() => setShowCreateModal(false)}
//         onCreateFolder={handleCreateFolder}
//         parentId={selectedFolder ? selectedFolder.id : null}
//       />
//       <EditFolderModal
//         open={showEditModal}
//         onClose={() => setShowEditModal(false)}
//         folder={selectedFolder}
//         onUpdateFolder={handleUpdateFolder}
//       />
//     </div>
//   );
// };

// export default App;

import React, { useState } from 'react';
import FolderTree from './components/FolderTree';
import FolderList from './components/FolderList';
import CreateFolderModal from './components/CreateFolderModal';
import EditFolderModal from './components/EditFolderModal';
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
      <h1>Folder Structure Management Application</h1>
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