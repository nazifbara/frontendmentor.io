import { Box } from '@mui/material';

const Gutter = ({ children, right = false, big }) => {
  return (
    <Box
      sx={{
        pl: {
          mobile: '1.5rem',
          tablet: '3.063rem',
          laptop: big ? '8.5rem' : '3.438rem',
        },
        pr: {
          mobile: '1.5rem',
          tablet: right ? '3.063rem' : 0,
          laptop: right && big ? '8.5rem' : 0,
        },
      }}
      component="div"
    >
      {children}
    </Box>
  );
};

export default Gutter;
