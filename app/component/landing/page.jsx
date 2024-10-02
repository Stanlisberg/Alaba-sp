import Image from "next/image";
import React from "react";
import Link from "next/link";
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from "react-responsive-carousel";

function LandingPage() {
  return (
    <main className="max-w-full overflow-hidden mx-auto ">
      <nav className="my-10 max-w-[1100px] mx-auto flex py-2 justify-between items-center">
        <div>
          <Image
            src="https://res.cloudinary.com/drtzfu730/image/upload/v1725082737/logo_1_4x_1_aw7rzz.svg"
            width={25}
            height={25}
            alt="Dash"
            className="w-[150px] "
          />
        </div>
        <div className="hidden text-sm font-bold md:flex flex-row text-[#0f1235] gap-6 justify-between items-center">
          <div className="cursor-pointer">How we work</div>
          <div className="cursor-pointer">Sign up</div>
          <Link href="/login">
            <button className="border-2 border-[#0f1235] py-1 px-5 rounded-lg">
              My Dashboard
            </button>
          </Link>
        </div>
      </nav>
      <section className="max-w-[1100px] px-8 mt-20 flex flex-col gap-7 justify-center items-center mx-auto ">
        <div className="hidden md:block text-4xl text-[#0f1235] font-[500]">
          <p>
            Seamless <span className="font-extrabold">inventory</span>
          </p>
          <p>at your finger tips</p>
        </div>
        <div className="md:hidden block text-4xl text-[#0f1235] font-[500] text-center">
          <p>
            Seamless <span className="font-extrabold">inventory </span>
            at your finger tips
          </p>
        </div>
        <button className="border border-black bg-[#e5cfa5] py-1 px-16 font-bold rounded-2xl">
          Sign Up
        </button>
        <Image
          src="https://res.cloudinary.com/drtzfu730/image/upload/v1725079983/PixelBook_Go_and_Pixel_4_XL_2x_2_1_mtmoif.svg"
          width={25}
          height={1}
          alt="Dash"
          className="w-[300px] md:w-[500px] transform scale-150"
        />
      </section>

      <marquee className=" bg-[#4256a6] text-white py-4 ">
        <div className="flex flex-row gap-4 justify-center items-center">
          <Image
            src="https://res.cloudinary.com/drtzfu730/image/upload/v1725081492/Star_1_dbfy9d.svg"
            width={27}
            height={27}
            alt="Dash"
            className=""
          />
          <p>Seamless sale with efficient inventory management</p>
          <Image
            src="https://res.cloudinary.com/drtzfu730/image/upload/v1725081471/Ellipse_141_jo5bcz.svg"
            width={25}
            height={25}
            alt="Dash"
            className=""
          />
          <p>Extreme power to the business owners</p>
          <Image
            src="https://res.cloudinary.com/drtzfu730/image/upload/v1725081492/Star_1_dbfy9d.svg"
            width={27}
            height={27}
            alt="Dash"
            className=""
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
            className=""
          />
          <p>Analyze sales trends and performance over time.</p>
        </div>
      </marquee>
      <section className="flex md:hidden flex-col w-full gap-12 justify-center items-center max-w-[1100px] mx-auto mt-20 ">
        <div className="flex flex-col gap-12 justify-center items-center">
          <div>
            <button className="bg-[#4256a6] text-white rounded-xl py-[2px]  px-6  text-sm">
              We provides
            </button>
            <div className="text-3xl mt-6">
              <p>Effective Sales</p>
              <p>Processing</p>
            </div>
          </div>
          <Image
            src="https://res.cloudinary.com/drtzfu730/image/upload/v1725088811/Group_1000002843_rym2fh.svg"
            width={25}
            height={25}
            alt="Dash"
            className="w-[230px]"
          />
        </div>
        <div className="flex flex-col-reverse gap-12 justify-center items-center">
          <Image
            src="https://res.cloudinary.com/drtzfu730/image/upload/v1725088824/Group_1000002842_mzyixi.svg"
            width={25}
            height={25}
            alt="Dash"
            className="w-[230px]"
          />
          <div>
            <button className="bg-[#e5cfa5] text-black rounded-xl py-[2px]  px-6  text-sm">
              We provides
            </button>
            <div className="text-3xl mt-6">
              <p>Effective Inventory</p>
              <p>Management</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-12 justify-center items-center">
          <div>
            <button className="bg-[#4256a6] text-white rounded-xl py-[2px]  px-6  text-sm">
              We provides
            </button>
            <div className="text-3xl mt-6">
              <p>Customer</p>
              <p>Relationship</p>
              <p>Management</p>
            </div>
          </div>
          <Image
            src="https://res.cloudinary.com/drtzfu730/image/upload/v1725088770/Group_1000002846_ix5fbc.svg"
            width={25}
            height={25}
            alt="Dash"
            className="w-[230px]"
          />
        </div>
        <div className="flex flex-col-reverse gap-12 justify-center items-center">
          <Image
            src="https://res.cloudinary.com/drtzfu730/image/upload/v1725088770/Group_1000002846_ix5fbc.svg"
            width={25}
            height={25}
            alt="Dash"
            className="w-[230px]"
          />
          <div>
            <button className="bg-[#e5cfa5] text-black rounded-xl py-[2px]  px-6  text-sm">
              We provides
            </button>
            <div className="text-3xl mt-6">
              <p>Reporting and</p>
              <p>Analytics</p>
            </div>
          </div>
        </div>
      </section>
      <section className="hidden md:flex flex-col w-full gap-16 justify-center items-center max-w-[1100px] mx-auto mt-20">
        <div className="relative">
          <Image
            src="https://res.cloudinary.com/drtzfu730/image/upload/v1726301792/Untitled_dxmg2k.svg"
            width={25}
            height={25}
            alt="Dash"
            className="w-[700px] object-cover"
          />
          <div className="absolute top-[8rem] left-[4rem] flex flex-col gap-5 text-white">
            <p className="text-[12px]">We Provides</p>
            <div className="font-base text-3xl">
              <p>Effective Sales</p>
              <p>Processing</p>
            </div>
          </div>
        </div>
        <div className="relative">
          <Image
            src="https://res.cloudinary.com/drtzfu730/image/upload/v1726315929/Group_1000002880_2_ho88b5.svg"
            width={25}
            height={25}
            alt="Dash"
            className="w-[700px] object-cover"
          />
          <div className="absolute top-[8rem] right-[4rem] flex flex-col gap-5 text-[#0f1235]">
            <p className="text-[12px]">We Provides</p>
            <div className="font-base text-3xl">
              <p>Effective Inventory</p>
              <p>Management</p>
            </div>
          </div>
        </div>
        <div className="relative">
          <Image
            src="https://res.cloudinary.com/drtzfu730/image/upload/v1726315855/Group_1000002877_ngnwpy.svg"
            width={25}
            height={25}
            alt="Dash"
            className="w-[700px] object-cover"
          />
          <div className="absolute top-[8rem] left-[4rem] flex flex-col gap-5 text-[#0f1235]">
            <p className="text-[12px]">We Provides</p>
            <div className="font-base text-3xl">
              <p>Customer</p>
              <p>Relationship</p>
              <p>Management</p>
            </div>
          </div>
        </div>
        <div className="relative">
          <Image
            src="https://res.cloudinary.com/drtzfu730/image/upload/v1726315844/Group_1000002881_wxe4kc.svg"
            width={25}
            height={25}
            alt="Dash"
            className="w-[700px] object-cover"
          />
          <div className="absolute top-[8rem] right-[6rem] flex flex-col gap-5  text-white">
            <p className="text-[12px]">We Provides</p>
            <div className="font-base text-3xl">
              <p>Reporting and</p>
              <p>Analytics</p>
            </div>
          </div>
        </div>
      </section>
      <section className="max-w-full mt-20 pt-14 pb-10 gap-5 flex flex-col justify-center items-center mx-auto bg-[#0f1235] text-white">
        <button className="bg-[#4256a6] text-white rounded-xl py-[6px] px-20  text-sm">
          Benefit of alaba SP
        </button>
        <Image
          src=" https://res.cloudinary.com/drtzfu730/image/upload/v1725091193/Group_1000002858_uflffo.svg"
          width={25}
          height={25}
          alt="Dash"
          className="w-[350px] md:w-[730px]"
        />
        <Image
          src=" https://res.cloudinary.com/drtzfu730/image/upload/v1725091628/Adjust_iPad_Pro_Mockup_1_xmicbs.svg"
          width={25}
          height={25}
          alt="Dash"
          className="w-[700px] md:w-[900px] transform scale-150 md:scale-105"
        />
      </section>
      <section className="bg-[#eccb8fe4] pt-16 pb-10 md:pr-20 gap-20 md:py-40 flex flex-col md:flex-row justify-center items-center">
        <Image
          src=" https://res.cloudinary.com/drtzfu730/image/upload/v1725094760/phone_with_shadow_2x_1_1_otrx7m.svg"
          width={25}
          height={25}
          alt="Dash"
          className="w-[270px] md:w-[350px] transform scale-150"
        />
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
                  className="transform scale-150"
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
                  className="transform scale-150"
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
      <section className="max-w-[1100px] mx-auto mt-32 flex flex-col gap-7 justify-center items-center">
        <button className="bg-[#0f1235] text-white px-20 py-[6px] rounded-lg">
          Some testimonial
        </button>
        <div className="md:block hidden text-center text-[23px] text-[#0f1235]">
          <p>Some of our customers has a lot to say about</p>
          <p>the AlabaSP application</p>
        </div>
        <div className="md:hidden text-center text-[23px] text-[#0f1235]">
          <p>
            Some of our customers has a lot to say about the AlabaSP application
          </p>
        </div>
        {/* <Carousel
          showThumbs={false}
          autoPlay={true}
          transitionTime={1}
          infiniteLoop={true}
          showStatus={false}
          showArrows={false}
          className={styles.carousel}
          dynamicHeight={true}
        > */}
        <div className="grid grid-cols-1 md:grid-cols-3 px-3 gap-5 mt-10">
          <div className="bg-[#efefee] shadow-xl px-10 py-10 flex flex-col gap-10 rounded-lg">
            <div className="flex flex-row gap-5 justify-between items-center">
              <p className="font-bold">Joel Komodo</p>
              <Image
                src="https://res.cloudinary.com/drtzfu730/image/upload/v1725696675/Mask_group_w7vgrg.svg"
                width={16}
                height={16}
                alt="Dash"
                className="w-[50px]"
              />
            </div>
            <div className="flex">
              <p className="w-[300px]">
                What ever you hear from about Alaba SP, Just take it as it is. A
                very good app for inventory
              </p>
              <div></div>
            </div>
          </div>
          <div className="bg-[#efefee] shadow-xl px-10 py-10 flex flex-col gap-10 rounded-lg">
            <div className="flex flex-row gap-5 justify-between items-center">
              <p className="font-bold">Joel Komodo</p>
              <Image
                src="https://res.cloudinary.com/drtzfu730/image/upload/v1725696675/Mask_group_w7vgrg.svg"
                width={16}
                height={16}
                alt="Dash"
                className="w-[50px]"
              />
            </div>
            <div className="flex">
              <p className="w-[300px]">
                What ever you hear from about Alaba SP, Just take it as it is. A
                very good app for inventory
              </p>
              <div></div>
            </div>
          </div>
          <div className="bg-[#efefee] shadow-xl px-10 py-10 flex flex-col gap-10 rounded-lg">
            <div className="flex flex-row gap-5 justify-between items-center">
              <p className="font-bold">Joel Komodo</p>
              <Image
                src="https://res.cloudinary.com/drtzfu730/image/upload/v1725696675/Mask_group_w7vgrg.svg"
                width={16}
                height={16}
                alt="Dash"
                className="w-[50px]"
              />
            </div>
            <div className="flex">
              <p className="w-[300px]">
                What ever you hear from about Alaba SP, Just take it as it is. A
                very good app for inventory
              </p>
              <div></div>
            </div>
          </div>
        </div>
        {/* </Carousel> */}
      </section>
      <section className="max-w-[1100px] mx-auto flex flex-col gap-5 justify-center items-center mt-32">
        <p className="text-center text-[25px] text-[#0f1235]">
          Subscribe to our newsletter
        </p>
        <div className="flex flex-col md:flex-row gap-5">
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
              className="w-[150px] "
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
                  className="w-[16px] "
                />
                <Image
                  src="https://res.cloudinary.com/drtzfu730/image/upload/v1725706946/Vector_1_xc3woa.svg"
                  width={25}
                  height={25}
                  alt="Dash"
                  className="w-[16px] "
                />
                <Image
                  src="https://res.cloudinary.com/drtzfu730/image/upload/v1725701465/Group_1000002869_rmod4v.svg"
                  width={25}
                  height={25}
                  alt="Dash"
                  className="w-[16px] "
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
          <div className="justify-center items-center col-span-9 md:col-span-4 md:hidden flex flex-col gap-10 md:gap-32">
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
                  className="w-[16px] "
                />
                <Image
                  src="https://res.cloudinary.com/drtzfu730/image/upload/v1725706946/Vector_1_xc3woa.svg"
                  width={25}
                  height={25}
                  alt="Dash"
                  className="w-[16px] "
                />
                <Image
                  src="https://res.cloudinary.com/drtzfu730/image/upload/v1725701465/Group_1000002869_rmod4v.svg"
                  width={25}
                  height={25}
                  alt="Dash"
                  className="w-[16px] "
                />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

export default LandingPage;
