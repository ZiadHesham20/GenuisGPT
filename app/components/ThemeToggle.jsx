'use client'
import React, { useState } from 'react'
import { IoIosMoon } from "react-icons/io";
import { FaSun } from "react-icons/fa";

const themes = {
  winter:'winter',
  night:'night'
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState(themes.winter)

  const toggleTheme = ()=>{
    const newTheme = theme == themes.winter? themes.night : themes.winter
    document.documentElement.setAttribute('data-theme',newTheme)
    setTheme(newTheme)
  }

  return (
    <button onClick={toggleTheme} className='btn btn-sm btn-outline'>
{theme == 'winter'?<FaSun className='h-4 w-4'/>:<IoIosMoon className='h-4 w-4'/>}
    </button>
  )
}
