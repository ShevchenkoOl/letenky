import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { isUserLogin } from "../../../redux/auth/auth-selector";
import NavbarUser from "../NavbarUser/NavbarUser";

import style from "./navbarMenu.module.scss";

const NavbarMenu = () => {
  const isLogin = useSelector(isUserLogin);

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
            <NavbarUser />{" "}
            <NavLink
              to="/logout"
              className={({ isActive }) =>
                isActive
                  ? `${style.navLink} ${style.activeNavLink}`
                  : style.navLink
              }
            >
              Log out
            </NavLink>
          </>
        )}
      </div>
    </nav>
  );
};

export default NavbarMenu;
