import { globalCss } from './stitches.config';
import {
  Header,
  IntroSection,
  SignIn,
  Footer,
  TestimonialsSection,
  FeaturesSection,
  HowToSecion,
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

        <HowToSecion />

        <TestimonialsSection />

        <SignIn />
      </main>
      <Footer />
    </>
  );
}
