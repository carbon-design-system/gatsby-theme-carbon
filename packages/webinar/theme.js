import Code from './Code';

const theme = {
  googleFont:
    'https://fonts.googleapis.com/css?family=IBM+Plex+Mono|IBM+Plex+Sans:300,300i,400,400i,600,600i&display=swap',
  fontWeights: {
    body: 400,
    heading: 600,
    bold: 600,
  },
  colors: {
    text: '#f3f3f3',
    background: '#171717',
    primary: '#0062ff',
    secondary: '#6f6f6f',
    accent: '#ffffff',
    muted: '#dcdcdc',
  },
  styles: {
    inlineCode: {
      color: '#171717',
      fontSize: '0.75em',
      backgroundColor: '#dcdcdc',
      padding: '0 0.5em',
      borderRadius: '4px',
      position: 'relative',
      bottom: '.0625em',
    },
  },
  components: {
    code: Code,
  },
  fonts: {
    body: 'IBM Plex Sans',
    heading: 'IBM Plex Sans',
    monospace: 'IBM Plex Mono, monospace',
  },
};

export default theme;
