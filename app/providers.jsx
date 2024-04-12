'use client';
import {QueryClient,QueryClientProvider} from '@tanstack/react-query';
import React, { useState } from 'react'
import {Toaster} from 'react-hot-toast';


export default function Providers({children}) {
  const [queryClient] = useState(
    ()=>
    new QueryClient({
      defaultOptions:{
        queries:{
          staleTime: 60 * 1000
        }
      }
    })
  )

  return <>
  <QueryClientProvider client={queryClient}>
  <Toaster position='top-center'/>
  {children}
  </QueryClientProvider>
  
  </>
}
