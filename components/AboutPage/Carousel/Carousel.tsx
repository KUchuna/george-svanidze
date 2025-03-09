"use client"
/* eslint-disable @next/next/no-img-element */
import useEmblaCarousel from "embla-carousel-react"
import carouselData from "@/public/lib/carouselData.js"


export default function Carousel() {
  const [emblaRef] = useEmblaCarousel({ dragFree: true })

  
  return (
    <section className="w-full mt-16">
      <div className="overflow-x-auto relative h-[656px]" id="carousel" ref={emblaRef}>
        <div className="flex absolute h-full w-full gap-2">
          {carouselData.map((img, index) => (
            <div className={`flex-[0_0_31%] ${index === 0 && "ml-2"}`} key={index}>
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
