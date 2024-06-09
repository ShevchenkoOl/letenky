import { useDispatch } from "react-redux";
import Button from "../../shared/Button/Button";
import Layout from "../../components/Layout/Layout";
import useForm from "../../components/hooks/userForm";
import initialState from "../../shared/TextFields/initialState";
import fields from "../../shared/TextFields/fields";
import TextFields from "../../shared/TextFields/TextFields";
import { register } from "../../redux/auth/auth-operations";

import style from "./registPage.module.scss";

const RegistrPage = () => {
  const dispatch = useDispatch();

  const { state, handleChange, handleSubmit } = useForm({
    initialState,
    onSubmit: (data) => dispatch(register(data)), // Функция onRegister интегрирована внутри onSubmit
  });
  const { name, email, password } = state;

  return (
    <Layout>
      <form onSubmit={handleSubmit} className={style.form}>
        <TextFields value={name} onChange={handleChange} {...fields.name} />
        <TextFields value={email} onChange={handleChange} {...fields.email} />
        <TextFields
          value={password}
          onChange={handleChange}
          {...fields.password}
        />
        <Button type="submit" text="Register" />
      </form>
    </Layout>
  );
};

export default RegistrPage;
