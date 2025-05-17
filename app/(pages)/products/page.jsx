"use client";

import React, { useMemo, useState } from "react";
import Landing from "@/app/(component)/dashboard/page";
import { DatePickerComp } from "@/app/custom/date-picker";
import { CustomSelect } from "@/app/custom/select-comp";
import { CustomButton, ExportButton } from "@/app/custom/export-comp";
import { Table } from "antd";
import Image from "next/image";
import { VscEdit } from "react-icons/vsc";
import { RiDeleteBinLine } from "react-icons/ri";
import { FaPlus } from "react-icons/fa6";
import { SiGitconnected } from "react-icons/si";
import { showSuccessToast, showErrorToast } from "@/app/utils/toast";
import {
  useGetProductsQuery,
  useDeleteProductMutation,
} from "@/app/redux/services/store";
import { DeleteModal } from "@/app/custom/delete-comp";
import { GetFromLocalStorage } from "@/app/utils/helpers";
import { AddProductModal } from "@/app/custom/add-product-comp";
import { EditProductModal } from "@/app/custom/edit-product-comp";
import { useRouter } from "next/navigation";

function Products() {
  const router = useRouter();
  const [productId, setProductId] = useState();
  const [date, setDate] = useState();
  const [productData, setProductData] = useState("");
  const [deleteModal, setDeleteModal] = useState(false);
  const [addModal, setAddModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [removeModal, setRemoveModal] = useState(false);
  const business_email = GetFromLocalStorage("Email");

  const { data: getProducts, isLoading: productLoading } =
    useGetProductsQuery(business_email);
  const [deleteProduct, { isLoading: isDeleting }] = useDeleteProductMutation();

  const onClickClose = () => {
    setAddModal(!addModal);
  };

  const onClickCancel = () => {
    setEditModal(!editModal);
  };

  const handleDelete = () => {
    let id = parseInt(productData);

    deleteProduct({ business_email, id })
      .unwrap()
      .then((result) => {
        console.log(result);
        setRemoveModal(!removeModal);
        showSuccessToast(result?.message);
      })
      .catch((error) => {
        showErrorToast(error?.data.message);
      });
  };

  const tableData = useMemo(() => {
    if (getProducts?.data) {
      const transformedData = getProducts.data.map((item, index) => item);
      return transformedData;
    }
    return [];
  }, [getProducts?.data]);

  // console.log(tableData);

  const columns = [
    {
      title: "Product",
      dataIndex: "name",
      render: (data) => (
        <div className="flex items-center gap-2">
          <div className="min-w-[50px] bg-[#e0e2e7] h-[50px] rounded-[50%] items-center justify-center overflow-hidden">
            <Image
              src="https://res.cloudinary.com/dbg2z1svm/image/upload/v1715805600/Ellipse_2336_hwjx7a.png"
              alt="image"
              width={50}
              height={50}
              className="object-contain"
            />
          </div>
          <p className="text-[15px] leading-[20px]">{name}</p>
        </div>
      ),
    },
    {
      title: "Category",
      dataIndex: "category_name",
      render: (perm) => <div className={""}>{perm}</div>,
    },
    {
      title: "Product Id",
      dataIndex: "id",
      render: (perm) => <div className={""}>{perm}</div>,
    },
    {
      title: "Brand",
      dataIndex: "brand",
      render: (perm) => <div className={""}>{perm}</div>,
    },
    {
      title: "Cost Price",
      dataIndex: "cost_price",
      render: (perm) => <div className={""}>₦{perm}</div>,
    },

    {
      title: "Selling Price",
      dataIndex: "selling_price",
      render: (status) => <button>₦{status}</button>,
    },
    {
      title: "Stock",
      dataIndex: "stock",
      render: (perm) => <div className={""}>{perm}</div>,
    },
    {
      title: "Action",
      dataIndex: "id",
      render: (content) => (
        <div className="flex gap-2 cursor-pointer">
          <VscEdit
            onClick={() => {
              setEditModal(!editModal);
              setProductId(content);
            }}
          />
          <RiDeleteBinLine
            onClick={() => {
              setProductData(content);
              setDeleteModal(true);
            }}
          />
        </div>
      ),
    },
  ];

  return (
    <>
      <Landing>
        <div className="flex flex-col mt-2 gap-4 md:flex-row lg:justify-between items-center ">
          <DatePickerComp
            value={date}
            onChange={(date) => setDate(date)}
            style={{ fontSize: "16px" }}
            className="w-[338px] lg:w-[400px]"
          />
          <CustomSelect
            labelText=""
            value={"Days"}
            errorMessage=""
            options=""
            className="w-[338px] lg:w-[400px]"
            size="medium"
          />
          <CustomSelect
            labelText=""
            value={"All Employee"}
            errorMessage=""
            options=""
            size="medium"
            className="hidden md:block w-[338px] lg:w-[400px]"
          />
        </div>
        <div className="mt-5 bg-[#F8F9FA] rounded-lg pb-8">
          <div className="flex flex-col gap-4 md:flex-row md:justify-between md:items-center px-2 md:px-10  pt-5 pb-5">
            <div>
              <h3 className="text-[1rem] text-[#05004E] font-[600]">
                All Products
              </h3>
              <p className="text-[0.7rem] text-[#737791]">Sales Summary</p>
            </div>
            <div className="flex flex-wrap gap-4">
              <CustomButton
                icon={<FaPlus />}
                style={{
                  background: "#11B666",
                }}
                onClick={() => {
                  setAddModal(!addModal);
                }}
                name={"Add"}
              />
              <CustomButton
                icon={<SiGitconnected />}
                style={{
                  background: "#4256A6",
                }}
                name={"Assign"}
              />
              <ExportButton fileName={"Staff List"} csvData={""} headers={""} />
            </div>
          </div>
          <div className="w-[100%] overflow-auto">
            <Table
              columns={columns}
              dataSource={tableData}
              loading={productLoading}
              rowSelection={{ type: "checkbox" }}
            />
          </div>
        </div>
      </Landing>
      {deleteModal && (
        <DeleteModal
          deleteTitle={"Product"}
          deleteItem={"product"}
          onClickDelete={() => handleDelete()}
          onClickClose={() => setDeleteModal(false)}
          isLoading={isDeleting}
        />
      )}
      {addModal && <AddProductModal onClickClose={onClickClose} />}
      {editModal && (
        <EditProductModal onClickCancel={onClickCancel} id={productId} />
      )}
    </>
  );
}

export default Products;
