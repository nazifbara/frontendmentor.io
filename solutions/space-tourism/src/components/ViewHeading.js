import { Typography } from '@mui/material';

const ViewHeading = ({ index, children }) => (
  <Typography
    mb={{ mobile: '2rem', tablet: '3.75rem', laptop: '4rem' }}
    textAlign={{ mobile: 'center', tablet: 'left' }}
    variant="h5"
    color="white"
    component="h2"
  >
    <Typography
      variant="h5"
      color="rgba(255, 255, 255, 0.25)"
      fontWeight="bold"
      mr="1.25rem"
      component="span"
    >
      {String(index).padStart(2, '0')}
    </Typography>
    {children}
  </Typography>
);

export default ViewHeading;
