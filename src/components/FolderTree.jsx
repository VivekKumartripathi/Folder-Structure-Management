import React, { useState } from 'react';
import { FaFolder, FaFolderOpen } from 'react-icons/fa';

const iconSize = 60;

const FolderTree = ({ folders, onFolderClick, onEditFolder, onDeleteFolder }) => {
  const [expandedFolders, setExpandedFolders] = useState([]);

  const handleFolderClick = (folder) => {
    onFolderClick(folder);
    setExpandedFolders((prevExpandedFolders) =>
      prevExpandedFolders.includes(folder.id)
        ? prevExpandedFolders.filter((id) => id !== folder.id)
        : [...prevExpandedFolders, folder.id]
    );
  };

  const renderFolder = (folder) => (
    <div key={folder.id} style={{ marginLeft: 30 }}>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          cursor: 'pointer',
        }}
        onClick={() => handleFolderClick(folder)}
      >
        {expandedFolders.includes(folder.id) ? (
          <FaFolderOpen style={{ color: folder.color,fontSize: iconSize }} />
        ) : (
          <FaFolder style={{ color: folder.color, fontSize: iconSize }} />
        )}
        <span style={{ marginLeft: 8 }}>{folder.name}</span>
      </div>
      {expandedFolders.includes(folder.id) && (
        <div style={{ marginLeft: 20 }}>
          {folder.children.map((childFolder) => renderFolder(childFolder))}
        </div>
      )}
      <div style={{ marginLeft: 28 }}>
        <button onClick={() => onEditFolder(folder)}>Edit</button>
        <button onClick={() => onDeleteFolder(folder)}>Delete</button>
      </div>
    </div>
  );

  return <div>{folders.map((folder) => renderFolder(folder))}</div>;
};

export default FolderTree;