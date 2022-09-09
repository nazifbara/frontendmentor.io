import { Container } from '.';

export const Section = ({ children, css }) => (
  <Container
    as="section"
    css={{
      py: '20px',
      ...css,
    }}
  >
    {children}
  </Container>
);
