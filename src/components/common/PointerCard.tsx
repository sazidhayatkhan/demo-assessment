import React from 'react'
import { PointerValue, Section } from '@/types/section'
import { FaCheck } from "react-icons/fa6";

type Props = {
    data:Section
}

const PointerCard = ({data}: Props) => {
  const pointers:PointerValue[] = data?.values
  console.log("WWWW",pointers);
  
  return (
    <div>
        <h2 className='mb-4 text-xl font-semibold md:text-2xl'>{data?.name}</h2>
        <div className='rounded-md md:border border-slate-300'>
            <div className='pt-2 md:p-6'>
                <ul className='grid grid-cols-1 gap-2 md:grid-cols-[1fr_1fr] md:gap-4'>
                    {
                        pointers?.map((item:PointerValue,i:number)=>(
                            <li key={i} className='flex items-start gap-2 mb-2'>
                                <span className='text-blue-500 mt-[3px]'><FaCheck/></span>
                                <div className='flex-1'>
                                    {item?.text}
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </div>

        </div>
    </div>
  )
}

export default PointerCard