import React, { useState } from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';
import { ChevronDown16, ChevronUp16 } from '@carbon/icons-react';

import cx from 'classnames';

import { Row } from '../Grid';
import prismTheme from './prismTheme';

import styles from './Code.module.scss';

import PathRow from './PathRow';
import Sidebar from './Sidebar';

const Code = ({ children, className: classNameProp = '', path, src }) => {
  const [hasMoreThanNineLines, setHasMoreThanNineLines] = useState(false);
  const [shouldShowMore, setShouldShowMore] = useState(false);

  const language = classNameProp.replace(/language-/, '');

  const removeTrailingEmptyLine = lines => {
    const [lastLine] = lines.splice(-1);
    if (lastLine[0].empty) {
      return lines;
    }
    return [...lines, lastLine];
  };

  const getLines = lines => {
    const withoutTrailingEmpty = removeTrailingEmptyLine(lines);

    if (withoutTrailingEmpty.length > 9) {
      setHasMoreThanNineLines(true);
    }

    if (shouldShowMore) {
      return withoutTrailingEmpty;
    }

    return withoutTrailingEmpty.slice(0, 9);
  };

  return (
    <Row className={styles.row}>
      <PathRow src={src} path={path}>
        {children}
      </PathRow>
      <Highlight
        {...defaultProps}
        code={children}
        language={language}
        theme={prismTheme}
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <div className={styles.container}>
            <pre
              className={cx(styles.highlight, {
                [styles.sideBarMinHeight]: !path && src,
                [className]: className,
              })}
              style={style}
            >
              {getLines(tokens).map((line, i) => (
                <div {...getLineProps({ line, key: i })}>
                  {line.map((token, key) => (
                    <span {...getTokenProps({ token, key })} />
                  ))}
                </div>
              ))}
            </pre>
            <Sidebar path={path} src={src}>
              {children}
            </Sidebar>
          </div>
        )}
      </Highlight>
      {hasMoreThanNineLines && (
        <button
          className={styles.showMoreButton}
          onClick={() => setShouldShowMore(!shouldShowMore)}
          type="button"
        >
          {shouldShowMore ? (
            <>
              <span>Show less</span>
              <ChevronUp16 />
            </>
          ) : (
            <>
              <span>Show more</span>
              <ChevronDown16 />
            </>
          )}
        </button>
      )}
    </Row>
  );
};

export default Code;
