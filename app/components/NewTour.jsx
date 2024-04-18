'use client'
import React, { useState } from 'react'
import TourInfo from './TourInfo'
import { useMutation } from '@tanstack/react-query'
import { generateTourImage, generateTourResponse } from '@/utils/actions'

import toast from 'react-hot-toast'

export default function NewTour() {
const [tour, setTour] = useState(null)
 

 const {mutate,isPending,data:tours} = useMutation({
    mutationFn: async(destination)=>{
      const newTour = await generateTourResponse(destination)
      if(newTour){
        setTour(JSON.parse(newTour));
        return newTour
      }
      toast.error('No matching city found ...')
      return null
    }
  })

 

  const getImage = useMutation({
    mutationFn: async(destination)=>{
      const images = await generateTourImage(destination)
      if(images){
        
        return images
      }
      toast.error('An error occured please try again')
      return null
    }
  })

  

  const handleSubmit = (e) =>{
    e.preventDefault()
    const formData = new FormData(e.target)
    const destination = Object.fromEntries(formData.entries())
    mutate(destination)
    getImage.mutate(destination)
   
    
  }


  return <>
  <form onSubmit={handleSubmit} className='max-w-2xl pt-4'>
    <h2 className='mb-4'>Select your dream destination</h2>
    <div className='join w-full'>
      <input type="text"
       className='input input-bordered join-item w-full'
       placeholder='city'
       name='city'
       required/>
      <input type="text" 
      className='input input-bordered join-item w-full'
      placeholder='country'
       name='country'
       required
      />
      
      
{isPending?<button className="btn join-item">
  <span className="loading loading-spinner "></span>
  Generating
</button>:<button className='btn btn-outline join-item' type='submit'>
        Generate Tour
      </button> }

    </div>
  </form>
  <div className='mt-16 '>
  
    
   
    <div className="carousel gap-5 rounded-box">
      {getImage.isPending ? <>
        <div className='carousel-item'><div className='rounded-xl skeleton shadow-xl mb-16 h-96 w-96 object-cover'></div></div>
      </>:null}

    {getImage.data && tour? getImage.data.results.map((elem,idx)=> <div className="carousel-item " key={idx}> <img src={elem.urls.regular} className='rounded-xl shadow-xl mb-16 h-96 w-96 object-cover' alt={elem.alt_description} /></div>):null}
   
 
</div>

    {tour != null?<TourInfo tour={tours}/>:null}
  </div>
  </>
}
