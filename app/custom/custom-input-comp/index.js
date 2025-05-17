import React, { useState } from "react";
import styles from "./style.module.scss";

export const CustomInput = ({
  placeholder,
  labelText,
  errorMessage,
  onChange,
  className,
  showAsterisk = true,
  ...rest
}) => {
  return (
    <div className={styles.InputComp}>
      {labelText && <label className={styles.label}>{labelText}</label>}
      <input
        className={`${styles.input} ${className}`}
        placeholder={placeholder}
        onChange={onChange}
        {...rest}
      />
      {errorMessage && <p className={styles.error}>{errorMessage}</p>}
    </div>
  );
};
