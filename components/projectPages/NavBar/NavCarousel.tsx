"use client"
import data from "@/public/lib/projectData.js"
import NavCard from "./NavCard"
import useEmblaCarousel from "embla-carousel-react"

export default function NavCarousel({id}: {id: number}) {

    const [emblaRef] = useEmblaCarousel({ dragFree: true})

    return (
        <nav className="px-1 md:py-2 py-3 h-max dark:bg-[#141414] bg-white">
            <div className="h-max w-full relative overflow-hidden select-none" ref={emblaRef}>
                <div className="flex gap-2 h-max w-full">
                {data.map((card, index) => (
                    <NavCard 
                    key={index}
                    currentId={id}
                    id={card.id}
                    index={index}
                    logo={card.logo}
                    title={card.title}
                    tags={card.tags}
                    />
                ))}
                </div>
            </div>
        </nav>
    )
}