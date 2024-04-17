import React from 'react'
import Sidebar from '../components/Sidebar'

import Navbar from '../components/Navbar';
import ExpandToggle from '../components/ExpandToggle';

export default function layout({children}) {
  return (
    <div className='drawer lg:drawer-open'>
      <input type="checkbox" id='my-drawer-2' className='drawer-toggle'/>
      {/* Content */}
      <div className='drawer-content'>
        {/* Toggel Button */}
        <ExpandToggle/>
        {/* navbar */}
        <div className='relative'>
        <Navbar/>
        </div>

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
