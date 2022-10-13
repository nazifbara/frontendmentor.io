import { useState } from 'react';
import { PRODUCT } from '../constants';
import { styled } from '../stitches.config';
import { Text, Heading, StyledBox, Button, Lightbox } from '../components';
import { useCartState } from '../contexts/CartProvider';
import { ReactComponent as PreviousIcon } from '../images/icon-previous.svg';
import { ReactComponent as NextIcon } from '../images/icon-next.svg';
import { ReactComponent as MinusIcon } from '../images/icon-minus.svg';
import { ReactComponent as PlusIcon } from '../images/icon-plus.svg';
import { ReactComponent as CartIcon } from '../images/icon-cart.svg';
import { ReactComponent as CloseIcon } from '../images/icon-close.svg';

export const ProductSection = () => {
  const [qty, setQty] = useState(0);
  const { addItem } = useCartState();

  const handlePlus = () => setQty((s) => s + 1);
  const handleMinus = () => setQty((s) => (s - 1 < 0 ? s : s - 1));

  const handleAddToCart = () => {
    if (qty <= 0) return;
    addItem(PRODUCT, qty);
  };

  return (
    <StyledBox
      as="section"
      css={{
        '@lg': {
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          alignItems: 'center',
          mt: '$12',
          py: '$4',
        },
      }}
    >
      <Lightbox.Root delay={0}>
        <ImageBox />
        <Lightbox.Overlay />
        <Lightbox.Content
          css={{
            position: 'fixed',
            right: '50%',
            top: '50%',
            bgC: 'transparent',
            transform: 'translate(50%, -50%)',
          }}
        >
          <Lightbox.Close
            css={{ position: 'absolute', p: 0, right: 0, top: '-$7' }}
          >
            <CloseIcon />
          </Lightbox.Close>
          <ImageBox ligthboxMode />
        </Lightbox.Content>
      </Lightbox.Root>

      <StyledInfo>
        <Text
          as="h3"
          bold
          primaryColor
          textTransform="uppercase"
          grayish={false}
          css={{ fontSize: '$subh', mb: '$1' }}
        >
          Sneaker Company
        </Text>

        <Heading as="h2" variant="h2" css={{ mb: '$3', '@lg': { mb: '$8' } }}>
          Fall Limited Edition Sneakers
        </Heading>

        <Text as="p" css={{ mb: '$5', '@lg': { mb: '$6' } }}>
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer.
        </Text>

        <StyledBox
          css={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            mb: '$4',

            '@lg': {
              flexDirection: 'column',
              alignItems: 'flex-start',
            },
          }}
        >
          <StyledBox
            css={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Text grayish={false} bold css={{ fontSize: '30px', mr: '$3' }}>
              $125.00
            </Text>
            <StyledDiscountBadge>50%</StyledDiscountBadge>
          </StyledBox>
          <Text bold css={{ textDecoration: 'line-through', opacity: 0.5 }}>
            $250.00
          </Text>
        </StyledBox>

        <StyledBox
          css={{
            '@lg': {
              display: 'grid',
              gridTemplateColumns: '2fr 5fr',
              alignItems: 'center',
              gap: '$4',
            },
          }}
        >
          <StyledQtyPicker>
            <button onClick={handleMinus}>
              <MinusIcon />
            </button>
            <Text grayish={false} bold>
              {qty}
            </Text>
            <button onClick={handlePlus}>
              <PlusIcon />
            </button>
          </StyledQtyPicker>
          <Button fullWidth onClick={handleAddToCart}>
            <CartIcon /> Add to cart
          </Button>
        </StyledBox>
      </StyledInfo>
    </StyledBox>
  );
};

