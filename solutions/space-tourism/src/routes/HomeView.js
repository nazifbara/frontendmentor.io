import { Stack, Typography } from '@mui/material';

import bgImgDesktop from '../assets/home/background-home-desktop.jpg';
import bgImgTablet from '../assets/home/background-home-tablet.jpg';
import bgImgMobile from '../assets/home/background-home-mobile.jpg';
import { ViewWrapper, Gutter, MainButton } from '../components';

const HomeView = () => (
  <ViewWrapper
    bgImg={{ laptop: bgImgDesktop, mobile: bgImgMobile, tablet: bgImgTablet }}
  >
    <Gutter right big>
      <Stack
        direction={{ mobile: 'column', tablet: 'column', laptop: 'row' }}
        alignItems="center"
        mt={{ laptop: '9.5rem' }}
        justifyContent={{ laptop: 'space-between' }}
        spacing={{ mobile: '5rem', tablet: '9.75rem', laptop: '1rem' }}
      >
        <Stack
          alignItems={{ mobile: 'center', laptop: 'flex-start' }}
          maxWidth="27.813rem"
          spacing={{ mobile: '1rem', tablet: '1.5rem' }}
        >
          <Typography
            textAlign={{ mobile: 'center', laptop: 'left' }}
            variant="h5"
            component="h5"
          >
            SO, YOU WANT TO TRAVEL TO
          </Typography>
          <Typography
            textAlign={{ mobile: 'center', laptop: 'left' }}
            variant="h1"
            component="h1"
          >
            space
          </Typography>
          <Typography
            color="primary"
            textAlign={{ mobile: 'center', laptop: 'left' }}
            variant="body1"
            component="h1"
          >
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </Typography>
        </Stack>
        <MainButton>EXPLORE</MainButton>
      </Stack>
    </Gutter>
  </ViewWrapper>
);

const route = {
  name: 'HomeView',
  props: {
    path: '/',
    element: <HomeView />,
  },
};

export default route;
