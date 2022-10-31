import { globalCss, styled } from './stitches.config';
import { Header } from './Header';
import { HomeSection } from './HomeSection';

const globalStyles = globalCss({
  '*, *::before, *::after': {
    boxSizing: 'border-box',
  },
  '*': {
    m: 0,
  },
  'ul, ol': {
    listStyle: 'none',
    p: 0,
  },
  a: {
    color: '$text',

    '&:hover': {
      color: '$text',
    },
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

  return (
    <MaxWidth>
      <Header />

      <main>
        <HomeSection />
      </main>
    </MaxWidth>
  );
}

const MaxWidth = styled('div', {
  maxWidth: '1110px',
  m: '0 auto',
  px: '15px',
});

export default App;
