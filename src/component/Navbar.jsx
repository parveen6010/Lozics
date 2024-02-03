import React from 'react'
import { useState,useEffect } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { FaUserCircle } from "react-icons/fa";
import { FaTruckMoving } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import Dropdown from './Dropdown';
import ProfileDropdown from './ProfileDropdown';
const Navbar = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [visibility,setVisibility]=useState(false);
  const [profileVisibility,setProfileVisibility]=useState(false);

  const handleClick = (e) => {
    if (e.currentTarget.getAttribute('name') === 'hamburger') {
      setVisibility(!visibility);
    } else if (e.currentTarget.getAttribute('name') === 'profile') {
      console.log("profile clicked");
      setProfileVisibility(!profileVisibility);
    }
  };
  
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    // Cleanup event listener on unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <div className="flex h-16 justify-evenly items-center bg-white shadow-2xl ml-auto w-screen">
      <div className='flex items-center first-div h-full lg:w-2/3'>
         {(windowWidth >= 320 && windowWidth <= 640) && < FaTruckMoving className='text-xl ml-5'/>}
         {/* {(windowWidth > 640) && <div className='relative'>
          <GiHamburgerMenu className='text-xl ml-10 text-black' name='hamburger' onClick={handleClick}/>
          {(visibility) && <Dropdown className=" "/>}
          </div>} */}
         {(windowWidth > 640) && <h3 className=''>Welcome <span className='text-[#38ce3c] '>TRANSPORT WINGS (CAL) PVT LTD </span>
!</h3>}
      </div>
      <div className='second-div mr-10 lg:w-1/3'>
         {(windowWidth >= 320 && windowWidth <= 640) && <div className='relative'>
          <GiHamburgerMenu className='text-xl ml-10 text-black' name='hamburger' onClick={handleClick}/>
          {(visibility) && <Dropdown className=" "/>}
          </div>}
         {(windowWidth >= 1024) && <div className='flex justify-end items-center'>
          <FaUserCircle className=' text-xl mr-5' />
          <div className='flex  items-center cursor-default' name="profile" onClick={handleClick} >
            <h5>Metso Outtotec India PVT LTD.</h5>
           < IoIosArrowDown className='text-xl'/> 
           {(profileVisibility) && <ProfileDropdown />}
          </div>
          </div>}
      </div>
    </div>
  )
}

export default Navbar