import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

const AppStore = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
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
  );
};

export default AppStore;
