import { useState } from 'react';
import { PRODUCT } from '../constants';
import { styled } from '../stitches.config';
import { Text, Heading, StyledBox, Button } from '../components';
import { ReactComponent as PreviousIcon } from '../images/icon-previous.svg';
import { ReactComponent as NextIcon } from '../images/icon-next.svg';
import { ReactComponent as MinusIcon } from '../images/icon-minus.svg';
import { ReactComponent as PlusIcon } from '../images/icon-plus.svg';
import { ReactComponent as CartIcon } from '../images/icon-cart.svg';

export const ProductSection = () => {
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
      <StyledImgBox>
        <img src={images[currentImgIdx].big} alt="" />
        <StyledNavBtn position="left" onClick={previous}>
          <PreviousIcon />
        </StyledNavBtn>
        <StyledNavBtn position="right" onClick={next}>
          <NextIcon />
        </StyledNavBtn>
        <StyledThumnailsWrapper>
          {images.map((img, i) => (
            <StyledThumnail active={i === currentImgIdx} onClick={selectImg(i)}>
              <img src={img.thumbnail} alt="" />
            </StyledThumnail>
          ))}
        </StyledThumnailsWrapper>
      </StyledImgBox>

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
            <button>
              <MinusIcon />
            </button>
            <Text grayish={false} bold>
              0
            </Text>
            <button>
              <PlusIcon />
            </button>
          </StyledQtyPicker>
          <Button fullWidth>
            <CartIcon /> Add to cart
          </Button>
        </StyledBox>
      </StyledInfo>
    </StyledBox>
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
  transform: 'translateY(-50%)',
  size: '40px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '50%',
  p: 0,
  border: 'none',
  cursor: 'pointer',

  '@lg': {
    display: 'none',
  },

  variants: {
    position: {
      left: {
        left: '$2',
      },
      right: {
        right: '$2',
      },
    },
  },
});

const StyledThumnailsWrapper = styled('div', {
  display: 'none',
  '@lg': {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '$4',
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

  '& img': {
    cursor: 'pointer',
  },

  '@lg': {
    '& > img': {
      mb: '$5',
      borderRadius: '10px',
    },
  },
});
