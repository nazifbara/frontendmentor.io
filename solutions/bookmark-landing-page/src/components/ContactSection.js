import { useState } from 'react';

import { Section, Typography, Button, Box } from '.';
import { styled } from '../stitches.config';

import { ReactComponent as ErrorIcon } from '../images/icon-error.svg';

export const ContactSection = () => {
  const [error, setError] = useState(null);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(e.target[0].value)) {
      setError("Whoops, make sure it's an email");
      return;
    }
    setError(null);
  };

  return (
    <Section
      id="contact"
      css={{
        display: 'flex',
        justifyContent: 'center',
        bgC: '$secondary',
        mt: '40px',
        py: '50px',
        '@lg': {
          py: '80px',
          px: 0,
          maxWidth: '1440px',
        },
      }}
    >
      <Box css={{ display: 'grid', rowGap: '15px', maxWidth: '450px' }}>
        <Typography
          as="span"
          textAlign="center"
          onDark
          css={{
            fontWeight: '$regular',
            textTransform: 'uppercase',
            display: 'block',
          }}
        >
          35,000+ already joined
        </Typography>
        <Typography onDark as="h2" textAlign="center">
          Stay up-to-date with what we’re doing
        </Typography>

        <SyledForm onSubmit={handleFormSubmit}>
          <StyledErrorField error={Boolean(error)}>
            <StyledInputWrapper>
              <StyledInput placeholder="Enter your email address" />
              <ErrorIcon />
            </StyledInputWrapper>
            <Typography
              as="span"
              onDark
              css={{ fontSize: '13px', fontStyle: 'italic', pl: '3px' }}
            >
              {error}
            </Typography>
          </StyledErrorField>
          <Button variant="primary" onDark textTransform="none">
            Contact Us
          </Button>
        </SyledForm>
      </Box>
    </Section>
  );
};

const SyledForm = styled('form', {
  display: 'grid',
  alignItems: 'start',
  rowGap: '10px',

  '@md': {
    gridTemplateColumns: '5fr 2fr',
    columnGap: '15px',
  },
});

const StyledInput = styled('input', {
  fontSize: '$nav',
  color: '$lightContrast',
  borderRadius: '5px',
  border: 'none',
  py: '8px',
  pl: '15px',
  pr: '40px',
  width: '100%',

  '@md': {
    py: '10px',
    pl: '20px',
    pr: '35px',
  },
});

const StyledInputWrapper = styled('div', {
  position: 'relative',
});

const StyledErrorField = styled('div', {
  bgC: '$darkContrast',
  border: '3px solid $darkContrast',
  borderRadius: '5px',

  '& span': {
    display: 'none',
  },

  '& svg': {
    display: 'none',
  },

  variants: {
    error: {
      true: {
        bgC: '$primary',
        border: '3px solid $primary',

        '& svg': {
          display: 'initial',
          position: 'absolute',
          right: '10px',
          top: '50%',
          transform: 'translateY(-50%)',
        },

        '& span': {
          display: 'inline',
        },
      },
    },
  },
});
