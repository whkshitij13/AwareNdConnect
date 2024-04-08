import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const Header = () => {
  return (
    <nav className='z-30 sticky bg-purple-900 p-4'>
        <Link  href="/" className='flex items-center '>
            <Image 
            src="/Images/logo.png" alt="logo" 
            width={50}
            height={50}
            className=' w-auto h-auto '
            />
            <h1 className='  text-2xl  font-semibold  text-gray-300'>Aware/Connect</h1>
        </Link>
    </nav>
  )
}
