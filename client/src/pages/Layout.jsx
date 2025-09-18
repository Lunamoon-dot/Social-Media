import React, { useState } from 'react'
import Sidebar from '../component/Sidebar'
import { Outlet } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { dummyUserData } from '../assets/assets';
import Loading from '../component/Loading';

const Layout = () => {
  const [SidebarOpen,setSidebarOpen] = useState(false);
  const user = dummyUserData;
  
  return user ? (
    <div className='w-full flex h-screen'>
      <Sidebar SidebarOpen={SidebarOpen} setSidebarOpen={setSidebarOpen}/>
      <div className='flex-1 bg-slate-50'>
        <Outlet/>
      </div>
      {SidebarOpen ? (
        <X className='absolute right-2  size-9 z-110 rounded-md mt-2 mr-2 bg-gray-500 text-white flex items-center justify-center sm:hidden' onClick={()=>setSidebarOpen(false)}/>
      ) : (
        <Menu className=' absolute right-2 size-9 z-110 p-0.5 mt-2 mr-2 rounded-md bg-gray-500 text-white flex items-center justify-center sm:hidden' onClick={()=>setSidebarOpen(true)}/>
      )}
    </div>
  ) : (
    <Loading/>
  );

  }
  

export default Layout;