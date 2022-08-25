import { Typography, Box, Button, Section } from '.';

export function SignIn() {
  return (
    <Section
      css={{
        py: 0,
        transform: 'translateY(50%)',
        '@md': { transform: 'translateY(40%)' },
      }}
    >
      <Box
        css={{
          display: 'grid',
          borderRadius: '5px',
          boxShadow: '8px 8px 10px rgba(0, 0, 0, 0.6)',
          rowGap: '20px',
          bgC: '$primaryBgSubtle',
          p: '40px 20px',
          maxWidth: '860px',
          m: '0 auto',
          '@md': {
            p: '70px 50px',
          },
        }}
      >
        <Typography element="h2" align="center">
          Get early access today
        </Typography>
        <Typography align="center">
          It only takes a minute to sign up and our free starter tier is
          extremely generous. If you have any questions, our support team would
          be happy to help you.
        </Typography>

        <Box
          as="form"
          css={{
            display: 'grid',
            rowGap: '20px',
            '@md': {
              gridTemplateColumns: '6fr 4fr',
              columnGap: '15px',
            },
            '@lg': {
              gridTemplateColumns: '7fr 3fr',
              columnGap: '30px',
            },
          }}
        >
          <Button
            as="input"
            type="email"
            required={true}
            placeholder="example@fylo.com"
            css={{
              color: '#000',
              cursor: 'text',
              fontFamily: '$body',
              fontWeight: '$regular',
              backgroundImage: 'none',
              '&:hover': {
                backgroundImage: 'none',
              },
            }}
          />
          <Button>Get Started For Free</Button>
        </Box>
      </Box>
    </Section>
  );
}
