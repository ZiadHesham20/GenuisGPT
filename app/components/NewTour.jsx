'use client'
import React, { useState } from 'react'
import TourInfo from './TourInfo'
import { useMutation } from '@tanstack/react-query'
import { generateTourImage, generateTourResponse } from '@/utils/actions'
import Image from 'next/image'
import toast from 'react-hot-toast'

export default function NewTour() {

  const [image, setImage] = useState(null)

 const {mutate,isPending,data:tour} = useMutation({
    mutationFn: async(destination)=>{
      const newTour = await generateTourResponse(destination)
      if(newTour){
        return newTour
      }
      toast.error('No matching city found ...')
      return null
    }
  })

  async function getImages(destination){
    const {results} = await generateTourImage(destination)
    const tourImage = results[0]?.urls?.raw;
    setImage(tourImage);
  }

  

  const handleSubmit = (e) =>{
    e.preventDefault()
    const formData = new FormData(e.target)
    const destination = Object.fromEntries(formData.entries())
    mutate(destination)
    getImages(destination)
  }


  return <>
  <form onSubmit={handleSubmit} className='max-w-2xl'>
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
      {/* <button className='btn btn-primary join-item loading' type='submit'>
        Generate Tour
      </button> */}
      
{isPending?<button className="btn join-item">
  <span className="loading loading-spinner "></span>
  loading
</button>:<button className='btn btn-outline join-item' type='submit'>
        Generate Tour
      </button> }

    </div>
  </form>
  <div className='mt-16'>
  
    {image && tour? <Image src={image} width={300} height={300} className='rounded-xl shadow-xl mb-16 h-96 w-96 object-cover' alt={tour.title} priority/>:null}
    {tour?<TourInfo tour={tour}/>:null}
  </div>
  </>
}
