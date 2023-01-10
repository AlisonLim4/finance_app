import styles from "./Input.module.css";
import React from "react";
import { Link } from "react-router-dom";

export const Input = ({
  type,
  text,
  name,
  placeholder,
  handleOnChange,
  value,
}) => {
  return (
    <div className={styles.input}>
      <label htmlFor={name}>{text}</label>
      <input
        className={styles.formControl}
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        onChange={handleOnChange}
        value={value}
      />
    </div>
  );
};

export const InputPassword = ({
  text,
  name,
  placeholder,
  handleOnChange,
  value,
}) => {
  return (
    <div className={styles.input}>
      <label htmlFor={name}>{text}</label>
      <input
        className={styles.formControl}
        type="password"
        name={name}
        id={name}
        placeholder={placeholder}
        onChange={handleOnChange}
        value={value}
      />
      <Link className={styles.forgot_password}>Forgot Password</Link>
    </div>
  );
};
