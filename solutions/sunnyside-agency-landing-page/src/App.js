import { globalCss } from './stitches.config';

import {
  Header,
  Hero,
  Services,
  Testimonials,
  Gallery,
  Footer,
} from './components';

const globalStyles = globalCss({
  '*': {
    zIndex: 1,
  },
  body: {
    overflowX: 'hidden',
  },
  img: {
    width: '100%',
  },
  'p,span,a': {
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
        <Hero />
        <Services />
        <Testimonials />
        <Gallery />
      </main>
      <Footer />
    </>
  );
};
