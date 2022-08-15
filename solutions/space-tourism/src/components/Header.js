import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, IconButton, Stack } from '@mui/material';

import { NavBar, Gutter } from '.';

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();

  const goHome = () => navigate('/');
  const openMenu = () => setShowMenu(true);
  const closeMenu = () => setShowMenu(false);

  return (
    <Box
      sx={{
        width: '100%',
        zIndex: 1,
        position: 'fixed',
        py: {
          mobile: '1.5rem',
          tablet: 'initial',
        },
        top: { tablet: 0, laptop: '2.5rem' },
      }}
      component="header"
    >
      <Gutter>
        <Stack
          alignItems="center"
          justifyContent="space-between"
          direction="row"
          component="div"
        >
          <Logo onClick={goHome} />
          <NavBar showMenu={showMenu} onClose={closeMenu} />
          <Hamburger onClick={openMenu} />
        </Stack>
      </Gutter>
    </Box>
  );
};

const Logo = (props) => (
  <IconButton {...props}>
    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48">
      <g fill="none" fillRule="evenodd">
        <circle cx="24" cy="24" r="24" fill="#FFF" />
        <path
          fill="#0B0D17"
          d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"
        />
      </g>
    </svg>
  </IconButton>
);

const Hamburger = (props) => (
  <IconButton sx={{ display: { tablet: 'none' } }} {...props}>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="21">
      <g fill="#D0D6F9" fillRule="evenodd">
        <path d="M0 0h24v3H0zM0 9h24v3H0zM0 18h24v3H0z" />
      </g>
    </svg>
  </IconButton>
);

export default Header;
