import { Stack, Typography } from '@mui/material';

const TabItem = ({ text, active = false, onClick }) => {
  return (
    <Typography
      sx={{
        color: active ? 'inherit' : 'primary.main',
        backgroundColor: 'transparent',
        borderInline: 'none',
        borderTop: 'none',
        cursor: 'pointer',
        pb: '0.938rem',
        textDecoration: 'none',
        borderBottom: 3,
        borderColor: active ? 'inherit' : 'transparent',
        '&:hover': {
          borderColor: active ? 'inherit' : 'rgba(255, 255, 255, 0.521)',
        },
      }}
      onClick={onClick}
      variant="navtext"
      component="button"
    >
      {text}
    </Typography>
  );
};
const Tab = ({ items = [], activeIndex = 0, onClick }) => {
  const handleClick = (index) => () => onClick(index);
  return (
    <Stack
      spacing={{ mobile: '1.625rem', tablet: '2.188rem' }}
      direction="row"
      component="div"
    >
      {items.map((i, index) => (
        <TabItem
          key={`TabItem-${index}-${i}`}
          active={activeIndex === index}
          onClick={handleClick(index)}
          text={i}
        />
      ))}
    </Stack>
  );
};

export default Tab;
