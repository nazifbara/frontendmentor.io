import { TESTIMONIALS } from '../../data';
import { Heading, ColumnGrid, Text } from '..';
import { StyledTestimonie, StyledPhoto, StyledContainer } from './styles';

export const Testimonials = () => (
  <StyledContainer>
    <Heading
      as="h2"
      variant="h3"
      color="gray"
      textTransform="uppercase"
      textAlign="center"
      css={{ mb: '80px' }}
    >
      Client testimonials
    </Heading>

    <ColumnGrid
      css={{
        rowGap: '50px',
        columnGap: '10px',
        alignItems: 'stretch',
        justifyItems: 'center',
      }}
    >
      {TESTIMONIALS.map((t, idx) => (
        <StyledTestimonie key={`testimonie-${idx}`}>
          <StyledPhoto src={t.photo} alt={t.name} />
          <Text variant="veryGray" textAlign="center">
            {t.body}
          </Text>
          <header>
            <Heading variant="h3" textAlign="center">
              {t.name}
            </Heading>
            <Text
              as="span"
              variant="gray"
              textAlign="center"
              css={{ fontSize: '15px' }}
            >
              {t.postion}
            </Text>
          </header>
        </StyledTestimonie>
      ))}
    </ColumnGrid>
  </StyledContainer>
);
