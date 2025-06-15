import React from "react";
import styles from "./style.module.scss";
import { CustomInput } from "../custom-input-comp";
import { useFormik } from "formik";
import { FaTimes } from "react-icons/fa";
import { CustomButton } from "../button-comp";
import { CustomSelect } from "../select-comp";
import { useMemo } from "react";
import {
  useCreateProductMutation,
  useGetCategoriesQuery,
} from "@/app/redux/services/store";
import { GetFromLocalStorage } from "@/app/utils/helpers";
import { showErrorToast, showSuccessToast } from "@/app/utils/toast";
import { PricingTypeData } from "./data";

export const AddProductModal = ({ onClickClose, refetch }) => {
  const business_email = GetFromLocalStorage("Email");
  const { data: getCategories } = useGetCategoriesQuery(business_email);
  const [createProduct, { isLoading }] = useCreateProductMutation();

  const categoryData = useMemo(() => {
    return (
      getCategories?.data?.map((item) => {
        return {
          label: item.name,
          value: item.name,
        };
      }) ?? []
    );
  }, [getCategories?.data]);

  // console.log(getCategories?.data);

  const onSubmit = (values) => {
    const payload = {
      name: values.name,
      brand: values.brand,
      cost_price: values.costPrice,
      selling_price: values.sellingPrice,
      stock: values.stock,
      weight: values.weight,
      pricing_type: values.pricingType,
      category_name: values.category,
      business_email: business_email,
    };

    createProduct(payload)
      .unwrap()
      .then((result) => {
        showSuccessToast(result?.message);
        refetch();
        console.log(result);
        onClickClose();
      })
      .catch((error) => {
        console.log(error);
        showErrorToast(error?.data?.message[0]);
      });
  };

  const { values, handleChange, setFieldValue, handleSubmit } = useFormik({
    initialValues: {
      name: "",
      brand: "",
      sellingPrice: "",
      costPrice: "",
      stock: "",
      weight: "",
      pricingType: "",
      category: "",
    },
    onSubmit,
    enableReinitialize: true,
  });

  return (
    <div className={styles.AddModal}>
      <div className={styles.content}>
        <div className={styles.Icon}>
          <FaTimes size={22} color="#0f1235" onClick={onClickClose} />
        </div>
        <div className="text-[22px] font-[600]">Add New Product</div>
        <div className={styles.Wrap}>
          <div className={styles.Flex}>
            <CustomInput
              labelText="Name"
              placeholder={"Enter product name"}
              value={values.name}
              onChange={handleChange("name")}
            />
            <CustomInput
              labelText="Brand"
              placeholder={"Enter brand name"}
              value={values.brand}
              onChange={handleChange("brand")}
            />
          </div>
          <div className={styles.Flex}>
            <CustomInput
              labelText="Selling Price"
              type="number"
              placeholder={"Enter selling price"}
              value={values.sellingPrice}
              onChange={handleChange("sellingPrice")}
            />
            <CustomInput
              labelText="Cost Price"
              type="number"
              placeholder={"Enter cost price"}
              value={values.costPrice}
              onChange={handleChange("costPrice")}
            />
          </div>
          <div className={styles.Flex}>
            <CustomInput
              labelText="Stock"
              type="number"
              placeholder={"Enter stock"}
              value={values.stock}
              onChange={handleChange("stock")}
            />
            <CustomInput
              labelText="Weight"
              type="number"
              placeholder={"Enter cost price"}
              value={values.weight}
              onChange={handleChange("weight")}
            />
          </div>
          <div className={styles.Flex}>
            <CustomSelect
              labelText="Select Category"
              className=""
              options={categoryData}
              size="large"
              onChange={(seletedCategory) => {
                setFieldValue("category", seletedCategory);
                console.log(seletedCategory);
              }}
              value={
                categoryData.find((item) => item.label === values.category)
                  ?.label
              }
            />
            <CustomSelect
              labelText="Pricing Type"
              className="w-full"
              options={PricingTypeData}
              size="large"
              onChange={(seletedPricingType) => {
                setFieldValue("pricingType", seletedPricingType);
                console.log(seletedPricingType);
              }}
              value={
                PricingTypeData.find(
                  (item) => item.label === values.pricingType
                )?.label
              }
            />
          </div>
          <CustomButton
            className="mt-4"
            text={"Add Product"}
            onClick={() => handleSubmit()}
            isLoading={isLoading}
          />
        </div>
      </div>
    </div>
  );
};
