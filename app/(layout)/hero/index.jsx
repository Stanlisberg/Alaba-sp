import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
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
  );
};

export default Hero;
