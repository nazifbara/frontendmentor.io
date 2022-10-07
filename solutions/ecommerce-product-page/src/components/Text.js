import { styled } from '../stitches.config';

export const Text = ({ grayish = true, bold = false, as, ...otherProps }) => (
  <StyledText as={as} grayish={grayish} bold={bold} {...otherProps} />
);

const StyledText = styled('span', {
  color: '$text',
  fontSize: '$body',
  fontWeight: '$regular',

  variants: {
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
