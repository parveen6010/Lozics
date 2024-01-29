import React from 'react';
import { FaIdBadge } from "react-icons/fa";
import { BsFileLock2Fill } from "react-icons/bs";

const Signup = () => {
  return (
    <div style={{ backgroundImage: "url('https://portal.lozics.in/assets/images/4.jpg')" }} className=' lg:flex lg:justify-center lg:items-center h-screen w-screen bg-cover bg-center '>
    <div className=" lg:bg-white lg:z-10 lg:flex   lg:pt-[40px]  lg:pl-[50px]   lg:w-[550px]  lg:h-[500px] lg:flex lg:flex-col  lg:bg-darkwhite-500 lg:border lg:border-solid lg:border-semiblack  lg:rounded-2xl ">
      <h1 className=" lg:font-light lg:text-3xl lg:m-4">Sign in to continue.</h1>
      <form>
        <label className="lg:flex block lg:m-3">
        <FaIdBadge className='lg:text-blue-500 lg:text-5xl' />
          <input type="text" placeholder='Username' className=" border rounded-md lg:p-3 w-[80%]" />
        </label>
        <label className="lg:flex block lg:m-3"> 
        <BsFileLock2Fill className='lg:text-blue-500 lg:text-5xl' />
          <input type="password" placeholder='Password' className="border rounded-md lg:p-3 w-[80%]" />
        </label>
        <button
          type="submit"
          className="lg:font-semibold lg:w-[85%] lg:m-4 lg:bg-blue-500 text-white py-2 lg:rounded-md "
        >
          SIGN IN
        </button>  
      </form>
      <div className='lg:ml-[15px] lg:mt-[70px] lg:flex lg:justify-center lg:items-center gap-0 w-10/12' >
     <div className=''>
      <span className='lg:text-blue-500 '>
      LOZICS 
      <sup > ®</sup> 
      </span>
         is a Registered Trademark of
      </div>
       <div className='w-1/3'>
        <a href='https://www.bng.co.in/' >
        <img   className=' lg:scale-[0.9]' alt='Logo' src='https://portal.lozics.in/assets/images/powerdbybng.png' />
        </a>
      </div>
      </div> 
    </div>
    </div>
  );
};

export default Signup;
