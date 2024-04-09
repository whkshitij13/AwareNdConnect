import Link from 'next/link'
import React from 'react'

export const LeftSideBar = () => {
  return (
    <div className='fixed top-0 left-0 pt-20  bg-purple-900 h-screen flex flex-col   w-[250px]'>
       
            <div className='flex flex-col flex-1 gap-6 text-center font-semibold p-2 text-2xl '>
              
            <Link className='text-center font-semibold p-2 text-2xl text-gray-300' href='' >hello</Link>
            <Link className='text-center font-semibold p-2 text-2xl text-gray-300' href='' >hello</Link>
            <Link className='text-center font-semibold p-2 text-2xl text-gray-300' href='' >hello</Link>
            <Link className='text-center font-semibold p-2 text-2xl text-gray-300' href='' >hello</Link>
            <Link className='text-center font-semibold p-2 text-2xl text-gray-300' href='' >hello</Link>
            <Link className='text-center font-semibold p-2 text-2xl text-gray-300' href='' >hello</Link>
            </div>
            <div className='text-center font-semibold p-4 text-2xl text-gray-300'>
                <Link href={''}>Logout</Link>
            </div>
    </div>
  )
}
