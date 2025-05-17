import React from "react";
import styles from "./style.module.scss";
import { CustomInput } from "../custom-input-comp";
import { useFormik } from "formik";
import { FaTimes } from "react-icons/fa";
import { CustomButton } from "../button-comp";
import {
  useCreateCategoryMutation,
  useGetSingleCategoryQuery,
} from "@/app/redux/services/store";
import { GetFromLocalStorage } from "@/app/utils/helpers";
import { showErrorToast, showSuccessToast } from "@/app/utils/toast";

export const EditCategoryModal = ({ onClickCancel, id }) => {
  const business_email = GetFromLocalStorage("Email");
  const { data: getSingleCategory } = useGetSingleCategoryQuery({
    business_email,
    id,
  });
  const [createCategory, { isLoading }] = useCreateCategoryMutation();

  const onSubmit = (values) => {
    const payload = {
      name: values.name,
      color: values.color,
      business_email: business_email,
    };

    createCategory(payload)
      .unwrap()
      .then((result) => {
        showSuccessToast(result?.message);
        console.log(result);
        onClickClose();
      })
      .catch((error) => {
        console.log(error);
        showErrorToast(error?.data?.message[0]);
      });
  };

  const { values, handleChange, handleSubmit } = useFormik({
    initialValues: {
      name: "",
      color: "",
    },
    onSubmit,
    enableReinitialize: true,
  });

  console.log(getSingleCategory);

  return (
    <div className={styles.EditModal}>
      <div className={styles.content}>
        <div className={styles.Icon}>
          <FaTimes size={22} color="#0f1235" onClick={onClickCancel} />
        </div>
        <div className="text-[20px] md:text-[22px] font-[600]">
          Add New Category
        </div>
        <div className={styles.Wrap}>
          <div className={styles.Flex}>
            <CustomInput
              labelText="Name"
              placeholder={"Enter category name"}
              value={values.name}
              onChange={handleChange("name")}
            />
            <CustomInput
              labelText="Color"
              placeholder={"Enter yellow"}
              value={values.brand}
              onChange={handleChange("color")}
            />
          </div>
          <CustomButton
            className="mt-6"
            text={"Add Category"}
            onClick={handleSubmit}
            isLoading={isLoading}
          />
        </div>
      </div>
    </div>
  );
};
