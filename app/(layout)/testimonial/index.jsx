"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Testimonial = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
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
          Some of our customers have a lot to say about the Alaba SP Application
        </p>
      </div>
    </section>
  );
};

export default Testimonial;
