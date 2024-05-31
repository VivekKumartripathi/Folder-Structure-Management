import React, { useState } from 'react';

const CreateFolderModal = ({ open, onClose, onCreateFolder, parentId }) => {
  const [name, setName] = useState('');
  const [color, setColor] = useState('#000000');

  const handleCreateFolder = () => {
    onCreateFolder(name, color, parentId);
    setName('');
    setColor('#000000');
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
        backgroundColor: 'rgba(0, 0, 0, 1)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 10000,
      }}
    >
      <div
        style={{
          backgroundColor: 'Brown',
          padding: 40,
          borderRadius: 25,
        }}
      >
        <h2>Create Folder</h2>
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
          <button onClick={handleCreateFolder}>Create</button>
          <button onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default CreateFolderModal;