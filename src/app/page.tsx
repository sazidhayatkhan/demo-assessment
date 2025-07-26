import React from 'react'
import Link from 'next/link'
type Props = {}

const page = (props: Props) => {
  return (
    <div className='min-h-screen flex justify-center items-center'>
      <Link href="/product/ielts-course">
        <button className='bg-amber-100 rounded-md py-2 px-4'>Assesment Page</button>
      </Link>
    </div>
  )
}

export default page