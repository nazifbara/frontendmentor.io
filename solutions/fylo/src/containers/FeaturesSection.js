import { Typography } from '../components';
import accessIcon from '../images/icon-access-anywhere.svg';
import securityIcon from '../images/icon-security.svg';
import collabIcon from '../images/icon-collaboration.svg';
import anyFileIcon from '../images/icon-any-file.svg';
import { styled } from '../stitches.config';

export function FeaturesSection() {
  return (
    <StyledSection id="features">
      <StyledFeaturesBox>
        {features.map((f, i) => (
          <StyledFeature key={`feature-${i}`}>
            <StyledIcon src={f.icon} alt="" />
            <Typography element="h3">{f.title}</Typography>
            <Typography align="center">{f.description}</Typography>
          </StyledFeature>
        ))}
      </StyledFeaturesBox>
    </StyledSection>
  );
}

const StyledSection = styled('section', {
  width: '100%',
  py: '20px',
  px: '18px',

  '@sm': {
    py: '25px',
  },
  '@md': {
    py: '40px',
  },
});

const StyledFeaturesBox = styled('div', {
  display: 'grid',
  rowGap: '50px',
  columnGap: '50px',
  maxWidth: '1000px',
  m: '0 auto',
  justifyItems: 'center',

  '@md': {
    gridTemplateColumns: 'repeat(2, auto)',
  },
});

const StyledFeature = styled('article', {
  display: 'grid',
  justifyItems: 'center',
  maxWidth: '400px',
});

const StyledIcon = styled('img', {
  width: '60px',
  mb: '25px',
});

const features = [
  {
    icon: accessIcon,
    title: 'Access your files, anywhere',
    description:
      'The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.',
  },
  {
    icon: securityIcon,
    title: 'Security you can trust',
    description:
      '2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files.',
  },
  {
    icon: collabIcon,
    title: 'Real-time collaboration',
    description:
      'Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.',
  },
  {
    icon: anyFileIcon,
    title: 'Store any type of file',
    description:
      "Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared.",
  },
];
