import React from 'react'
import AddTask from './_components/AddTask'
import TaskList from './_components/TaskList'
import { getAllData } from './api'
import './globals.css'

const page = async () => {
  const tasks = await getAllData();
  return (
    <div>
      <AddTask/>
      < TaskList tasks = {tasks}/>
    </div>
  )
}

export default page
