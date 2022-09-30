import {
  Logo,
  MenuButton,
  StyledGridColumns,
  CartButton,
  StyledIconButton,
} from '../components';
import { styled } from '../stitches.config';
import avatarImg from '../images/image-avatar.png';
import { NAV_ITEMS } from '../constants';

export const Header = () => (
  <StyledGridColumns
    as="header"
    padding={{ '@initial': true, '@lg': false }}
    css={{ borderBottom: '1px solid $grayishBorder', minHeight: '70px' }}
  >
    <StyledNavigation>
      <MenuButton />
      <Logo />
      <StyledNav>
        {NAV_ITEMS.map((item, idx) => (
          <StyledNavLink key={`nav-item-${idx}`} href="/#">
            {item}
          </StyledNavLink>
        ))}
      </StyledNav>
    </StyledNavigation>

    <StyledActions>
      <CartButton />
      <StyledAvatar>
        <img src={avatarImg} alt="" />
      </StyledAvatar>
    </StyledActions>
  </StyledGridColumns>
);

const StyledNav = styled('nav', {
  display: 'none',
  '@md': {
    display: 'grid',
    gap: '$4',
    gridTemplateColumns: 'repeat(5, auto)',
  },
  '@lg': {
    gap: '$8',
  },
});

const StyledNavLink = styled('a', {
  textDecoration: 'none',
  color: '$grayishText',
  py: '$8',
  borderBottom: '5px solid transparent',
  transition: 'border ease-out 0.3s, color ease-out 0.3s',

  '&:hover': {
    color: '$text',
    borderBottom: '5px solid $primary',
  },
});

const StyledAvatar = styled(StyledIconButton, {
  size: '35px',
  border: '2px solid transparent',
  cursor: 'pointer',
  p: 0,
  borderRadius: '50%',
  overflow: 'hidden',
  transition: 'border ease-out 0.3s',

  '&:hover': {
    border: '2px solid $primary',
  },

  '@md': {
    size: '45px',
  },
});

const StyledActions = styled('div', {
  gridColumn: 'span 3',
  display: 'grid',
  gap: '$1',
  alignItems: 'center',
  justifySelf: 'end',
  gridTemplateColumns: 'repeat(2, auto)',

  '@md': {
    gap: '$3',
  },
});

const StyledNavigation = styled(StyledActions, {
  gridColumn: 'span 9',
  justifySelf: 'start',
  gap: '$1',
  alignItems: 'end',

  '@md': {
    gap: '$6',
    alignItems: 'center',
  },

  '@lg': {
    gap: '$11',
  },
});
