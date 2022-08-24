import { Typography, Header, IntroSection } from '../components';
import { globalCss, styled } from '../stitches.config';
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

      {/** Testimonials Section */}
      <section id="team">
        <article>
          <p>
            Fylo has improved our team productivity by an order of magnitude.
            Since making the switch our team has become a well-oiled
            collaboration machine.
          </p>
          <header>
            <span>photo</span>
            <div>
              <Typography element="h3">Satish Patel</Typography>
              <p>Founder & CEO, Huddle</p>
            </div>
          </header>
        </article>
        <article>
          <p>
            Fylo has improved our team productivity by an order of magnitude.
            Since making the switch our team has become a well-oiled
            collaboration machine.
          </p>
          <header>
            <span>photo</span>
            <div>
              <Typography element="h3">Bruce McKenzie</Typography>
              <p>Founder & CEO, Huddle</p>
            </div>
          </header>
        </article>
        <article>
          <p>
            Fylo has improved our team productivity by an order of magnitude.
            Since making the switch our team has become a well-oiled
            collaboration machine.
          </p>
          <header>
            <span>photo</span>
            <div>
              <Typography element="h3">Iva Boyd</Typography>
              <p>Founder & CEO, Huddle</p>
            </div>
          </header>
        </article>
      </section>

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

      <footer>
        <span>logo</span>
        <div>
          <div>
            <div>
              <span>icon</span>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua
              </p>
            </div>
            <ul>
              <li>
                <span>icon</span> +1-543-123-4567
              </li>
              <li>
                <span>icon</span>example@fylo.com
              </li>
            </ul>
          </div>

          <ul>
            <li>
              <a href="/#">About Us</a>
            </li>
            <li>
              <a href="/#">Jobs</a>
            </li>
            <li>
              <a href="/#">Press</a>
            </li>
            <li>
              <a href="/#">Blog</a>
            </li>
          </ul>

          <ul>
            <li>
              <a href="/#">Contact Us</a>
            </li>
            <li>
              <a href="/#">Terms</a>
            </li>
            <li>
              <a href="/#">Privacy</a>
            </li>
          </ul>

          <ul>
            <li>
              <span>facebook icon</span>
            </li>
            <li>
              <span>twitter icon</span>
            </li>
            <li>
              <span>instagram icon</span>
            </li>
          </ul>
        </div>
      </footer>
    </StyledContainer>
  );
}
