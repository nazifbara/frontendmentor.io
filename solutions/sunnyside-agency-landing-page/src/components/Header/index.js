import { Logo } from '..';

import { NAV_ITEMS } from '../../data';

export const Header = () => (
  <header>
    <Logo />

    <nav>
      {NAV_ITEMS.map((item, idx) => (
        <a href="/#" key={`nav-item-${idx}`}>
          {item}
        </a>
      ))}
    </nav>
  </header>
);
