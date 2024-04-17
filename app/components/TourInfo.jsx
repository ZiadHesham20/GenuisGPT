'use client'
import React from 'react'

export default function TourInfo({tour}) {
   
 
    
  return <>
  {tour != undefined?<div className='max-w-2xl'>
    <h1 className='text-4xl font-semibold mb-4'>{JSON.parse(tour).tour.title}</h1>
  <p className='leading-loose mb-6'>{JSON.parse(tour).tour.description}</p>
  <ul>
    {JSON.parse(tour).tour.stops.map((elem,idx)=> <li className='mb-4 bg-base-300 p-4 rounded-xl' key={idx}>
        <h4 className='font-semibold text-xl'>{elem.stop}</h4>
        <p>{elem.paragraph}</p>
    </li>)}
  </ul>
</div>:<div className='max-w-2xl skeleton'>
    <h1 className='text-4xl font-semibold mb-4 skeleton'></h1>
  <p className='leading-loose mb-6 skeleton'></p>
  <ul className='skeleton'>
  <li className='mb-4 skeleton bg-base-300 p-4 rounded-xl' >
        <h4 className='skeleton font-semibold text-xl'></h4>
        <p className='skeleton'></p>
    </li>
  </ul>
</div>}
  </>
  
}
