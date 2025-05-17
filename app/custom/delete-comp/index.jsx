import React from "react";
import styles from "./style.module.scss";
import { ImSpinner9 } from "react-icons/im";
import { FaTimes } from "react-icons/fa";

export const DeleteModal = ({
  deleteTitle,
  deleteItem,
  onClickDelete,
  onClickClose,
  isLoading,
}) => {
  return (
    <div className={styles.DeleteModal}>
      <div className={styles.content}>
        <div className={styles.Icon}>
          <FaTimes size={22} color="#0f1235" onClick={onClickClose} />
        </div>
        <div className={styles.textContent}>
          <p className={styles.title}>Delete {deleteTitle}</p>
          <p className={styles.subTitle}>
            Are you sure you want to delete this <span>{deleteItem}</span>?
          </p>
        </div>
        <div className={styles.buttonFlex}>
          <button className={styles.closeButton} onClick={onClickClose}>
            Close
          </button>
          <button className={styles.button} onClick={onClickDelete}>
            {isLoading ? "Deleting..." : "Delete"}
          </button>
        </div>
      </div>
    </div>
  );
};
