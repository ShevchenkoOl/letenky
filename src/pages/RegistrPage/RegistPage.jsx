import style from './registPage.module.scss';

// import { useDispatch } from 'react-redux';
// import { register } from 'redux/auth/operations';

const RegistrPage = () => {
//   const dispatch = useDispatch();

//   const handleSubmit = e => {
//     e.preventDefault();
//     const form = e.currentTarget;
//     dispatch(
//       register({
//         name: form.elements.name.value,
//         email: form.elements.email.value,
//         password: form.elements.password.value,
//       })
//     );
//     form.reset();
//   };

  return (
    <form className={style.form} autoComplete="off">
      <label className={style.label}>
        Username
        <input
          className={style.label}
          type="text"
          name="name"
          placeholder="Enter user name"
        />
      </label>
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
        Register
      </button>
    </form>
  );
};

export default RegistrPage;