import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/auth-operations";
import { useState } from "react";
import TextFields from "../../shared/TextFields/TextFields";
import Button from "../../shared/Button/Button";
import Layout from "../../components/Layout/Layout";

import style from "./authPage.module.scss";
import { useNavigate } from "react-router-dom";

const AuthPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "email") setEmail(value);
    if (name === "password") setPassword(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await dispatch(login({ email, password }));
    if (login.fulfilled.match(result)) {
      navigate("/");
    }
  };

  return (
    <Layout>
      <form onSubmit={handleSubmit} className={style.form}>
        <TextFields
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          placeholder="Email"
        />
        <TextFields
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          placeholder="Password"
        />
        <Button type="submit" text="Log in" />
      </form>
    </Layout>
  );
};

export default AuthPage;
