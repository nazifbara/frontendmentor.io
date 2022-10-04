import { styled } from '../stitches.config';

export const Text = ({
  variant = 'p',
  grayish = true,
  bold = false,
  as,
  ...otherProps
}) => (
  <StyledText
    as={as ?? variant}
    variant={variant}
    grayish={grayish}
    bold={bold}
    {...otherProps}
  />
);

const StyledText = styled('span', {
  color: '$text',
  fontSize: '$body',

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
