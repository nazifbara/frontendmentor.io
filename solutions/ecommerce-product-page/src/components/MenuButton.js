import { ReactComponent as MenuIcon } from '../images/icon-menu.svg';
import { StyledIconButton } from '.';
// import { styled } from '../stitches.config';
// import { NAV_ITEMS } from '../constants';

export const MenuButton = () => (
  <>
    <StyledIconButton css={{ '@md': { display: 'none' } }}>
      <MenuIcon />
    </StyledIconButton>
    {/* <nav>
      {NAV_ITEMS.map((item, idx) => (
        <a key={`nav-item-${idx}`} href="/#">
          {item}
        </a>
      ))}
    </nav> */}
  </>
);
