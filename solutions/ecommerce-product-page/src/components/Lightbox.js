import { createContext, useState, useContext } from 'react';
import { StyledIconButton, StyledBox } from '.';
import { styled } from '../stitches.config';

const LightboxContext = createContext();

export const useLightboxContext = () => {
  const lightboxState = useContext(LightboxContext);
  if (!lightboxState) {
    throw new Error('useLightboxContext must be used within the Lightbox.Root');
  }
  return lightboxState;
};

export const Root = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const open = () => {
    document.body.style.overflow = 'hidden';
    setIsOpen(true);
  };
  const close = () => {
    document.body.style.overflow = 'auto';
    setIsOpen(false);
  };

  return (
    <LightboxContext.Provider value={{ isOpen, open, close }}>
      {children}
    </LightboxContext.Provider>
  );
};

export const Overlay = () => {
  const { isOpen, close } = useLightboxContext();
  return isOpen && <StyledOverlay onClick={close} />;
};

export const StyledOverlay = styled('div', {
  position: 'fixed',
  bgC: 'rgba(0, 0, 0, 0.75)',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
});

export const Trigger = ({ children, as, css = {} }) => {
  const { open } = useLightboxContext();

  return (
    <StyledIconButton as={as} onClick={open} css={css}>
      {children}
    </StyledIconButton>
  );
};

export const Close = ({ children, as, css = {} }) => {
  const { close, isOpen } = useLightboxContext();

  return (
    isOpen && (
      <StyledIconButton as={as} onClick={close} css={css}>
        {children}
      </StyledIconButton>
    )
  );
};

export const Content = ({ children, as }) => {
  const { isOpen } = useLightboxContext();

  return isOpen && <StyledBox as={as}>{children}</StyledBox>;
};
