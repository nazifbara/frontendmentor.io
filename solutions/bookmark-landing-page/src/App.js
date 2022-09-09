import { globalCss } from './stitches.config';
import { Header, HeroSection, FeatureSection } from './components';

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

        <section>
          <article>
            <h2>Download the extension</h2>
            <p>
              We’ve got more browsers in the pipeline. Please do let us know if
              you’ve got a favourite you’d like us to prioritize.
            </p>
          </article>
          <div>
            <article>
              <span>logo</span>
              <h3>Add to Chrome</h3>
              <p>Minimum version 62</p>
              <button>Add & Install Extension</button>
            </article>

            <article>
              <span>logo</span>
              <h3>Add to Firefox</h3>
              <p>Minimum version 55</p>
              <button>Add & Install Extension</button>
            </article>

            <article>
              <span>logo</span>
              <h3>Add to Opera</h3>
              <p>Minimum version 46</p>
              <button>Add & Install Extension</button>
            </article>
          </div>
        </section>

        <section>
          <div>
            <h2>Frequently Asked Questions</h2>
            <p>
              Here are some of our FAQs. If you have any other questions you’d
              like answered please feel free to email us.
            </p>
          </div>

          <div>
            <div>
              <div>
                <button>What is Bookmark?</button>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                  tincidunt justo eget ultricies fringilla. Phasellus blandit
                  ipsum quis quam ornare mattis.
                </p>
              </div>
            </div>

            <div>
              <button> How can I request a new browser?</button>
              <p>
                Vivamus luctus eros aliquet convallis ultricies. Mauris augue
                massa, ultricies non ligula. Suspendisse imperdiet. Vivamus
                luctus eros aliquet convallis ultricies. Mauris augue massa,
                ultricies non ligula. Suspendisse imperdie tVivamus luctus eros
                aliquet convallis ultricies. Mauris augue massa, ultricies non
                ligula. Suspendisse imperdiet.
              </p>
            </div>

            <div>
              <button>Is there a mobile app?</button>
              <p>
                Sed consectetur quam id neque fermentum accumsan. Praesent
                luctus vestibulum dolor, ut condimentum urna vulputate eget.
                Cras in ligula quis est pharetra mattis sit amet pharetra purus.
                Sed sollicitudin ex et ultricies bibendum.
              </p>
            </div>

            <div>
              <button> What about other Chromium browsers?</button>
              <p>
                Integer condimentum ipsum id imperdiet finibus. Vivamus in
                placerat mi, at euismod dui. Aliquam vitae neque eget nisl
                gravida pellentesque non ut velit.
              </p>
            </div>
          </div>
          <a href="/#">More Info</a>
        </section>

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
