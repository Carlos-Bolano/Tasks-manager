import React from 'react'
import Calendar from '../components/Calendar'
import Navbar from '../components/Navbar'
import TasksList from '../components/TasksList'


export default function Home() {
  return (
    <>
    <Navbar />
    <div className='container mx-auto'>
      <div className="flex justify-between mt-8">
      <TasksList />
      <Calendar />
      </div>
    </div>
    </>
  )
}
