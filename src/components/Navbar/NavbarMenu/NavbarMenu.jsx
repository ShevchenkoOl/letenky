import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { isUserLogin } from "../../../redux/auth/auth-selector";
import NavbarUser from "../NavbarUser/NavbarUser";
import { logout } from "../../../redux/auth/auth-operations";
import style from "./navbarMenu.module.scss";


const NavbarMenu = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLogin = useSelector(isUserLogin);

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  };

  return (
    <nav className={style.navbar}>
      <div className={style.navbarLeft}>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? `${style.navLink} ${style.activeNavLink}` : style.navLink
          }
        >
          Home
        </NavLink>
      </div>
      <div className={style.navbarRight}>
        {!isLogin && (
          <>
            <NavLink
              to="/signup"
              className={({ isActive }) =>
                isActive
                  ? `${style.navLink} ${style.activeNavLink}`
                  : style.navLink
              }
            >
              Sign up
            </NavLink>
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive
                  ? `${style.navLink} ${style.activeNavLink}`
                  : style.navLink
              }
            >
              Log in
            </NavLink>
          </>
        )}
        {isLogin && (
          <>
          <NavbarUser />
            <button
              onClick={handleLogout}
              className={style.navLink}
            >
              Log out
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default NavbarMenu;
