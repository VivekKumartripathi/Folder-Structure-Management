import React from 'react';
import { FaFolder } from 'react-icons/fa';
const iconSize = 45;

const FolderList = ({ folders, onFolderClick }) => {
  const renderFolder = (folder, breadcrumbs = []) => (
    // <div key={folder.id} style={{ marginLeft: 20 }}>
      <div
        key={folder.id}
        style={{
          display: 'inline-block',
          marginRight: 20,
          textAlign: 'center',
        //   alignItems: 'center',
          cursor: 'pointer',
          whiteSpace: 'nowrap',
        }}
        onClick={() => onFolderClick(folder)}
      >
        {/* <span style={{ color: folder.color }}>&#9679;</span> */}
        <FaFolder style={{ color: folder.color, fontSize: iconSize }} />
        <span style={{ marginLeft: 5, lineHeight: `${iconSize}px` }}>
          {breadcrumbs.length > 0 ? `${breadcrumbs.join(' / ')} / ${folder.name}` : folder.name}
        </span>
        {folder.children.length > 0 && (
      <div style={{ display: 'inline-block', marginleft: 10}}>
      {folder.children.map((childFolder) =>
        renderFolder(childFolder, [...breadcrumbs, folder.name])
      )}
    </div>
    )}
    </div>
  );

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {folders.map((folder) => renderFolder(folder))}
    </div>
  );
};
export default FolderList;