const ImageBox = ({ ligthboxMode = false }) => {
  const [images] = useState(PRODUCT.images);
  const [currentImgIdx, setCurrentImgIdx] = useState(0);

  const next = () =>
    setCurrentImgIdx(
      currentImgIdx === images.length - 1 ? 0 : currentImgIdx + 1
    );
  const previous = () =>
    setCurrentImgIdx(
      currentImgIdx === 0 ? images.length - 1 : currentImgIdx - 1
    );
  const selectImg = (idx) => () => setCurrentImgIdx(idx);

  return (
    <StyledImgBox ligthboxMode={ligthboxMode}>
      <Lightbox.Trigger css={{ p: 0 }}>
        <img src={images[currentImgIdx].big} alt="" />
      </Lightbox.Trigger>
      <StyledNavBtn
        ligthboxMode={ligthboxMode}
        position="left"
        onClick={previous}
      >
        <PreviousIcon />
      </StyledNavBtn>
      <StyledNavBtn ligthboxMode={ligthboxMode} position="right" onClick={next}>
        <NextIcon />
      </StyledNavBtn>
      <StyledThumnailsWrapper>
        {images.map((img, i) => (
          <StyledThumnail
            key={`thumbnail-${i}`}
            active={i === currentImgIdx}
            onClick={selectImg(i)}
          >
            <img src={img.thumbnail} alt="" />
          </StyledThumnail>
        ))}
      </StyledThumnailsWrapper>
    </StyledImgBox>
  );
};

const StyledQtyPicker = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  bgC: 'rgba(182, 188, 200, 0.25)',
  borderRadius: '5px',
  mb: '$4',

  '@lg': {
    mb: 0,
  },

  '& > button': {
    border: 'none',
    p: '$4',
    cursor: 'pointer',
  },

  '& *': {
    bgC: 'transparent',
  },
});

const StyledDiscountBadge = styled('span', {
  bgC: '$palePrimary',
  p: '$1',
  color: '$primary',
  fontWeight: '$bold',
});

const StyledInfo = styled('article', {
  p: '$4',
});

const StyledNavBtn = styled('button', {
  position: 'absolute',
  top: '50%',
  transform: 'translate(0, -50%)',
  size: '40px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '50%',
  p: 0,
  border: 'none',
  cursor: 'pointer',

  '& path': {
    transition: 'stroke ease-out 0.3s',
  },

  '&:hover path': {
    stroke: '$primary',
  },

  '@lg': {
    display: 'none',
    size: '50px',
  },

  variants: {
    ligthboxMode: {
      true: {
        display: 'flex',
      },
    },
    position: {
      left: {
        left: '$2',
      },
      right: {
        right: '$2',
      },
    },
  },

  compoundVariants: [
    {
      ligthboxMode: true,
      position: 'left',
      css: { left: 0, transform: 'translate(-50%, -200%)' },
    },
    {
      ligthboxMode: true,
      position: 'right',
      css: { right: 0, transform: 'translate(50%, -200%)' },
    },
  ],
});

const StyledThumnailsWrapper = styled('div', {
  display: 'none',
  bgC: 'transparent',
  maxWidth: '450px',
  m: '0 auto',

  '@lg': {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '$5',
  },
});

const StyledThumnail = styled('div', {
  borderRadius: '10px',
  overflow: 'hidden',
  border: '3px solid tranparent',

  '& img': {
    transition: 'opacity ease-out 0.3s',
    borderRadius: '10px',
  },

  '&:hover img': {
    opacity: 0.6,
  },

  variants: {
    active: {
      true: {
        border: '3px solid $primary',
        '& img': {
          opacity: 0.6,
          borderRadius: 0,
        },
      },
    },
  },
});

const StyledImgBox = styled('figure', {
  position: 'relative',
  maxWidth: '450px',
  m: '0 auto',
  bgC: 'transparent',

  '& img': {
    cursor: 'pointer',
  },

  '@lg': {
    '& > button:first-child': {
      mb: '$5',
      borderRadius: '10px',
      overflow: 'hidden',
    },
  },

  variants: {
    ligthboxMode: {
      true: {
        maxWidth: '550px',
      },
    },
  },
});
