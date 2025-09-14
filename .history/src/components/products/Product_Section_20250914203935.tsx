"use client"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination, Navigation } from "swiper/modules"

// Swiper styles import korte hobe
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import Image from "next/image"
import { image1, image2, image3, image4 } from "@/assets"

export default function ProductImageSlider() {
  return (
    <div className="w-full mt-22">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500, 
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="rounded-xl shadow-lg"
      >
        <SwiperSlide>
          <Image
            src={image1}
            alt="Slide 1"
            width={1000}
            height={600}
           className="w-full h-[580px] object-cover object-top rounded-xl"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={image2}
            alt="Slide 2"
            width={1000}
            height={400}
           className="w-full h-[580px] object-cover object-top rounded-xl"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={image3}
            alt="Slide 3"
            width={1000}
            height={400}
            className="w-full h-[580px] object-cover object-top rounded-xl"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={image4}
            alt="Slide4"
            width={1000}
            height={400}
            className="w-full h-[580px] object-cover object-top rounded-xl"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
