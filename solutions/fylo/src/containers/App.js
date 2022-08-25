import { Header, IntroSection, SignIn } from '../components';
import { globalCss } from '../stitches.config';
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

export function App() {
  globalStyles();

  return (
    <>
      <Header />
      <main>
        <IntroSection />

        <FeaturesSection />

        <HowToSecion />

        <TestimonialsSection />

        <SignIn />
      </main>
      <Footer />
    </>
  );
}
