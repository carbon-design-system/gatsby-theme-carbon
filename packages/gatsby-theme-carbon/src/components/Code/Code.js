import React from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';
import { CopyButton } from 'carbon-components-react';

/* import Prism from 'prismjs';
import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-scss'; */
// import { CopyToClipboard } from 'react-copy-to-clipboard/lib/Component';
import cx from 'classnames';
import { Row } from '../Grid';
import { container } from './Code.module.scss';

const Code = ({ children, className: classNameProp }) => {
  const language = classNameProp.replace(/language-/, '');
  return (
    <Row>
      <Highlight {...defaultProps} code={children} language={language}>
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre
            className={cx(className, container)}
            style={{ ...style, padding: '20px' }}
          >
            <CopyButton
              onClick={() => {
                console.log(children);
              }}
            />
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </Row>
  );
};

export default Code;
