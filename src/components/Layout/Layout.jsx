
import Footer from "../Footer/Footer";
import NavbarMenu from "../Navbar/NavbarMenu/NavbarMenu";

const Layout = ({ children }) => {
  return (
    <div>
      <NavbarMenu />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
