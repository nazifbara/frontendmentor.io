import web3desktopImg from './images/image-web-3-desktop.jpg';
import web3mobileImg from './images/image-web-3-mobile.jpg';
import retroImg from './images/image-retro-pcs.jpg';
import topLaptopsImg from './images/image-top-laptops.jpg';
import gamingGrowthImg from './images/image-gaming-growth.jpg';
import { styled, darkTheme } from './stitches.config';

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
  <Wrapper>
    <Featured>
      <picture>
        <source media="(min-width: 48.063rem)" srcSet={web3desktopImg} />
        <img src={web3mobileImg} alt="" />
      </picture>
      <h1>The Bright Future of Web 3.0?</h1>
      <p>
        We dive into the next evolution of the web that claims to put the power
        of the platforms back into the hands of the people. But is it really
        fulfilling its promise?
      </p>
      <a href="/#">Read more</a>
    </Featured>

    <New className={darkTheme}>
      <h2>New</h2>
      <ul>
        {SIDE_NEWS.map((n, idx) => (
          <li key={`news-${idx}`}>
            <article>
              <h3>
                <a href="/#">{n.heading}</a>
              </h3>
              <p>{n.body}</p>
            </article>
          </li>
        ))}
      </ul>
    </New>

    <BottomNews>
      {BOTTOM_NEWS.map((n, idx) => (
        <li key={`bottom-news-${idx}`}>
          <article>
            <img alt="" src={n.img} />
            <span>{`0${idx + 1}`}</span>
            <h3>
              <a href="/#">{n.heading}</a>
            </h3>
            <p>{n.body}</p>
          </article>
        </li>
      ))}
    </BottomNews>
  </Wrapper>
);

const BottomNews = styled('ol', {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
  gap: '30px',
  justifyContent: 'center',
  justifyItems: 'start',

  '@md': {
    gridColumn: 'span 3',
  },

  '& article': {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, auto)',
    gridTemplateRows: 'repeat(3, auto)',
    columnGap: '25px',
    rowGap: '5px',
    alignItems: 'start',

    img: {
      gridRow: 'span 3',
      width: '100px',
    },

    span: {
      fontSize: '35px',
      fontWeight: '$bold',
      lineHeight: 1,
      opacity: 0.5,

      '@lg': {
        fontSize: '30px',
      },
    },

    'span, h3, p': {
      gridColumn: 2,
    },
  },
});

const New = styled('section', {
  bgC: '$contrast',
  p: '30px 20px 0 20px',
  gridColumn: 'span 3',

  '@lg': {
    gridColumn: 'span 1',
  },

  '& h2': {
    fontSize: '35px',
    color: '$secondary',
    mb: '30px',
  },

  '& h3': {
    mb: '15px',
  },

  '& ul': {
    display: 'grid',
    rowGap: '35px',
  },

  '& li': {
    pb: '35px',
  },

  '& li:not(:last-child)': {
    borderBottom: '1px solid $grayishText',
  },
});

const Featured = styled('article', {
  display: 'grid',
  justifyItems: 'start',
  rowGap: '15px',

  picture: {
    justifySelf: 'center',
  },

  '@md': {
    gridColumn: 'span 3',
    gridTemplateColumns: 'repeat(2, 1fr)',
    alignItems: 'start',
    gap: '20px',

    picture: {
      gridColumn: 'span 2',
    },

    h1: {
      gridRow: 'span 2',
    },
  },

  '@lg': {
    gridColumn: 'span 2',
    gridTemplateColumns: 'repeat(2, 1fr)',
    alignItems: 'start',
    justifyItems: 'start',

    picture: {
      gridColumn: 'span 2',
    },
  },

  h1: {
    fontSize: '42px',
    lineHeight: 1.1,

    '@md': {
      fontSize: '55px',
    },
  },

  '& a': {
    px: '30px',
    py: '16px',
    textDecoration: 'none',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    fontSize: '15px',
    letterSpacing: '4px',
    bgC: '$primary',
    color: '$white',
    textAlign: 'center',
    transition: 'background-color ease-out 0.3s',

    '&:hover': {
      bgC: '$contrast',
    },
  },
});

const Wrapper = styled('section', {
  display: 'grid',
  rowGap: '40px',
  pb: '50px',

  '@md': {
    gridTemplateColumns: 'repeat(3, auto)',
    columnGap: '30px',
    rowGap: '60px',
  },
});
