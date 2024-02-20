import React, { useEffect, useState } from 'react';
import { Highlight } from 'prism-react-renderer';
import { ChevronDown, ChevronUp } from '@carbon/react/icons';

import cx from 'classnames';

import { Row } from '../Grid';
import getTheme from './getTheme';

import * as styles from './Code.module.scss';

import PathRow from './PathRow';
import Sidebar from './Sidebar';

import useMetadata from '../../util/hooks/useMetadata';

const Code = ({
  children,
  className: classNameProp = '',
  path,
  src,
  hideCode = false,
}) => {
  const [hasMoreThanNineLines, setHasMoreThanNineLines] = useState(false);
  const [shouldShowMore, setShouldShowMore] = useState(false);
  const [isInlineCode, setIsInlineCode] = useState(false);
  useEffect(() => {
    // Inline code blocks don't have a className prop
    if (!classNameProp) {
      setIsInlineCode(true);
    }
  }, [classNameProp]);

  const { interiorTheme } = useMetadata();
  const language = classNameProp.replace(/language-/, '').replace('mdx', 'jsx');

  const removeTrailingEmptyLine = (lines) => {
    const [lastLine] = lines[lines.length - 1];

    // empty is a boolean property coming inside the lastLine object
    if (lastLine.empty) {
      lines.splice(-1);
      return lines;
    }
    return [...lines];
  };

  const getLines = (lines) => {
    const withoutTrailingEmptyLines = removeTrailingEmptyLine(lines);
    if (withoutTrailingEmptyLines && withoutTrailingEmptyLines.length > 9) {
      setHasMoreThanNineLines(true);
    }
    if (shouldShowMore || !hideCode) {
      return withoutTrailingEmptyLines;
    }
    return withoutTrailingEmptyLines.slice(0, 9);
  };

  // TODO - remove this once we have a better way of handling inline code. This seems like a hack
  // This might be the result of upgrade of prism-react-renderer.
  if (isInlineCode) {
    return <code>{children}</code>;
  }
  return (
    <Row className={cx(styles.row)}>
      <PathRow src={src} path={path}>
        {children}
      </PathRow>
      <Highlight
        code={children}
        language={language}
        theme={getTheme(interiorTheme)}>
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <div className={styles.container}>
            <pre
              className={cx(styles.highlight, {
                [styles.sideBarMinHeight]: !path && src,
                [className]: className,
              })}
              style={style}>
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
      {hideCode && hasMoreThanNineLines && (
        <button
          className={cx(styles.showMoreButton, {
            [styles.dark]: interiorTheme === 'dark',
          })}
          onClick={() => setShouldShowMore(!shouldShowMore)}
          type="button">
          {shouldShowMore ? (
            <>
              <span>Show less</span>
              <ChevronUp />
            </>
          ) : (
            <>
              <span>Show more</span>
              <ChevronDown />
            </>
          )}
        </button>
      )}
    </Row>
  );
};

export default Code;
