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
    color: 'inherit',
    textDecoration: 'none',
    transition: 'color ease-out 0.3s',

    '&:hover': {
      color: '$primary',
    },
  },
  body: {
    fontFamily: `'Inter', sans-serif`,
    lineHeight: 1.5,
    '-webkit-font-smoothing': 'antialiased',
    color: '$grayishText',
    fontWeight: '$regular',
    fontSize: '$body',
    bgC: '$white',

    '@md': {
      fontSize: 'calc($body + 1px)',
    },
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
  'h1, h2, h3': {
    fontWeight: '$extraBold',
    color: '$text',
    lineHeight: 1.25,
  },
  p: {
    color: '$grayishText',
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
