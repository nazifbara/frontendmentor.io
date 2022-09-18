import { styled } from '../../stitches.config';
import { ColumnGrid } from '..';

export const StyledTextImage = styled(ColumnGrid, {
  '*': {
    m: 0,
  },
  '& > div': {
    gridColumn: 'span 16',
    display: 'grid',
    justifyItems: 'center',
    rowGap: '40px',
    maxWidth: '450px',
    justifySelf: 'center',
    order: '2',
    p: '40px 20px',

    '@md': {
      gridColumn: 'span 8',
      justifyItems: 'start',
      p: '20px',
    },
  },

  '& > figure': {
    gridColumn: 'span 16',
    order: '1',

    '@md': {
      gridColumn: 'span 8',
    },
  },

  variants: {
    imagePosition: {
      left: {
        '& > div': {
          '@md': {
            order: '2',
          },
        },

        '& > figure': {
          '@md': {
            order: '1',
          },
        },
      },
      right: {
        '& > div': {
          '@md': {
            order: '1',
          },
        },

        '& > figure': {
          '@md': {
            order: '2',
          },
        },
      },
    },
  },
});

export const StyledLinkWrapper = styled('div', {
  position: 'relative',
});

export const StyledLink = styled('a', {
  color: '$text',
  fontFamily: '$heading',
  fontWeight: '$bold',
  textTransform: 'uppercase',
  px: '10px',

  '&::before': {
    content: '',
    position: 'absolute',
    bottom: '0.5px',
    zIndex: -1,
    display: 'block',
    borderRadius: '50px',
    width: '100%',
    height: '10px',
    bgC: '$primary',
    opacity: 0.5,
    transition: 'opacity 0.3s ease',
  },
  '&:hover': {
    color: '$text',
    textDecoration: 'none',

    '&::before': {
      opacity: 1,
    },
  },

  variants: {
    variant: {
      primary: {
        '&::before': {
          bgC: '$primary',
        },
      },
      secondary: {
        '&::before': {
          bgC: '$secondary',
        },
      },
    },
  },
});

export const StyledBgImage = styled('article', {
  gridColumn: 'span 16',
  backgroundPosition: 'top',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  height: '700px',

  '@sm': {
    gridColumn: 'span 8',
    height: '600px',
  },

  '@md': {
    aspectRatio: '1 / 1.45',
    height: 'auto',
  },

  '@lg': {
    aspectRatio: '1 / 1',
  },

  '& p': {
    m: 0,
  },
  h2: {
    mb: '25px',
  },
  '& > div': {
    maxWidth: '400px',
    position: 'absolute',
    top: '60%',
    p: '20px',

    '@sm': {
      top: '50%',
      p: '10px',
    },

    '@md': {
      top: '60%',
    },
  },
});
