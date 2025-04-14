"use client"
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

    function handleClick() {
        if(props.id == 2 || props.id == 3 || props.id == 6 || props.id == 13) {
            return
        }
        router.push(`/projects/${props.id}`)
    }
    
    useEffect(() => {
      setMounted(true)
    }, [])
  
    if (!mounted) return null

    return (
        <div className={`flex flex-col justify-start items-start gap-1 break-inside-avoid ${props.id == 2 || props.id == 3 || props.id == 6 || props.id == 13 ? "cursor-not-allowed" : "cursor-pointer"} 
            ${props.index != 0 && "lg:mt-6"} ${props.index == 3 ? "2xl:mb-[50rem] lg:mb-[50rem]" : ""}`} 
            onClick={() => handleClick()}>
            <div className="relative">    
                <Image src={props.img} alt="project" width={1000} height={1000} className={`mb-1 lg:min-w-full lg:min-h-full lg:h-full h-[376px] rounded-xl lg:rounded-none object-cover min-w-full transition-opacity opacity-0 duration-200 ${[1, 3].includes(props.id) ? "object-top" : "object-center"} lg:object-center`} 
                    onLoad={(event) => event.currentTarget.classList.remove("opacity-0")} quality={100} priority loading="eager"  />
                {(props.id == 2 || props.id == 3 || props.id == 6 || props.id == 13) &&
                    <div className="absolute top-0 left-0 w-full h-full text-white flex justify-center items-center flex-col">
                        <span className="font-grotesk font-bold text-lg 2xl:text-3xl">Not ready yet</span>
                        <p className="font-grotesk text-sm 2xl:text-xl">I’m doing my best to finalize this project</p>
                    </div>
                }
            </div>
            <span className="lg:text-[1rem] text-sm font-medium">
                {props.title} 
            </span>
            <div className="font-inter text-gray-1 lg:text-[0.875rem] text-[0.75rem] flex flex-wrap">
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