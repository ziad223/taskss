import React, { useState } from 'react'
import { FaXmark } from 'react-icons/fa6';
import { FiEdit } from 'react-icons/fi'
import { RiDeleteBin6Line } from 'react-icons/ri'
import { deleteTask, editTask } from '../api';

const Task = ({task}) => {
    const [openModalEdit , setOpenModalEdit] = useState(false);
    const [openModalDelete , setOpenModalDelete] = useState(false);
    const [newText , setNewText] = useState(task.text);
    const [newDesc , setNewDesc] = useState(task.desc);

    const handleEdit = async() =>{
        setNewText("")
        setNewDesc("")
        await editTask({
          id : task.id,
          text : newText,
          desc : newDesc
        })
        setOpenModalEdit(false)
    }
    const handleDeleteTask = async (id) =>{
      await deleteTask(id);
      setOpenModalDelete(false)
    }
  return (
      <div className='bg-gray-300  p-3 w-[24%] task '>
                <h2>{task.text}</h2>
                <p className='mt-[10px]'>{task.desc}</p>
                <div className='flex justify-between mt-[20px]'>
               <FiEdit className='text-2xl text-green-600 cursor-pointer' onClick={() => setOpenModalEdit(true)}/>
               <RiDeleteBin6Line className='text-2xl text-red-600 cursor-pointer' onClick={() =>setOpenModalDelete(true)} />
                </div>
                {openModalEdit &&     <div className='shadow-lg bg-gray-800 p-[20px] flex flex-col gap-8 mt-5 max-w-[80%] mx-auto absolute top-36 left-[20%] w-[60%] editTask'>
<div className='flex items-center justify-around'>
  <h2 className='cursor-pointer text-2xl text-green-600'>Edit Task</h2>
  <FaXmark onClick={() => setOpenModalEdit(false)} className='cursor-pointer text-2xl text-gray-400'/>
</div>
<div className='flex flex-col gap-3'>
<input type="text" placeholder='Enter Your Task'
 className='border p-3 outline-0 ' 
 value={newText}
 onChange={e => setNewText(e.target.value)}
 />
<input type="text" placeholder='Enter Your Task Description'
 className='border p-3 outline-0 ' 
 value={newDesc}
 onChange={ (e) => setNewDesc(e.target.value) }
 />
<button
onClick={handleEdit}
 className='mt-[20px]text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-xl px-5 py-2.5 text-center text-white me-2 mb-2'>Add Task</button>
</div>

                </div>}

                {openModalDelete &&     <div className='shadow-lg bg-gray-300 p-[20px] flex flex-col gap-8 mt-5 max-w-[80%] mx-auto absolute top-36 left-[20%] w-[60%] delete-div'>
<div className='flex items-center justify-around'>
  <h2 className='cursor-pointer text-2xl text-red-600'>Edit Task</h2>
  <FaXmark onClick={() => setOpenModalDelete(false)} className='cursor-pointer text-2xl text-gray-700'/>
</div>
<div className='flex flex-col gap-3'>
    <h2 className='text-2xl text-center'>Are You Sure Delete This Task ?</h2>
   <div className='flex justify-center mt-[20px]'>
     <button onClick={() =>handleDeleteTask(task.id)} className='focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 w-[20%]'>Yes</button>
     <button onClick={() =>setOpenModalDelete(false)} className='focus:outline-none text-white bg-gray-600 hover:bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-900 w-[20%]'>No</button>
   </div>
                </div>
                </div>
                }

              </div>
      )
}

export default Task
