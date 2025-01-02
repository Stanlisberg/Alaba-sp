"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { useRouter } from "next/navigation";
import { GoGraph } from "react-icons/go";
import { IoBagHandleOutline } from "react-icons/io5";
import { PiSquaresFour } from "react-icons/pi";

const Nav = () => {
  const [navIcon, setNavIcon] = useState(true);
  const pathname = usePathname();
  const router = useRouter();
  const menuLinks = [
    { name: "How we Work", href: "/", icon: <GoGraph /> },
    { name: "Sign Up", href: "#signUp", icon: <IoBagHandleOutline /> },
    { name: "Dashboard", href: "/login", icon: <PiSquaresFour /> },
  ];
  return (
    <div>
      <nav className="my-7 max-w-[1200px] mx-auto flex py-2 px-5 justify-between items-center">
        <div>
          <Image
            src="https://res.cloudinary.com/drtzfu730/image/upload/v1725082737/logo_1_4x_1_aw7rzz.svg"
            width={25}
            height={25}
            alt="Dash"
            className="w-[150px] object-cover"
          />
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
        <div className="hidden text-base font-bold md:flex flex-row text-[#0f1235] gap-6 justify-between items-center">
          <div className="cursor-pointer">How we work</div>
          <Link href="#signUp">
            <div className="cursor-pointer">Sign up</div>
          </Link>
          <Link href="/login">
            <button className="border-2 border-[#0f1235] py-1 px-5 rounded-lg text-">
              My Dashboard
            </button>
          </Link>
        </div>
      </nav>
      <div
        className={
          navIcon === true
            ? "hidden min-h-screen w-[210px] z-20 fixed top-0 left-0 bg-[#F8F9FA] pt-5"
            : "md:hidden min-h-screen w-[210px] z-20 fixed top-0 left-0 bg-[#F8F9FA] pt-5 ease-in duration-700"
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
          return (
            <Link
              href={link.href}
              key={index}
              className=""
              onClick={() => setNavIcon(!navIcon)}
            >
              <div
                className={
                  isActive
                    ? "flex justify-start items-center text-[14px] gap-4 border bg-[#4256A6] text-white py-2 px-4 mx-6 my-4 rounded-lg "
                    : "flex justify-start items-center  text-[14px] gap-4 text-[#B6B6B6] hover:text-white hover:border rounded-lg px-4 py-2 my-4 mx-6 hover:bg-[#4256A6] "
                }
              >
                <p>{link.icon}</p>
                <p>{link.name}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Nav;
