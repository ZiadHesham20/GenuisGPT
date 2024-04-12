import React from 'react'
import Sidebar from '../components/Sidebar'
import { CiMenuBurger } from "react-icons/ci";

export default function layout({children}) {
  return (
    <div className='drawer lg:drawer-open'>
      <input type="checkbox" id='my-drawer-2' className='drawer-toggle'/>
      {/* Content */}
      <div className='drawer-content'>
        {/* Toggel Button */}
        <label htmlFor='my-drawer-2' className='drawer-button lg:hidden fixed top-6 right-6'>
          <CiMenuBurger className='w-8 h-8 text-primary'/>
        </label>
        {/* appeared content */}
        <div className='px-8 py-12 min-h-screen'>
          {children}
        </div>
      </div>
      {/* Sidebar */}
      <div className='drawer-side'>
        <label
         htmlFor='my-drawer-2'
         aria-label='close sidebar'
         className='drawer-overlay'
         >
        </label>
        <Sidebar/>
      </div>
    </div>
  )
}
