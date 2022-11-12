import React from 'react';
import { CopyButton } from '@carbon/react';
import { Launch } from '@carbon/react/icons';
import copy from 'copy-to-clipboard';
import cx from 'classnames';
import * as styles from './Code.module.scss';
import useMetadata from '../../util/hooks/useMetadata';

// If there is a src url, but no path name, both icons appear in the sidebar.
// If there is a path name, but no src url, the copy button should be in the PathRow
// so we don't put it in the side bar.
//
// We'll still render the sidebar regardless of the path since we want the text fade.
const Sidebar = ({ src, path, children }) => {
  const { interiorTheme } = useMetadata();
  const shouldShowSrcLink = !path && src;
  const shouldShowCopyButton = !path || src;
  return (
    <div
      className={cx(styles.sidebar, {
        [styles.dark]: interiorTheme === 'dark',
      })}>
      {shouldShowCopyButton && (
        <CopyButton
          className={cx(styles.button, styles.copyButton)}
          onClick={() => {
            copy(children);
          }}
        />
      )}
      {shouldShowSrcLink && (
        <a
          title="View source"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.button}
          href={src}
          style={{ zIndex: 200 }}>
          <Launch alt="View source" />
        </a>
      )}
    </div>
  );
};

export default Sidebar;
