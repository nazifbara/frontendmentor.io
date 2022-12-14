import { globalCss } from './stitches.config';
import { StyledMaxWidth, Header, ProductSection } from './containers';
import { CartProvider } from './contexts/CartProvider';

const globalStyles = globalCss({
  '*, *::before, *::after': {
    boxSizing: 'border-box',
    bgC: '$bg',
  },
  '*': {
    m: 0,
  },
  body: {
    fontFamily: `'Kumbh Sans', sans-serif`,
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

const App = () => {
  globalStyles();
  return (
    <CartProvider>
      <StyledMaxWidth>
        <Header />
        <main>
          <ProductSection />
        </main>
      </StyledMaxWidth>
    </CartProvider>
  );
};

export default App;
