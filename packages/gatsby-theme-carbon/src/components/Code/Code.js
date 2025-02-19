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

const Code = ({ children, className: classNameProp = '', metaData }) => {
  const [path, setPath] = useState('');
  const [src, setSrc] = useState('');
  const [showAll, setShowAll] = useState(false);
  const [hasMoreThanNineLines, setHasMoreThanNineLines] = useState(false);
  const [shouldShowMore, setShouldShowMore] = useState(false);
  const [isInlineCode, setIsInlineCode] = useState(false);
  useEffect(() => {
    // Inline code blocks don't have a className prop
    if (!classNameProp) {
      setIsInlineCode(true);
    }
  }, [classNameProp]);

  useEffect(() => {
    // metaData string is of format: path=/directory/file.mdx src=https://gatsby.carbondesignsystem.com
    if (metaData) {
      const metaDataObject = metaData.split(' ').reduce((obj, item) => {
        const [key, value] = item.split('=');

        // Checking for boolean values coming as string or not coming like in showAll prop
        if (value === 'true' || !value) {
          obj[key] = true;
        } else if (value === 'false') {
          obj[key] = false;
        } else {
          // else setting what is passed after =
          obj[key] = value;
        }
        return obj;
      }, {});

      if (metaDataObject.path) {
        setPath(metaDataObject.path);
      }

      if (metaDataObject.src) {
        setSrc(metaDataObject.src);
      }

      if (metaDataObject.showAll) {
        setShowAll(true);
      }
    }
  }, [metaData]);

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
    if (shouldShowMore || showAll) {
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
                <div {...getLineProps({ line, key: i })} key={i}>
                  {line.map((token, key) => (
                    <span {...getTokenProps({ token, key })} key={key} />
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
      {hasMoreThanNineLines && !showAll && (
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
