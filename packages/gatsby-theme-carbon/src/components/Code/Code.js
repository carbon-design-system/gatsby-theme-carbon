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

export const parseCodeMetaData = (metaData) => {
  // metaData string is of format: path=/directory/file.mdx src=https://gatsby.carbondesignsystem.com showAll wrap
  const result = { path: '', src: '', showAll: false, wrap: null };
  if (!metaData) {
    return result;
  }
  const metaDataObject = metaData.split(' ').reduce((obj, item) => {
    if (!item) {
      return obj;
    }
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
    result.path = metaDataObject.path;
  }

  if (metaDataObject.src) {
    result.src = metaDataObject.src;
  }

  if (metaDataObject.showAll) {
    result.showAll = true;
  }

  if (metaDataObject.wrap === true || metaDataObject.wrap === 'true') {
    result.wrap = true;
  } else if (metaDataObject.wrap === false || metaDataObject.wrap === 'false') {
    result.wrap = false;
  }

  return result;
};

const Code = ({ children, className: classNameProp = '', metaData }) => {
  // Initialize from metaData so SSR/first paint already reflects
  // path/src/showAll/wrap (useEffect below keeps them in sync on change).
  const [path, setPath] = useState(() => parseCodeMetaData(metaData).path);
  const [src, setSrc] = useState(() => parseCodeMetaData(metaData).src);
  const [showAll, setShowAll] = useState(
    () => parseCodeMetaData(metaData).showAll
  );
  const [wrap, setWrap] = useState(() => parseCodeMetaData(metaData).wrap);
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
    const parsed = parseCodeMetaData(metaData);
    setPath(parsed.path);
    setSrc(parsed.src);
    setShowAll(parsed.showAll);
    setWrap(parsed.wrap);
  }, [metaData]);

  const { interiorTheme, isCodeWrapEnabled } = useMetadata();
  const shouldWrap = wrap !== null ? wrap : Boolean(isCodeWrapEnabled);
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
  const showToggleButton = hasMoreThanNineLines && !showAll;
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
          <div
            className={cx(styles.container, {
              [styles.hasButton]: showToggleButton,
              [styles.wrapContainer]: shouldWrap,
            })}>
            <pre
              className={cx(styles.highlight, {
                [styles.sideBarMinHeight]: !path && src,
                [styles.wrap]: shouldWrap,
                [className]: className,
              })}
              style={style}>
              {getLines(tokens).map((line, i) => {
                const lineProps = getLineProps({ line, key: i });
                return (
                  <div
                    {...lineProps}
                    key={i}
                    className={cx(lineProps.className, {
                      [styles.wrappedLine]: shouldWrap,
                    })}>
                    {line.map((token, key) => (
                      <span {...getTokenProps({ token, key })} key={key} />
                    ))}
                  </div>
                );
              })}
            </pre>
            <Sidebar path={path} src={src}>
              {children}
            </Sidebar>
          </div>
        )}
      </Highlight>
      {showToggleButton && (
        <button
          className={cx(styles.showMoreButton, {
            [styles.dark]: interiorTheme === 'dark',
          })}
          onClick={() => setShouldShowMore(!shouldShowMore)}
          aria-expanded={shouldShowMore}
          aria-label={shouldShowMore ? 'Show less code' : 'Show more code'}
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
