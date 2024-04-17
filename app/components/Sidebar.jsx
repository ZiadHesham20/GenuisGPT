
import React from 'react'
import SidebarHeader from './SidebarHeader'
import NavLinks from './NavLinks'
import MemberProfile from './MemberProfile'


export default function Sidebar() {
  
  return (
    // #FFFFFF
    <div className='px-4 lg:px-0 bg-base-200 w-64 lg:w-14 min-h-full py-5 grid grid-rows-[auto,1fr,auto] z-0' id='sidebar'>
      {/* First row */}
      <SidebarHeader/>
{/* Second row */}
<div className='w-full lg:w-5' id='navLinks'>
<NavLinks/>
</div>


    </div>
  )
}
