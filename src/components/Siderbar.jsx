import React from 'react'
import Calendar from './Calendar'
import TaskDone from './TaskDone'

function Siderbar() {
  return (
    <div className=' w-96 flex flex-col flex-warp gap-5'>
     <div className="w-96"><Calendar /></div>
     <div className="w-96"><TaskDone /></div>
    </div>
  )
}
export default Siderbar
