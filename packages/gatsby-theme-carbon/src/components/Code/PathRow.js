import React from 'react';
import { CopyButton } from '@carbon/react';
import { Launch } from '@carbon/react/icons';
import copy from 'copy-to-clipboard';
import cx from 'classnames';
import * as styles from './Code.module.scss';
import useMetadata from '../../util/hooks/useMetadata';

// If no path is given, don't render. We'll use the Sidebar for buttons
// If a src url is given, the src Icon will display in this row, otherwise
// The copy button will.

const PathRow = ({ src, path, children }) => {
  const { interiorTheme } = useMetadata();
  if (!path) return null;
  return (
    <div
      className={cx(styles.pathRow, {
        [styles.dark]: interiorTheme === 'dark',
      })}>
      <span className={styles.path}>{path}</span>
      {src ? (
        <a
          target="_blank"
          rel="noopener noreferrer"
          title="View source"
          className={styles.button}
          href={src}
          style={{ position: 'relative', zIndex: 200 }}>
          <Launch alt="View source" />
        </a>
      ) : (
        <CopyButton
          className={cx(styles.button, styles.copyButton)}
          onClick={() => {
            copy(children);
          }}
        />
      )}
    </div>
  );
};

export default PathRow;
