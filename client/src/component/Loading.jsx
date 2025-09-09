import React from 'react'

function Loading() {
  return (
    <div className='w-full h-screen flex justify-center items-center'>
      <div class="flex flex-row gap-2">
        <div class="w-3 h-3 rounded-full bg-blue-500 animate-bounce [animation-delay:.7s]"></div>
        <div class="w-3 h-3 rounded-full bg-blue-700 animate-bounce [animation-delay:.3s]"></div>
        <div class="w-3 h-3 rounded-full bg-blue-500 animate-bounce [animation-delay:.7s]"></div>
      </div>
    </div>


  )
}

export default Loading