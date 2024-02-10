import React from 'react'
import { useState } from 'react';
import { MdOutlineAttachEmail } from "react-icons/md";
function NegotiationPortal() {
    const [status,setStatus]=useState({
        Awarded:false,
        Adjourned:false,
        Rejected:false
    });
    const handleClick=(e)=>{
        const name=e.target.name;
        const val=e.target.value;
        setStatus({[val]:true});
        console.log(name,val);
    }
  return (
    <div className='w-screen h-screen'>
        <div className='bg-green-500 w-full h-[10%] flex justify-center items-center font-bold text-xl text-white'>
            Negotiation Portal
        </div>
        <div className='h-[90%] bg-gray-700 flex items-center'> 
            <div className='w-[75%] h-[75%] mx-auto bg-white flex  gap-1 justify-around items-center p-3'>
                 <div className='bg-gray-300 w-[95%] h-[95%] flex flex-col justify-start items-center p-3 rounded-lg gap-2'>
                    <h3 className='w-5/6 h-1/5 bg-green-700  text-center m-2 rounded-lg flex items-center justify-center font-bold text-2xl text-white'>Remarks</h3>
                    <textarea className='w-5/6 h-3/5 bg-gray-100  text-center m-2 rounded-lg flex items-center justify-center outline-none' placeholder='Enter Your remarks'/>
                    <button className='bg-green-700 p-3 text-white rounded-lg font-semibold'>Submit Remarks</button>
                    
                 </div>
                 <div className='bg-gray-300 w-[95%] h-[95%] flex flex-col justify-center items-center rounded-lg gap-2'>
                    <select className='py-2 px-5 rounded-lg outline-none' onClick={handleClick}>
                        <option name="Awarded" value="Awarded"  >Awarded</option>
                        <option name="Adjourned" value="Adjourned" >Adjourned</option>
                        <option name="Rejected" value="Rejected" >Rejected</option>
                    </select>
                    {status.Rejected && <div>
                        <textarea className=' bg-gray-100 w-[25vw] h-[25vh]  text-center rounded-lg flex items-center justify-center outline-none' placeholder='Enter Your remarks'/>
                    </div>}
                    <button className='bg-green-700 p-3 text-white rounded-lg font-semibold'>Submit Status</button>
                 </div>
            </div>
        </div>
    </div>
  )
}

export default NegotiationPortal