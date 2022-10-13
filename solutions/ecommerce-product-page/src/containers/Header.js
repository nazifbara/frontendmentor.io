import {
  Logo,
  MenuButton,
  CartButton,
  StyledIconButton,
  StyledBox,
} from '../components';
import { styled } from '../stitches.config';
import avatarImg from '../images/image-avatar.png';
import { NAV_ITEMS } from '../constants';

export const Header = () => (
  <StyledBox
    as="header"
    padding={{ '@initial': true, '@lg': false }}
    css={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      borderBottom: '1px solid $grayishBorder',
      px: '$4',
      minHeight: '70px',
    }}
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
  </StyledBox>
);

const StyledNav = styled('nav', {
  display: 'none',
  '@md': {
    display: 'flex',
    '& > a:not(:last-child)': {
      mr: '$4',
    },
  },
  '@lg': {
    '& > a:not(:last-child)': {
      mr: '$8',
    },
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
  display: 'flex',
  alignItems: 'center',

  '& > *:first-child': {
    mr: '$1',
  },

  '@md': {
    '& > *:first-child': {
      mr: '$3',
    },
  },
});

const StyledNavigation = styled(StyledActions, {
  justifySelf: 'start',
  alignItems: 'end',

  '& > *:not(:last-child)': {
    mr: '$1',
  },

  '@md': {
    alignItems: 'center',

    '& > *:not(:last-child)': {
      mr: '$6',
    },
  },

  '@lg': {
    '& > *:not(:last-child)': {
      mr: '$11',
    },
  },
});
