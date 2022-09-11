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
  color: '$lightContrast',

  variants: {
    onDark: {
      true: {
        color: '$darkContrast !important',
      },
    },
    variant: {
      body: {
        fontSize: '$body',
        color: '$grayishLightContrast',
        '@lg': {},
      },
      h1: {
        fontSize: 'calc($h1 - 3px)',
        fontWeight: '$bold',
        '@lg': {
          fontSize: '$h1',
        },
      },
      h2: {
        fontSize: 'calc($h2 - 3px)',
        fontWeight: '$bold',
        '@lg': {
          fontSize: '$h2',
        },
      },
      h3: {
        fontSize: 'calc($h3 - 3px)',
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
