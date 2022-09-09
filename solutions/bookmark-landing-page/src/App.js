import { globalCss } from './stitches.config';
import {
  Header,
  HeroSection,
  FeatureSection,
  ExtensionSection,
  FAQSection,
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

        <section id="contact">
          <span>35,000+ already joined</span>
          <h2>Stay up-to-date with what we’re doing</h2>
          <form>
            <input /> <button>Contact Us</button>
          </form>
        </section>
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
