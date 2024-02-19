import React, { useState } from 'react'
import { FaXmark } from "react-icons/fa6";
import { addTask } from '../api';
import { v4 as uuidv4 } from 'uuid';

const Modal = ({openModal , setOpenModal}) => {
  const [newTaskValue , setNewTaskValue] = useState('');
  const [newTaskDesc , setNewTaskDesc] = useState('');

  const hanldeAddNewTask = async () =>{
    setNewTaskDesc("")
    setNewTaskValue("")
    await addTask({
      id : uuidv4(),
      text : newTaskValue,
      desc : newTaskDesc
    })
    setOpenModal(false)
  }
  return (
<>

{openModal && 
<div className='shadow-lg p-[20px] flex flex-col gap-8 mt-5 w-[80%] mx-auto addTask '>
    <div className='flex items-center justify-around'>
      <h2 className='cursor-pointer text-2xl text-green-600'>Task Manager</h2>
      <FaXmark className='cursor-pointer text-2xl text-gray-400' onClick={() => setOpenModal(false)}/>
    </div>
    <div className='flex flex-col gap-3'>
    <input type="text" placeholder='Enter Your Task'
     value={newTaskValue}
     onChange={e => setNewTaskValue(e.target.value)} 
     className='border p-3 outline-0 ' />
    <input type="text" placeholder='Enter Your Task Description'
     value={newTaskDesc}
     onChange={e => setNewTaskDesc(e.target.value)} 
     className='border p-3 outline-0 ' />
    <button className='mt-[20px]text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-xl px-5 py-2.5 text-center text-white me-2 mb-2' onClick={hanldeAddNewTask}>Add Task</button>
    </div>
   
</div>}


</>
  )
}

export default Modal
