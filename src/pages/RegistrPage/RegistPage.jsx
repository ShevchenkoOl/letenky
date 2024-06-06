import Button from '../../components/Button/Button';
import Layout from '../../components/Layout/Layout';
import style from './registPage.module.scss';


const RegistrPage = () => {
  return (
    <Layout>
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
      <Button text='Register'/>
    </form>
    </Layout>
  );
};

export default RegistrPage;