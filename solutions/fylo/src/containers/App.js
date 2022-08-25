import { Header, IntroSection } from '../components';
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

      {/** Sign in Section */}
      <section id="sign-in">
        <h2>Get early access today</h2>
        <p>
          It only takes a minute to sign up and our free starter tier is
          extremely generous. If you have any questions, our support team would
          be happy to help you.
        </p>
        <div>
          <input placeholder="example@fylo.com" />
          <button>Get Started For Free</button>
        </div>
      </section>

      <Footer />
    </StyledContainer>
  );
}
