import { StyledColumnGrid } from './styles';

export const ColumnGrid = ({ children, as = 'div', css = {} }) => (
  <StyledColumnGrid as={as} css={css}>
    {children}
  </StyledColumnGrid>
);
