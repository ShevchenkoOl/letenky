import style from './footer.module.scss'; 
const Footer = () => {
  return (
    <footer className={style.footer}>
      <p className={style.text}>Flight Finder &copy; 2024</p>
      <p className={style.creator}>Created by Oleksii Shevchenko</p>
    </footer>
  );
};

export default Footer;

  