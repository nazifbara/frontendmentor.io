import { styled } from '../stitches.config';

export const Button = styled('button', {
  color: '$lightContrast',
  display: 'inline-block',
  cursor: 'pointer',
  bgC: '$darkContrast',
  textTransform: 'uppercase',
  textAlign: 'center',
  fontSize: 'calc($nav - 2px)',
  fontWeight: '$medium',
  borderRadius: '5px',
  border: '2px solid $darkContrast',
  boxShadow: '1px 4px 3px rgba(0, 0, 0, 0.2)',
  py: '8px',
  px: '15px',

  '@md': {
    py: '10px',
    px: '20px',
  },

  '&:hover': {
    boxShadow: 'none',
    color: '$lighContrast',
    bgC: 'transparent',
    border: '2px solid $lightContrast',
    textDecoration: 'none',
  },

  variants: {
    textTransform: {
      uppercase: {
        textTransform: 'uppercase',
      },
      capitalize: {
        textTransform: 'capitalize',
      },
      none: {
        textTransform: 'none',
      },
    },
    variant: {
      primary: {
        boxShadow: 'none',
        color: '$darkContrast',
        bgC: '$primary',
        border: '2px solid $primary',

        '&:hover': {
          color: '$primary',
          border: '2px solid $primary',
        },
      },
      secondary: {
        boxShadow: 'none',
        color: '$darkContrast',
        bgC: '$secondary',
        border: '2px solid $secondary',

        '&:hover': {
          color: '$secondary',
          border: '2px solid $secondary',
        },
      },
    },
    fullWidth: {
      true: {
        width: '100%',
      },
    },
  },
});
