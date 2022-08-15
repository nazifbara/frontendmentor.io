import { Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const MainButton = ({ children }) => {
  const navigate = useNavigate();

  const handleClick = () => navigate('/destination');

  return (
    <Box
      sx={{
        width: {
          mobile: '9.375rem',
          tablet: '15.125rem',
          laptop: '17.125rem',
        },
        height: {
          mobile: '9.375rem',
          tablet: '15.125rem',
          laptop: '17.125rem',
        },
        borderRadius: '50%',
        alignItems: 'flex-start',
        cursor: 'pointer',
        border: 0,
        outlineWidth: 0,
        outlineStyle: 'solid',
        outlineColor: 'rgba(255, 255, 255, 0.10)',
        transition: 'outline-width .3s ease-out',
        '&:hover': {
          outlineWidth: '5.5rem',
        },
        '& a': {
          color: 'inherit',
          textDecoration: 'none',
        },
      }}
      onClick={handleClick}
      component="button"
    >
      <Typography variant="h4" component="span">
        {children}
      </Typography>
    </Box>
  );
};

export default MainButton;
