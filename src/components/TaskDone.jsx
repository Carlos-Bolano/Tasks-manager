import React from 'react'

function TaskDone() {
  return (
    <div className='bg-black p-8 rounded-xl shadow-sm w-96'>
        <h2 className='text-3xl text-white font-bold'>Tasks Done</h2>
        <div className=" bg-primary p-4 rounded-xl mt-3">
            <h3 className='text-xl font-semibold'>meeting with the group ...</h3>
            <div className=" mt-3 flex items-center justify-between">
                <span className='bg-green-600 rounded-full py-1 px-4 text-white'>Category</span>
                <span className='text-gray-800 font-medium'>12:35 PM</span>
            </div>
        </div>
      
    </div>
  )
}

export default TaskDone
