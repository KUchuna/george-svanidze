"use client"
/* eslint-disable @next/next/no-img-element */
import useEmblaCarousel from "embla-carousel-react"
import carouselData from "@/public/lib/carouselData.js"
import { useEffect, useState } from "react"

export default function Carousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ dragFree: true })
  const [slideIndex, setSlideIndex] = useState(0)

  let lastScrollY = window.scrollY 

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY
      const deltaY = currentScroll - lastScrollY

      if (currentScroll < 60) {
        setSlideIndex(0)
      }

      if (Math.abs(deltaY) >= 90) {
          setSlideIndex((prev) => {return prev + (deltaY > 0 ? 1 : -1)})
        lastScrollY = currentScroll
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (emblaApi) emblaApi.scrollTo(slideIndex)
  }, [slideIndex, emblaApi])

  return (
    <section className="w-full mt-16">
      <div className="overflow-hidden relative h-[656px]" ref={emblaRef}>
        <div className="flex absolute h-full w-full gap-2">
          {carouselData.map((img, index) => (
            <div className={`flex-[0_0_45%] ${index === 0 && "ml-2"}`} key={index}>
              <img
                src={img.img}
                alt="carousel image"
                className="h-full w-full object-cover rounded-xl"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
