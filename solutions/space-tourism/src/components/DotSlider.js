import { Box, Stack } from '@mui/material';

const DotSliderItem = ({ active = false, onClick }) => {
  return (
    <Box
      sx={{
        width: { mobile: '0.625rem', laptop: '0.938rem' },
        height: { mobile: '0.625rem', laptop: '0.938rem' },
        borderRadius: '50%',
        backgroundColor: active ? '#fff' : 'rgba(255, 255, 255, 0.1744)',
        border: 'none',
        cursor: 'pointer',
        '&:hover': {
          backgroundColor: active ? '#fff' : 'rgba(255, 255, 255, 0.5)',
        },
      }}
      onClick={onClick}
      component="button"
    />
  );
};
const DotSlider = ({ quantity, onClick, activeIndex = 0, ...otherProps }) => {
  const handleClick = (index) => () => onClick(index);

  return (
    <Stack
      spacing={{ mobile: '1rem', laptop: '1.5rem' }}
      direction="row"
      component="div"
      {...otherProps}
    >
      {Array(quantity)
        .fill(0)
        .map((_, index) => (
          <DotSliderItem
            key={`DotSlideItem-${index}`}
            onClick={handleClick(index)}
            active={index === activeIndex}
          />
        ))}
    </Stack>
  );
};

export default DotSlider;
