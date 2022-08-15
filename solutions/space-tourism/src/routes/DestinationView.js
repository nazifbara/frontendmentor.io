import { useState } from 'react';
import { Stack, Typography } from '@mui/material';

import bgImgDesktop from '../assets/destination/background-destination-desktop.jpg';
import bgImgTablet from '../assets/destination/background-destination-tablet.jpg';
import bgImgMobile from '../assets/destination/background-destination-mobile.jpg';
import { Gutter, ViewWrapper, ViewHeading, Tab } from '../components';
import data from '../data';
import { Box } from '@mui/system';

const DestinationView = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const destinations = data.destinations;
  const currentDestination = data.destinations[currentIndex];

  const changeDestination = (index) => setCurrentIndex(index);

  return (
    <ViewWrapper
      bgImg={{ laptop: bgImgDesktop, mobile: bgImgMobile, tablet: bgImgTablet }}
    >
      <Gutter right big>
        <ViewHeading index={1}>Pick your destination</ViewHeading>
        <Stack
          direction={{ mobile: 'column', laptop: 'row' }}
          spacing="3.313rem"
          alignItems="center"
          justifyContent="space-around"
        >
          <Box
            component="img"
            sx={{
              maxWidth: {
                mobile: '10.625rem',
                tablet: '18.75rem',
                laptop: '100%',
              },
            }}
            src={currentDestination.images.webp}
            alt={currentDestination.name}
          />
          <Stack
            alignItems={{ mobile: 'center', laptop: 'initial' }}
            spacing="1.25rem"
            maxWidth={{ mobile: '35.813rem', laptop: '27.813rem' }}
          >
            <Tab
              items={destinations.map((d) => d.name)}
              activeIndex={currentIndex}
              onClick={changeDestination}
            />
            <Typography variant="h2">{currentDestination.name}</Typography>
            <Typography
              variant="body1"
              color="primary"
              pb="3.375rem"
              borderBottom={1}
              textAlign={{ mobile: 'center', laptop: 'initial' }}
              borderColor="#383B4B"
            >
              {currentDestination.description}
            </Typography>
            <Stack
              spacing={{ mobile: '2rem', tablet: '5rem' }}
              textAlign={{ mobile: 'center', laptop: 'initial' }}
              direction={{ mobile: 'column', tablet: 'row' }}
            >
              <Stack>
                <Typography variant="subtitle2" color="primary">
                  AVG. DISTANCE
                </Typography>
                <Typography variant="subtitle1">
                  {currentDestination.distance}
                </Typography>
              </Stack>
              <Stack>
                <Typography variant="subtitle2" color="primary">
                  Est. travel time
                </Typography>
                <Typography variant="subtitle1">
                  {currentDestination.travel}
                </Typography>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Gutter>
    </ViewWrapper>
  );
};

const route = {
  name: 'DestinationView',
  props: {
    path: '/destination',
    element: <DestinationView />,
  },
};

export default route;
