import { styled } from '../stitches.config';

export const Text = ({ grayish = true, bold = false, as, ...otherProps }) => (
  <StyledText as={as} grayish={grayish} bold={bold} {...otherProps} />
);

const StyledText = styled('span', {
  color: '$text',
  fontSize: 'calc($body - 1px)',
  fontWeight: '$regular',

  '@lg': {
    fontSize: '$body',
  },

  variants: {
    primaryColor: {
      true: {
        color: '$primary',
      },
    },
    textTransform: {
      uppercase: {
        textTransform: 'uppercase',
      },
    },
    grayish: {
      true: {
        color: '$grayishText',
      },
    },
    bold: {
      true: {
        fontWeight: '$bold',
      },
    },
  },
});
