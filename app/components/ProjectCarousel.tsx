"use client"
import { register } from "swiper/element/bundle"
import { useEffect } from "react"
import Image from "next/image"
import styles from "./css/ProjectCarousel.module.css"

interface CarouselProps {
  imageNames: string[]
}

export default function ProjectCarousel({ imageNames }: CarouselProps) {
  // useEffect(() => {
  //   register()
  // }, [])
  // return (
  //   <swiper-container slides-per-view="1">
  //     {imageNames.map((imageName, i) => (
  //       <swiper-slide key={i}>
  //         <Image
  //           src={`/projectImage/${imageName}.avif`}
  //           alt={`프로젝트 ${i + 1}번째 소개 이미지`}
  //           fill={true}
  //         />
  //       </swiper-slide>
  //     ))}
  //   </swiper-container>
  // )
}
