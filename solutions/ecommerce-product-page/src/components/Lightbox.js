import { createContext, useState, useContext } from 'react';
import { StyledIconButton, StyledBox } from '.';
import { styled, keyframes } from '../stitches.config';

const LightboxContext = createContext();

export const useLightboxContext = () => {
  const lightboxState = useContext(LightboxContext);
  if (!lightboxState) {
    throw new Error('useLightboxContext must be used within the Lightbox.Root');
  }
  return lightboxState;
};

export const Root = ({ children, delay = 300 }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [closing, setClosing] = useState(false);

  const open = () => {
    document.body.style.overflow = 'hidden';
    setIsOpen(true);
  };
  const close = () => {
    document.body.style.overflow = 'auto';
    setClosing(true);
    setTimeout(() => {
      setIsOpen(false);
      setClosing(false);
    }, delay);
  };

  return (
    <LightboxContext.Provider value={{ isOpen, open, close, closing }}>
      {children}
    </LightboxContext.Provider>
  );
};

export const Overlay = (props) => {
  const { isOpen, close } = useLightboxContext();
  return isOpen && <StyledOverlay onClick={close} {...props} />;
};

const fadeIn = keyframes({
  '0%': { bgC: 'rgba(0, 0, 0, 0)' },
  '100%': { bgC: 'rgba(0, 0, 0, 0.75)' },
});

const fadeOut = keyframes({
  '0%': { bgC: 'rgba(0, 0, 0, 0.75)' },
  '100%': { bgC: 'rgba(0, 0, 0, 0)' },
});

const StyledOverlay = styled('div', {
  position: 'fixed',
  bgC: 'rgba(0, 0, 0, 0.75)',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  zIndex: 2,
  animation: `${fadeIn} 300ms`,

  variants: {
    closing: {
      true: {
        animation: `${fadeOut} 300ms`,
      },
    },
  },
});

export const Trigger = ({ children, as, css = {}, ...otherProps }) => {
  const { open } = useLightboxContext();

  return (
    <StyledIconButton as={as} onClick={open} css={css} {...otherProps}>
      {children}
    </StyledIconButton>
  );
};

export const Close = ({ children, as, css = {} }) => {
  const { close, isOpen } = useLightboxContext();

  return (
    isOpen && (
      <StyledIconButton
        as={as}
        onClick={close}
        css={{
          color: 'white',
          transform: 'scale(1.5)',

          svg: {
            bgC: 'transparent',
          },
          '& path': {
            fill: 'white',
            transition: 'fill ease-out 0.3s',
          },

          '&:hover path': {
            fill: '$primary',
          },
          ...css,
        }}
      >
        {children}
      </StyledIconButton>
    )
  );
};

export const Content = ({ children, as, css, ...otherProps }) => {
  const { isOpen } = useLightboxContext();

  return (
    isOpen && (
      <StyledBox
        as={as}
        css={{ zIndex: 3, bgC: 'transparent', ...css }}
        {...otherProps}
      >
        {children}
      </StyledBox>
    )
  );
};
