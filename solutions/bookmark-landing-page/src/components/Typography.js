import { styled } from '../stitches.config';

export const Typography = ({
  as = 'p',
  variant = 'body',
  css = {},
  children,
  ...otherProps
}) => {
  return (
    <StyledTypography as={as} variant={variant} css={css} {...otherProps}>
      {children}
    </StyledTypography>
  );
};

const StyledTypography = styled('p', {
  variants: {
    variant: {
      body: {
        color: '$grayishLightContrast',
      },
    },
  },
});
