"use client"
import data from "@/public/lib/projectData.js"
import NavCard from "./NavCard"
import useEmblaCarousel from "embla-carousel-react"
import {arrayMoveImmutable} from 'array-move';
import { useMotionValueEvent, useScroll, motion } from "motion/react";
import { useState } from "react";


export default function NavCarousel({id}: {id: number}) {

    const [emblaRef] = useEmblaCarousel({ dragFree: true})

    const newData = arrayMoveImmutable(data, id-1, 0)

    const { scrollY } = useScroll()
    const [scrollDirection, setScrollDirection] = useState("up")
    
    useMotionValueEvent(scrollY, "change", (current) => {
      const diff = current - (scrollY.getPrevious() ?? 0)
      setScrollDirection(diff > 0 ? "down" : "up")
    })

    return (
        <motion.nav
            className="px-1 pb-2 pt-3 dark:bg-[#141414] fixed w-full bg-white z-40 mt-[-1rem] md:mt-0"
            initial={{ y: 0 }}
            animate={{ y: scrollDirection === "down" ? 0 : "8rem" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
        >
            <div className="w-full h-fit relative overflow-hidden select-none" ref={emblaRef}>
                <div className="flex gap-2 w-full">
                {newData.map((card, index) => (
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
        </motion.nav>
    )
}