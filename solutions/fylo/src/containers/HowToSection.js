import illustration from '../images/illustration-stay-productive.png';
import { ReactComponent as ArrowIcon } from '../images/icon-arrow.svg';
import { Box, Section, Typography } from '../components';

export function HowToSecion() {
  return (
    <Section>
      <Box
        css={{
          display: 'grid',
          rowGap: '40px',
          maxWidth: '1200px',
          m: '0 auto',
          justifyItems: 'center',
          '@md': {
            gridTemplateColumns: '4fr 3fr',
            columnGap: '20px',
            alignItems: 'center',
          },
          '@lg': {
            columnGap: '70px',
          },
        }}
      >
        <Box
          as="img"
          src={illustration}
          alt=""
          css={{ maxWidth: '560px', '@md': { maxWidth: 'initial' } }}
        />
        <Box as="article" css={{ maxWidth: '500px' }}>
          <Typography
            element="h2"
            align={{ '@xm': 'center', '@md': 'left' }}
            css={{ '@md': { fontSize: '$h1-md' } }}
          >
            Stay productive, wherever you are
          </Typography>
          <Typography>
            Never let location be an issue when accessing your files. Fylo has
            you covered for all of your file storage needs.
          </Typography>
          <Typography>
            Securely share files and folders with friends, family and colleagues
            for live collaboration. No email attachments required.
          </Typography>

          <Typography
            element="a"
            css={{
              color: '$accent1',
              pb: '10px',
              borderBottom: '1px solid $accent1',

              '&:hover': {
                textDecoration: 'none',
                borderBottom: '1px solid $contrast',
              },

              '&:hover use': {
                fill: '$contrast',
              },
            }}
            href="#"
          >
            See how Fylo works <ArrowIcon />
          </Typography>
        </Box>
      </Box>
    </Section>
  );
}
