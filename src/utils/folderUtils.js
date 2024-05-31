import { v4 as uuidv4 } from 'uuid';

// Initial folder data structure
export const initialFolders = [
  {
    id: uuidv4(),
    name: 'Archana',
    color: '#ffd700',
    children: [
      {
        id: uuidv4(),
        name: 'Data',
        color: '#b8860b',
        children: [],
      },
      {
        id: uuidv4(),
        name: 'Personal',
        color: '#deb887',
        children: [
          {
            id: uuidv4(),
            name: 'Resume',
            color: '#deb887',
            children: [],
          },
        ],
      },
    ],
  },
];

// Function to create a new folder
export const createFolder = (name, color, parentId) => {
  const newFolder = {
    id: uuidv4(),
    name,
    color,
    children: [],
  };

  const updateFolders = (folders) => {
    return folders.map((folder) => {
      if (folder.id === parentId) {
        return { ...folder, children: [...folder.children, newFolder] };
      } else {
        return { ...folder, children: updateFolders(folder.children) };
      }
    });
  };

  return updateFolders(initialFolders);
};

// Function to update a folder
export const updateFolder = (folderId, name, color) => {
  const updateFolders = (folders) => {
    return folders.map((folder) => {
      if (folder.id === folderId) {
        return { ...folder, name, color };
      } else {
        return { ...folder, children: updateFolders(folder.children) };
      }
    });
  };

  return updateFolders(initialFolders);
};

// Function to delete a folder
export const deleteFolder = (folderId) => {
  const updateFolders = (folders) => {
    return folders.filter((folder) => {
      if (folder.id === folderId) {
        return false;
      } else {
        return { ...folder, children: updateFolders(folder.children) };
      }
    });
  };

  return updateFolders(initialFolders);
};