// import { useDispatch } from 'react-redux';
// import { logIn } from 'redux/auth/operations';
import style from './authPage.module.scss';

const AuthPage = () => {
//   const dispatch = useDispatch();

//   const handleSubmit = e => {
//     e.preventDefault();
//     const form = e.currentTarget;
//     dispatch(
//       logIn({
//         email: form.elements.email.value,
//         password: form.elements.password.value,
//       })
//     );
//     form.reset();
//   };

  return (
    <form className={style.form} autoComplete="off">
      <label className={style.label}>
        Email
        <input
          className={style.label}
          type="email"
          name="email"
          placeholder="Enter email"
        />
      </label>
      <label className={style.label}>
        Password
        <input
          className={style.label}
          type="password"
          name="password"
          placeholder="Enter password"
        />
      </label>

      <button className={style.formBtn} type="submit">
        Log In
      </button>
      <div></div>
    </form>
  );
};

export default AuthPage;