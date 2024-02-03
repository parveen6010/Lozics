import React from 'react'
import { FaUserCircle } from "react-icons/fa";
import { CiUser } from "react-icons/ci";
import { AiOutlinePoweroff } from "react-icons/ai";
function ProfileDropdown() {
  return (
    <div className=' w-[30vw] bg-white rounded-lg shadow-2xl p-10 absolute top-20 right-10'>
         <div className='flex flex-col h-1/2 w-full justify-center items-center gap-3 mb-5'>
            <FaUserCircle className='text-5xl'/>
            <p className=''>METSO OUTOTEC INDIA PRIVATE LIMITED (RAJESH)</p>
            <p>rajesh.yadav@mogroup.com</p>
         </div>
         <div className='h-1/2 w-full'>
            <div className='flex  items-center gap-2'>
               <CiUser/>
               <p>My Profile</p>
            </div>
            <div className='flex  items-center gap-2'>
               <AiOutlinePoweroff/>
               <p>Sign Out</p>
            </div>
         </div>
    </div>
  )
}

export default ProfileDropdown