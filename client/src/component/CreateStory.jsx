import { ArrowLeft } from 'lucide-react'
import React from 'react'
import { useState } from 'react'

function CreateStory({setCreateStory}) {
  const bgChoices = ['bg-[#42E7CF]','bg-[#4EB099]','bg-[#7C4E32]','bg-[#1DDEDE]','bg-[#BDBD80]','bg-[#485B4C]']

  const [colorChange, setColorChange] = useState(bgChoices[0])
  
  return (
    <div className='absolute w-screen h-screen inset-0 z-[100] bg-black/40 flex items-center justify-center'>

      {/* create StoryCard */}
      <div className='min-w-sm max-w-md flex flex-col'>

        {/* upper part */}
        <div className=' w-full mb-5 flex justify-between items-center'>
          <div >
            <ArrowLeft className='text-white size-8 cursor-pointer hover:bg-gray-300 rounded-full transition-all duration-300 ease-in-out p-1' onClick={()=>setCreateStory(false)}/>
          </div>
          <p className='text-2xl text-white font-semibold pr-5'>Create Story</p>
          <span></span>
        </div>
 
         {/* Middle part */}
         <div className={` w-full h-60 border border-dashed border-gray-300 ${colorChange} rounded-lg flex items-center justify-center mb-5`}>
      
        </div>

        {/* Bottom part */}
        <div className='w-full bg-fuchsia-400'>
             <div className='flex items-center gap-3 p-3'>
               {bgChoices.map((bg) => (
                 <button
                   key={bg}
                   type='button'
                   aria-label={`Select color ${bg}`}
                   onClick={() => setColorChange(bg)}
                   className={`w-6 h-6 rounded-full border border-white/60 ${bg} ${colorChange === bg ? 'ring-2 ring-white' : ''}`}
                 />
               ))}
             </div>
        </div>

        <div>
          
        </div>
      </div>
    </div>
  )
}

export default CreateStory