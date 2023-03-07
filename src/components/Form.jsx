import React from "react";

import styles from "./Form.module.css";

const Form = ({ onSubmit, onChange, value }) => {
  return (
    <form onSubmit={onSubmit} className={styles.container}>
      <div className={styles.inputContainer}>
        <input
          id="search"
          type="text"
          className={styles.input}
          placeholder="Enter username or email"
          onChange={onChange}
          required=""
          value={value}
        />
        <span className={styles.highlight}></span>
        <span className={styles.bar}></span>
      </div>
      <button type="submit" className={styles.btn}>Search</button>
    </form>
  );
};

export default Form;
