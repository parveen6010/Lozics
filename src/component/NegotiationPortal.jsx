import React from 'react'
import { MdOutlineAttachEmail } from "react-icons/md";
function NegotiationPortal() {
  return (
    <div className='w-screen h-screen'>
        <div className='w-full h-[10%] flex justify-center items-center bg-green-500'>
            <h1 className='text-white'>Negotiation Portal</h1>
        </div>
        <div className='h-[90%] bg-gray-500 flex items-center'> 
            <div className='w-[75%] h-[75%] mx-auto bg-white flex justify-around items-center'>
                 <div className='bg-red-300 w-[40%] h-[80%] flex flex-col justify-start items-center'>
                    <h3 className='w-2/3 bg-gray-300 h-10 text-center m-2 rounded-lg flex items-center justify-center font-semibold'>Remarks</h3>
                    <p className='w-2/3 bg-gray-100 h-10 text-center m-2 rounded-lg flex items-center justify-center'>Negotiation statement 1</p>
                    <p className='w-2/3 bg-gray-100 h-10 text-center m-2 rounded-lg flex items-center justify-center'>Negotiation statement 2</p>
                    <p className='w-2/3 bg-gray-100 h-10 text-center m-2 rounded-lg flex items-center justify-center'>Negotiation statement 3</p>
                    <p className='w-2/3 bg-gray-100 h-10 text-center m-2 rounded-lg flex items-center justify-center'>Negotiation statement 4</p>
                 </div>
                 <div className='bg-red-300 w-[50%] h-[80%]  '>
                    <table className='w-full flex flex-col justify-around mt-3 gap-5'>
                        <tr className='w-11/12 h-12 flex justify-around items-center mx-auto bg-white '>
                            <th className='w-1/5'>Awarded</th>
                            <th className='w-1/5'>Adjourned</th>
                            <th className='w-3/5'>Rejected</th>
                        </tr>
                        <tr className='w-11/12 flex justify-around items-center mx-auto bg-gray-300 p-2 rounded-lg'>
                            <td className='w-1/5 flex items-center justify-center'><MdOutlineAttachEmail/></td>
                            <td className='w-1/5 text-center'>Adjourned</td>
                            <td className='w-3/5 text-center'>The party was facing this issue thats why the negotiation was not successfull</td>
                        </tr>
                    </table>
                 </div>
            </div>
        </div>
    </div>
  )
}

export default NegotiationPortal