import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";

const Remarks = () => {
  return (
    <section className="flex w-full gap-3 px-5 md:px-12 pt-5 mt-20">
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
                What ever you hear from about Alaba SP, Just take it as it is. A
                very good app for inventory
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
                What ever you hear from about Alaba SP, Just take it as it is. A
                very good app for inventory
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
                What ever you hear from about Alaba SP, Just take it as it is. A
                very good app for inventory
              </p>
              <div></div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Remarks;
