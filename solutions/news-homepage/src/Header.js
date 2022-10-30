import { ReactComponent as Logo } from './images/logo.svg';

const NAV_ITEMS = ['Home', 'New', 'Popular', 'Trending', 'Categories'];

export const Header = () => {
  return (
    <header>
      <Logo />
      <nav>
        <ul>
          {NAV_ITEMS.map((item, idx) => (
            <li key={`nav-item-${idx}`}>
              <a href="/#">{item}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
