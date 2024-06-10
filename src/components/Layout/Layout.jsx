
import NavbarMenu from "../Navbar/NavbarMenu/NavbarMenu";

const Layout = ({ children }) => {
  return (
    <div>
      <NavbarMenu />
      {children}
    </div>
  );
};

export default Layout;
