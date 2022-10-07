import productImgThumb1 from './images/image-product-1-thumbnail.jpg';
import productImg1 from './images/image-product-1.jpg';
import productImgThumb2 from './images/image-product-2-thumbnail.jpg';
import productImg2 from './images/image-product-2.jpg';
import productImgThumb3 from './images/image-product-3-thumbnail.jpg';
import productImg3 from './images/image-product-3.jpg';
import productImgThumb4 from './images/image-product-4-thumbnail.jpg';
import productImg4 from './images/image-product-4.jpg';

export const NAV_ITEMS = ['Collections', 'Men', 'Wowen', 'About', 'Contact'];

export const PRODUCT = {
  name: 'Fall Limited Edition Sneakers',
  seller: 'Sneaker Company',
  price: '125',
  description:
    'These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.',
  images: [
    {
      big: productImg1,
      thumbnail: productImgThumb1,
    },
    {
      big: productImgThumb2,
      thumbnail: productImg2,
    },
    {
      big: productImgThumb3,
      thumbnail: productImg3,
    },
    {
      big: productImg4,
      thumbnail: productImgThumb4,
    },
  ],
};
