import Button from "../../components/Button/Button";
import Layout from "../../components/Layout/Layout";
import style from "./authPage.module.scss";

const AuthPage = () => {
  return (
    <Layout>
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
        <Button type="submit" text="Log in" />
      </form>
    </Layout>
  );
};

export default AuthPage;
