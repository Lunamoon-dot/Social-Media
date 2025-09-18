import React, { useEffect, useState } from 'react'
import { dummyStoriesData } from '../assets/assets';
import { Plus } from 'lucide-react';
import moment from 'moment'
import CreateStory from '../component/CreateStory'

function Story() {
 const [storyDatas, setStoryDatas] = useState([]);
 const[createStory, setCreateStory] = useState(false);

 const fetchStoryData = async () => {
  setStoryDatas(dummyStoriesData);
};

 useEffect(()=>{
    fetchStoryData()
}, [])

  return (
    //the problem

    <div className='w-full max-w-xl lg:max-w-2xl overflow-x-auto  px-4'>
        <div className='flex gap-4 pb-5'>
          {/* Add Story Card */}
          <div className='rounded-lg shadow-sm min-w-30 max-w-50 max-h-40 aspect-[3/4] cursor-pointer hover:shadow-lg hover:scale-102 hover:translate-y-0.5 active:scale-95 transition-all duration-200 ease-in-out border-2 border-dashed border-indigo-300 bg-gradient-to-b from-indigo-50 to-white' onClick={()=> setCreateStory(true)}>
              <div className='h-full flex flex-col items-center justify-center p-4'>
                <div className='size-10 bg-indigo-500 rounded-full flex items-center justify-center mb-3'>
                  <Plus className='text-white w-6 h-6'/>
                </div>
                  <p className='text-sm font-medium text-center text-slate-700'>Create Story</p>
              </div>
          </div>
          {/* Story Card */}
          {storyDatas.map((storyData, index)=>(
            <div key={index} className='rounded-lg shadow-sm min-w-30 max-w-30 max-h-40 aspect-[3/4] cursor-pointer hover:scale-102 transition-all duration-200 ease-in-out hover:translate-y-0.5 active:scale-95 hover:bg-cyan-800 relative bg-cyan-500'>
              <img src={storyData.user.profile_picture} alt="" className='w-9 h-9 z-1 absolute left-1.5 top-1.5 rounded-full border-white border-3'/>
              {storyData.content ==="" ?
               <div className='w-full h-full rounded-lg overflow-hidden'>
                  {storyData.media_type ==="image"?
                  <img src={storyData.media_url} alt="" className="w-full h-full object-cover" />
                :  
                <video src={storyData.media_url} className="w-full h-full object-cover" />
                }
              </div>
              :
               <p className='absolute top-18 left-3 text-white text-sm truncate max-w-24'>{storyData.content}</p>
              }
              <p className=' text-xs absolute bottom-1 left-2 text-white truncate z-10'>{moment(storyData.createdAt).fromNow()}</p>
            </div>
          ))}
        </div>
              {createStory && <CreateStory setCreateStory={setCreateStory}/>}
    </div>
  )
}

export default Story