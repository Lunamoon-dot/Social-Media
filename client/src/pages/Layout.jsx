import React from 'react'
import Sidebar from '../component/Sidebar'

const Layout = () => {
  return (
    <div className='w-full flex h-screen' >
    <Sidebar/>
    <div className='flex-1 bg-slate-50'></div>
    </div>
  )
}

export default Layout;