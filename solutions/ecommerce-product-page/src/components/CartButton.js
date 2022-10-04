import { ReactComponent as CartIcon } from '../images/icon-cart.svg';
import { StyledIconButton, Lightbox, StyledBox, Heading, Text } from '.';
import { styled, keyframes } from '../stitches.config';

export const Root = () => (
  <Lightbox.Root>
    <CartButton />
  </Lightbox.Root>
);

const CartButton = () => {
  const { closing } = Lightbox.useLightboxContext();

  return (
    <StyledBox css={{ position: 'relative' }}>
      <Lightbox.Trigger as={StyledIconButton}>
        <CartIcon />
      </Lightbox.Trigger>
      <Lightbox.Content as={CartBox} closing={closing}>
        <header>
          <Heading variant="h3">Cart</Heading>
        </header>
        <StyledBox
          css={{
            width: '100%',
            height: '65%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text bold>Your cart is empty.</Text>
        </StyledBox>
      </Lightbox.Content>
      <Lightbox.Overlay css={{ bgC: 'transparent', animation: 'none' }} />
    </StyledBox>
  );
};

const moveUpFadeIn = keyframes({
  '0%': {
    opacity: 0,
    transform: 'translate(0, 55px)',
    '@md': {
      transform: 'translate(-180px, 55px)',
    },
  },
  '100%': {
    opacity: 1,
    transform: 'translate(0, 35px)',
    '@md': {
      transform: 'translate(-180px, 35px)',
    },
  },
});

const moveUpFadeInMd = keyframes({
  '0%': {
    opacity: 0,
    transform: 'translate(-180px, 45px)',
  },
  '100%': {
    opacity: 1,
    transform: 'translate(-180px, 25px)',
  },
});

const moveDownFadeOut = keyframes({
  '0%': {
    opacity: 1,
    transform: 'translate(0, 35px)',
  },
  '100%': {
    opacity: 0,
    transform: 'translate(0, 55px)',
  },
});

const moveDownFadeOutMd = keyframes({
  '0%': {
    opacity: 1,
    transform: 'translate(-180px, 25px)',
  },
  '100%': {
    opacity: 0,
    transform: 'translate(-180px, 45px)',
  },
});

const CartBox = styled('article', {
  height: '260px',
  position: 'fixed',
  overflowX: 'hidden',
  left: '$2',
  right: '$2',
  borderRadius: '10px',
  zIndex: 5,
  transform: 'translate(0, 35px)',
  boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.6)',
  animation: `${moveUpFadeIn} 300ms`,

  '& > header': {
    p: '$4',
    borderBottom: '1px solid $grayishBorder',
  },

  '& > div': {
    p: '$4',
  },

  '@md': {
    left: 'initial',
    right: '$3',
    width: '360px',
  },

  '@lg': {
    left: 'initial',
    right: 'initial',
    transform: 'translate(-180px, 25px)',
    animation: `${moveUpFadeInMd} 300ms`,
  },

  variants: {
    closing: {
      true: {
        animation: `${moveDownFadeOut} 300ms`,
        '@lg': {
          animation: `${moveDownFadeOutMd} 300ms`,
        },
      },
    },
  },
});
