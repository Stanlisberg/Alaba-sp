"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Newsletter = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
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
  );
};

export default Newsletter;
