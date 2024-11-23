"use client";

import Image from "next/image";
import React from "react";
import Link from "next/link";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { FiMenu } from "react-icons/fi";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <main className="max-w-full overflow-hidden mx-auto ">
      <nav className="my-10 max-w-[1200px] mx-auto flex py-2 px-5 justify-between items-center">
        <div>
          <Image
            src="https://res.cloudinary.com/drtzfu730/image/upload/v1725082737/logo_1_4x_1_aw7rzz.svg"
            width={25}
            height={25}
            alt="Dash"
            className="w-[150px] object-cover"
          />
        </div>
        <FiMenu size="30" className="md:hidden" />
        <div className="hidden text-sm font-bold md:flex flex-row text-[#0f1235] gap-6 justify-between items-center">
          <div className="cursor-pointer">How we work</div>
          <Link href="/">
            <div className="cursor-pointer">Sign up</div>
          </Link>
          <Link href="/login">
            <button className="border-2 border-[#0f1235] py-1 px-5 rounded-lg">
              My Dashboard
            </button>
          </Link>
        </div>
      </nav>
      <section className="max-w-[1200px]  md:flex-row md:px-8 px-6 mt-20 flex flex-col gap-24 justify-center items-center mx-auto ">
        <div className="w-full text-start md:w-[60%]">
          <div className="hidden md:block text-4xl text-[#0f1235] font-[500]">
            <p>
              Seamless Point Of Sales And
              <span className="font-extrabold"> Inventory</span>
            </p>
            <p>Management Solution</p>
          </div>
          <div className="md:hidden block text-4xl text-[#0f1235] font-[500]">
            <p>
              Seamless Point Of Sales And
              <span className="font-extrabold"> Inventory </span>
              Management Solution
            </p>
          </div>
          <p className="mt-3">
            Experience the future of business management with our comprehensive,
            user-friendly solution tailored to meet the dynamic needs of modern
            enterprises. Seamlessly integrate point of sales, inventory
            management, and advanced reporting/analytics into one intuitive
            platform.
          </p>
          <button className="border border-black bg-[#0f1235] text-white mt-5 py-1 px-7 rounded-lg font-normal">
            Sign Up
          </button>
        </div>
        <div className="w-[40%]" data-aos="zoom-in">
          <Image
            src="https://res.cloudinary.com/drtzfu730/image/upload/v1728122530/PixelBook_Go_and_Pixel_4_XL_2x_2_ozylqv.png"
            width={25}
            height={1}
            alt="Dash"
            className="w-[600px] md:w-[500px] transform scale-150 object-cover"
          />
        </div>
      </section>

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
      <section className="max-w-full mt-20 pt-14 pb-10 gap-5 flex flex-col justify-center items-center mx-auto bg-[#0f1235] text-white">
        <button className="bg-[#4256a6] text-white rounded-xl py-[6px] px-20  text-sm">
          Benefits of alaba SP
        </button>
        <div>
          <Image
            src=" https://res.cloudinary.com/drtzfu730/image/upload/v1725091193/Group_1000002858_uflffo.svg"
            width={25}
            height={25}
            alt="Dash"
            className="w-[350px] md:w-[730px] object-cover scale"
          />
        </div>
        <div data-aos="zoom-out">
          <Image
            src="https://res.cloudinary.com/drtzfu730/image/upload/v1728123815/Adjust_iPad_Pro_Mockup_1_dlxvlv.png"
            width={25}
            height={25}
            alt="Dash"
            className="pl-5 w-[700px] md:w-[900px] transform scale-100 md:scale-105 object-cover"
          />
        </div>
      </section>
      <section className="bg-[#eccb8fe4] pt-16 pb-10 md:pr-20 gap-20 md:py-40 flex flex-col md:flex-row justify-center items-center">
        <div data-aos="zoom-out">
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
      <section className="flex w-full gap-5 md:px-20 px-5 rounded-xl mt-16">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          pagination={{ clickable: true }}
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
              spaceBetween: 15,
              slidesPerView: 4,
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
