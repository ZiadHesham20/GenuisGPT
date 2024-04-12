import React from 'react'
import SidebarHeader from './SidebarHeader'
import NavLinks from './NavLinks'
import MemberProfile from './MemberProfile'

export default function Sidebar() {
  return (
    // #FFFFFF
    <div className='px-4 bg-base-300 w-80 min-h-full py-12 grid grid-rows-[auto,1fr,auto]'>
      {/* First row */}
      <SidebarHeader/>
{/* Second row */}
<NavLinks/>
{/* Third row */}
<MemberProfile/>
    </div>
  )
}
