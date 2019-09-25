import React from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';

import cx from 'classnames';

import { Row } from '../Grid';
import prismTheme from './prismTheme';

import {
  highlight,
  container,
  sideBarMinHeight,
  row,
} from './Code.module.scss';

import PathRow from './PathRow';
import Sidebar from './Sidebar';

const Code = ({
  children,
  className: classNameProp = '',
  path,
  src,
  copyLineStart,
  copyLineLength,
}) => {
  const language = classNameProp.replace(/language-/, '');

  const removeTrailingEmptyLine = lines => {
    const [lastLine] = lines.splice(-1);
    if (lastLine[0].empty) {
      return lines;
    }
    return [...lines, lastLine];
  };

  return (
    <Row className={row}>
      <PathRow
        src={src}
        path={path}
        copyLineStart={copyLineStart}
        copyLineLength={copyLineLength}
      >
        {children}
      </PathRow>
      <Highlight
        {...defaultProps}
        code={children}
        language={language}
        theme={prismTheme}
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <div className={container}>
            <pre
              className={cx(highlight, {
                [sideBarMinHeight]: !path && src,
                [className]: className,
              })}
              style={style}
            >
              {removeTrailingEmptyLine(tokens).map((line, i) => (
                <div {...getLineProps({ line, key: i })}>
                  {line.map((token, key) => (
                    <span {...getTokenProps({ token, key })} />
                  ))}
                </div>
              ))}
            </pre>
            <Sidebar
              path={path}
              src={src}
              copyLineStart={copyLineStart}
              copyLineLength={copyLineLength}
            >
              {children}
            </Sidebar>
          </div>
        )}
      </Highlight>
    </Row>
  );
};

export default Code;
