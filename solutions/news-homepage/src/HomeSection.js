import web3desktopImg from './images/image-web-3-desktop.jpg';
import retroImg from './images/image-retro-pcs.jpg';
import topLaptopsImg from './images/image-top-laptops.jpg';
import gamingGrowthImg from './images/image-gaming-growth.jpg';

const SIDE_NEWS = [
  {
    heading: 'Hydrogen VS Electric Cars',
    body: 'Will hydrogen-fueled cars ever catch up to EVs?',
  },
  {
    heading: 'The Downsides of AI Artistry',
    body: 'What are the possible adverse effects of on-demand AI image generation?',
  },
  {
    heading: 'Is VC Funding Drying Up?',
    body: 'Private funding by VC firms is down 50% YOY. We take a look at what that means.',
  },
];

const BOTTOM_NEWS = [
  {
    heading: 'Reviving Retro PCs',
    body: 'What happens when old PCs are given modern upgrades?',
    img: retroImg,
  },
  {
    heading: 'Top 10 Laptops of 2022',
    body: 'Our best picks for various needs and budgets.',
    img: topLaptopsImg,
  },
  {
    heading: 'The Growth of Gaming',
    body: 'How the pandemic has sparked fresh opportunities.',
    img: gamingGrowthImg,
  },
];

export const HomeSection = () => (
  <section>
    <img alt="" src={web3desktopImg} />
    <h1>The Bright Future of Web 3.0?</h1>
    <div>
      <p>
        We dive into the next evolution of the web that claims to put the power
        of the platforms back into the hands of the people. But is it really
        fulfilling its promise?
      </p>
      <button>Read more</button>
    </div>

    <section>
      <h2>New</h2>
      <ul>
        {SIDE_NEWS.map((n, idx) => (
          <li key={`news-${idx}`}>
            <article>
              <h3>{n.heading}</h3>
              <p>{n.body}</p>
            </article>
          </li>
        ))}
      </ul>
    </section>

    <section>
      <ol>
        {BOTTOM_NEWS.map((n, idx) => (
          <li key={`bottom-news-${idx}`}>
            <article>
              <img alt="" src={n.img} />
              <span>{`0${idx + 1}`}</span>
              <h3>{n.heading}</h3>
              <p>{n.body}</p>
            </article>
          </li>
        ))}
      </ol>
    </section>
  </section>
);
