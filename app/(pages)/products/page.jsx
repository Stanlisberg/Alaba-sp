"use client";

import React, { useState } from "react";
import Landing from "@/app/(component)/dashboard/page";
import { DatePickerComp } from "@/app/custom/date-picker";
import { CustomSelect } from "@/app/custom/select-comp";
import { CustomButton, ExportButton } from "@/app/custom/export-comp";
import { Table } from "antd";
import Image from "next/image";
import { FiEye } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";
import { FaPlus } from "react-icons/fa6";
import { SiGitconnected } from "react-icons/si";

function Products() {
  const [date, setDate] = useState();

  const tableData = [
    {
      name: "32' Television",
      category: "House Electronics",
      product: "H23EE",
      profile:
        "https://res.cloudinary.com/dbg2z1svm/image/upload/v1714424637/msmzed8m8cuyt87yxhpn.png",
      brand: "Samsung",
      costPrice: "250,000",
      sellingPrice: "300,000",
      stock: "20",
      action: "2",
    },
    {
      name: "32' Television",
      category: "House Electronics",
      product: "H23EE",
      profile:
        "https://res.cloudinary.com/dbg2z1svm/image/upload/v1714424637/msmzed8m8cuyt87yxhpn.png",
      brand: "Samsung",
      costPrice: "250,000",
      sellingPrice: "300,000",
      stock: "20",
      action: "2",
    },
    {
      name: "32' Television",
      category: "House Electronics",
      product: "H23EE",
      profile:
        "https://res.cloudinary.com/dbg2z1svm/image/upload/v1714424637/msmzed8m8cuyt87yxhpn.png",
      brand: "Samsung",
      costPrice: "250,000",
      sellingPrice: "300,000",
      stock: "20",
      action: "2",
    },
    {
      name: "32' Television",
      category: "House Electronics",
      product: "H23EE",
      profile:
        "https://res.cloudinary.com/dbg2z1svm/image/upload/v1714424637/msmzed8m8cuyt87yxhpn.png",
      brand: "Samsung",
      costPrice: "250,000",
      sellingPrice: "300,000",
      stock: "20",
      action: "2",
    },
  ];

  const columns = [
    {
      title: "Product Name",
      dataIndex: "name",
      render: (name, content) => (
        <div className="flex items-center gap-2">
          <div className="min-w-[50px] bg-[#e0e2e7] h-[50px] rounded-[50%] items-center justify-center overflow-hidden">
            <Image
              src={content.profile}
              alt=""
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
      dataIndex: "category",
      render: (perm) => <div className={""}>{perm}</div>,
    },
    {
      title: "Product Id",
      dataIndex: "product",
      render: (perm) => <div className={""}>{perm}</div>,
    },
    {
      title: "Brand",
      dataIndex: "brand",
      render: (perm) => <div className={""}>{perm}</div>,
    },
    {
      title: "Cost Price",
      dataIndex: "costPrice",
      render: (perm) => <div className={""}>₦{perm}</div>,
    },

    {
      title: "Selling Price",
      dataIndex: "sellingPrice",
      render: (status) => <button>₦{status}</button>,
    },
    {
      title: "Stock",
      dataIndex: "stock",
      render: (perm) => <div className={""}>{perm}</div>,
    },
    {
      title: "Action",
      dataIndex: "action",
      render: (id, content) => (
        <div className="flex gap-2">
          <FiEye onClick={() => router.push("")} />
          <RiDeleteBinLine
            onClick={() => {
              setStaffData({ id: id, name: content.name });
              setDeleteModal(true);
            }}
          />
        </div>
      ),
    },
  ];

  return (
    <Landing>
      <div className="flex flex-col mt-2 gap-4 md:flex-row lg:justify-between items-center ">
        <DatePickerComp
          value={date}
          onChange={(date) => setDate(date)}
          style={{ fontSize: "16px" }}
          className="w-[300px] lg:w-[400px]"
        />
        <CustomSelect
          labelText=""
          value={"Days"}
          errorMessage=""
          options=""
          style={{ width: "280px" }}
          size="medium"
        />
        <CustomSelect
          labelText=""
          value={"All Employee"}
          errorMessage=""
          options=""
          style={{ width: "280px" }}
          size="medium"
          className="hidden md:block"
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
              name={"Add"}
            />
            <CustomButton
              icon={<SiGitconnected />}
              style={{
                background: "#4256A6",
              }}
              name={"Assign"}
            />
            <CustomButton
              icon={<RiDeleteBinLine />}
              style={{
                background: "#FF002E",
              }}
              name={"Delete"}
            />
            <ExportButton fileName={"Staff List"} csvData={""} headers={""} />
          </div>
        </div>
        <div className="w-[100%] overflow-auto">
          <Table
            columns={columns}
            dataSource={tableData}
            rowSelection={{ type: "checkbox" }}
          />
        </div>
      </div>
    </Landing>
  );
}

export default Products;
