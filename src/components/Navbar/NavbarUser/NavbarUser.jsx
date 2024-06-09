// import { useSelector } from 'react-redux';
import { useSelector } from 'react-redux';
import { getUser } from '../../../redux/auth/auth-selector';

import style from "./navbarUser.module.scss";

const NavbarUser =  () => {
    const {name} = useSelector(getUser);
return (
    <div className={style.navbarRight}>
      {name}
      </div>
)
};


export default NavbarUser;
