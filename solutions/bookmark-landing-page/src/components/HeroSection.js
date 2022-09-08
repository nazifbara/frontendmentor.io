import heroIllustration from '../images/illustration-hero.svg';

import { Typography, Button, Box, Section, BgShapeBox } from '.';

export const HeroSection = () => (
  <Section
    as="section"
    css={{
      py: '40px',
    }}
  >
    <Box
      as="article"
      css={{
        display: 'grid',
        alignItems: 'center',
        '@md': { gridTemplateColumns: '1fr 2fr' },
        '@lg': { gridTemplateColumns: '500px auto', gridColumnGap: '10px' },
      }}
    >
      <BgShapeBox>
        <Box
          as="img"
          src={heroIllustration}
          alt="hero illustration"
          css={{
            '@md': {
              gridColumn: '2 / 3',
              gridRow: '1',
            },
          }}
        />
      </BgShapeBox>

      <Box
        css={{
          '@md': {
            gridColumn: '1 / 2',
            gridRow: '1',
            transform: 'translateY(-8%)',
          },
        }}
      >
        <Typography as="h1" textAlign={{ '@initial': 'center', '@md': 'left' }}>
          A Simple Bookmark Manager
        </Typography>
        <Typography textAlign={{ '@initial': 'center', '@md': 'left' }}>
          A clean and simple interface to organize your favourite websites. Open
          a new browser tab and see your sites load instantly. Try it for free.
        </Typography>
        <Box
          css={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, auto)',
            columnGap: '10px',
            '@md': {
              width: '350px',
            },
          }}
        >
          <Button variant="secondary" as="a" href="/#">
            Get it on Chrome
          </Button>
          <Button as="a" href="/#">
            Get it on Firefox
          </Button>
        </Box>
      </Box>
    </Box>
  </Section>
);
