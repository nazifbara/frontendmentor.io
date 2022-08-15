import { createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#D0D6F9',
    },
    background: {
      default: '#0B0D17',
    },
  },
  breakpoints: {
    values: {
      mobile: 0,
      tablet: 768,
      laptop: 1024,
    },
  },
  typography: {
    fontFamily: [
      'Barlow',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
    ].join(','),
    h1: {
      fontSize: '9.375rem',
      fontFamily: 'Bellefair',
      textTransform: 'uppercase',
    },
    h2: {
      fontSize: '6.25rem',
      fontFamily: 'Bellefair',
      textTransform: 'uppercase',
    },
    h3: {
      fontSize: '3.5rem',
      fontFamily: 'Bellefair',
      textTransform: 'uppercase',
    },
    h4: {
      fontSize: '2rem',
      fontFamily: 'Bellefair',
      textTransform: 'uppercase',
    },
    h5: {
      fontSize: '1.75rem',
      fontFamily: 'Barlow Condensed',
      textTransform: 'uppercase',
      letterSpacing: '0.297rem',
      color: '#D0D6F9',
    },
    subtitle1: {
      fontSize: '1.75rem',
      fontFamily: 'Bellefair',
      textTransform: 'uppercase',
    },
    subtitle2: {
      fontSize: '0.875rem',
      fontFamily: 'Barlow Condensed',
      textTransform: 'uppercase',
      letterSpacing: '0.147rem',
    },
    navtext: {
      fontSize: '1rem',
      fontFamily: 'Barlow Condensed',
      textTransform: 'uppercase',
      letterSpacing: '0.169rem',
    },
    body1: {
      fontSize: '1.125rem',
      lineHeight: '2rem',
    },
  },
});

theme.typography.navtext = {
  ...theme.typography.navtext,
  [theme.breakpoints.down('tablet')]: {
    fontSize: '0.875rem',
    letterSpacing: '0.148rem',
  },
};

theme.typography.h1 = {
  ...theme.typography.h1,
  [theme.breakpoints.down('tablet')]: {
    fontSize: '5rem',
  },
};

theme.typography.h2 = {
  ...theme.typography.h2,
  [theme.breakpoints.down('laptop')]: {
    fontSize: '5rem',
  },
  [theme.breakpoints.down('tablet')]: {
    fontSize: '3.5rem',
  },
};

theme.typography.h3 = {
  ...theme.typography.h3,
  [theme.breakpoints.down('laptop')]: {
    fontSize: '2.5rem',
  },
  [theme.breakpoints.down('tablet')]: {
    fontSize: '1.5rem',
  },
};

theme.typography.h4 = {
  ...theme.typography.h4,
  [theme.breakpoints.down('laptop')]: {
    fontSize: '1.5rem',
  },
  [theme.breakpoints.down('tablet')]: {
    fontSize: '0.875rem',
  },
};

theme.typography.h5 = {
  ...theme.typography.h5,
  [theme.breakpoints.down('laptop')]: {
    fontSize: '1.25rem',
    letterSpacing: '0.211rem',
  },
  [theme.breakpoints.down('tablet')]: {
    fontSize: '1rem',
    letterSpacing: '0.169rem',
  },
};

theme.typography.body1 = {
  ...theme.typography.body1,
  [theme.breakpoints.down('laptop')]: {
    fontSize: '1rem',
    lineHeight: '1.563rem',
  },
  [theme.breakpoints.down('tablet')]: {
    fontSize: '0.938rem',
  },
};

export default theme;
