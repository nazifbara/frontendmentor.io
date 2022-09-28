export const Header = () => (
  <header>
    <span>logo</span>
    <nav>
      {NAV_ITEMS.map((item, idx) => (
        <a key={`nav-item-${idx}`} href="/#">
          {item}
        </a>
      ))}
    </nav>
    <button>cart button</button>
    <button>profile button</button>
  </header>
);

const NAV_ITEMS = ['Collections', 'Men', 'Wowen', 'About', 'Contact'];
