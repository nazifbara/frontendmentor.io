import { IconButton, Stack, Typography } from '@mui/material';
import { useLocation, Link } from 'react-router-dom';

const ITEMS = ['home', 'destination', 'crew', 'technology'];

const NavItem = ({ index, text, path, onClose }) => {
  const { pathname } = useLocation();
  const active = pathname === path || pathname === path + '/';

  return (
    <Typography
      sx={{
        color: 'inherit',
        py: {
          mobile: '0.8rem',
          tablet: 'initial',
        },
        pb: {
          tablet: '2.188rem',
        },
        textDecoration: 'none',
        borderRight: {
          mobile: `0.313rem solid ${active ? 'currentcolor' : 'transparent'}`,
          tablet: 0,
        },
        borderBottom: {
          mobile: 0,
          tablet: `0.188rem solid ${active ? 'currentcolor' : 'transparent'}`,
        },

        '&:hover,&:active': {
          borderBottom: {
            mobile: 0,
            tablet: `0.188rem solid ${
              active ? 'currentcolor' : 'rgba(255, 255, 255, 0.521)'
            }`,
          },
        },
      }}
      variant="navtext"
      component={Link}
      onClick={onClose}
      to={path}
    >
      <Typography
        sx={{ display: { tablet: 'none', laptop: 'inline' } }}
        mr={1}
        fontWeight="bold"
        variant="navtext"
      >
        {String(index).padStart(2, '0')}
      </Typography>
      {text}
    </Typography>
  );
};

const NavBar = ({ showMenu = false, onClose }) => {
  return (
    <Stack
      sx={{
        zIndex: 2,
        transition: 'right 0.3s ease-out',
        height: {
          mobile: '100vh',
          tablet: 'initial',
        },
        width: {
          mobile: '73%',
          tablet: 'initial',
        },
        maxWidth: {
          mobile: '25rem',
          tablet: 'initial',
        },
        position: {
          mobile: 'fixed',
          tablet: 'initial',
        },
        top: {
          mobile: 0,
          tablet: 'initial',
        },
        right: {
          mobile: showMenu ? 0 : '-100%',
          tablet: 'initial',
        },
        background: 'rgba(255, 255, 255, 0.04)',
        backdropFilter: 'blur(81.5485px)',
        pt: {
          mobile: '6.25rem',
          tablet: '2.438rem',
        },
        pl: { mobile: '2.188rem', tablet: '3rem', laptop: '7.688rem' },
        pr: { tablet: '3rem', laptop: '10.313rem' },
      }}
      direction={{
        mobile: 'column',
        tablet: 'row',
      }}
      component="nav"
      spacing={{ mobile: '1.563rem', tablet: '2.313rem', laptop: '3.125rem' }}
    >
      <CloseIcon onClick={onClose} />
      {ITEMS.map((i, index) => (
        <NavItem
          key={`NavItem-${index}-${i}`}
          onClose={onClose}
          index={index}
          text={i}
          path={i === 'home' ? '/' : `/${i}`}
        />
      ))}
    </Stack>
  );
};

const CloseIcon = (props) => (
  <IconButton
    sx={{
      position: 'absolute',
      top: '2rem',
      right: '1.875rem',
      display: { tablet: 'none' },
    }}
    {...props}
  >
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21">
      <g fill="#D0D6F9" fillRule="evenodd">
        <path d="M2.575.954l16.97 16.97-2.12 2.122L.455 3.076z" />
        <path d="M.454 17.925L17.424.955l2.122 2.12-16.97 16.97z" />
      </g>
    </svg>
  </IconButton>
);

export default NavBar;
