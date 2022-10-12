import { ReactComponent as CartIcon } from '../images/icon-cart.svg';
import { ReactComponent as DeleteIcon } from '../images/icon-delete.svg';
import {
  StyledIconButton,
  Lightbox,
  StyledBox,
  Heading,
  Text,
  Button,
} from '.';
import { styled, keyframes } from '../stitches.config';
import { useCartState } from '../contexts/CartProvider';
import { formatPrice } from '../utils';

export const Root = () => (
  <Lightbox.Root>
    <CartButton />
  </Lightbox.Root>
);

const CartButton = () => {
  const { closing } = Lightbox.useLightboxContext();
  const { items, count, isEmpty, removeItem } = useCartState();

  return (
    <StyledBox css={{ position: 'relative' }}>
      <Lightbox.Trigger as={StyledIconButton}>
        <CartIcon />
        {!isEmpty && <StyledBadge>{count > 9 ? '9+' : count}</StyledBadge>}
      </Lightbox.Trigger>
      <Lightbox.Content as={CartBox} closing={closing}>
        <header>
          <Heading variant="h3">Cart</Heading>
        </header>
        {isEmpty ? (
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
        ) : (
          <StyledBox css={{ p: '$4' }}>
            {items.map((i) => (
              <StyledCartItem key={i.name}>
                <img src={i.images[0].thumbnail} alt="product" />
                <div>
                  <Text as="h2">{i.name}</Text>
                  <Text>
                    {formatPrice(i.price)} x {i.qty}{' '}
                    <Text as="span" grayish={false} bold>
                      {formatPrice(i.total)}
                    </Text>
                  </Text>
                </div>
                <StyledIconButton onClick={() => removeItem(i.name)}>
                  <DeleteIcon />
                </StyledIconButton>
              </StyledCartItem>
            ))}
            <Button fullWidth>Checkout</Button>
          </StyledBox>
        )}
      </Lightbox.Content>
      <Lightbox.Overlay css={{ bgC: 'transparent', animation: 'none' }} />
    </StyledBox>
  );
};

const StyledCartItem = styled('article', {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, auto)',
  alignItems: 'center',
  maxWidth: '360px',
  gap: '$1',
  mb: '$4',

  '& img': {
    size: '60px',
    borderRadius: '5px',
  },
});

const StyledBadge = styled('span', {
  bgC: '$primary',
  position: 'absolute',
  color: 'white',
  right: '3px',
  top: '-$1',
  borderRadius: '50px',
  fontSize: '10px',
  fontWeight: '$bold',
  px: '8px',
});

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
  boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.3)',
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
