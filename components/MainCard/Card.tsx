"use client"

import Image from "next/image"
/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/navigation"

interface CardProps {
    id: number
    img: string
    title: string
    tags: string[]
    index: number
}

export default function Card(props: CardProps) {

    const router = useRouter()

    function handleClick() {
        router.push(`/projects/${props.id}`)
    }

    return (
        <div className={`flex flex-col justify-start items-start gap-1 break-inside-avoid cursor-pointer ${props.index != 0 && "mt-6"} ${props.index == 3 ? "mb-[100rem]" : ""}`} onClick={() => handleClick()}>
            <Image src={props.img} alt="hero" width={100} height={100} className="mb-1 min-w-full min-h-full transition-opacity opacity-0 duration-100" onLoad={(event) => event.currentTarget.classList.remove("opacity-0")} quality={100} priority unoptimized />
            <span className="text-[1rem] font-medium">
                {props.title} 
            </span>
            <div className="font-inter text-gray-1 text-[0.875rem] flex">
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