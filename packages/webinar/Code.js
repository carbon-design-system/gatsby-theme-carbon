import React from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';

import prismTheme from './prismTheme';

const Code = ({ children, className: classNameProp = '' }) => {
  const language = classNameProp.split(' ')[0].replace(/language-/, '');

  const removeTrailingEmptyLine = lines => {
    const [lastLine] = lines.splice(-1);
    if (lastLine[0].empty) {
      return lines;
    }
    return [...lines, lastLine];
  };

  return (
    <Highlight
      {...defaultProps}
      code={children}
      language={language}
      theme={prismTheme}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre
          className={className}
          style={{ ...style, fontFamily: 'IBM Plex Mono', fontSize: '0.7em' }}
        >
          {removeTrailingEmptyLine(tokens).map((line, i) => (
            <div {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
};

export default Code;
