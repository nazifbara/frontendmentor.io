import { Section, Box, Logo, NavLink } from '.';

import { ReactComponent as FacebookIcon } from '../images/icon-facebook.svg';
import { ReactComponent as TwitterIcon } from '../images/icon-twitter.svg';

export const Footer = () => (
  <Box css={{ bgC: '$lightContrast' }}>
    <Section
      css={{
        display: 'grid',
        py: '40px',
        rowGap: '40px',
        justifyItems: 'center',
        '@md': {
          gridTemplateColumns: 'repeat(2, auto)',
        },
      }}
    >
      <Box
        css={{
          display: 'grid',
          rowGap: '25px',
          justifyItems: 'center',

          '@md': {
            gridTemplateColumns: 'repeat(4, auto)',
            columnGap: '30px',
            alignItems: 'center',
          },
        }}
      >
        <Logo inFooter />

        <NavLink onDark={true} href="/#features">
          Features
        </NavLink>

        <NavLink onDark={true} href="/#">
          Pricing
        </NavLink>
        <NavLink onDark={true} href="/#contact">
          Contact
        </NavLink>
      </Box>

      <Box
        css={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, auto)',
          columnGap: '30px',
          'a:hover': { '& path': { fill: '$primary' } },
          span: { display: 'none' },
        }}
      >
        <a href="/#">
          <FacebookIcon />
          <span>facebook</span>
        </a>
        <a href="/#">
          <TwitterIcon />
          <span>twitter</span>
        </a>
      </Box>
    </Section>
  </Box>
);
