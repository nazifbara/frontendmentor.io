import { styled } from '../stitches.config';

export const Button = styled('button', {
  color: '$darkContrast',
  cursor: 'pointer',
  bgC: '$primary',
  textTransform: 'uppercase',
  fontSize: '14px',
  fontWeight: '$medium',
  borderRadius: '5px',
  border: '2px solid $primary',
  py: '8px',
  px: '20px',

  '&:hover': {
    bgC: 'transparent',
    color: '$primary',
    textDecoration: 'none',
  },
});
