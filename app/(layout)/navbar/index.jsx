"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { FaSearch, FaTimes } from "react-icons/fa";
import { GoGraph } from "react-icons/go";
import { IoBagHandleOutline } from "react-icons/io5";
import { PiSquaresFour } from "react-icons/pi";
import { FiMenu, FiUser } from "react-icons/fi";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { TbLogout } from "react-icons/tb";
import { useRouter } from "next/navigation";
import { GetFromLocalStorage } from "@/app/utils/helpers";
import Cookies from "js-cookie";
import { useLogoutMutation } from "@/app/redux/services/auth/index.";
import { showErrorToast, showSuccessToast } from "@/app/utils/toast";

function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const [navIcon, setNavIcon] = useState(true);
  const business_email = GetFromLocalStorage("Email");
  const loggedInUser = GetFromLocalStorage("Username");
  const [logout] = useLogoutMutation();

  const menuLinks = [
    { name: "Sales Report", href: "/sales-report", icon: <GoGraph /> },
    { name: "Products", href: "/products", icon: <IoBagHandleOutline /> },
    { name: "Category", href: "/category", icon: <PiSquaresFour /> },
    { name: "Customer", href: "/customer", icon: <FiUser /> },
    // { name: "Settings", href: "/setting", icon: <IoSettingsOutline /> },
    { name: "Logout", href: "#", icon: <TbLogout /> },
  ];

  const handleMenuClick = (link) => {
    if (link.name === "Logout") {
      handleLogout();
    } else {
      router.push(link.href);
    }
  };

  const handleLogout = (e) => {
    const payload = {
      email: business_email,
    };

    logout(payload)
      .unwrap()
      .then((result) => {
        Cookies.remove("token");
        localStorage.removeItem("Token");
        localStorage.removeItem("Username");
        localStorage.removeItem("Email");
        router.push("/login");
        showSuccessToast(result?.message);
      })
      .catch((error) => {
        showErrorToast(error?.data.message);
        console.log(error);
      });

    e.preventDefault();
  };

  return (
    <div className="max-w-full mx-auto bg-gray-200">
      <nav className="w-full lg:pl-[230px] px-5 lg-px-0 pr-6 py-4 bg-[#F8F9FA] fixed top-0 z-10">
        <div className="flex justify-between items-center">
          <div className="text-[#151D48] text-xl font-[600]">
            {pathname === "/sales-report"
              ? "Sales Report"
              : pathname === "/products"
              ? "Products"
              : pathname === "/category"
              ? "Category"
              : pathname === "/customer"
              ? "Customer"
              : pathname === "/setting"
              ? "Setting"
              : pathname === "/logout"
              ? "Logout"
              : null}
          </div>

          <div className="hidden md:flex items-center bg-gray-200  border  w-[320px] rounded-lg pl-4 ml-20">
            <FaSearch color="#5D5FEF" />
            <input
              className="px-2 py-2 text-[14px] outline-none border-none rounded-lg  bg-gray-200 text-[#737791]"
              placeholder="Search here..."
            />
          </div>
          <div className="hidden md:flex flex-row gap-4 justify-center items-center">
            <Image
              src="https://res.cloudinary.com/dbg2z1svm/image/upload/v1729960871/United_bgje9d.svg"
              width="20"
              height="20"
            />
            <div className="text-[#374557]">Eng(US)</div>
            <MdOutlineKeyboardArrowDown color="#A098AE" />
          </div>
          <div className="ml-8 lg:ml-0 flex flex-row gap-4 justify-center items-center">
            <Image
              src="https://res.cloudinary.com/dbg2z1svm/image/upload/v1729961239/Notifications_cxriwm.svg"
              width="30"
              height="30"
              className="hidden md:block"
              alt="image"
            />
            <Image
              src="https://res.cloudinary.com/dbg2z1svm/image/upload/v1729961587/Rectangle_1393_wia2ar.png"
              width="30"
              alt="image"
              height="30"
            />
            <div className="text-[14px] leading-[16px]">
              <p className="font-[600] ">{loggedInUser}</p>
              <p className="text-[11px]">Admin</p>
            </div>
            <div className="mb-5 hidden lg:block">
              <MdOutlineKeyboardArrowDown color="#A098AE" />
            </div>
          </div>
          <div className="pt-1 md:hidden ml-3 block cursor-pointer z-10">
            {navIcon === true ? (
              <FiMenu
                size="30"
                color="#0f1235"
                onClick={() => setNavIcon(!navIcon)}
              />
            ) : (
              <FaTimes
                size="30"
                color="#0f1235"
                onClick={() => setNavIcon(!navIcon)}
              />
            )}
          </div>
        </div>
      </nav>
      <div
        className={
          navIcon === true
            ? "lg:flex flex-col h-full hidden w-[210px] z-20 fixed top-0 left-0 bg-[#F8F9FA] pt-5"
            : " lg:block min-h-screen w-[210px] z-20 fixed top-0 left-0 bg-[#F8F9FA] pt-5 ease-in duration-700"
        }
      >
        <div
          className="flex justify-center items-center cursor-pointer"
          onClick={() => router.push("/")}
        >
          <Image
            src="https://res.cloudinary.com/drtzfu730/image/upload/v1725082737/logo_1_4x_1_aw7rzz.svg"
            width={25}
            height={25}
            alt="Dash"
            className="w-[140px] object-cover  mb-2 mr-4"
          />
        </div>

        {menuLinks.map((link, index) => {
          const isActive = pathname === link.href;
          const isLastItem = index === menuLinks.length - 1;
          return (
            <Link
              href={link.href}
              key={index}
              onClick={() => handleMenuClick(link)}
              className={isLastItem ? "mt-auto" : ""}
            >
              <div
                className={
                  isActive
                    ? "flex justify-start items-center text-[14px] gap-4 border bg-[#4256A6] text-white py-2 px-4 mx-6 my-4 rounded-lg"
                    : "flex justify-start items-center  text-[14px] gap-4 text-[#B6B6B6] hover:text-white hover:border rounded-lg px-4 py-2 my-4 mx-6 hover:bg-[#4256A6] "
                }
              >
                <p>{link.icon}</p>
                <p>{link.name}</p>
              </div>
            </Link>
          );
        })}
        {/* <div className="cursor-pointer flex justify-center items-center text-[14px] gap-4 text-[#B6B6B6] hover:text-white hover:border rounded-lg px-4 py-2 my-4 mx-6 hover:bg-[#4256A6]">
          <p>
            <TbLogout />
          </p>
          <p>Logout</p>
        </div> */}
      </div>
    </div>
  );
}

export default Navbar;
