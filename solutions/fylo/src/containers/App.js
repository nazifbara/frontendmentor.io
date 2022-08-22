import { globalCss, styled } from '../stitches.config';

const globalStyles = globalCss({
  body: {
    fontFamily: '$body, sans-serif',
    fontSize: '$body',
    bgC: '$primaryBg',
    color: '$contrast',
  },
});

const StyledContainer = styled('main', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  px: '18px',
});

export function App() {
  globalStyles();

  return (
    <StyledContainer>
      {/** Header */}
      <header>
        <span>logo</span>
        <nav>
          <ul>
            <li>
              <a href="/#features">Features</a>
            </li>
            <li>
              <a href="/#team">Team</a>
            </li>
            <li>
              <a href="/#sign-in">Sign In</a>
            </li>
          </ul>
        </nav>
      </header>

      {/** Hero Section */}
      <section id="features">
        <span>illustration</span>

        <h1>All your files in one secure location, accessible anywhere.</h1>

        <p>
          Fylo stores all your most important files in one secure location.
          Access them wherever you need, share and collaborate with friends
          family, and co-workers.
        </p>

        <button>Get Started</button>
      </section>

      {/** Features Section */}
      <section id="team">
        <article>
          <span>icon</span>
          <h3>Access your files, anywhere</h3>
          <p>
            The ability to use a smartphone, tablet, or computer to access your
            account means your files follow you everywhere.
          </p>
        </article>

        <article>
          <span>icon</span>
          <h3>Security you can trust</h3>
          <p>
            2-factor authentication and user-controlled encryption are just a
            couple of the security features we allow to help secure your files.
          </p>
        </article>

        <article>
          <span>icon</span>
          <h3>Real-time collaboration</h3>
          <p>
            Securely share files and folders with friends, family and colleagues
            for live collaboration. No email attachments required.
          </p>
        </article>

        <article>
          <span>icon</span>
          <h3>Store any type of file</h3>
          <p>
            Whether you're sharing holidays photos or work documents, Fylo has
            you covered allowing for all file types to be securely stored and
            shared.
          </p>
        </article>
      </section>

      {/** Features Section */}
      <section id="sign-in">
        <span>illustration</span>
        <article>
          <h2>Stay productive, wherever you are</h2>
          <p>
            Never let location be an issue when accessing your files. Fylo has
            you covered for all of your file storage needs.
          </p>
          <p>
            Securely share files and folders with friends, family and colleagues
            for live collaboration. No email attachments required.
          </p>
          <a href="/#">See how Fylo works</a>
        </article>
      </section>

      {/** Testimonials Section */}
      <section>
        <article>
          <p>
            Fylo has improved our team productivity by an order of magnitude.
            Since making the switch our team has become a well-oiled
            collaboration machine.
          </p>
          <header>
            <span>photo</span>
            <div>
              <h3>Satish Patel</h3>
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
              <h3>Bruce McKenzie</h3>
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
              <h3>Iva Boyd</h3>
              <p>Founder & CEO, Huddle</p>
            </div>
          </header>
        </article>
      </section>

      {/** Sign Up Section */}
      <section>
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
