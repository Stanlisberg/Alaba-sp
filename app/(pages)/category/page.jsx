"use client";

import React, { useMemo, useState } from "react";
import Landing from "@/app/(component)/dashboard/page";
import { DatePickerComp } from "@/app/custom/date-picker";
import { CustomSelect } from "@/app/custom/select-comp";
import { CustomButton, ExportButton } from "@/app/custom/export-comp";
import { Table } from "antd";
import { RiDeleteBinLine } from "react-icons/ri";
import { FaPlus } from "react-icons/fa6";
import { SiGitconnected } from "react-icons/si";
import {
  useDeleteCategoryMutation,
  useGetCategoriesQuery,
} from "@/app/redux/services/store";
import { VscEdit } from "react-icons/vsc";
import { DeleteModal } from "@/app/custom/delete-comp";
import { AddCategoryModal } from "@/app/custom/add-category-comp";
import { EditCategoryModal } from "@/app/custom/edit-category-comp";
import { GetFromLocalStorage } from "@/app/utils/helpers";
import { showErrorToast, showSuccessToast } from "@/app/utils/toast";
import Image from "next/image";

function Category() {
  const [date, setDate] = useState();
  const [addModal, setAddModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [categoryName, setCategoryName] = useState("");
  const [categName, setCategName] = useState("");
  const business_email = GetFromLocalStorage("Email");

  const { data: getCategories, refetch } =
    useGetCategoriesQuery(business_email);
  const [deleteCategory, { isLoading: isDeleting }] =
    useDeleteCategoryMutation();

  const onClickClose = () => {
    setAddModal(!addModal);
  };

  const handleDelete = () => {
    deleteCategory({ business_email, categName })
      .unwrap()
      .then((result) => {
        console.log(result.message);
        refetch();
        setDeleteModal(!deleteModal);
        showSuccessToast(result?.message);
      })
      .catch((error) => {
        showErrorToast(error?.data.message);
      });
  };

  const tableData = useMemo(() => {
    return (
      getCategories?.data.map((item, index) => {
        let key = index + 1;
        return {
          key: key,
          id: item?.id,
          name: item?.name,
          email: item?.business_email,
          color: item?.color,
          product: item?.product_count,
        };
      }) || []
    );
  }, [getCategories?.data]);

  console.log(tableData);

  const categoryTable = [
    {
      title: "Category Name",
      dataIndex: "name",
      render: (name, content) => (
        <div className="flex items-center gap-2">
          <div className="min-w-[50px] bg-[#e0e2e7] h-[50px] rounded-[50%] items-center justify-center overflow-hidden">
            <Image
              src="https://res.cloudinary.com/drtzfu730/image/upload/v1719707191/samples/ecommerce/shoes.png"
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
      title: "Email",
      dataIndex: "email",
      render: (perm) => <div className={""}>{perm}</div>,
    },
    {
      title: "Color",
      dataIndex: "color",
      render: (perm) => <div className={""}>{perm}</div>,
    },

    {
      title: "Product",
      dataIndex: "product",
      render: (perm) => <div className={""}>{perm}</div>,
    },
    {
      title: "Action",
      dataIndex: "id",
      render: (name, content) => (
        <div className="flex gap-2 cursor-pointer">
          <VscEdit
            onClick={() => {
              setEditModal(!editModal);
              setCategoryName(content.name);
            }}
          />
          <RiDeleteBinLine
            onClick={() => {
              setCategName(content.name);
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
            className="w-[320px] lg:w-[400px]"
          />
          <CustomSelect
            labelText=""
            value={"Days"}
            errorMessage=""
            options=""
            className="w-[320px] lg:w-[400px]"
            size="medium"
            s
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
        {/* <div className="flex flex-col md:flex-row md:justify-between gap-4 justify-between items-center"> */}
        <div className="flex w-full">
          <div className="mt-5 bg-[#F8F9FA] rounded-lg pb-8 w-full md:w-[100%]">
            <div className="flex flex-col gap-5 md:flex-row px-10 md:justify-between md:items-center pt-5">
              <div>
                <h3 className="text-[1rem] text-[#05004E] font-[600]">
                  Categories
                </h3>
                <p className="text-[0.7rem] text-[#737791]">All Categories</p>
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
              </div>
            </div>
            <div className="w-[100%] overflow-auto">
              <Table
                columns={categoryTable}
                dataSource={tableData}
                rowSelection={{ type: "checkbox" }}
              />
            </div>
          </div>
          {/* <div className="mt-5 bg-[#F8F9FA] rounded-lg w-full p-10 h-[100%] md:w-[50%]">
            <div className="w-[100%] overflow-auto">
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laudantium quae aspernatur aperiam quibusdam quaerat, sunt
                delectus praesentium officiis assumenda dignissimos ipsa quo
                quas cupiditate nulla perferendis? Corrupti dolores aut, aliquam
                vero quos odio et illum laudantium? Dolorum eaque blanditiis
                dolor nesciunt aspernatur explicabo asperiores voluptatem
                molestias tempora iure, nihil atque fugiat vel doloribus qui
                perferendis ea dolorem pariatur sint distinctio quidem totam
                quod temporibus? Dolorum necessitatibus rerum, saepe architecto
                similique quae ab minima nemo quas mollitia minus temporibus
                error tenetur eligendi quo voluptatibus! Dignissimos nam facilis
                consectetur reprehenderit pariatur? Quidem ab dolor molestias
                quo aliquid. Vitae dolore nihil exercitationem aut quos dolor
                ipsum, modi enim animi molestiae distinctio illo veritatis rem.
                Atque, corporis iure? Placeat odit quos, perspiciatis voluptatum
                ea accusamus laboriosam eum? Eligendi in quisquam deserunt rerum
                numquam
              </div>
            </div>
          </div> */}
        </div>
      </Landing>
      {deleteModal && (
        <DeleteModal
          deleteTitle={"Category"}
          deleteItem={"Category"}
          onClickDelete={handleDelete}
          onClickClose={() => setDeleteModal(false)}
          isLoading={isDeleting}
        />
      )}
      {addModal && (
        <AddCategoryModal onClickClose={onClickClose} refetch={refetch} />
      )}
      {editModal && (
        <EditCategoryModal
          onClickCancel={() => setEditModal(!editModal)}
          name={categoryName}
          id={categName}
          refetch={refetch}
        />
      )}
    </>
  );
}

export default Category;
