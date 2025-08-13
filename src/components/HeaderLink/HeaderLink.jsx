import { Link } from 'react-router';
import styles from './HeaderLink.module.css';

function HeaderLink({ to, children }) {
  return (
    <Link to={to} className={styles.link}>
      {children}
    </Link>
  );
}

export default HeaderLink;