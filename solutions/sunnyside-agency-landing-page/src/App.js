import { globalCss } from './stitches.config';

import { Header, Services, Testimonials, Gallery, Footer } from './components';

const globalStyles = globalCss({
  '*': {
    zIndex: 1,
  },
  body: {
    overflowX: 'hidden',
  },
  'img,svg': {
    width: '100%',
  },
  'p,span,a,button': {
    color: '$text',
    fontSize: '$body',
    fontFamily: '$body, sans-serif',
    fontWeight: 600,
  },
  'h1,h2,h3,h4': {
    fontFamily: '$heading, serif',
  },
});
export const App = () => {
  globalStyles();

  return (
    <>
      <Header />
      <main>
        <Services />
        <Testimonials />
        <Gallery />
      </main>
      <Footer />
    </>
  );
};
