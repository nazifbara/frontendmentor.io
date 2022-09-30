import { ReactComponent as MenuIcon } from '../images/icon-menu.svg';
import { StyledIconButton, Lightbox } from '.';
// import { styled } from '../stitches.config';
// import { NAV_ITEMS } from '../constants';

export const MenuButton = () => (
  <Lightbox.Root>
    <Lightbox.Trigger
      as={StyledIconButton}
      css={{ '@md': { display: 'none' } }}
    >
      <MenuIcon />
    </Lightbox.Trigger>
    <Lightbox.Overlay />
    {/* <nav>
      {NAV_ITEMS.map((item, idx) => (
        <a key={`nav-item-${idx}`} href="/#">
          {item}
        </a>
      ))}
    </nav> */}
  </Lightbox.Root>
);
