import { ReactComponent as MenuIcon } from '../images/icon-menu.svg';
import { ReactComponent as CloseIcon } from '../images/icon-close.svg';
import { StyledIconButton, Lightbox } from '.';
import { styled, keyframes } from '../stitches.config';
import { NAV_ITEMS } from '../constants';

export const Root = ({ children }) => (
  <Lightbox.Root>
    <MenuButton />
  </Lightbox.Root>
);

const MenuButton = () => {
  const { close, closing } = Lightbox.useLightboxContext();

  return (
    <>
      <Lightbox.Trigger
        as={StyledIconButton}
        css={{ '@md': { display: 'none' } }}
      >
        <MenuIcon />
      </Lightbox.Trigger>
      <Lightbox.Overlay closing={closing} />
      <Lightbox.Content as={StyledNavMenuWrapper} closing={closing}>
        <Lightbox.Close as={StyledIconButton} css={{ px: 0, mb: '$10' }}>
          <CloseIcon />
        </Lightbox.Close>
        <StyledNavMenu>
          {NAV_ITEMS.map((item, idx) => (
            <StyledNavMenuLink
              key={`nav-item-${idx}`}
              href="/#"
              onClick={close}
            >
              {item}
            </StyledNavMenuLink>
          ))}
        </StyledNavMenu>
      </Lightbox.Content>
    </>
  );
};

const showNavMenu = keyframes({
  '0%': { left: '-70%' },
  '100%': { left: 0 },
});

const hideNavMenu = keyframes({
  '0%': { left: 0 },
  '100%': { left: '-70%' },
});

const StyledNavMenuWrapper = styled('div', {
  position: 'fixed',
  left: 0,
  top: 0,
  bottom: 0,
  width: '70%',
  p: '$4',
  animation: `${showNavMenu} 300ms`,
  animationTimingFunction: 'ease-out',

  variants: {
    closing: {
      true: {
        animation: `${hideNavMenu} 300ms`,
      },
    },
  },
});

const StyledNavMenu = styled('nav', {
  display: 'flex',
  flexDirection: 'column',
});

const StyledNavMenuLink = styled('a', {
  textDecoration: 'none',
  color: '$text',
  fontWeight: '$bold',
  mb: '$5',
});
