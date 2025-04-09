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
        <div
            className={`p-3 flex md:flex-row flex-col-reverse md:justify-start gap-2 md:gap-0 justify-center items-center bg-[#F4F4F4] dark:bg-[#232323] md:min-w-[350px] min-w-[150px] rounded-xl cursor-pointer ${
                props.currentId === props.id ? "border-[1px]" : ""
            }`}
            style={{
                borderColor: props.currentId === props.id ? getBorderColorById(props.id) : undefined,
            }}
            onClick={handleClick}
        >
            <Image src={props.logo} alt="" width={56} height={56} unoptimized/>
            <div className="flex flex-col gap-[6px] md:ml-2">
                <span className="font-medium text-sm min-w-max text-center md:text-left">{props.title}</span>
                <div className="font-inter text-[#878392] text-[12px] md:flex flex-wrap hidden">
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
            <p id="show-more" className="text-[#878392] hover:text-black dark:hover:text-[white] duration-100 md:block hidden">
                Show More
            </p>
        </div>
    )
}
