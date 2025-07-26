import React from 'react'
import { GroupJoinValue, Section } from '@/types/section'

type Props = {
    data:Section
}

const EngagementCard = ({data}: Props) => {
  const engagement:GroupJoinValue = data?.values[0]
  console.log("WWWW",engagement);
  
  return (
    <div className='flex gap-4 p-4 mb-8 overflow-hidden md:p-8 rounded-xl md:mb-12'>
        <div className='w-full md:w-1/2'>
            <p>img</p>
            <h2 className='text-xl font-semibold'>{engagement?.title}</h2>
            <p className='mt-2 text-base'></p>
            <button>download</button>
        </div>
        <div className='items-center hidden w-1/2 md:flex'>
            <p>img</p>
        </div>
    </div>
  )
}

export default EngagementCard