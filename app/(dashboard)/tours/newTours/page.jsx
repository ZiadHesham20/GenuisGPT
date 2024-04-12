
import Chat from '@/app/components/Chat'
import React from 'react';
import {dehydrate,HydrationBoundary,QueryClient} from '@tanstack/react-query';
import NewTour from '@/app/components/NewTour';

export default function NewTourPage() {
  const queryClient = new QueryClient();
  return <>
<HydrationBoundary state={dehydrate(queryClient)}>
<NewTour/>
</HydrationBoundary>
      </>
      
    
  
}
