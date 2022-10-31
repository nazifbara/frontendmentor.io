import { useState } from 'react';

import { ReactComponent as Logo } from './images/logo.svg';
import { ReactComponent as MenuIcon } from './images/icon-menu.svg';
import { ReactComponent as MenuCloseIcon } from './images/icon-menu-close.svg';

import { styled } from './stitches.config';

const NAV_ITEMS = ['Home', 'New', 'Popular', 'Trending', 'Categories'];

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  return (
    <Wrapper>
      <Logo />
      <MenuButton onClick={open}>
        <MenuIcon />
      </MenuButton>
      <Overlay isOpen={isOpen} onClick={close} />
      <NavMenu isOpen={isOpen}>
        <MenuButton onClick={close} css={{ p: 0 }}>
          <MenuCloseIcon />
        </MenuButton>

        <ul>
          {NAV_ITEMS.map((item, idx) => (
            <li key={`nav-menu-item-${idx}`}>
              <a href="/#">{item}</a>
            </li>
          ))}
        </ul>
      </NavMenu>
      <Nav>
        <ul>
          {NAV_ITEMS.map((item, idx) => (
            <li key={`nav-item-${idx}`}>
              <a href="/#">{item}</a>
            </li>
          ))}
        </ul>
      </Nav>
    </Wrapper>
  );
};

const NavMenu = styled('nav', {
  display: 'flex',
  flexDirection: 'column',
  zIndex: 2,
  pt: '30px',
  px: '15px',
  position: 'fixed',
  width: '70%',
  right: 0,
  top: 0,
  bottom: 0,
  bgC: 'white',

  '& button': {
    alignSelf: 'flex-end',
    mb: '60px',
  },

  '& ul': {
    display: 'grid',
    gridRowGap: '25px',
    pl: '10px',
  },

  '& a': {
    textDecoration: 'none',
    fontWeight: '$medium',
  },

  variants: {
    isOpen: {
      true: {
        display: 'flex',
      },
      false: {
        display: 'none',
      },
    },
  },
});

const Overlay = styled('div', {
  zIndex: 1,
  position: 'fixed',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  bgC: 'rgba(0, 0, 0, 0.6)',

  variants: {
    isOpen: {
      true: {
        display: 'block',
      },
      false: {
        display: 'none',
      },
    },
  },
});

const Nav = styled('nav', {
  display: 'none',

  '@md': {
    display: 'block',
  },
});

const MenuButton = styled('button', {
  p: '10px 0',
  border: 'none',
  bgC: 'transparent',

  '@md': {
    display: 'none',
  },
});

const Wrapper = styled('header', {
  height: '90px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});
