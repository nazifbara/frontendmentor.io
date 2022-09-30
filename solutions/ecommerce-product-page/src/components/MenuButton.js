import { ReactComponent as MenuIcon } from '../images/icon-menu.svg';
import { ReactComponent as CloseIcon } from '../images/icon-close.svg';
import { StyledIconButton, Lightbox } from '.';
import { styled } from '../stitches.config';
import { NAV_ITEMS } from '../constants';

export const Root = ({ children }) => (
  <Lightbox.Root>
    <MenuButton />
  </Lightbox.Root>
);

const MenuButton = () => {
  const { close } = Lightbox.useLightboxContext();

  return (
    <>
      <Lightbox.Trigger
        as={StyledIconButton}
        css={{ '@md': { display: 'none' } }}
      >
        <MenuIcon />
      </Lightbox.Trigger>
      <Lightbox.Overlay />
      <Lightbox.Content as={StyledNavMenuWrapper}>
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

const StyledNavMenuWrapper = styled('div', {
  position: 'fixed',
  left: 0,
  top: 0,
  bottom: 0,
  width: '70%',
  p: '$4',
});

const StyledNavMenu = styled('nav', {
  display: 'flex',
  flexDirection: 'column',
});

const StyledNavMenuLink = styled('a', {
  textDecoration: 'none',
  color: '$text',
  fontWeight: '$bold',
  mb: '$4',
});
