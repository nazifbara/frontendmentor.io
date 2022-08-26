import illustration from '../images/illustration-intro.png';
import bgCurvyDesktop from '../images/bg-curvy-desktop.svg';
import bgCurvyMobile from '../images/bg-curvy-mobile.svg';
import { styled } from '../stitches.config';
import { Typography, Button, Box } from '.';

export function IntroSection() {
  return (
    <StyledSection>
      <Box
        css={{
          display: 'grid',
          maxWidth: '630px',
          m: '0 auto',
          gridTemplateRows: 'repeat(3, auto)',
          justifyItems: 'center',
          rowGap: '10px',
          pt: '30px',
          pb: '80px',
          px: '35px',
          '@md': {
            pt: 0,
          },

          '& p': {
            maxWidth: '500px',
          },
        }}
      >
        <img src={illustration} alt="" />

        <Typography element="h1" align="center">
          All your files in one secure location, accessible anywhere.
        </Typography>

        <Typography align="center">
          Fylo stores all your most important files in one secure location.
          Access them wherever you need, share and collaborate with friends
          family, and co-workers.
        </Typography>

        <Button css={{ width: '250px', '@md': { width: '300px' } }}>
          Get Started
        </Button>
      </Box>
    </StyledSection>
  );
}

const StyledSection = styled('section', {
  width: '100%',
  backgroundImage: `url("${bgCurvyMobile}")`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center 100%',
  backgroundSize: 'contain',
  bgC: '$primaryBgSubtle',

  '@md': {
    backgroundImage: `url("${bgCurvyDesktop}")`,
  },
});
