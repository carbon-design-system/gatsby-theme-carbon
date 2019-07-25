import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

function ImageGallery({ children }) {
  const [portalsNode, updateNode] = useState(null);

  useEffect(() => {
    const node = document.createElement('div');
    document.body.appendChild(node);
    updateNode(node);

    return () => {
      node.parentNode.removeChild(node);
    };
  }, []);

  // Todo: create styling

  const onClickHandler = child => {
    console.log(child);
    const containerNode = document.createElement('div');
    containerNode.className = '.container';
    containerNode.appendChild(child);
  };

  return (
    <div>
      {portalsNode &&
        ReactDOM.createPortal(
          React.Children.map(children, child =>
            React.cloneElement(child, {
              onClick: onClickHandler(child),
            })
          ),
          portalsNode
        )}
    </div>
  );
}

export default ImageGallery;
