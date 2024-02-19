'use client'
import React, { useState } from 'react'
import { FaXmark } from 'react-icons/fa6';
import Task from './Task';


const TaskList = ({tasks}) => {


   
  return (
    <>
       <div className='max-w-[80%] mx-auto mt-[100px] flex flex-wrap gap-2'>
        {tasks.map(task =>{
            return(
                <Task task = {task}/>    
            )
        })}
     
    </div>

    </>
 
  )
}

export default TaskList
