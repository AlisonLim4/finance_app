import styles from "./FormContainer.module.css";
import React from "react";

const FormContainer = ({ title, children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.title_container}>
        <h1>{title}</h1>
      </div>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default FormContainer;
