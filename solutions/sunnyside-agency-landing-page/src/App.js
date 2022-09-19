import { globalCss, styled } from './stitches.config';

import { Header, Services, Testimonials, Gallery, Footer } from './components';

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
  'p,span,a,button': {
    color: '$text',
    fontSize: '$body',
    fontFamily: '$body, sans-serif',
    fontWeight: '$semiBold',
  },
  'h1,h2,h3,h4': {
    fontFamily: '$heading, serif',
  },
});
export const App = () => {
  globalStyles();

  return (
    <StyledMaxWidth>
      <Header />
      <main>
        <Services />
        <Testimonials />
        <Gallery />
      </main>
      <Footer />
    </StyledMaxWidth>
  );
};

const StyledMaxWidth = styled('div', {
  maxWidth: '1440px',
  m: '0 auto',
});
