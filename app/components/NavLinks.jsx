import React from 'react'
import Link from "next/link";

export default function NavLinks() {
  return (
    <ul className='menu '>
      <li>
        <Link className="capitalize border border-base-100 bg-base-200" href='/chat'>
          Chat
        </Link>
      </li>
      
      <li>
        <Link className="capitalize border border-base-100 my-4 bg-base-200" href='/tours'>
          Tours
        </Link>
      </li>
     
    </ul>
  )
}
