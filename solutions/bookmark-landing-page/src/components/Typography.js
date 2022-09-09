import { styled } from '../stitches.config';

export const Typography = ({
  as = 'p',
  variant,
  textAlign = 'left',
  css = {},
  children,
  ...otherProps
}) => {
  const asVariant = elementVariantMap[as] ?? as;

  return (
    <StyledTypography
      as={as}
      variant={variant ?? asVariant}
      textAlign={textAlign}
      css={css}
      {...otherProps}
    >
      {children}
    </StyledTypography>
  );
};

const StyledTypography = styled('p', {
  variants: {
    variant: {
      body: {
        fontSize: 'calc($body - 2px)',
        color: '$grayishLightContrast',
        '@lg': {
          fontSize: '$body',
        },
      },
      h1: {
        fontSize: 'calc($h1 - 16px)',
        fontWeight: '$bold',
        '@lg': {
          fontSize: '$h1',
        },
      },
      h2: {
        fontSize: 'calc($h2 - 12px)',
        fontWeight: '$bold',
        '@lg': {
          fontSize: '$h2',
        },
      },
      h3: {
        fontSize: 'calc($h3 - 12px)',
        fontWeight: '$bold',
        '@lg': {
          fontSize: '$h3',
        },
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

const elementVariantMap = {
  p: 'body',
  span: 'body',
};
