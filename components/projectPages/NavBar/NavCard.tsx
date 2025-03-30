"use client"

import Image from "next/image";
import { useRouter } from "next/navigation";

interface NavCardProps {
    index: number;
    id: number;
    currentId: number;
    title: string;
    logo: string;
    tags: string[];
}

export default function NavCard(props: NavCardProps) {

    const router = useRouter()

    function handleClick() {
        router.push(`/projects/${props.id}`)
    }

    return (
        <div 
            className={`${props.currentId == props.id ? "border-[1px] border-black dark:border-white" : ""} p-3 flex justify-start items-center bg-[#F4F4F4] dark:bg-[#232323] min-w-[350px] rounded-xl cursor-pointer`}
            onClick={handleClick}
        >
            <Image src={props.logo} alt="" width={56} height={56} unoptimized/>
            <div className="flex flex-col gap-[6px] ml-2">
                <span className="font-medium text-sm">{props.title}</span>
                <div className="font-inter text-[#878392] text-[12px] flex flex-wrap">
                   <div className="flex items-center">
                    {props.tags[0]} 
                    <span className="w-[3px] h-[3px] dark:bg-white bg-black mx-[6px] rounded-full"></span>
                   </div>
                   <div className="flex items-center">
                    {props.tags[1]} 
                    <span className="w-[3px] h-[3px] dark:bg-white bg-black mx-[6px] rounded-full"></span>
                   </div>
                   <br/>
                   <div className="flex items-center">
                    {props.tags[2]} 
                   </div>
                </div>
            </div>
            <p id="show-more" className="text-[#878392] hover:text-black dark:hover:text-[white] duration-100">
                Show More
            </p>
        </div>
    )
}
