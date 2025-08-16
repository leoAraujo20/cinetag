import { Link } from 'react-router';
import styles from './Header.module.css';
import logo from '@/assets/logo.png';
import HeaderLink from '../HeaderLink';

function Header() {
  return (
    <header className={styles.header}>
      <Link to="/">
        <img src={logo} alt="Cinetag Logo" />
      </Link>
      <nav>
        <HeaderLink to="/">
          Home
        </HeaderLink>
        <HeaderLink to="/favoritos">
          Favoritos
        </HeaderLink>
      </nav>
    </header>
  );
}

export default Header;
