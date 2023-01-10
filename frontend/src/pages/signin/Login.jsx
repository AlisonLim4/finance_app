import styles from "./Login.module.css";
import React from "react";
import { Link } from "react-router-dom";
import bitcoin_img from "../../assets/bitcoin.png";
import {
  Input,
  InputPassword,
} from "../../components/form/form_container/input/Input";
import ButtonForm from "../../components/button/ButtonForm";
import FormContainer from "../../components/form/form_container/FormContainer";
const Login = () => {
  return (
    <section className={styles.login}>
      <div className={styles.bitcoin_img_container}>
        <img src={bitcoin_img} alt="bitcoin" width={320} />
      </div>
      <FormContainer title="Sign In">
        <form className={styles.form} action="">
          <Input text="Email" />
          <InputPassword text="Password" />
          <ButtonForm text="Sign In" />
        </form>

        <p className={styles.new_user}>
          I'm new User.{" "}
          <Link to="/register" className={styles.signup}>
            Sign up
          </Link>
        </p>
      </FormContainer>
    </section>
  );
};

export default Login;
