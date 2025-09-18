import React, { useEffect, useState } from 'react'
import { dummyPostsData } from '../assets/assets'
import Loading from '../component/Loading'
import Post from '../component/Post' 
import Rightbar from '../component/Rightbar'
import Story from '../component/Story'

const Feed = () => {
  const [Feeds, setFeeds] = useState([])
  const [IsLoading, setIsLoading] = useState(true)

  const fetchFeeds = async () =>{
    setFeeds(dummyPostsData)
    setIsLoading(false)
  }

  useEffect(() => {
      fetchFeeds()
}, []);


  return !IsLoading ?(
    <div className='h-full overflow-y-scroll no-scrollbar flex py-10 xl:pr-5 xl:gap-8'>
      {/* Post and Story */}
      <div className='w-full flex flex-2 flex-col items-center space-y-4 xl:mr-[7%] sm:ml-[10%]'>
        <div className='flex'>
          <Story/>
        </div>
         <Post Feeds ={Feeds} />
      </div>
      {/* Right Sidebar */}
      <div className='flex flex-1 flex-col bg-yellow-300 max-md:hidden'>
        <Rightbar/>
      </div>
    </div>
  ):
  (<Loading/>)
}

export default Feed;