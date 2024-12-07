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

function Customer() {
  const [date, setDate] = useState();

  const tableData = [
    {
      name: "John Doe",
      category: "House Electronics",
      product: "H23EE",
      profile:
        "https://res.cloudinary.com/dbg2z1svm/image/upload/v1715805600/Ellipse_2336_hwjx7a.png",
      brand: "Samsung",
      costPrice: "250,000",
      sellingPrice: "300,000",
      date: "3rd march 2024",
      action: "2",
    },
    {
      name: "John Doe",
      category: "House Electronics",
      product: "H23EE",
      profile:
        "https://res.cloudinary.com/dbg2z1svm/image/upload/v1715805600/Ellipse_2336_hwjx7a.png",

      brand: "Samsung",
      costPrice: "250,000",
      sellingPrice: "300,000",
      date: "3rd march 2024",
      action: "2",
    },
    {
      name: "John Doe",
      category: "House Electronics",
      product: "H23EE",
      profile:
        "https://res.cloudinary.com/dbg2z1svm/image/upload/v1715805600/Ellipse_2336_hwjx7a.png",
      brand: "Samsung",
      costPrice: "250,000",
      sellingPrice: "300,000",
      date: "3rd march 2024",
      action: "2",
    },
    {
      name: "John Doe",
      category: "House Electronics",
      product: "H23EE",
      profile:
        "https://res.cloudinary.com/dbg2z1svm/image/upload/v1715805600/Ellipse_2336_hwjx7a.png",
      brand: "Samsung",
      costPrice: "250,000",
      sellingPrice: "300,000",
      date: "3rd march 2024",
      action: "2",
    },
  ];

  const customerTable = [
    {
      title: "Customer Name",
      dataIndex: "name",
      render: (name, content) => (
        <div className="flex items-center gap-2">
          <div className="min-w-[50px] bg-[#11B666] h-[50px] rounded-[50%] items-center justify-center overflow-hidden">
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
      title: "Last visit",
      dataIndex: "date",
      render: (perm) => <div className={""}>{perm}</div>,
    },
  ];

  const customerInfo = [
    {
      item: "32' Television",
      customer: "33try64",
      date: "13 feb 2024",
      visit: "14 feb 2024",
      image:
        "https://res.cloudinary.com/dbg2z1svm/image/upload/v1714424637/msmzed8m8cuyt87yxhpn.png",
    },
  ];

  return (
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
      <div className="flex flex-col md:flex-row gap-4 md:justify-between md:items-center">
        <div className="mt-5 bg-[#F8F9FA] rounded-lg pb-8 w-full md:w-[50%] ">
          <div className="flex px-10 justify-between items-center pt-5">
            <div>
              <h3 className="text-[1rem] text-[#05004E] font-[600]">
                Categories
              </h3>
              <p className="text-[0.7rem] text-[#737791]">All Categories</p>
            </div>
          </div>
          <div>
            <Table
              columns={customerTable}
              dataSource={tableData}
              rowSelection={{ type: "checkbox" }}
            />
          </div>
        </div>
        <div className="mt-5 bg-[#F8F9FA] rounded-lg pb-8 w-full md:w-[50%]">
          <div className="flex flex-col px-10 justify-between items-center pt-5">
            <div>
              <h3 className="text-[1rem] text-[#05004E] font-[600]">
                Customer Information
              </h3>
              <p className="text-[0.7rem] text-[#737791]">
                Information About Selected Customer
              </p>
            </div>
            <div>
              {customerInfo.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col text-center mt-5 justify-center items-center gap-8"
                >
                  <div className="min-w-[50px] bg-[#11B666] h-[50px] rounded-[50%] items-center justify-center overflow-hidden">
                    <Image
                      src={item.image}
                      alt=""
                      width={50}
                      height={50}
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <p className="text-[14px]"> {item.item}</p>
                    <h1 className="text-[#000000] text-[14px] font-[600]">
                      Name
                    </h1>
                  </div>
                  <div>
                    <p className="text-[14px]">{item.customer}</p>
                    <h1 className="text-[#000000] text-[14px] font-[600]">
                      Customer Id
                    </h1>
                  </div>
                  <div>
                    <p className="text-[14px]">{item.date}</p>
                    <h1 className="text-[#000000] text-[14px] font-[600]">
                      Date Created
                    </h1>
                  </div>
                  <div>
                    <p className="text-[14px]">{item.visit}</p>
                    <h1 className="text-[#000000] text-[14px] font-[600]">
                      Last Visited
                    </h1>
                  </div>
                </div>
              ))}
              <div className="flex justify-center items-center">
                <button className="bg-[#4256A6] text-[#fff] text-[13px] rounded-[6px] mt-14 px-6 py-2">
                  Edit Customer
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Landing>
  );
}

export default Customer;
