import style from './button.module.scss';

const Button = ({text}) => {
    <button className={style.btn}>{text}</button>
};

export default Button;