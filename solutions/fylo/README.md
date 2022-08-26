# Frontend Mentor - Fylo dark theme landing page solution

This is a solution to the [Fylo dark theme landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/fylo-dark-theme-landing-page-5ca5f2d21e82137ec91a50fd). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

![](./screenshot.jpeg)

### Links

- [Solution URL](https://www.frontendmentor.io/solutions/fylo-dark-theme-landing-page-with-react-stitches-and-css-grid-z5-Ewrpu6g)
- [Live Site UR](https://fylo-nazif.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Theme
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Stitches](https://stitches.dev/) - For styles

### What I learned

In this project I defined a theme to represent different CSS values and utilities. I achieved that by using the Stitches configuration function `createStitches`. Here's what it looks like:

```js
import { createStitches } from '@stitches/react';

export const {
  styled,
  // skip
} = createStitches({
  theme: {
    colors: {
      primaryBase: 'hsl(216, 53%, 9%)',
      // ...
    },
    fonts: {
      body: 'Open Sans',
      // ...
    },
    fontSizes: {
      body: '14px',
      // ...
    },
    fontWeights: {
      regular: 400,
      // ...
    },
  },

  media: {
    xm: '(min-width: 0rem)',
    //...
  },

  utils: {
    size: (value) => ({ width: value, height: value }),
    m: (value) => ({ margin: value }),
    mx: (value) => ({ marginLeft: value, marginRight: value }),
    // ...
  },
});
```

Doing this creates a bunch of tokens I can use when styling my components. Here's
how I used it to defined some global styles for example:

```js
const globalStyles = globalCss({
  body: {
    fontFamily: '$body, sans-serif',
    fontSize: '$body',
    bgC: '$primaryBg',
    color: '$contrast',
  },
  img: {
    width: '100%',
  },
});
```

To use a token we prepend its name with `$`. I named the tokens relatively to
their purposes rather than the values they contain. I did this because values
can change but semantics don't. There will allways be a `primaryBg` but not
necessarely a `darkBlue`. Plus, if I wanted to change some background colors to dark orange,
for example, I would have to find all of the places I used `darkBlue` and refactor
to use `darkOrange`. By naming tokens semantically we can
update repeatitive stylings from one place.

Overall, this configuration allowed me to keep a consistent styling accross the components.

This project also allowed me to use CSS Grid a lot more than usual. I was
flexbox-only person but now I see the combination of flexbox and grid as of
greater value

### Continued development

I found positioning the curvy background in the intro section to be tough.
Here's what I came up with:

```js
const StyledSection = styled('section', {
  width: '100%',
  backgroundImage: `url("${bgCurvyMobile}")`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: '70% 300px',
  backgroundSize: 'cover',
  bgC: '$primaryBgSubtle',

  '@sm': {
    backgroundPosition: '72% 400px',
  },

  '@md': {
    backgroundImage: `url("${bgCurvyDesktop}")`,
    backgroundPosition: 'center 100%',
    backgroundSize: 'contain',
  },
});
```

I can't help but think there is a better way. I will continue my journey
positionning backgrounds and find new technics

## Author

- Website - [Nazif Barassounon](https://www.nazifbara.com)
- Frontend Mentor - [@nazifbara](https://www.frontendmentor.io/profile/nazifbara)
- Twitter - [@nazifbara](https://www.twitter.com/nazifbara)
