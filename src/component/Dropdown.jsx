import React from 'react'
import { useState } from 'react'
function Dropdown() {
  return (
    <div className='bg-black h-[25vh] w-[10vw] text-green-700 pb-5 pt-3 pl-3 absolute top-10 left-5 box-border'>
        <ul className='flex flex-col justify-start cursor-default'>
            <li>Dashboard</li>
            <li>Tracking</li>
            <li>Booking</li>
            <li>My Reports</li>
            <li>My Panel</li>
            <li>Pending</li>
        </ul>
    </div>
  )
}

export default Dropdown