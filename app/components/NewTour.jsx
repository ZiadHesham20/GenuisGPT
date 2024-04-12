'use client'
import React from 'react'
import TourInfo from './TourInfo'
import { useMutation } from '@tanstack/react-query'
import { generateTourResponse } from '@/utils/actions'
import toast from 'react-hot-toast'

export default function NewTour() {

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

  const handleSubmit = (e) =>{
    e.preventDefault()
    const formData = new FormData(e.target)
    const destination = Object.fromEntries(formData.entries())
    mutate(destination)
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
    {tour?<TourInfo tour={tour}/>:null}
  </div>
  </>
}
