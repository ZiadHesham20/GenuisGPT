import React from 'react'
import { SiOpenaigym } from "react-icons/si";
import ThemeToggle from './ThemeToggle';

export default function SidebarHeader() {
  return (
    <div className='flex items-center mb-4 gap-4 px-4'>
      <SiOpenaigym id='logo'  className='w-10 h-10 rounded-badge text-base-300 p-2' />
      <h2 className='text-xl font-extrabold mr-auto headTitle'>GPTGenius</h2>
      <ThemeToggle/>
    </div>
  )
}