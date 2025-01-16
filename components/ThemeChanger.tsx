"use client"

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { motion } from 'motion/react'


export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false)
  const { setTheme, resolvedTheme } = useTheme()


  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  function handleThemeChange() {

    if(resolvedTheme === "light") {
      setTheme("dark")
    } else {
      setTheme("light")
    }

  }

  return (
    <div className={`bg-[#232323] w-16 rounded-[32px] flex items-center h-8 px-1 cursor-pointer select-none ${resolvedTheme === "dark" ? "justify-end" : "justify-start"}`} onClick={() => handleThemeChange()}>
      <motion.div 
        className='w-6 h-6 rounded-full bg-white' 
        layout
        transition={{
          type: "spring",
          duration: 0.2,
          bounce: 0.2,
        }}
      />
    </div>
  )
}