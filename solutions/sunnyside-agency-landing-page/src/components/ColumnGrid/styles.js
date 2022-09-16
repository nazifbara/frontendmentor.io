import { styled } from '../../stitches.config';

export const StyledColumnGrid = styled('div', {
  display: 'grid',
  gridTemplateColumns:
    '1fr [edge-start] 20px [wrapper-start] repeat(12, minmax(auto, 113.33px)) [wrapper-end] 20px [edge-end] 1fr',
  alignItems: 'center',
});
