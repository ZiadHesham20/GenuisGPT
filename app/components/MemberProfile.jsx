import React from 'react'
import { UserButton, auth, currentUser } from "@clerk/nextjs";


export default async function MemberProfile() {
  const user = await currentUser()
  
  return (
    <div className='px-4 flex items-center gap-2'>
      <UserButton afterSignOutUrl='/'/>
      
    </div>
  )
}
