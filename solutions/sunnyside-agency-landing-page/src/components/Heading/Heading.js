import { StyledHeading } from './styles';

export const Heading = ({ variant = 'h1', ...otherProps }) => (
  <StyledHeading as={variant} variant={variant} {...otherProps} />
);
