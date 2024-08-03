"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import Apple from "/public/images/apple.png";
import Phone from "/public/images/phone.png";
import { RightArrowIcon } from "@/icons/Icons";

const Slider = () => {
  return (
    <div className="w-[892px] ml-[45px]  mt-10">
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Navigation, Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide className=" bg-black w-full   text-[#FAFAFA] pl-16 ">
          <div className="h-[344px] flex  items-center">
            <div>
              <div className="flex items-center gap-6">
                <Image src={Apple} alt="loading...?" />
                <p>iPhone 14 Series</p>
              </div>
              <h1 className="text-5xl font-semibold mt-5 leading-[60px]">
                Up to 10% off Voucher
              </h1>
              <button className="flex items-center gap-2 font-medium   mt-[22px] group ">
                <span className="border-b leading-6">Shop Now </span>
                <span className="group-hover:translate-x-2 translate-x-0  duration-200">
                  <RightArrowIcon />
                </span>
              </button>
            </div>
            <Image src={Phone} alt="loading...?"/>
          </div>
        </SwiperSlide>
        <SwiperSlide className=" bg-black w-full   text-[#FAFAFA] pl-16 ">
          <div className="h-[344px] flex  items-center">
            <div>
              <div className="flex items-center gap-6">
                <Image src={Apple} alt="loading...?" />
                <p>iPhone 14 Series</p>
              </div>
              <h1 className="text-5xl font-semibold mt-5 leading-[60px]">
                Up to 10% off Voucher
              </h1>
              <button className="flex items-center gap-2 font-medium   mt-[22px] group ">
                <span className="border-b leading-6">Shop Now </span>
                <span className="group-hover:translate-x-2 translate-x-0  duration-200">
                  <RightArrowIcon />
                </span>
              </button>
            </div>
            <Image src={Phone} alt="loading...?"/>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
