import { ReactComponent as CartIcon } from '../images/icon-cart.svg';
import { StyledIconButton } from '.';

export const CartButton = () => {
  return (
    <StyledIconButton>
      <CartIcon />
    </StyledIconButton>
  );
};
