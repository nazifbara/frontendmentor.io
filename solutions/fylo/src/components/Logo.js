import logo from '../images/logo.svg';
import { styled } from '../stitches.config';

const StyledImg = styled('img', {
  width: '90px',

  '@sm': {
    width: '130px',
  },
  '@md': {
    width: '150px',
  },
});

export function Logo({ css }) {
  return <StyledImg alt="logo" src={logo} css={css} />;
}
