import { globalCss } from './stitches.config';
import {
  Header,
  HeroSection,
  FeatureSection,
  ExtensionSection,
  FAQSection,
  ContactSection,
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

      <footer>
        <div>
          <span>logo</span>
          <nav>
            <ul>
              <li>
                <a href="/#features">Features</a>
              </li>
              <li>
                <a href="/#">Pricing</a>
              </li>
              <li>
                <a href="/#contact">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
        <ul>
          <li>
            <a href="/#">facebook</a>
          </li>
          <li>
            <a href="/#">twitter</a>
          </li>
        </ul>
      </footer>
    </>
  );
};

export default App;
