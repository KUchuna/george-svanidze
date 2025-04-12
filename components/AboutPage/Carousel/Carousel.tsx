"use client"
/* eslint-disable @next/next/no-img-element */
import useEmblaCarousel from "embla-carousel-react"
import carouselData from "@/public/lib/carouselData.js"
import Image from "next/image"


export default function Carousel() {
  const [emblaRef] = useEmblaCarousel({ dragFree: true})

  
  return (
    <section className="w-full mt-16">
      <div className="overflow-hidden relative 2xl:h-[752px] lg:h-[500px] md:h-[400px] h-[300px]" id="carousel" ref={emblaRef}>
        <div className="flex absolute h-full w-full gap-2">
          {carouselData.map((img, index) => (
            <div className={`lg:flex-[0_0_31%] md:flex-[0_0_45%] flex-[0_0_65%] 2xl:h-[752px] lg:h-[500px] md:h-[400px] h-[300px] relative ${index === 0 && "ml-1 md:ml-2"}`} key={index}>
              <Image
                src={img.img}
                alt="carousel image"
                className="object-cover rounded-xl"
                fill
                quality={100}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
