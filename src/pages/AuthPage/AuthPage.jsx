// import Button from "../../shared/Button/Button";
// import Layout from "../../components/Layout/Layout";
// import useForm from "../../components/hooks/userForm";
// import TextFields from "../../shared/TextFields/TextFields";
// import initialState from '../../shared/TextFields/initialState';
// import fields from "../../shared/TextFields/fields";

// import style from "./authPage.module.scss";

// const AuthPage = () => {
//   const {state, handleChange, handleSubmit} = useForm({initialState, onSubmit});
//   const {email, password} = state;

//   return (
//     <Layout>
//       <form onSubmit={handleSubmit} className={style.form}>
//       <TextFields value={email} onChange={handleChange} {...fields.email} />
//       <TextFields value={password} onChange={handleChange} {...fields.password} />
//         <Button type="submit" text="Log in" />
//       </form>
//     </Layout>
//   );
// };

// export default AuthPage;

// import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/auth-operations";
import { useState } from "react";
import TextFields from "../../shared/TextFields/TextFields";
import Button from "../../shared/Button/Button";
import Layout from "../../components/Layout/Layout";

import style from "./authPage.module.scss";

const AuthPage = () => {
  const dispatch = useDispatch();
  // const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "email") setEmail(value);
    if (name === "password") setPassword(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login({ email, password }));
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
