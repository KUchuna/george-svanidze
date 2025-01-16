"use client"

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import Image from 'next/image'

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false)
  const { setTheme, resolvedTheme } = useTheme()


  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  function handleThemeChange() {

    resolvedTheme === "light" ? setTheme("dark") : setTheme("light")

    console.log(resolvedTheme)
  }

  return (
    <div className="bg-[#232323] w-16 rounded-[32px] h-8 flex items-center px-1 cursor-pointer select-none" onClick={handleThemeChange}>
      <Image src="/SVGs/whiteball.svg" alt='switch' width={24} height={24} className={`transition-transform duration-150 ${resolvedTheme === "dark" ? "translate-x-full" : ""}`}/>
    </div>
  )
}

export default ThemeSwitch