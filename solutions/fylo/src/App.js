import { globalCss } from './stitches.config';
import {
  Header,
  IntroSection,
  SignIn,
  Footer,
  TestimonialsSection,
  FeaturesSection,
  HowToSection,
} from './components';

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

        <HowToSection />

        <TestimonialsSection />

        <SignIn />
      </main>
      <Footer />
    </>
  );
}
