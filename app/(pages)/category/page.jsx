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

function page() {
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

  const categoryTable = [
    {
      title: "Category Name",
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
      title: "No of Products",
      dataIndex: "stock",
      render: (perm) => (
        <div className={""}>
          <div className={""}>{perm}</div>
        </div>
      ),
    },
  ];

  const electTable = [
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
      title: "Brand",
      dataIndex: "brand",
      render: (perm) => (
        <div className={""}>
          <div className={""}>{perm}</div>
        </div>
      ),
    },
    {
      title: "Price",
      dataIndex: "costPrice",
      render: (perm) => (
        <div className={""}>
          <div className={""}>&#8358;{perm}</div>
        </div>
      ),
    },

    {
      title: "Stock",
      dataIndex: "stock",
      render: (perm) => (
        <div className={""}>
          <div className={""}>{perm}</div>
        </div>
      ),
    },
  ];

  return (
    <Landing>
      <div className=" flex justify-between items-center ">
        <DatePickerComp
          value={date}
          onChange={(date) => setDate(date)}
          style={{ width: "400px", fontSize: "16px" }}
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
        />
      </div>
      <div className="flex gap-4 justify-between items-center">
        <div className="mt-5 bg-[#F8F9FA] rounded-lg pb-8 w-[50%]">
          <div className="flex px-10 justify-between items-center pt-5">
            <div>
              <h3 className="text-[1rem] text-[#05004E] font-[600]">
                Categories
              </h3>
              <p className="text-[0.7rem] text-[#737791]">All Categories</p>
            </div>
            <div className="flex gap-4">
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
            </div>
          </div>
          <div>
            <Table
              columns={categoryTable}
              dataSource={tableData}
              rowSelection={{ type: "checkbox" }}
            />
          </div>
        </div>
        <div className="mt-5 bg-[#F8F9FA] rounded-lg pb-8 w-[50%]">
          <div className="flex px-10 justify-between items-center pt-5">
            <div>
              <h3 className="text-[1rem] text-[#05004E] font-[600]">
                Electronics
              </h3>
              <p className="text-[0.7rem] text-[#737791]">All Electronics</p>
            </div>
            <div className="flex gap-4">
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
            </div>
          </div>
          <div>
            <Table
              columns={electTable}
              dataSource={tableData}
              rowSelection={{ type: "checkbox" }}
            />
          </div>
        </div>
      </div>
    </Landing>
  );
}

export default page;
