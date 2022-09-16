import { GALLERY_IMAGES } from '../../data';

export const Gallery = () => (
  <section>
    {GALLERY_IMAGES.map((g, idx) => (
      <img key={`gallery-${idx}`} src={g.desktop} alt="" />
    ))}
  </section>
);
