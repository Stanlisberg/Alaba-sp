"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { FiMenu } from "react-icons/fi";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { GoGraph } from "react-icons/go";
import { IoBagHandleOutline } from "react-icons/io5";
import { PiSquaresFour } from "react-icons/pi";
import { usePathname } from "next/navigation";
import { FaTimes } from "react-icons/fa";
import FAQ from "@/app/(layout)/faq";
import Hero from "@/app/(layout)/hero";
import Product from "@/app/(layout)/product";
import Benefits from "@/app/(layout)/benefits";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

function Home() {
  const [navIcon, setNavIcon] = useState(true);
  const pathname = usePathname();
  const menuLinks = [
    { name: "How we Work", href: "/", icon: <GoGraph /> },
    { name: "Sign Up", href: "#signUp", icon: <IoBagHandleOutline /> },
    { name: "Dashboard", href: "/login", icon: <PiSquaresFour /> },
  ];

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <main className="max-w-full overflow-hidden mx-auto ">
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
        {/* <FiMenu size="30" className="md:hidden" /> */}
        <div className="hidden text-sm font-bold md:flex flex-row text-[#0f1235] gap-6 justify-between items-center">
          <div className="cursor-pointer">How we work</div>
          <Link href="#signUp">
            <div className="cursor-pointer">Sign up</div>
          </Link>
          <Link href="/login">
            <button className="border-2 border-[#0f1235] py-1 px-5 rounded-lg">
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
      <Hero />

      <marquee className=" bg-[#4256a6] text-white py-4 mt-16">
        <div className="flex flex-row gap-4 justify-center items-center">
          <Image
            src="https://res.cloudinary.com/drtzfu730/image/upload/v1725081492/Star_1_dbfy9d.svg"
            width={27}
            height={27}
            alt="Dash"
            className="object-cover"
          />
          <p>Seamless sale with efficient inventory management</p>
          <Image
            src="https://res.cloudinary.com/drtzfu730/image/upload/v1725081471/Ellipse_141_jo5bcz.svg"
            width={25}
            height={25}
            alt="Dash"
            className="object-cover"
          />
          <p>Extreme power to the business owners</p>
          <Image
            src="https://res.cloudinary.com/drtzfu730/image/upload/v1725081492/Star_1_dbfy9d.svg"
            width={27}
            height={27}
            alt="Dash"
            className="object-cover"
          />
          <p>
            Get a quick snapshot of your current stock levels, recent orders,
            and inventory alerts
          </p>
          <Image
            src="https://res.cloudinary.com/drtzfu730/image/upload/v1725081471/Ellipse_141_jo5bcz.svg"
            width={25}
            height={25}
            alt="Dash"
            className="object-cover"
          />
          <p>Analyze sales trends and performance over time.</p>
        </div>
      </marquee>
      <Product />
      <Benefits />
      <section className="bg-[#eccb8fe4] pt-16 pb-10 md:pr-20 gap-20 md:py-40 flex flex-col md:flex-row justify-center items-center">
        <div data-aos="zoom-out" id="signUp">
          <Image
            src="https://res.cloudinary.com/drtzfu730/image/upload/v1728124085/phone_with_shadow_2x_1_azydhq.png"
            width={25}
            height={25}
            alt="Dash"
            className="w-[270px] md:w-[350px] transform scale-150 object-cover"
          />
        </div>
        <div className="text-[#0F1235] text-center md:text-start font-bold text-2xl md:mr-40 ">
          <p>Download app on</p>
          <p>your mobile</p>
          <div className="flex flex-row gap-4 mt-8">
            <button className="bg-black text-white px-2 pb-[1px] pt-[1px] rounded-[10px]">
              <div className="flex flex-row gap-2 justify-center items-center relative">
                <Image
                  src="https://res.cloudinary.com/drtzfu730/image/upload/v1725096415/icons8-playstore_wbjp3l.svg"
                  width={16}
                  height={16}
                  alt="Dash"
                  className="transform scale-150 object-cover"
                />
                <div className="text-start">
                  <span className="text-[14px]">Google Play</span>
                </div>
                <p className="text-[9px] font-thin absolute bottom-3 left-7">
                  Get it on
                </p>
              </div>
            </button>
            <button className="bg-black text-white px-2 pb-[1px] pt-[1px] rounded-[10px]">
              <div className="flex flex-row gap-2 justify-center items-center relative">
                <Image
                  src="https://res.cloudinary.com/drtzfu730/image/upload/v1725695165/icons8-apple_vzfzoz.svg"
                  width={16}
                  height={16}
                  alt="Dash"
                  className="transform scale-150 object-cover"
                />
                <div className="text-start">
                  <span className="text-[14px]">Google Play</span>
                </div>
                <p className="text-[9px] font-thin absolute bottom-3 left-7">
                  Get it on
                </p>
              </div>
            </button>
          </div>
        </div>
      </section>
      <section className="max-w-[1200px] mx-auto mt-32 flex flex-col gap-7 justify-center items-center">
        <div data-aos="fade-right">
          <button className="bg-[#0f1235] text-white px-20 py-[6px] rounded-lg">
            Some testimonial
          </button>
        </div>
        <div className="md:block hidden text-center text-[23px] text-[#0f1235]">
          <div data-aos="fade-left">
            <p>Some of our customers have a lot to say about</p>
            <p>the AlabaSP Application</p>
          </div>
        </div>
        <div
          data-aos="fade-left"
          className="md:hidden text-center px-6 text-[23px] text-[#0f1235]"
        >
          <p>
            Some of our customers have a lot to say about the Alaba SP
            Application
          </p>
        </div>
      </section>
      {/* <section className="flex justify-center items-center border border-green-500 w-[90%] mx-auto gap-2 md:px-20 px-5 rounded-xl mt-16"> */}
      <section className="flex w-full gap-3 px-10 pt-5">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          pagination={{ clickable: true }}
          navigation={false}
          breakpoints={{
            620: {
              spaceBetween: 15,
              slidesPerView: 2,
            },
            1140: {
              spaceBetween: 15,
              slidesPerView: 2,
            },
            1200: {
              spaceBetween: 15,
              slidesPerView: 3,
            },

            1400: {
              spaceBetween: 5,
              slidesPerView: 3,
            },
          }}
          onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide>
            <div className="bg-gray-200 gap-10  w-full h-full flex flex-col px-6 py-12 rounded-[10px]">
              <div className="flex flex-row gap-5 justify-between items-center">
                <p className="font-bold">Sarah Mark</p>
                <Image
                  src="https://res.cloudinary.com/drtzfu730/image/upload/v1725696675/Mask_group_w7vgrg.svg"
                  width={16}
                  height={16}
                  alt="Dash"
                  className="w-[50px] object-cover"
                />
              </div>
              <div className="flex">
                <p className="w-[300px]">
                  What ever you hear from about Alaba SP, Just take it as it is.
                  A very good app for inventory
                </p>
                <div></div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-gray-200 gap-10  w-full h-full flex flex-col px-6 py-12 rounded-[10px]">
              <div className="flex flex-row gap-5 justify-between items-center">
                <p className="font-bold">Frank Joshua</p>
                <Image
                  src="https://res.cloudinary.com/drtzfu730/image/upload/v1728800072/Mask_group_1_ohaqtj.svg"
                  width={16}
                  height={16}
                  alt="Dash"
                  className="w-[50px] object-cover"
                />
              </div>
              <div className="flex">
                <p className="w-[300px]">
                  What ever you hear from about Alaba SP, Just take it as it is.
                  A very good app for inventory
                </p>
                <div></div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-gray-200 gap-10  w-full h-full flex flex-col px-6 py-12 rounded-[10px]">
              <div className="flex flex-row gap-5 justify-between items-center">
                <p className="font-bold">Philip Moore</p>
                <Image
                  src="https://res.cloudinary.com/drtzfu730/image/upload/v1728800064/Mask_group_2_o4iqjb.svg"
                  width={16}
                  height={16}
                  alt="Dash"
                  className="w-[50px] object-cover"
                />
              </div>
              <div className="flex">
                <p className="w-[300px]">
                  What ever you hear from about Alaba SP, Just take it as it is.
                  A very good app for inventory
                </p>
                <div></div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
      <FAQ />
      <section className="max-w-[1200px] mx-auto flex flex-col gap-5 justify-center items-center mt-32">
        <div data-aos="fade-left">
          <p className="text-center text-[25px] text-[#0f1235]">
            Subscribe to our newsletter
          </p>
        </div>
        <div data-aos="fade-right" className="flex flex-col md:flex-row gap-5">
          <input className="border border-black px-10 py-1 rounded-lg" />
          <button className="bg-[#0f1235] text-white text-[14px] px-8 py-2 md:py-0 rounded-lg">
            Subscribe
          </button>
        </div>
      </section>
      <footer className="max-w-full px-32 custom mt-32 ">
        <div className="grid grid-cols-12 w-full md:max-w-[1100px] px-5 mx-auto text-[12px] pb-10 md:20 gap-10">
          <div className="col-span-10 md:col-span-4 flex flex-col gap-10 ">
            <Image
              src="https://res.cloudinary.com/drtzfu730/image/upload/v1725082737/logo_1_4x_1_aw7rzz.svg"
              width={25}
              height={25}
              alt="Dash"
              className="w-[150px] object-cover"
            />
            <div className="flex flex-col gap-3">
              <button className="px-4 py-2 w-[40%] text-[#4256a6] font-bold border border-[#4256a6] rounded-lg text-center">
                Sign up
              </button>
              <button className="px-4 py-2 w-[40%] text-white font-bold border bg-[#4256a6] rounded-lg text-center">
                My Dashboard
              </button>
            </div>
          </div>
          <div className="hidden col-span-12 md:col-span-4 md:flex flex-col gap-16 md:gap-32">
            <div></div>
            <div>
              <div className="flex flex-row gap-3">
                <div className="border-b border-black w-10"></div>
                <div className="text-[10px]">Copyright 2024</div>
                <div className="border-b border-black w-10"></div>
              </div>
              <div className="flex flex-row gap-4 items-center mt-2 pl-12">
                <Image
                  src="https://res.cloudinary.com/drtzfu730/image/upload/v1725706952/Vector_xkh3xa.svg"
                  width={15}
                  height={15}
                  alt="Dash"
                  className="w-[16px]object-cover "
                />
                <Image
                  src="https://res.cloudinary.com/drtzfu730/image/upload/v1725706946/Vector_1_xc3woa.svg"
                  width={25}
                  height={25}
                  alt="Dash"
                  className="w-[16px] object-cover"
                />
                <Image
                  src="https://res.cloudinary.com/drtzfu730/image/upload/v1725701465/Group_1000002869_rmod4v.svg"
                  width={25}
                  height={25}
                  alt="Dash"
                  className="w-[16px] object-cover"
                />
              </div>
            </div>
          </div>
          <div className="col-span-8 md:col-span-2 flex flex-col gap-10 md:gap-20">
            <div className="font-bold text-base">Services</div>
            <ul>
              <li>Sales</li>
              <li>Inventory</li>
              <li>CRP</li>
              <li>Reporting</li>
            </ul>
          </div>
          <div className="col-span-8 md:col-span-2 flex flex-col gap-10 md:gap-20">
            <div className="font-bold text-base">Social</div>
            <ul>
              <li>Privacy policies</li>
              <li>Terms</li>
              <li>Faqs</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
        <div className="pb-5 justify-center items-center md:hidden flex flex-col gap-10 md:gap-32">
          <div>
            <div className="flex flex-row gap-3">
              <div className="border-b border-black w-10"></div>
              <div className="text-[10px]">Copyright 2024</div>
              <div className="border-b border-black w-10"></div>
            </div>
            <div className="flex flex-row gap-4 items-center mt-2 pl-12">
              <Image
                src="https://res.cloudinary.com/drtzfu730/image/upload/v1725706952/Vector_xkh3xa.svg"
                width={15}
                height={15}
                alt="Dash"
                className="w-[16px] object-cover "
              />
              <Image
                src="https://res.cloudinary.com/drtzfu730/image/upload/v1725706946/Vector_1_xc3woa.svg"
                width={25}
                height={25}
                alt="Dash"
                className="w-[16px] object-cover "
              />
              <Image
                src="https://res.cloudinary.com/drtzfu730/image/upload/v1725701465/Group_1000002869_rmod4v.svg"
                width={25}
                height={25}
                alt="Dash"
                className="w-[16px] object-cover "
              />
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

export default Home;
