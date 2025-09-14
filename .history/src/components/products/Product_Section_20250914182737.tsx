"use client"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination, Navigation } from "swiper/modules"

// Swiper styles import korte hobe
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import Image from "next/image"

export default function AutoImageSlider() {
  return (
    <div className="w-full max-w-3xl mx-auto">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500, // 2.5 second por por slide change hobe
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
            src="https://picsum.photos/id/1011/800/400"
            alt="Slide 1"
            width={800}
            
            className="w-full h-64 object-cover rounded-xl"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="https://picsum.photos/id/1012/800/400"
            alt="Slide 2"
            className="w-full h-64 object-cover rounded-xl"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://picsum.photos/id/1015/800/400"
            alt="Slide 3"
            className="w-full h-64 object-cover rounded-xl"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
