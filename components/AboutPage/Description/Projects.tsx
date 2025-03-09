/* eslint-disable @next/next/no-img-element */
"use client"
import aboutProjects from "@/public/lib/aboutProjects.js"
import { useTheme } from 'next-themes'
import { useEffect, useState } from "react"

export default function Projects() {

    const [mounted, setMounted] = useState(false)
      const { resolvedTheme } = useTheme()
    
    
      useEffect(() => {
        setMounted(true)
      }, [])
    
      if (!mounted) return null

    return (
        <>
            {aboutProjects.map((project, index) => (
                <div key={index} className="flex flex-col font-grotesk">
                    <img src={resolvedTheme == "dark" ? project.imgDark : project.img} alt="project image" className="h-[80px] w-[80px] mb-4"/>
                    <span className="font-bold text-lg">{project.title}</span>
                    <span className="font-bold text-lg">{project.date}</span>
                    <span className="font-bold text-lg">{project.region}</span>
                    <div className="flex flex-col gap-4 text-gray-4 font-inter mt-6">
                        <p>{project.p1}</p>
                        <p>{project.p2}</p>
                    </div>
                </div>
        ))}
       </>
    )
}