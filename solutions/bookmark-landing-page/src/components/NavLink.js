import { Typography } from './Typography';

export const NavLink = ({ href, children, onDark = false, ...otherProps }) => {
  return (
    <Typography
      as="a"
      href={href}
      onDark={onDark}
      css={{
        textTransform: 'uppercase',
        color: '$LightContrast',
        fontSize: '$nav',
        fontWeight: '$medium',
        '&:hover': {
          color: '$primary !important',
          textDecoration: 'none',
        },
      }}
      {...otherProps}
    >
      {children}
    </Typography>
  );
};
