'use client'
import React from 'react'

export default function TourInfo({tour}) {
    const {title, description,stops} = tour
    
  return (
    <div className='max-w-2xl'>
        <h1 className='text-4xl font-semibold mb-4'>{title}</h1>
      <p className='leading-loose mb-6'>{description}</p>
      <ul>
        {stops.map((elem,idx)=> <li className='mb-4 bg-base-300 p-4 rounded-xl' key={idx}>
            <h4 className='font-semibold text-xl'>{elem.stop}</h4>
            <p>{elem.paragraph}</p>
        </li>)}
      </ul>
    </div>
  )
}
