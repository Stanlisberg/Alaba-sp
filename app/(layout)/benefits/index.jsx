"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

const Benefits = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
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
  );
};

export default Benefits;
