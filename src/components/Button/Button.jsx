import style from "./button.module.scss";

const Button = ({ text }) => {
  return <button className={style.btn}>{text}</button>;
};

export default Button;
