const App = () => {
  return (
    <>
      <header>
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
            <li>
              <a href="/#">Login</a>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <section>
          <article>
            <h1> A Simple Bookmark Manager</h1>
            <p>
              A clean and simple interface to organize your favourite websites.
              Open a new browser tab and see your sites load instantly. Try it
              for free.
            </p>
            <div>
              <a href="/#">Get it on Chrome</a>
              <a href="/#">Get it on Firefox</a>
            </div>
          </article>
          <div>illustration </div>
        </section>

        <section id="features">
          <article>
            <h2>Features</h2>
            <p>
              Our aim is to make it quick and easy for you to access your
              favourite websites. Your bookmarks sync between your devices so
              you can access them on the go.
            </p>
          </article>

          <div>
            <nav>
              <button>Simple Bookmarking</button>
              <button>Speedy Searching</button>
              <button>Easy Sharing</button>
            </nav>

            <div>
              <div>illustration</div>
              <article>
                <h2>Bookmark in one click</h2>
                <p>
                  Organize your bookmarks however you like. Our simple
                  drag-and-drop interface gives you complete control over how
                  you manage your favourite sites.
                </p>
                <a href="/#">More Info</a>
              </article>

              <div>illustration</div>
              <article>
                <h2>Intelligent search</h2>
                <p>
                  Our powerful search feature will help you find saved sites in
                  no time at all. No need to trawl through all of your
                  bookmarks.
                </p>
                <a href="/#">More Info</a>
              </article>

              <div>illustration</div>
              <article>
                <h2>Share your bookmarks</h2>
                <p>
                  Easily share your bookmarks and collections with others.
                  Create a shareable link that you can send at the click of a
                  button.
                </p>
                <a href="/#">More Info</a>
              </article>
            </div>
          </div>
        </section>

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
          <a hrea href="/#">
            More Info
          </a>
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
