import { ReactComponent as Logo } from '../images/logo-bookmark.svg';
import { ReactComponent as HamburberIcon } from '../images/icon-hamburger.svg';

import { styled } from '../stitches.config';
import { Container, NavLink, Button } from '.';

export const Header = () => {
  return (
    <Container>
      <StyledHeader>
        <Logo />
        <StyledMenuButton>
          <HamburberIcon />
        </StyledMenuButton>
        <StyledNav>
          <ul>
            <li>
              <NavLink href="/#features">Features</NavLink>
            </li>
            <li>
              <NavLink href="/#">Pricing</NavLink>
            </li>
            <li>
              <NavLink href="/#contact">Contact</NavLink>
            </li>
            <li>
              <Button as="a" href="/#">
                Login
              </Button>
            </li>
          </ul>
        </StyledNav>
      </StyledHeader>
    </Container>
  );
};

const StyledHeader = styled('header', {
  display: 'grid',
  gridTemplateColumns: 'auto 40px',
  alignItems: 'center',
  py: '30px',

  '@md': {
    gridTemplateColumns: 'repeat(2, auto)',
  },
});

const StyledMenuButton = styled('button', {
  p: '6px',
  border: 'none',
  bgC: 'transparent',

  '@md': {
    display: 'none',
  },
});

const StyledNav = styled('nav', {
  display: 'none',

  ul: {
    listStyle: 'none',
    display: 'grid',
    justifyContent: 'space-evenly',
    gridTemplateColumns: 'repeat(4, auto)',
    m: 0,
    p: 0,
  },
  '@md': {
    display: 'block',
  },
});
