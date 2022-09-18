import { SERVICES } from '../../data';
import { photographyTheme, graphicDesignTheme } from '../../stitches.config';
import { ColumnGrid, Heading, Text } from '..';
import {
  StyledTextImage,
  StyledLink,
  StyledLinkWrapper,
  StyledBgImage,
} from './styles';

export const Services = () => (
  <section>
    {SERVICES.slice(0, 2).map((s, idx) => (
      <StyledTextImage
        as="article"
        imagePosition={idx === 0 ? 'right' : 'left'}
        key={`featured-service-${idx}`}
      >
        <div>
          <Heading
            variant="h2"
            textAlign={{ '@initial': 'center', '@md': 'left' }}
          >
            {s.heading}
          </Heading>
          <Text
            variant="gray"
            textAlign={{ '@initial': 'center', '@md': 'left' }}
          >
            {s.description}
          </Text>
          <StyledLinkWrapper>
            <StyledLink href="/#" variant={idx === 0 ? 'primary' : 'secondary'}>
              Learn more
            </StyledLink>
          </StyledLinkWrapper>
        </div>

        <figure>
          <img src={s.desktopImage} alt="" />
        </figure>
      </StyledTextImage>
    ))}

    <ColumnGrid>
      {SERVICES.slice(2).map((s, idx) => (
        <StyledBgImage
          key={`service-${idx}`}
          className={idx === 0 ? graphicDesignTheme : photographyTheme}
          css={{ backgroundImage: `url(${s.desktopImage})` }}
        >
          <div>
            <Heading variant="h2" textAlign="center">
              {s.heading}
            </Heading>
            <Text textAlign="center">{s.description}</Text>
          </div>
        </StyledBgImage>
      ))}
    </ColumnGrid>
  </section>
);
