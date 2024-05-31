import React, { useState } from 'react';

const EditFolderModal = ({ open, onClose, folder, onUpdateFolder }) => {
  const [name, setName] = useState(folder ? folder.name : '');
  const [color, setColor] = useState(folder ? folder.color : '#deb887');

  const handleUpdateFolder = () => {
    onUpdateFolder(folder.id, name, color);
    onClose();
  };

  if (!open) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1000,
      }}
    >
      <div
        style={{
          backgroundColor: 'white',
          padding: 20,
          borderRadius: 5,
        }}
      >
        <h2>Edit Folder</h2>
        <input
          type="text"
          placeholder="Folder Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
        <div>
          <button onClick={handleUpdateFolder}>Update</button>
          <button onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default EditFolderModal;