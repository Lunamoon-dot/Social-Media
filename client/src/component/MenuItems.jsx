import React from 'react'
import { menuItemsData } from '../assets/assets'
import { NavLink } from 'react-router-dom';

function MenuItems({setSidebarOpen}) {
  const itemsData = menuItemsData;
  return (
    <div className='w-full space-y-1 flex flex-col items-center '>
      {
         itemsData.map((item, index)=>{
          return(
          <NavLink key={index} to={item.to} className={({isActive})=>`w-[90%] flex items-center py-3 rounded-md pl-[4%] gap-1 ${isActive?
          'bg-indigo-100 text-indigo-600'
          :'cursor-pointer hover:bg-gray-200'} transform-all duration-300 ease-in-out`}>
            <item.Icon />
            <div className='text-md'>
              {item.label}
            </div>
          </NavLink>
          )
         })
      }
      
    </div>
  )
}

export default MenuItems