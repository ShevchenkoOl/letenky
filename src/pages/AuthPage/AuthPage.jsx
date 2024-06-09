import Button from "../../shared/Button/Button";
import Layout from "../../components/Layout/Layout";
import useForm from "../../components/hooks/userForm";
import TextFields from "../../shared/TextFields/TextFields";
import initialState from '../../shared/TextFields/initialState';
import fields from "../../shared/TextFields/fields";

import style from "./authPage.module.scss";

const AuthPage = ({onSubmit}) => {
  const {state, handleChange, handleSubmit} = useForm({initialState, onSubmit});
  const {email, password} = state;

  return (
    <Layout>
      <form onSubmit={handleSubmit} className={style.form}>
      <TextFields value={email} onChange={handleChange} {...fields.email} />
      <TextFields value={password} onChange={handleChange} {...fields.password} />
        <Button type="submit" text="Log in" />
      </form>
    </Layout>
  );
};

export default AuthPage;
