import { Box, Typography } from '.';

export const SectionHeader = ({ heading, body }) => (
  <Box
    as="header"
    css={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
  >
    <Typography as="h2" textAlign="center">
      {heading}
    </Typography>

    <Typography textAlign="center" css={{ maxWidth: '500px', mb: '40px' }}>
      {body}
    </Typography>
  </Box>
);
