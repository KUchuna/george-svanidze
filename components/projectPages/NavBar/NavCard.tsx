"use client"

import Image from "next/image";
import { useRouter } from "next/navigation";
import {motion} from "motion/react";

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

    const getBorderColorById = (id: number) => {
        switch (id) {
            case 1:
                return "#00CCD6";
            case 2:
                return "#097C69";
            case 3:
                return "#FF4A26";
            case 4:
                return "#6CA5EA";
            case 5:
                return "#96DBEB";
            case 6:
                return "#496D84";
            case 7:
                return "#499439";
            case 8:
                return "#F54700";
            case 9:
                return "#73BD1A";
            case 10:
                return "#D4323D";
            case 11:
                return "#FFFFFF";
            case 12:
                return "#96DBEB";
            case 13:
                return "#E40048";
            default:
                return "black";
        }
    };

    return (
        <motion.div
            className={`md:p-3 p-1 flex flex-row justify-start items-center border-[1px] border-[white] dark:border-[#232323] bg-[#F4F4F4] dark:bg-[#232323] min-w-[330px] md:min-w-[350px] rounded-xl cursor-pointer h-fit ${
                props.currentId === props.id ? "border-[1px]" : ""
            } hover:bg-[#EBEBEB] dark:hover:bg-[#2D2D2D] transition-colors duration-300 `}
            style={{
                borderColor: props.currentId === props.id ? getBorderColorById(props.id) : undefined,
            }}
            onClick={handleClick}
            whileTap={{scale: 0.95}}
        >
            <Image src={props.logo} alt="" width={56} height={56} unoptimized/>
            <div className="flex flex-col gap-[6px] ml-2">
                <span className="font-medium text-sm min-w-max text-left">{props.title}</span>
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
        </motion.div>
    )
}
