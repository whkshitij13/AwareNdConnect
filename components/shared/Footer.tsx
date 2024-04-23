import React from 'react'

export const Footer = () => {
  return (
    

<footer className=" bg-[#1d0a2b] border-t-2 border-t-gray-700 ">
    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8 ">
        <div className="sm:flex sm:items-center sm:justify-between ">
            
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400  mx-auto ">
                <li>
                    <a href="#" className="hover:underline me-4 md:me-6">About</a>
                </li>
                <li>
                    <a href="#" className="hover:underline me-4 md:me-6">Privacy Policy</a>
                </li>
                <li>
                    <a href="#" className="hover:underline me-4 md:me-6">Licensing</a>
                </li>
                <li>
                    <a href="#" className="hover:underline">Contact</a>
                </li>
            </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400"> Horrizon</span>
    </div>
</footer>


  )
}
