import { GALLERY_IMAGES } from '../../data';
import { ColumnGrid } from '..';
import { StyledImage } from './styles';

export const Gallery = () => (
  <ColumnGrid as="section">
    {GALLERY_IMAGES.map((g, idx) => (
      <StyledImage
        key={`gallery-${idx}`}
        css={{
          backgroundImage: `url(${g.mobile})`,
          '@lg': {
            backgroundImage: `url(${g.desktop})`,
          },
        }}
      />
    ))}
  </ColumnGrid>
);
