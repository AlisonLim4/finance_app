import styles from "./Register.module.css";
import React from "react";
import { Link } from "react-router-dom";
import bitcoin_img from "../../assets/bitcoin.png";
import {
  Input,
  InputPassword,
} from "../../components/form/form_container/input/Input";
import ButtonForm from "../../components/button/ButtonForm";
import FormContainer from "../../components/form/form_container/FormContainer";
const Register = () => {
  return (
    <section className={styles.login}>
      <div className={styles.bitcoin_img_container}>
        <img src={bitcoin_img} alt="bitcoin" width={320} />
      </div>
      <FormContainer title="Create Account">
        <form className={styles.form} action="">
          <Input text="Name" />
          <Input text="Phone Number" />
          <Input text="Email" />
          <Input text="Password" type="password" />
          <ButtonForm text="Sign Up" />
        </form>

        <p className={styles.new_user}>
          I'm already member.{" "}
          <Link to="/login" className={styles.signup}>
            Sign In
          </Link>
        </p>
      </FormContainer>
    </section>
  );
};

export default Register;
