import React from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';
import { CopyButton } from 'carbon-components-react';
import copy from 'copy-to-clipboard';
import cx from 'classnames';
import { Launch16 } from '@carbon/icons-react';

import { Row } from '../Grid';
import prismTheme from './prismTheme';

import {
  pre,
  container,
  titleRow,
  title,
  sourceLink,
} from './Code.module.scss';

const Code = ({
  children,
  className: classNameProp = 'markdown',
  metastring: titleText = '',
  ...rest
}) => {
  const language = classNameProp.replace(/language-/, '');
  const isUrl = !!titleText.match(/http/);

  const removeTrailingEmptyLine = lines => {
    const [lastLine] = lines.splice(-1);
    if (lastLine[0].empty) {
      return lines;
    }
    return [...lines, lastLine];
  };

  // todo disable title bar
  return (
    <Row>
      <Highlight
        {...defaultProps}
        code={children}
        language={language}
        theme={prismTheme}
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <div className={container}>
            <div className={titleRow}>
              {isUrl ? (
                <a className={sourceLink} href={titleText}>
                  Source&nbsp;
                  <Launch16 />
                </a>
              ) : (
                <span className={title}>{titleText}</span>
              )}
              <CopyButton
                onClick={() => {
                  copy(children);
                }}
              />
            </div>
            <pre className={cx(pre, className)} style={style}>
              {removeTrailingEmptyLine(tokens).map((line, i) => (
                <div {...getLineProps({ line, key: i })}>
                  {line.map((token, key) => (
                    <span {...getTokenProps({ token, key })} />
                  ))}
                </div>
              ))}
            </pre>
          </div>
        )}
      </Highlight>
    </Row>
  );
};

export default Code;
