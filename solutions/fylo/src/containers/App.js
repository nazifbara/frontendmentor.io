import { Header, IntroSection, SignIn } from '../components';
import { globalCss, styled } from '../stitches.config';
import { Footer } from './Footer';
import { TestimonialsSection } from './TestimonialsSection';
import { FeaturesSection } from './FeaturesSection';
import { HowToSecion } from './HowToSection';

const globalStyles = globalCss({
  body: {
    fontFamily: '$body, sans-serif',
    fontSize: '$body',
    bgC: '$primaryBg',
    color: '$contrast',
  },
  img: {
    width: '100%',
  },
});

const StyledContainer = styled('main', {
  display: 'flex',
  maxWidth: '1440px',
  m: '0 auto',
  flexDirection: 'column',
  alignItems: 'center',
});

export function App() {
  globalStyles();

  return (
    <StyledContainer>
      <Header />

      <IntroSection />

      <FeaturesSection />

      <HowToSecion />

      <TestimonialsSection />

      <SignIn />

      <Footer />
    </StyledContainer>
  );
}
