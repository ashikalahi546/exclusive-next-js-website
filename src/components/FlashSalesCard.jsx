"use client";
import React from "react";
import SectionTitle from "./SectionTitle";
import CountdownTimer from "./CountdownTimer";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { flashSalesData } from "./data/FlashSalesData";
import { LoveTwoIcon, EyeIcon } from "@/icons/Icons";
import Image from "next/image";


const FlashSalesCard = () => {
  return (
    <div className="mb-[60px] ">
      <SectionTitle heading={""} subHeading={"Today’s"}></SectionTitle>
      <div>
        <h1 className="text-[36px] leading-[48px] font-semibold mt-6">
          Flash Sales
        </h1>
        {/* <CountdownTimer/> */}
      </div>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        className="mySwiper"
      >
        {flashSalesData?.map((item) => (
          <SwiperSlide key={item?.id} className="mt-10 ">
           <div>
           <div className="group relative">
              <div className="bg-[#F5F5F5] h-[250px] pt-3 p-3 rounded ">
                <div className="flex justify-between items-center">
                  <div className="bg-[#DB4444] w-[55px] h-[26px] rounded text-white flex items-center justify-center">
                    <span className="text-xs leading-[18px]">
                      {item?.discount}
                    </span>
                  </div>
                  <div className="size-[34px] bg-white rounded-full flex items-center justify-center cursor-pointer">
                    <LoveTwoIcon />
                  </div>
                </div>
                <div className="flex  justify-end pt-[11px]">
                  <Image
                    src={item?.image}
                    width={172}
                    height={152}
                    alt="loading...?"
                    className=" cursor-pointer"
                  />
                  <div className="size-[34px] bg-white rounded-full flex items-center justify-center cursor-pointer ml-1">
                    <EyeIcon />
                  </div>
                </div>
              </div>
              <div className="w-full h-[41px] bg-black invisible group-hover:visible absolute bottom-0 rounded-b  flex items-center justify-center">
                <button className="text-white font-medium leading-6 ">
                  Add To Cart
                </button>
              </div>
            </div>
            <h3 className="mt-4 leading-6 font-medium">{item?.name}</h3>
            <div className="flex items-center gap-x-3">
              <h3 className="text-[#DB4444] font-medium leading-6 my-2 text-base">{item?.price}</h3>
              <h3 className="opacity-50 font-medium leading-6 my-2 text-base line-through">{item?.discountPrice}</h3>
            </div>
           </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default FlashSalesCard;
