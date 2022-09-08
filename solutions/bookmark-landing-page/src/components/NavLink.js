import { Typography } from './Typography';

export const NavLink = ({ href, children, ...otherProps }) => {
  return (
    <Typography
      as="a"
      href={href}
      css={{
        textTransform: 'uppercase',
        color: '$LightContrast',
        fontSize: '$nav',
        fontWeight: '$medium',
        '&:hover': {
          color: '$primary',
          textDecoration: 'none',
        },
      }}
      {...otherProps}
    >
      {children}
    </Typography>
  );
};
