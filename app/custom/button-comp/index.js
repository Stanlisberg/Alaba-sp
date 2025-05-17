import React, { ReactNode } from "react";
import { ImSpinner9 } from "react-icons/im";
import styles from "./style.module.scss";

export const CustomButton = ({
  onClick,
  text,
  isLoading,
  className,
  icon,
  btnContentStyle,
  ...rest
}) => {
  return (
    <div
      className={`${styles.Button} ${className}`}
      onClick={onClick}
      {...rest}
    >
      {isLoading ? (
        <div className={styles.Span}>
          <ImSpinner9 size={25} />
        </div>
      ) : (
        <div className={styles.Btn}>{text}</div>
      )}
    </div>
  );
};
