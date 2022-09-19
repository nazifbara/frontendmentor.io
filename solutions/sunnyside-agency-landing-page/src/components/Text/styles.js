import { styled } from '../../stitches.config';

export const StyledText = styled('p', {
  textAlign: 'left',

  variants: {
    variant: {
      gray: {
        color: '$textGray',
      },
      veryGray: {
        color: '$textVeryGray',
      },
    },
    textAlign: {
      left: {
        textAlign: 'left',
      },
      center: {
        textAlign: 'center',
      },
    },
  },
});
