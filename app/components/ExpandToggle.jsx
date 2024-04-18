'use client'
import React, { useState } from 'react'
import { GoDash } from "react-icons/go";

export default function ExpandToggle() {
    const [expand, setExpand] = useState(true)

    function expandElements(){
        document.getElementById('sidebar').classList.replace('lg:w-14','lg:w-64')
        document.getElementById('navLinks').classList.replace('lg:w-5','lg:w-full')
        
        document.querySelectorAll("#navlinkLable").forEach((el)=>{
            el.classList.replace('lg:hidden','lg:block')
        })
         
    }
    function shrinkElements(){
        document.getElementById('sidebar').classList.replace('lg:w-64','lg:w-14')
        document.getElementById('navLinks').classList.replace('lg:w-full','lg:w-5')
        
        document.querySelectorAll("#navlinkLable").forEach((el)=>{
            el.classList.replace('lg:block','lg:hidden')
        })
    }

    function handleExpand() {
        setExpand(!expand)
        expand == true? expandElements():shrinkElements() 
    }
    
    
  return <>
    <label htmlFor='my-drawer-2' className=' drawer-button lg:sticky fixed top-1/2 left-0 ' >
        {/* {expand == false ?<MdArrowBackIos onClick={handleExpand}  className='expandIcon ms-1'/>:<MdArrowForwardIos onClick={handleExpand}  className='expandIcon '/>} */}
        <GoDash onClick={handleExpand}  className='expandIcon  rotate-90 text-4xl'/>
        
    </label>
  </>
}
