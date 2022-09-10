import { ReactComponent as LogoSVG } from '../images/logo-bookmark.svg';

import { styled } from '../stitches.config';

export const Logo = styled(LogoSVG, {
  variants: {
    inFooter: {
      true: {
        '& *': {
          '& path': {
            fill: '$darkContrast',
          },
        },
      },
    },
    onDark: {
      true: {
        '& *': {
          stroke: 'transparent',

          '& path': {
            fill: '$darkContrast',
          },
          '& g circle': {
            fill: '$darkContrast',
          },
          '& g path': {
            fill: '$lightContrast',
          },
        },
      },
    },
  },
});
