import { headerTheme, theme } from '../../stitches.config';
import { ArrowDownIcon } from '../../icons';
import { Logo, ColumnGrid, Heading, NavLink } from '..';
import {
  StyledNav,
  StyledHeader,
  StyledButton,
  StyledArrowDown,
} from './styles';
import { NavMenuButton } from './NavMenuButton';

import { NAV_ITEMS } from '../../data';

export const Header = () => (
  <StyledHeader className={headerTheme}>
    <ColumnGrid
      padding
      css={{ height: '100px', '& > div:first-child': { gridColumn: 'span 6' } }}
    >
      <Logo />

      <StyledNav>
        {NAV_ITEMS.slice(0, 3).map((item, idx) => (
          <NavLink href="/#" key={`nav-item-${idx}`}>
            {item}
          </NavLink>
        ))}
        <div className={theme}>
          <StyledButton as="a" textTransform="uppercase">
            {NAV_ITEMS[NAV_ITEMS.length - 1]}
          </StyledButton>
        </div>
      </StyledNav>

      <NavMenuButton />
    </ColumnGrid>

    <ColumnGrid>
      <Heading
        textTransform="uppercase"
        textAlign="center"
        css={{
          zIndex: 1,
          gridColumn: 'wrapper',
          justifySelf: 'center',
          mt: '50px',
          '@md': { mt: '100px' },
        }}
      >
        We are creatives
      </Heading>
    </ColumnGrid>
    <StyledArrowDown>
      <ArrowDownIcon />
    </StyledArrowDown>
  </StyledHeader>
);
