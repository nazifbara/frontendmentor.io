import { globalCss } from './stitches.config';
import {
  Header,
  HeroSection,
  FeatureSection,
  ExtensionSection,
  FAQSection,
  ContactSection,
  Footer,
} from './components';

const globalStyles = globalCss({
  body: {
    fontFamily: "'$body', sans-serif",
    color: '$lightContrast',
    fontSize: '$body',
    fontWeight: '$medium',
  },
  img: {
    width: '100%',
  },
  ul: {
    listStyle: 'none',
    m: 0,
    p: 0,
  },
});

const App = () => {
  globalStyles();

  return (
    <>
      <Header />

      <main>
        <HeroSection />
        <FeatureSection />
        <ExtensionSection />
        <FAQSection />
        <ContactSection />
      </main>

      <Footer />
    </>
  );
};

export default App;
