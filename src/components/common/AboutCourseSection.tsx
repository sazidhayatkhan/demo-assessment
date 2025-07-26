import { Section } from '@/types/section'
import React from 'react'
import GroupAccordion from '../ui/Accordion/GroupAccordion'

type Props = {
    data:Section
}

const AboutCourseSection = ({data}: Props) => {
  return (
    <div className='mb-6 md:mb-10 mt-4 max-w-[900px] md:mt-[42px]'>
        <div className='mt-10 md:mt-0'>
            <h2 className='text-xl font-semibold md:mb-4 md:text-2xl'>{data?.name}</h2>
            <GroupAccordion/>
        </div>

    </div>
  )
}

export default AboutCourseSection