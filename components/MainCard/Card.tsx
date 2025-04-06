"use client"
/* eslint-disable @next/next/no-img-element */

import { useTheme } from "next-themes"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

interface CardProps {
    id: number;
    img: string;
    imgDark?: string;
    title: string;
    tags: string[];
    index: number;
}

export default function Card(props: CardProps) {
    
    const [mounted, setMounted] = useState(false)

    const router = useRouter()
    const { resolvedTheme } = useTheme()

    function handleClick() {
        router.push(`/projects/${props.id}`)
    }
    
    function imgSource() {
        if (resolvedTheme == "dark" && (props.index == 2 || props.index == 5)) {
            return props.imgDark
        } else {
            return props.img
        }
    }

    const image = imgSource() || ""

    useEffect(() => {
      setMounted(true)
    }, [])
  
    if (!mounted) return null

    return (
        <div className={`flex flex-col justify-start items-start gap-1 break-inside-avoid cursor-pointer ${props.index != 0 && "lg:mt-6"} ${props.index == 3 ? "lg:mb-[100rem]" : ""}`} onClick={() => handleClick()}>
            <Image src={image} alt="hero" width={100} height={100} className={`mb-1 lg:min-w-full lg:min-h-full lg:h-full h-[376px] rounded-xl lg:rounded-none object-cover min-w-full transition-opacity opacity-0 duration-200 ${props.id === 1 || 3 || 6 ? "object-top" : ""}`} onLoad={(event) => event.currentTarget.classList.remove("opacity-0")} quality={100} priority loading="eager" unoptimized />
            <span className="lg:text-[1rem] text-sm font-medium">
                {props.title} 
            </span>
            <div className="font-inter text-gray-1 lg:text-[0.875rem] text-[0.75rem] flex">
                {props.tags.map((tag, index) => {

                    if (index === props.tags.length - 1) {
                        return (
                            <span key={index} className="flex">
                                {tag}
                            </span>
                        )
                    }
                    return (
                        <span key={index} className="flex items-center">
                            {tag}
                            <span className="w-[3px] h-[3px] dark:bg-white bg-black mx-[6.5px] rounded-full"></span>
                        </span>
                    )
                })}
            </div>
        </div>
    )
}