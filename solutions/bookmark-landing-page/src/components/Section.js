import { Container } from '.';

export const Section = ({ children }) => (
  <Container
    as="section"
    css={{
      py: '20px',
    }}
  >
    {children}
  </Container>
);
