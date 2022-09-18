import { StyledHeading } from './styles';

export const Heading = ({ as, variant = 'h1', ...otherProps }) => (
  <StyledHeading as={as ?? variant} variant={variant} {...otherProps} />
);
