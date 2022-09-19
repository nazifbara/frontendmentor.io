import { useState } from 'react';

import { theme } from '../../stitches.config';
import { HamburgerIcon, MenuArrowIcon } from '../../icons';
import { NAV_ITEMS } from '../../data';
import { NavLink, ColumnGrid } from '..';
import {
  StyledNavMenuButton,
  StyledNavMenu,
  StyledButton,
  StyledNavMenuArrow,
} from './styles';

export const NavMenuButton = () => {
  const [open, setOpen] = useState(false);

  const toggle = () =>
    setOpen((s) => {
      document.body.style.overflow = !s ? 'hidden' : 'auto';
      return !s;
    });

  return (
    <>
      <StyledNavMenuButton onClick={toggle}>
        <HamburgerIcon />
      </StyledNavMenuButton>
      {open && (
        <ColumnGrid
          padding
          css={{
            position: 'fixed',
            top: '120px',
            left: 0,
            right: 0,
            zIndex: 2,
          }}
        >
          <StyledNavMenu open={open} className={theme}>
            <StyledNavMenuArrow>
              <MenuArrowIcon />
            </StyledNavMenuArrow>
            {NAV_ITEMS.slice(0, 3).map((item, idx) => (
              <NavLink href="/#" key={`nav-item-${idx}`} gray>
                {item}
              </NavLink>
            ))}
            <StyledButton as="a" primary textTransform="uppercase">
              {NAV_ITEMS[NAV_ITEMS.length - 1]}
            </StyledButton>
          </StyledNavMenu>
        </ColumnGrid>
      )}
    </>
  );
};
