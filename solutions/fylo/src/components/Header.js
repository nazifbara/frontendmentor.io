import { Typography, Logo } from '.';
import { styled } from '../stitches.config';

const StyledHeader = styled('header', {
  width: '100%',
  display: 'grid',
  gridTemplateColumns: 'repeat(2, auto)',
  bgC: '$primaryBgSubtle',
  py: '22px',
  px: '18px',

  '& ul': {
    display: 'flex',
    justifyContent: 'flex-end',
    listStyleType: 'none',
    margin: 0,
    padding: 0,
  },
  '& li:not(:last-child)': {
    mr: '10px',

    '@sm': {
      mr: '20px',
    },
    '@md': {
      mr: '30px',
    },
    '@lg': {
      mr: '50px',
    },
  },

  '@sm': {
    py: '30px',
    px: '25px',
  },
  '@md': {
    py: '40px',
    px: '50px',
  },
  '@lg': {
    py: '50px',
    px: '80px',
  },
});

export function Header() {
  return (
    <StyledHeader>
      <Logo />
      <nav>
        <ul>
          <li>
            <Typography element="a" href="/#features">
              Features
            </Typography>
          </li>
          <li>
            <Typography element="a" href="/#team">
              Team
            </Typography>
          </li>
          <li>
            <Typography element="a" href="/#sign-in">
              Sign In
            </Typography>
          </li>
        </ul>
      </nav>
    </StyledHeader>
  );
}
