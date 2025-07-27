import React from 'react'

type Props = {}

const CourseCard = (props: Props) => {
  return (
    <div className='w-full md:max-w-[330px] lg:max-w-[400px] order-2 bg-red-500 absolute right-0 md:top-[50px] md:absolute'>
        <div className='md:sticky md:top-[112px]'>
            <div className='md:border h-[400px]'>
                <p>test</p>
            </div>
        </div>
    </div>
  )
}

export default CourseCard