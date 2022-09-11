import { Section, SectionHeader, Typography, Button, Box } from '.';
import { styled } from '../stitches.config';

import bgDots from '../images/bg-dots.svg';
import chromeLogo from '../images/logo-chrome.svg';
import firefoxLogo from '../images/logo-firefox.svg';
import operaLogo from '../images/logo-opera.svg';

export const ExtensionSection = () => (
  <Section>
    <SectionHeader
      heading={SECTION_HEADER.heading}
      body={SECTION_HEADER.body}
    />

    <StyledCardList>
      {EXTENSIONS.map(({ heading, requirement, logo }, i) => (
        <StyledCard key={`extension-${i}`}>
          <Box
            css={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundImage: `url(${bgDots})`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'bottom',
              height: '75%',
              px: '15px',
            }}
          >
            <img src={logo} alt="" />
            <Typography as="h3" textAlign="center">
              {heading}
            </Typography>
            <Typography textAlign="center">{requirement}</Typography>
          </Box>
          <Box css={{ px: '15px' }}>
            <Button variant="secondary" fullWidth>
              Add & Install Extension
            </Button>
          </Box>
        </StyledCard>
      ))}
    </StyledCardList>
  </Section>
);

const StyledCardList = styled('div', {
  display: 'grid',
  justifyItems: 'center',
  maxWidth: '800px',
  columnGap: '20px',
  px: '20px',
  mb: '15%',
  mr: 'auto',
  ml: 'auto',

  '@md': {
    gridTemplateColumns: 'repeat(3, 1fr)',

    'article:nth-child(2)': {
      transform: 'translateY(10%)',
    },
    'article:nth-child(3)': {
      transform: 'translateY(20%)',
    },
  },
});

const StyledCard = styled('article', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-evenly',
  height: '350px',
  borderRadius: '10px',
  boxShadow: '0px 7px 8px $secondary',

  img: {
    size: '80px',
    mb: '25px',

    '@md': {
      size: '90px',
    },
  },
});

const SECTION_HEADER = {
  heading: 'Download the extension',
  body: 'We’ve got more browsers in the pipeline. Please do let us know if you’ve got a favourite you’d like us to prioritize.',
};

const EXTENSIONS = [
  {
    heading: 'Add to Chrome',
    requirement: 'Minimum version 62',
    logo: chromeLogo,
  },
  {
    heading: 'Add to Firefox',
    requirement: 'Minimum version 55',
    logo: firefoxLogo,
  },
  {
    heading: 'Add to Opera',
    requirement: 'Minimum version 46',
    logo: operaLogo,
  },
];
