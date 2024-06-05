import { Link } from 'react-router-dom';
import style from "./navbar.module.scss";

const Navbar = () => {
  return (
    <nav className={style.navbar}>
      <div className={style.navbarLeft}>
        <Link to="/" className={style.navLink}>Home</Link>
      </div>
      <div className={style.navbarRight}>
        <Link to="/signup" className={style.navLink}>Sign up</Link>
        <Link to="/login" className={style.navLink}>Log in</Link>
      </div>
    </nav>
  );
}

export default Navbar;
