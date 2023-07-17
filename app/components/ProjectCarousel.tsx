"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

import Image from "next/image"
import styles from "./css/ProjectCarousel.module.css"

interface CarouselProps {
  imageNames: string[]
  mobile: boolean
}

export default function ProjectCarousel({ imageNames, mobile }: CarouselProps) {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      slidesPerView={1}
      centeredSlides={true}
      navigation
      pagination={{ clickable: true }}
      speed={1000}
    >
      {imageNames.map((imageName, i) => (
        <SwiperSlide key={i}>
          <div
            className={
              mobile ? styles.carouselMobileImage : styles.carouselImage
            }
          >
            <Image
              src={`/projectImage/${imageName}.gif`}
              alt={`프로젝트 ${i + 1}번째 소개 이미지`}
              fill={true}
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
