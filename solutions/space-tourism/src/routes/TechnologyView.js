import { useState } from 'react';
import { Box, Stack, Typography } from '@mui/material';

import bgImgDesktop from '../assets/technology/background-technology-desktop.jpg';
import bgImgTablet from '../assets/technology/background-technology-tablet.jpg';
import bgImgMobile from '../assets/technology/background-technology-mobile.jpg';

import { ViewWrapper, Gutter, ViewHeading, NumberSlider } from '../components';
import data from '../data';

const TechnologyView = () => {
  const [index, setIndex] = useState(0);
  const technologies = data.technology;
  const selectedTech = technologies[index];

  const changeTech = (i) => setIndex(i);

  return (
    <ViewWrapper
      bgImg={{ laptop: bgImgDesktop, mobile: bgImgMobile, tablet: bgImgTablet }}
    >
      <Gutter big>
        <ViewHeading index={3}>SPACE LAUNCH 101</ViewHeading>
      </Gutter>
      <Box
        sx={{ display: { mobile: 'block', laptop: 'none' } }}
        mb="2.125rem"
        component="img"
        src={selectedTech.images.landscape}
        alt={selectedTech.name}
      />
      <Gutter big>
        <Stack textAlign={{ mobile: 'center', laptop: 'left' }}>
          <Stack
            direction={{ mobile: 'column', laptop: 'row' }}
            alignItems="center"
            justifyContent="space-between"
            spacing="1.625rem"
          >
            <NumberSlider
              onClick={changeTech}
              activeIndex={index}
              quantity={technologies.length}
            />
            <Box>
              <Typography
                mb={{ mobile: '0.5rem', laptop: '0.938rem' }}
                variant="navtext"
                color="primary"
              >
                THE TERMINOLOGY…
              </Typography>
              <Typography mb="1rem" variant="h3" component="h1">
                {selectedTech.name}
              </Typography>
              <Typography
                variant="body1"
                maxWidth="28.625rem"
                color="primary"
                component="p"
              >
                {selectedTech.description}
              </Typography>
            </Box>
            <Box
              sx={{ display: { mobile: 'none', laptop: 'block' } }}
              maxWidth="32.188rem"
              mb="2.125rem"
              component="img"
              src={selectedTech.images.portrait}
              alt={selectedTech.name}
            />
          </Stack>
        </Stack>
      </Gutter>
    </ViewWrapper>
  );
};

const route = {
  name: 'TechnologyView',
  props: {
    path: '/technology',
    element: <TechnologyView />,
  },
};

export default route;
