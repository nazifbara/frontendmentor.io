import { NAV_ITEMS, SOCIAL_MEDIAS } from '../../data';
import { Logo } from '..';

export const Footer = () => (
  <footer>
    <div>
      <Logo />
      <nav>
        {NAV_ITEMS.slice(0, 3).map((item, idx) => (
          <a href="/#" key={`nav-item-${idx}`}>
            {item}
          </a>
        ))}
      </nav>

      <div>
        {SOCIAL_MEDIAS.map((social, idx) => (
          <a key={`social-${idx}`} href="/#">
            {social.icon} <span>{social.name}</span>
          </a>
        ))}
      </div>
    </div>
  </footer>
);
