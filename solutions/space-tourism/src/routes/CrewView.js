import { useState } from 'react';
import { Box, Stack, Typography } from '@mui/material';

import bgImgDesktop from '../assets/crew/background-crew-desktop.jpg';
import bgImgTablet from '../assets/crew/background-crew-tablet.jpg';
import bgImgMobile from '../assets/crew/background-crew-mobile.jpg';
import { Gutter, ViewHeading, ViewWrapper, DotSlider } from '../components';
import data from '../data';

const CrewView = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const crew = data.crew;
  const member = crew[currentIndex];

  const changeMember = (index) => setCurrentIndex(index);

  return (
    <ViewWrapper
      bgImg={{ laptop: bgImgDesktop, mobile: bgImgMobile, tablet: bgImgTablet }}
    >
      <Gutter right big>
        <ViewHeading index={2}>Meet your crew</ViewHeading>
        <Stack
          height={{ tablet: '62vh' }}
          alignItems={{ mobile: 'center', laptop: 'start' }}
          justifyContent={{ mobile: 'space-between' }}
          direction={{
            mobile: 'column-reverse',
            tablet: 'column',
            laptop: 'row',
          }}
          spacing={{ mobile: 5, laptop: 'initial' }}
          textAlign={{ mobile: 'center', laptop: 'start' }}
        >
          <DescriptionBox
            currentIndex={currentIndex}
            onMemberChange={changeMember}
            member={member}
          />
          <MemberPhoto src={member.images.webp} alt={`${member.name} photo`} />
        </Stack>
      </Gutter>
    </ViewWrapper>
  );
};

const DescriptionBox = ({ member, onMemberChange, currentIndex }) => (
  <Stack
    width={{ laptop: '55%' }}
    alignItems={{ mobile: 'center', laptop: 'initial' }}
  >
    <Typography
      mb={{ mobile: '0.5rem', laptop: '0.938rem' }}
      color="rgba(255, 255, 255, .5)"
      variant="h4"
      component="h4"
    >
      {member.role}
    </Typography>
    <Typography
      mb={{ mobile: '1rem', laptop: '1.688rem' }}
      variant="h3"
      component="h1"
    >
      {member.name}
    </Typography>
    <Typography
      mb={{ mobile: '2.5rem', laptop: '7.5rem' }}
      maxWidth="27.75rem"
      variant="body1"
      color="primary"
      component="p"
    >
      {member.bio}
    </Typography>
    <DotSlider
      activeIndex={currentIndex}
      onClick={onMemberChange}
      order={{ mobile: -1, tablet: 'initial' }}
      mb={{ mobile: '2rem', tablet: 'initial' }}
      quantity={data.crew.length}
    />
  </Stack>
);

const MemberPhoto = (props) => (
  <Box
    borderBottom={0.5}
    borderBottomColor="primary.main"
    width={{ mobile: '70%', tablet: '45%', laptop: '40%' }}
    component="img"
    {...props}
  />
);

const route = {
  name: 'CrewView',
  props: {
    path: '/crew',
    element: <CrewView />,
  },
};

export default route;
