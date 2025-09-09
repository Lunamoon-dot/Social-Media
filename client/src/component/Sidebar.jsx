import React from 'react'
import { assets, dummyUserData } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import MenuItems from './MenuItems';
import {useClerk, UserButton} from '@clerk/clerk-react'
import { CirclePlus, LogOut } from 'lucide-react';
import { Link } from 'react-router-dom';

const Sidebar = ({setSidebarOpen}) => {
  const {signOut} = useClerk();
  const navigate = useNavigate();
  const user = dummyUserData;
  return (
    //kho ma transition ma khong loi
    <div className='w-75 h-screen translate-x-0 max-lg:w-65 max-sm:fixed max-sm:-translate-x-full duration-300 ease-in-out border-r border-gray-300 flex flex-col items-center justify-between'>  
      <div className='w-full flex flex-col items-center'>
        <div className='w-full flex py-3 pl-4'>
          <img src={assets.logo} alt="logo-brand" className='w-10' onClick={()=>navigate("/")}/>
        </div> 
        
        <hr className='w-full text-gray-300 pb-5'/>
        
        <MenuItems setSidebarOpen={setSidebarOpen}/>
        <Link to="/create-post" className={`w-[90%] mt-[8%] py-3 flex items-center px-[20%] gap-2 rounded-lg bg-gradient-to-r from-blue-400 to-purple-500 cursor-pointer hover:from-blue-500 hover:to-purple-800 active:scale-95 transition-all duration-300 ease-in-out `} onClick={() => setSidebarOpen(false)} >
          <CirclePlus className='text-white'/>
          <h1 className='text-white text-lg'>Create Post</h1>
        </Link>
      </div>
      
      <div className='w-full flex items-center pl-[5%] py-3 gap-3 border-t border-gray-300'>

          <UserButton />

        <div className='flex flex-1 flex-col gap-0'>
          <h1 className='text-[15px]'>
            {user.full_name}
          </h1>
          <p className='text-[13px] text-gray-500'>@{user.username}</p>
        </div>
        <LogOut className=' text-gray-600 w-6 h-6 mr-[6%] cursor-pointer hover:text-gray-500' onClick={()=>signOut()}/>
      </div>
    </div>
  )
}

export default Sidebar