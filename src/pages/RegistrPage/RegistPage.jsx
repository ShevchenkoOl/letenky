import { useDispatch, useSelector } from "react-redux";
import Button from "../../shared/Button/Button";
import Layout from "../../components/Layout/Layout";
import useForm from "../../components/hooks/userForm";
import initialState from "../../shared/TextFields/initialState";
import fields from "../../shared/TextFields/fields";
import TextFields from "../../shared/TextFields/TextFields";
import { register } from "../../redux/auth/auth-operations";
import { getError } from "../../redux/auth/auth-selector";
import { Notify } from "notiflix";
import { useNavigate } from "react-router-dom";

import style from "./registPage.module.scss";

const RegistrPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const error = useSelector(getError);

  const onRegister = async (data) => {
    const result = await dispatch(register(data));
    if (register.fulfilled.match(result)) {
      navigate('/'); // Перенаправляем на Home
    }
  };

  const { state, handleChange, handleSubmit } = useForm({
    initialState,
    onSubmit: onRegister,
  });
  const { name, email, password } = state;
  if (error) {
    Notify.failure(error);
  }

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
