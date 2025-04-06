"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";


export default function NavigationButtons() {

    const pathName = usePathname()

    return (
        <>
            <span className="text-right font-inter text-[0.75rem] lg:text-[1rem]">
                    <Link href="/" className={`${pathName === '/' ? "font-medium" : "text-gray-1"}`}>Projects</Link>
                    <br />
                    <Link href="/about" className={`${pathName === '/about' ? "font-medium" : "text-gray-1"}`}>About</Link>
                </span>
        </>
    )
} 