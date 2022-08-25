import profile1 from '../images/profile-1.jpg';
import profile2 from '../images/profile-2.jpg';
import profile3 from '../images/profile-3.jpg';
import bgQuotes from '../images/bg-quotes.png';

import { Typography, Section } from '.';
import { styled } from '../stitches.config';

export function TestimonialsSection() {
  return (
    <Section id="team" css={{ pb: 0 }}>
      <StyledContainer>
        {testimonials.map((t, i) => (
          <StyledTestimony key={`testimony-${i}`}>
            <Typography>{t.content}</Typography>
            <StyledHeader>
              <StyledAvatar>
                <img src={t.photo} alt={t.name} />
              </StyledAvatar>
              <div>
                <Typography element="h3">{t.name}</Typography>
                <Typography>{t.position}</Typography>
              </div>
            </StyledHeader>
          </StyledTestimony>
        ))}
      </StyledContainer>
    </Section>
  );
}

const StyledContainer = styled('div', {
  display: 'grid',
  rowGap: '30px',
  maxWidth: '1200px',
  m: '0 auto',
  p: '35px 20px',
  backgroundImage: `url(${bgQuotes})`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'left 25px top 0px',

  '@sm': {
    backgroundPosition: 'left 10px top 0px',
  },

  '@md': {
    gridTemplateColumns: 'repeat(3, 1fr)',
    columnGap: '30px',
  },
});

const StyledTestimony = styled('article', {
  bgC: '$primarySolid',
  p: '20px',
  borderRadius: '5px',
});

const StyledHeader = styled('header', {
  display: 'flex',
  alignItems: 'center',

  '& h3, & p': {
    mb: 0,
  },
});

const StyledAvatar = styled('div', {
  size: '40px',
  borderRadius: '50%',
  overflow: 'hidden',
  mr: '10px',

  '@md': {
    size: '50px',
  },
});

const testimonials = [
  {
    photo: profile1,
    content:
      'Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.',
    name: 'Satish Patel',
    position: 'Founder & CEO, Huddle',
  },
  {
    photo: profile2,
    content:
      'Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.',
    name: 'Bruce McKenzie',
    position: 'Founder & CEO, Huddle',
  },
  {
    photo: profile3,
    content:
      'Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.',
    name: 'Iva Boyd',
    position: 'Founder & CEO, Huddle',
  },
];
