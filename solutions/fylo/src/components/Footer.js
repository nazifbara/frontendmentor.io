import { ReactComponent as LocationIcon } from '../images/icon-location.svg';
import { ReactComponent as PhoneIcon } from '../images/icon-phone.svg';
import { ReactComponent as EmailIcon } from '../images/icon-email.svg';
import { ReactComponent as FacebookIcon } from '../images/facebook-f-brands.svg';
import { ReactComponent as TwitterIcon } from '../images/twitter-brands.svg';
import { ReactComponent as InstagramIcon } from '../images/instagram-brands.svg';

import { Typography, Logo, Box, Section } from '.';
import { styled } from '../stitches.config';

export function Footer() {
  return (
    <Section
      as="footer"
      css={{
        display: 'grid',
        backgroundColor: '$primaryBase',
        pt: '250px',
        px: '25px',
        '& ul': { listStyle: 'none', m: 0, p: 0 },
        '& p': { m: 0, p: 0 },
        '& svg': { display: 'block' },
      }}
    >
      <Box
        css={{
          display: 'grid',
          rowGap: '40px',
          maxWidth: '1200px',
          m: '0 auto',
        }}
      >
        <Logo css={{ width: '150px' }} />

        <Box
          css={{
            display: 'grid',
            rowGap: '40px',
            '@md': {
              gridTemplateColumns: '5fr repeat(3, 1fr)',
            },
          }}
        >
          <Box
            as="ul"
            css={{
              display: 'grid',
              gridTemplateColumns: 'auto',
              rowGap: '15px',

              '@md': {
                gridTemplateColumns: 'repeat(2, 1fr)',
                gridTemplateRows: 'repeat(2, auto)',
                columnGap: '30px',
                rowGap: '5px',
              },

              '& li': {
                display: 'grid',
                gridTemplateColumns: '20px auto',
                columnGap: '15px',
              },
              '& svg': { mt: '6px' },
            }}
          >
            <Box
              as="li"
              css={{ '@md': { gridColumn: '1 / 2', gridRow: '1 / 3' } }}
            >
              <LocationIcon />
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua
              </Typography>
            </Box>
            <Box as="li" css={{ '@md': { gridColumn: '2', gridRow: '1 / 2' } }}>
              <PhoneIcon /> <Typography>+1-543-123-4567</Typography>
            </Box>
            <Box as="li" css={{ '@md': { gridColumn: '2', gridRow: '2 / 3' } }}>
              <EmailIcon />
              <Typography>example@fylo.com</Typography>
            </Box>
          </Box>

          <ul>
            <li>
              <FooterLink href="/#">About Us</FooterLink>
            </li>
            <li>
              <FooterLink href="/#">Jobs</FooterLink>
            </li>
            <li>
              <FooterLink href="/#">Press</FooterLink>
            </li>
            <li>
              <FooterLink href="/#">Blog</FooterLink>
            </li>
          </ul>

          <ul>
            <li>
              <FooterLink href="/#">Contact Us</FooterLink>
            </li>
            <li>
              <FooterLink href="/#">Terms</FooterLink>
            </li>
            <li>
              <FooterLink href="/#">Privacy</FooterLink>
            </li>
          </ul>

          <Box
            as="ul"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, auto)',
              justifyContent: 'center',
              columnGap: '20px',
            }}
          >
            <li>
              <SocialLink href="/#">
                <FacebookIcon />
              </SocialLink>
            </li>
            <li>
              <SocialLink href="/#">
                <TwitterIcon />
              </SocialLink>
            </li>
            <li>
              <SocialLink href="/#">
                <InstagramIcon />
              </SocialLink>
            </li>
          </Box>
        </Box>
      </Box>
    </Section>
  );
}

const SocialLink = styled('a', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  size: '35px',
  p: '5px',
  fill: '$contrast',
  border: '1px solid $contrast',
  borderRadius: '50%',

  '&:hover': {
    fill: '$accent1',
    border: '1px solid $accent1',
  },

  '& svg': {
    size: '90%',
  },
});

const FooterLink = ({ href, children }) => (
  <Typography
    element="a"
    href={href}
    css={{
      '&:hover': {
        fontWeight: '$bold',
        textDecoration: 'none',
      },
    }}
  >
    {children}
  </Typography>
);
