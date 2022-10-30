import { globalCss } from './stitches.config';

const globalStyles = globalCss({
  '*, *::before, *::after': {
    boxSizing: 'border-box',
  },
  '*': {
    m: 0,
  },
  body: {
    fontFamily: `'Inter', sans-serif`,
    lineHeight: 1.5,
    '-webkit-font-smoothing': 'antialiased',
    color: '$text',
    fontWeight: '$regular',
    fontSize: '$body',
  },
  'html, body': {
    height: '100%',
  },
  'img, svg': {
    display: 'block',
    maxWidth: '100%',
  },
  'input, button, textarea, select': {
    font: 'inherit',
  },
  ' p, h1, h2, h3, h4, h5, h6': {
    overflowWrap: 'break-word',
  },
});

function App() {
  globalStyles();

  return <h1>News Homepage</h1>;
}

export default App;
