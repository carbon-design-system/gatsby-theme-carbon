import React from 'react';
import PropTypes from 'prop-types';
import { CodeSnippet } from 'carbon-components-react';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import theme from 'prism-react-renderer/themes/dracula';
import { Button } from 'carbon-components-react';

/* import Prism from 'prismjs';
import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-scss'; */
import { CopyToClipboard } from 'react-copy-to-clipboard/lib/Component';
import { Row } from '../Grid';
import { settings } from 'carbon-components';

const { prefix } = settings;

export default class Code extends React.Component {
  static propTypes = {
    children: PropTypes.node,
  };

  state = {
    copied: false,
    multi: true,
  };

  componentDidMount() {
    //Prism.highlightAll();
    if (this.codeRef) {
      if (this.codeRef.clientHeight > 20) {
        this.setState({ multi: true });
      } else {
        this.setState({ multi: false });
      }
    }
  }

  /*  componentDidUpdate() {
    Prism.highlightAll();
  } */

  render() {
    /// Render a live code snippet.
    if (this.props.live) {
      const scope = { Button };

      return (
        <LiveProvider code={this.props.children} theme={theme} scope={scope}>
          <LivePreview />
          <LiveEditor />
          <LiveError />
        </LiveProvider>
      )
    }

    const type = this.state.multi ? 'multi' : 'single';
    let textToCopy;

    if (!this.props.live && this.props.children) {
      textToCopy = this.props.children.replace(/(\$ )+/g, '');
    }

    /// Render class Carbon code snippet.
    return (
      <Row>
        <div className={`${prefix}--snippet--website`}>
          <CopyToClipboard
            text={textToCopy}
            onCopy={() => this.setState({ copied: true })}
          >
            <CodeSnippet type={type}>
              <div ref={element => (this.codeRef = element)}>{this.props.children}</div>
            </CodeSnippet>
          </CopyToClipboard>
        </div>
      </Row>
    );
  }
}