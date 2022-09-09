import { useState } from 'react';
import { Section, SectionHeader, Box, Typography, Button } from '.';

import { ReactComponent as ArrowIcon } from '../images/icon-arrow.svg';

export const FAQSection = () => {
  const [openedIdx, setOpenedIdx] = useState(INITIAL_STATE);

  const isOpen = (i) => openedIdx[i];

  const toggle = (i) => (e) => {
    setOpenedIdx((s) => ({ ...s, [i]: !s[i] }));
  };

  return (
    <Section>
      <SectionHeader
        heading={SECTION_HEADER.heading}
        body={SECTION_HEADER.body}
      />

      <Box
        css={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
      >
        <Box css={{ width: '100%', maxWidth: '500px', mb: '40px' }}>
          {QUESTIONS.map((q, i) => (
            <Box as="article" key={`question-${i}`}>
              <Box
                as="button"
                onClick={toggle(i)}
                css={{
                  display: 'flex',
                  width: '100%',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  p: 0,
                  pb: isOpen(i) ? '10px' : '20px',
                  mb: '10px',
                  bgC: 'transparent',
                  border: 'none',
                  borderBottom: isOpen(i)
                    ? 0
                    : '1px solid $grayishLightContrast',
                  cursor: 'pointer',

                  '&:focus': {
                    outline: 'none',
                  },

                  svg: {
                    transform: isOpen(i) ? 'rotate(180deg)' : 'none',
                    path: {
                      stroke: isOpen(i) ? '$primary' : '$secondary',
                    },
                  },
                }}
              >
                <Typography
                  as="span"
                  css={{ color: '$lightContrast', fontWeight: '$medium' }}
                >
                  {q.question}
                </Typography>
                <ArrowIcon />
              </Box>
              {isOpen(i) && <Typography>{q.answer}</Typography>}
            </Box>
          ))}
        </Box>
        <Button as="a" variant="secondary" href="/#">
          More Info
        </Button>
      </Box>
    </Section>
  );
};

const SECTION_HEADER = {
  heading: 'Frequently Asked Questions',
  body: 'Here are some of our FAQs. If you have any other questions you’d like answered please feel free to email us.',
};

const QUESTIONS = [
  {
    question: 'What is Bookmark?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.',
  },
  {
    question: 'How can I request a new browser?',
    answer:
      'Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.',
  },
  {
    question: 'Is there a mobile app?',
    answer:
      'Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed sollicitudin ex et ultricies bibendum.',
  },
  {
    question: 'What about other Chromium browsers?',
    answer:
      'Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam vitae neque eget nisl gravida pellentesque non ut velit.',
  },
];

const INITIAL_STATE = QUESTIONS.reduce(
  (prev, q, i) => ({ ...prev, [i]: false }),
  {}
);
