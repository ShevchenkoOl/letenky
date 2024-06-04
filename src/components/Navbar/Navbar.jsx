
// import { Link } from 'react-router-dom';
import style from './navbar.module.scss';

const Navbar = () => {
  return (
    <nav className={style.navbar}>
      <h1>Flight Booking System</h1>
      <ul className={style.navbarLinks}>
      <li>Home</li>
        <li>Log In</li>
        <li>Sign In</li>
        {/* <li><Link to="/">Home</Link></li>
        <li><Link to="/login">Log In</Link></li>
        <li><Link to="/register">Sign In</Link></li> */}
      </ul>
    </nav>
  );
};

export default Navbar;
