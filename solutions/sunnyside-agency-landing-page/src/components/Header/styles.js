import { styled, keyframes } from '../../stitches.config';

import headerImg from '../../images/desktop/image-header.jpg';

export const StyledNav = styled('nav', {
  display: 'none',
  gridColumn: 'span 6',
  justifySelf: 'end',
  columnGap: '40px',
  gridTemplateColumns: 'repeat(4, auto)',
  alignItems: 'center',

  '@md': {
    display: 'grid',
  },
});

export const StyledHeader = styled('header', {
  position: 'relative',
  height: '85vh',
  backgroundImage: `url(${headerImg})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
});

export const StyledButton = styled('button', {
  bgC: 'white',
  borderRadius: '50px',
  fontFamily: '$heading',
  p: '15px 20px',
  color: '$text !important',
  cursor: 'pointer',
  textTransform: 'none',
  transition: 'background-color 0.3s ease, color 0.3s ease, opacity 0.3s ease',

  '&:hover': {
    bgC: 'rgba(255, 255, 255, 0.3)',
    color: 'white !important',
  },

  variants: {
    textTransform: {
      uppercase: {
        textTransform: 'uppercase',
        fontSize: 'calc($body - 2px)',
      },
    },
    primary: {
      true: {
        bgC: '$primary',

        '&:hover': {
          bgC: '$primary',
          color: '$text !important',
          opacity: 0.7,
        },
      },
    },
  },
});

const moveUpDown = keyframes({
  '0%, 100%': { top: '45%' },
  '50%': { top: '50%' },
});

export const StyledArrowDown = styled('div', {
  position: 'absolute',
  right: '50%',
  top: '45%',
  transform: 'translateX(50%)',
  animation: `${moveUpDown} 2s linear infinite`,
});

export const StyledNavMenuButton = styled('button', {
  gridColumn: 'span 6',
  justifySelf: 'end',
  bgC: 'transparent',
  border: 'none',
  cursor: 'pointer',
  p: '10px 0',

  '@md': {
    display: 'none',
  },
});

export const StyledNavMenu = styled('nav', {
  position: 'relative',
  gridColumn: 'wrapper',
  display: 'grid',
  justifyItems: 'center',
  rowGap: '15px',
  textAlign: 'center',
  bgC: '$bg',
  py: '30px',
});

export const StyledNavMenuArrow = styled('div', {
  position: 'absolute',
  right: 0,
  top: '-26px',
});
