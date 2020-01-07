import React from 'react';
import { CopyButton } from 'carbon-components-react';
import { Launch16 } from '@carbon/icons-react';
import copy from 'copy-to-clipboard';
import cx from 'classnames';
import { pathRow, button, copyButton } from './Code.module.scss';

// If no path is given, don't render. We'll use the Sidebar for buttons
// If a src url is given, the src Icon will display in this row, otherwise
// The copy button will.
const PathRow = ({ src, path, children }) => {
  if (!path) return null;
  return (
    <div className={pathRow}>
      <span>{path}</span>
      {src ? (
        <a
          target="_blank"
          rel="noopener noreferrer"
          title="View source"
          className={button}
          href={src}
          style={{ position: 'relative', zIndex: 200 }}
        >
          <Launch16 alt="View source" />
        </a>
      ) : (
        <CopyButton
          className={cx(button, copyButton)}
          onClick={() => {
            copy(children);
          }}
        />
      )}
    </div>
  );
};

export default PathRow;
