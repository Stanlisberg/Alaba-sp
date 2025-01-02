import React, { useState, useEffect } from "react";
import AOS from "aos";
import Image from "next/image";

const Product = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div>
      <section className="flex md:hidden flex-col w-full gap-12 justify-center items-center max-w-[1200px] mx-auto mt-20 ">
        <div className="flex flex-col gap-12 justify-center items-center">
          <div>
            <div data-aos="fade-up">
              {/* <button className="bg-[#4256a6] text-white rounded-xl py-[2px]  px-6  text-sm">
                We provide
              </button> */}
            </div>
            <div data-aos="fade-up" className="text-3xl mt-6">
              <p>Effective Sales</p>
              <p>Processing</p>
            </div>
          </div>
          <div data-aos="fade-up">
            <Image
              src="https://res.cloudinary.com/drtzfu730/image/upload/v1728123440/Group_1000002872_xx1yyc.png"
              width={25}
              height={25}
              alt="Dash"
              className="w-[230px] object-cover"
            />
          </div>
        </div>
        <div className="flex flex-col-reverse gap-12 justify-center items-center">
          <div data-aos="fade-up">
            <Image
              src="https://res.cloudinary.com/drtzfu730/image/upload/v1725088824/Group_1000002842_mzyixi.svg"
              width={25}
              height={25}
              alt="Dash"
              className="w-[230px] object-cover"
            />
          </div>
          <div>
            <div data-aos="fade-up">
              {/* <button className="bg-[#e5cfa5] text-black rounded-xl py-[2px]  px-6  text-sm">
                We provide
              </button> */}
            </div>
            <div data-aos="fade-up" className="text-3xl mt-6">
              <p>Effective</p>
              <p>Inventory</p>
              <p>Management</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-12 justify-center items-center">
          <div>
            <div data-aos="fade-up">
              {/* <button className="bg-[#4256a6] text-white rounded-xl py-[2px]  px-6  text-sm">
                We provide
              </button> */}
            </div>
            <div data-aos="fade-up" className="text-3xl mt-6">
              <p>Customer</p>
              <p>Relationship</p>
              <p>Management</p>
            </div>
          </div>
          <div data-aos="fade-up">
            <Image
              src="https://res.cloudinary.com/drtzfu730/image/upload/v1728123212/Group_1000002846_ozigtz.png"
              width={25}
              height={25}
              alt="Dash"
              className="w-[230px] object-cover"
            />
          </div>
        </div>
        <div className="flex flex-col-reverse gap-12 justify-center items-center">
          <div data-aos="fade-up">
            <Image
              src="https://res.cloudinary.com/drtzfu730/image/upload/v1728123212/Group_1000002846_ozigtz.png"
              width={25}
              height={25}
              alt="Dash"
              className="w-[230px] object-cover"
            />
          </div>
          <div>
            <div data-aos="fade-up">
              {/* <button className="bg-[#e5cfa5] text-black rounded-xl py-[2px]  px-6  text-sm">
                We provide
              </button> */}
            </div>
            <div data-aos="fade-up" className="text-3xl mt-6">
              <p>Reporting and</p>
              <p>Analytics</p>
            </div>
          </div>
        </div>
      </section>
      <section className="hidden md:flex flex-col w-full gap-16 justify-center items-center max-w-[1200px] mx-auto mt-20">
        <div data-aos="flip-right" className="relative ">
          <Image
            src="https://res.cloudinary.com/drtzfu730/image/upload/v1726301792/Untitled_dxmg2k.svg"
            width={25}
            height={25}
            alt="Dash"
            className="w-[700px] object-cover"
          />
          <div className="absolute top-[8rem] left-[4rem] flex flex-col gap-5 text-white">
            <div className="font-base text-3xl">
              <p>Effective Sales</p>
              <p>Processing</p>
            </div>
            <p className="w-[50%]">
              Empower your team with real-time data acces to streamline the
              entire sales processes, from selecting items and summarizing the
              transaction to choosing a payment mode (cash, bank, etc.) and
              generating the final receipt.
            </p>
          </div>
        </div>
        <div data-aos="flip-left" className="relative">
          <Image
            src="https://res.cloudinary.com/drtzfu730/image/upload/v1726315929/Group_1000002880_2_ho88b5.svg"
            width={25}
            height={25}
            alt="Dash"
            className="w-[700px] object-cover"
          />
          <div className="absolute top-[8rem] right-[4rem] left-[20rem] flex flex-col gap-5 text-[#0f1235]">
            <div className="font-base text-3xl">
              <p>Effective Inventory</p>
              <p>Management</p>
            </div>
            <p className="w-full">
              Our intuitive inventory management system simplifies the process
              of inputting items, tracking stock levels, and organizing
              inventory, ensuring efficient and hassle-free management.
            </p>
          </div>
        </div>
        <div data-aos="flip-right" className="relative">
          <Image
            src="https://res.cloudinary.com/drtzfu730/image/upload/v1726315855/Group_1000002877_ngnwpy.svg"
            width={25}
            height={25}
            alt="Dash"
            className="w-[700px] object-cover"
          />
          <div className="absolute top-[8rem] left-[4rem] flex flex-col gap-5 text-[#0f1235]">
            <div className="font-base text-3xl">
              <p>Customer</p>
              <p>Relationship</p>
              <p>Management</p>
            </div>
            <p className="w-[50%]">
              Our intuitive inventory management system simplifies the process
              of inputting items, tracking stock levels, and organizing
              inventory, ensuring efficient and hassle-free management.
            </p>
          </div>
        </div>
        <div data-aos="flip-left" className="relative">
          <Image
            src="https://res.cloudinary.com/drtzfu730/image/upload/v1726315844/Group_1000002881_wxe4kc.svg"
            width={25}
            height={25}
            alt="Dash"
            className="w-[700px] object-cover"
          />
          <div className="absolute top-[8rem] right-[6rem]  left-[20rem] flex flex-col gap-5  text-white">
            <div className="font-base text-3xl">
              <p>Reporting and</p>
              <p>Analytics</p>
            </div>
            <p className="w-full">
              Our robust analytics provide actionable insights, helping you make
              informed decisions to drive growth and scale your enterprise
              efficiently.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Product;
