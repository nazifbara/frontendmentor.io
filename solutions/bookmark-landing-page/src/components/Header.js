import { ReactComponent as HamburberIcon } from '../images/icon-hamburger.svg';
import { ReactComponent as CloseIcon } from '../images/icon-close.svg';

import { styled } from '../stitches.config';
import { Container, NavLink, Button, Logo } from '.';

export const Header = () => {
  return (
    <Container>
      <StyledHeader>
        <Logo />
        <NavMenu />
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

const NavMenu = () => {
  return (
    <>
      <StyledMenuButton>
        <HamburberIcon />
      </StyledMenuButton>
      <StyledNavMenu>
        <Container>
          <StyledHeader>
            <Logo inDark />
            <StyledMenuButton type="close">
              <CloseIcon />
            </StyledMenuButton>
          </StyledHeader>
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
              <Button
                as="a"
                href="/#"
                fullWidth
                css={{
                  border: '2px solid $darkContrast',
                  bgC: 'transparent',
                }}
              >
                Login
              </Button>
            </li>
          </ul>
        </Container>
      </StyledNavMenu>
    </>
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

const StyledNavMenu = styled('nav', {
  position: 'fixed',
  bgC: '$lightContrastOpaque',
  color: '$darkContrast',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,

  '@md': {
    display: 'none',
  },

  ul: {
    listStyle: 'none',
    m: 0,
    p: 0,
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
  },

  li: {
    py: '25px',
    borderBottom: '1px solid gray',
  },

  'li:first-child': {
    borderTop: '1px solid gray',
  },
  'li:last-child': {
    borderBottom: 'none',
    pt: '30px',
  },
  a: {
    fontSize: '18px',
    '&:hover,&:active': {
      color: '$darkContrast',
    },
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
