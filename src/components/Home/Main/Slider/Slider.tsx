"use client";
import React from "react";
import "./slider.scss";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { featured } from "@/data";
import Image from "next/image";

const Slider = () => {
  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={10}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          350: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          650: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          980: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          1369: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
        }}
        modules={[Pagination, Autoplay]}
        className="swiper-container"
      >
        {featured.map((item) => (
          <SwiperSlide key={item.id} className="swiper-box">
            <Image src={item.image} alt={item.title} className="slider-image" />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Slider;
