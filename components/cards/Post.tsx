import Image from 'next/image'
import React from 'react'

const Post = () => {
  return (
    <div className=" p-4 bg-gray-800 w-1/2 mx-auto rounded-md items-center justify-center text-center text-white font-bold mb-10 ">
    <div className="flex space-x-2 py-2 ">
      <Image src="" width={25} height={25} alt="profile"/>
      <p>Name</p>

    </div>
    <div className='relative w-full h-[400px]'>
    <Image fill objectFit='cover' src="/Images/demo.jpg" alt="" className=' rounded-md justify-center items-center mx-auto'/>
   
    </div>
    <div className='flex justify-between'>
      <div className=' bg-[#6a378f7a] w-full p-2 my-6 mx-2 rounded-md justify-evenly items-center flex'>
        <Image  src="" width={25} height={25} alt=''></Image>
        <p>like</p>
      </div>
      <div className=' bg-[#6a378f7a] w-full p-2 my-6 mx-2 rounded-md justify-evenly items-center flex'>
        <Image  src="" width={25} height={25} alt=''></Image>
        <p>like</p>
      </div>
      <div className=' bg-[#6a378f7a] w-full p-2 my-6 mx-2 rounded-md justify-evenly items-center flex'>
        <Image  src="" width={25} height={25} alt=''></Image>
        <p>like</p>
      </div>
      </div>
    </div>
  
  )
}

export default Post