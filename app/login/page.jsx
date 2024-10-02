import Image from "next/image";
import Link from "next/link";
import React from "react";

function LandingPage() {
  return (
    <main className="max-w-full mx-auto">
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
        <div className="hidden text-sm font-bold md:flex flex-row text-[#0f1235] gap-6 justify-between items-center ">
          <div className="cursor-pointer">How we work</div>
          <div className="cursor-pointer">Sign up</div>
          <Link href="/">
            <button className="border-2 border-[#0f1235] py-1 px-5 rounded-lg">
              Home
            </button>
          </Link>
        </div>
      </nav>
      <section className=" relative max-w-[600px] flex justify-center border py-20 border-black rounded-lg mx-4 md:mx-auto">
        <Image
          src="https://res.cloudinary.com/drtzfu730/image/upload/v1726908780/Group_1000002872_1_hlxt17.svg"
          width={25}
          height={25}
          alt="Dash"
          className="w-[285px] hidden md:block absolute top-[18px] left-[-130px]"
        />
        <div className="w-[90%] md:w-[55%] md:ml-[110px]">
          <div className="flex flex-col gap-2 justify-center">
            <div className="text-center flex flex-col gap-2">
              <p className="font-bold text-[27px]">Welcome back</p>
              <p className="font-normal text-[14px]">Login to your dashboard</p>
            </div>

            <form className="flex flex-col gap-14">
              <div className="flex flex-col gap-2">
                <input
                  className="py-3 px-6 bg-[#f0fbff] text-[0.8rem] rounded-lg border border-gray-300"
                  type="text"
                  placeholder="Email"
                />
                <input
                  className="py-3 px-6 bg-[#ececec] text-[0.8rem] rounded-lg border border-gray-300"
                  type="text"
                  placeholder="Password"
                />
              </div>
              <button className="py-3 px-6 bg-[#0f1235] text-white text-[0.8rem] rounded-lg border border-gray-300">
                Login
              </button>
            </form>
            <p className="text-end text-[13px] text-[#979797]">
              Don't have an account? <span className="font-bold">Sign up.</span>
            </p>
          </div>
        </div>
      </section>
      <footer className="max-w-full px-32 custom mt-32 ">
        <div className="grid grid-cols-12 w-full md:max-w-[1100px] px-5 mx-auto text-[12px] pb-10 md:pb-20 gap-10">
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
