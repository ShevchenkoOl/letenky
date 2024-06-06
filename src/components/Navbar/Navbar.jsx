import { NavLink } from 'react-router-dom';
import style from "./navbar.module.scss";

const Navbar = () => {
  return (
    <nav className={style.navbar}>
      <div className={style.navbarLeft}>
      <NavLink to="/" className={({ isActive }) => isActive ? `${style.navLink} ${style.activeNavLink}` : style.navLink}>Home</NavLink>

      </div>
      <div className={style.navbarRight}>
        <NavLink to="/signup" className={({ isActive }) => isActive ? `${style.navLink} ${style.activeNavLink}` : style.navLink}>Sign up</NavLink>
        <NavLink to="/login" className={({ isActive }) => isActive ? `${style.navLink} ${style.activeNavLink}` : style.navLink}>Log in</NavLink>
      </div>
    </nav>
  );
}

 export default Navbar;
