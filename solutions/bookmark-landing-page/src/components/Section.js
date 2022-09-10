import { Container } from '.';

export const Section = ({ children, css, ...otherProps }) => (
  <Container
    as="section"
    css={{
      py: '20px',
      ...css,
    }}
    {...otherProps}
  >
    {children}
  </Container>
);
