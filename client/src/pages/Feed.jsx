import React, { useEffect, useState } from 'react'
import { dummyPostsData } from '../assets/assets'
import Loading from '../component/Loading'
import Post from '../component/Post' 
import Rightbar from '../component/Rightbar'

const Feed = () => {
  const [Feeds, setFeeds] = useState([])
  const [IsLoading, setIsLoading] = useState(true)
  const fetchFeeds = () =>{
    setFeeds(dummyPostsData)
    setIsLoading(false)
  }

  useEffect(() => {
    return(
      fetchFeeds()
    )
}, []);


  return !IsLoading ?(
    <div className='h-full overflow-y-scroll no-scrollbar flex py-10 xl:pr-5 xl:gap-8'>
      {/* Post and Story */}
      <div className='h-full flex flex-2 flex-col justify-center items-center space-y-2 mr-[7%] ml-[10%]'>
         <Post Feeds ={Feeds} />
      </div>
      {/* Right Sidebar */}
      <div className='flex flex-1 flex-col bg-yellow-300'>
        <Rightbar/>
      </div>
    </div>
  ):
  (<Loading/>)
}

export default Feed;