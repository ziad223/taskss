import React from 'react'
import { AiOutlineShopping } from "react-icons/ai";

const Navbar = () => {
  return (
  

<nav class="bg-gray-300 border-gray-200 dark:bg-gray-900 dark:border-gray-700">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <a href="#" class="flex items-center space-x-3 rtl:space-x-reverse">
        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Task Manager</span>
    </a>
  
   <div className='flex items-center gap-1'>
   <AiOutlineShopping className='text-3xl cursor-pointer'/>
   </div>
  </div>
</nav>

  )
}

export default Navbar
