"use client"
import React, { useState } from 'react'
import { FaPlus } from "react-icons/fa6";
import Modal from './Modal';

const AddTask = () => {
  const [openModal , setOpenModal] = useState(false);
  return (
<div className='text-center mt-5 max-w-[60%] mx-auto '>
    <button
    onClick={() => setOpenModal(true)}
    className='bg-green-600 text-white hover:bg-green-800 transition duration-300 text-2xl p-3 w-full rounded-[10px] flex justify-center items-center gap-3'>
        Add New Task
        <FaPlus />
        </button>
    
    <Modal openModal = {openModal} setOpenModal = {setOpenModal}/>
    </div>
  )
}

export default AddTask
