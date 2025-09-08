import React from 'react'

function Post({ Feeds }) {
  return (
    <div className='w-full h-full flex flex-col items-center space-y-2'>
      {Feeds.map((Feed) => (
        <div key={Feed._id} className='w-full flex flex-col p-4 rounded-lg shadow shadow-gray-400 space-y-1'>
          {/* upper part */}
          <div className='w-full flex space-x-2 '>
            <div className='w-8 h-8 flex items-center justify-center  '>
             <img src= {Feed.user.profile_picture} alt="" className='rounded-3xl'/>
            </div>
           <div className="flex flex-col justify-center items-start ">
              <span className="text-[1rem] ml-0.5">{Feed.user.full_name}</span>
              <span className="text-[0.7rem] text-gray-500">@{Feed.user.username}</span>
            </div>

          </div>
          {/* middle part */}
         <div>
          <h1 className='text-[0.8rem] mb-3'>{Feed.content}</h1>
          <div>
            <img src={Feed.image_urls} alt="" className='rounded-xl'/>
          </div>
         </div>
         {/* bottom part */}
         <div className='w-full flex flex-col'>
            <hr className='mt-10 text-gray-300'/>

         </div>
        </div>
      ))}
    </div>
  );
}


export default Post