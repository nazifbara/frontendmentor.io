import transformImageMobile from './images/mobile/image-transform.jpg';
import transformImageDesktop from './images/desktop/image-transform.jpg';
import standOutImageMobile from './images/mobile/image-stand-out.jpg';
import standOutImageDesktop from './images/desktop/image-stand-out.jpg';
import graphicDesignImageMobile from './images/mobile/image-graphic-design.jpg';
import graphicDesignImageDesktop from './images/desktop/image-graphic-design.jpg';
import photographyImageMobile from './images/mobile/image-photography.jpg';
import photographyImageDesktop from './images/desktop/image-photography.jpg';

import emilyImage from './images/image-emily.jpg';
import jennieImage from './images/image-jennie.jpg';
import thomasImage from './images/image-thomas.jpg';

import milkbottlesImageMobile from './images/mobile/image-gallery-milkbottles.jpg';
import milkbottlesImageDesktop from './images/desktop/image-gallery-milkbottles.jpg';
import orangeImageMobile from './images/mobile/image-gallery-orange.jpg';
import orangeImageDesktop from './images/desktop/image-gallery-orange.jpg';
import coneImageMobile from './images/mobile/image-gallery-cone.jpg';
import coneImageDesktop from './images/desktop/image-gallery-cone.jpg';
import sugarCubesImageMobile from './images/mobile/image-gallery-sugar-cubes.jpg';
import sugarCubesImageDesktop from './images/desktop/image-gallery-sugar-cubes.jpg';

import {
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  PinterestIcon,
} from './icons';

export const NAV_ITEMS = ['About', 'Services', 'Projects', 'Contact'];

export const SERVICES = [
  {
    heading: 'Transform your brand',
    description:
      'We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.',
    mobileImage: transformImageMobile,
    desktopImage: transformImageDesktop,
  },
  {
    heading: 'Stand out to the right audience',
    description:
      'Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places.',
    mobileImage: standOutImageMobile,
    desktopImage: standOutImageDesktop,
  },
  {
    heading: 'Graphic design',
    description:
      'Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.',
    mobileImage: graphicDesignImageMobile,
    desktopImage: graphicDesignImageDesktop,
  },
  {
    heading: 'Photography',
    description:
      'Increase your credibility by getting the most stunning, high-quality photos that improve your business image.',
    mobileImage: photographyImageMobile,
    desktopImage: photographyImageDesktop,
  },
];

export const TESTIMONIALS = [
  {
    name: 'Emily R.',
    postion: 'Marketing Director',
    body: 'We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.',
    photo: emilyImage,
  },
  {
    name: 'Thomas S.',
    postion: 'Chief Operating Officer',
    body: 'Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.',
    photo: thomasImage,
  },
  {
    name: 'Jennie F.',
    postion: 'Business Owner',
    body: 'Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!',
    photo: jennieImage,
  },
];

export const GALLERY_IMAGES = [
  { mobile: milkbottlesImageMobile, desktop: milkbottlesImageDesktop },
  { mobile: orangeImageMobile, desktop: orangeImageDesktop },
  { mobile: coneImageMobile, desktop: coneImageDesktop },
  { mobile: sugarCubesImageMobile, desktop: sugarCubesImageDesktop },
];

export const SOCIAL_MEDIAS = [
  { name: 'Facebook', icon: <FacebookIcon /> },
  { name: 'Instagram', icon: <InstagramIcon /> },
  { name: 'Twitter', icon: <TwitterIcon /> },
  { name: 'Pinterest', icon: <PinterestIcon /> },
];
