import { SignIn } from '@clerk/nextjs'
import React from 'react'

export default function SignInPage() {
  return (
   <div className='min-h-screen magicpattern flex justify-center items-center'>
     <SignIn/>
   </div>
  )
}
