import React from 'react'
import Link from "next/link";
import { IoChatbubbleEllipses } from "react-icons/io5";
import { MdOutlineTravelExplore } from "react-icons/md";

export default function NavLinks() {
  return (
    <ul className='menu ps-1 w-full'>
      {/* <li>
        <Link className="capitalize bg-base-300" href='/chat'>
          Chat
        </Link>
      </li> */}
      


      <li>
        <Link className="capitalize bg-base-300" href='/chat'>
        <IoChatbubbleEllipses /> <span className='lg:hidden' id='navlinkLable'>Chat</span>
        </Link>
      </li> 


      <li>
        <Link className="capitalize my-3 bg-base-300" href='/tours'>
        <MdOutlineTravelExplore /><span className='lg:hidden' id='navlinkLable'>Tours</span>
        </Link>
      </li> 
      {/* <li>
        <Link className="capitalize my-3 bg-base-300" href='/tours'>
          Tours
        </Link>
      </li> */}
     
    </ul>
  )
}
