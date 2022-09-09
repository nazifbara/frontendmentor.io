import { useState } from 'react';

import { Section, Typography, Box, BgShapeBox, Button, SectionHeader } from '.';
import { styled } from '../stitches.config';

import tab1Illu from '../images/illustration-features-tab-1.svg';
import tab2Illu from '../images/illustration-features-tab-2.svg';
import tab3Illu from '../images/illustration-features-tab-3.svg';

export const FeatureSection = () => {
  const [activeTab, setActiveTab] = useState(0);
  const selectedFeature = FEATURES[activeTab];

  const hanldeTabChange = (tabIdx) => () => {
    setActiveTab(tabIdx);
  };

  return (
    <Section id="features">
      <SectionHeader
        header={SECTION_HEADER.header}
        body={SECTION_HEADER.body}
      />
      <div>
        <StyledTabs>
          {['Simple Bookmarking', 'Speedy Searching', 'Easy Sharing'].map(
            (label, i) => (
              <StyledTabBtn
                key={`tab-${label}`}
                active={i === activeTab}
                onClick={hanldeTabChange(i)}
              >
                <Typography as="span">{label}</Typography>
              </StyledTabBtn>
            )
          )}
        </StyledTabs>

        <Box
          css={{
            display: 'grid',
            '@md': { gridTemplateColumns: 'repeat(2, 1fr)', columnGap: '30px' },
            '@lg': { gridTemplateColumns: 'auto 500px', columnGap: '100px' },
          }}
        >
          <BgShapeBox left>
            <img src={selectedFeature.illustration} alt="" />
          </BgShapeBox>
          <Box as="article" css={{ '@md': { transform: 'translateY(10%)' } }}>
            <Typography
              as="h2"
              textAlign={{ '@initial': 'center', '@md': 'left' }}
            >
              {selectedFeature.heading}
            </Typography>
            <Typography textAlign={{ '@initial': 'center', '@md': 'left' }}>
              {selectedFeature.description}
            </Typography>
            <Button
              as="a"
              href="/#"
              variant="secondary"
              textTransform="capitalize"
              css={{
                display: 'none',
                '@md': {
                  display: 'inline-block',
                },
              }}
            >
              more info
            </Button>
          </Box>
        </Box>
      </div>
    </Section>
  );
};

const StyledTabs = styled('nav', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  mb: ' 30px',

  '@md': {
    flexDirection: 'row',
    mb: '60px',
  },
});

const StyledTabBtn = styled('button', {
  bgC: 'transparent',
  color: '$lightContrast',
  fontWeight: '$regular',
  p: 0,
  border: 'none',
  borderBottom: '1px solid $grayishLightContrast',
  cursor: 'pointer',

  '&:hover span': {
    color: '$primary',
  },

  '& span': {
    display: 'inline-block',
    py: '16px',
  },

  '&:first-child': {
    borderTop: '1px solid $grayishLightContrast',
  },

  '@md': {
    px: '50px',
    '&:first-child': {
      borderTop: '0',
    },
  },
  '@lg': {
    px: '80px',
  },

  variants: {
    active: {
      true: {
        '&:hover span': {
          color: '$lightContrast',
        },
        '@md': {
          borderBottom: '4px solid $primary',
        },
        '& span': {
          borderBottom: '5px solid $primary',
          fontWeight: '$medium',
          color: '$lightContrast',

          '@md': {
            borderBottom: 'none',
          },
        },
      },
    },
  },
});

const SECTION_HEADER = {
  header: 'Features',
  body: 'Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between your devices so you can access them on the go.',
};

const FEATURES = [
  {
    heading: 'Bookmark in one click',
    description:
      'Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.',
    illustration: tab1Illu,
  },
  {
    heading: 'Intelligent search',
    description:
      'Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.',
    illustration: tab2Illu,
  },
  {
    heading: 'Share your bookmarks',
    description:
      'Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.',
    illustration: tab3Illu,
  },
];
