import { NAV_ITEMS, SOCIAL_MEDIAS } from '../../data';
import { footerTheme } from '../../stitches.config';
import { NavLink } from '..';
import { Logo } from '..';
import { StyledContainer } from './styles';

export const Footer = () => (
  <StyledContainer as="footer" className={footerTheme}>
    <Logo />
    <nav>
      {NAV_ITEMS.slice(0, 3).map((item, idx) => (
        <NavLink href="/#" key={`nav-item-${idx}`}>
          {item}
        </NavLink>
      ))}
    </nav>

    <div>
      {SOCIAL_MEDIAS.map((social, idx) => (
        <a key={`social-${idx}`} href="/#">
          {social.icon} <span>{social.name}</span>
        </a>
      ))}
    </div>
  </StyledContainer>
);
