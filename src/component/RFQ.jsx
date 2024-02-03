import React from 'react'

function RFQ() {
  return (
    <div className='w-screen h-screen flex flex-col'>
      <div className='w-screen h-[10%] bg-green-500 flex justify-center items-center'>
          <h3 className='text-lg text-white font-semibold'>Received Quotations</h3>
      </div>
      <div className='bg-gray-700 h-[90%] flex items-center'>
           <div className='w-[75%] h-[75%] mx-auto my-auto bg-violet-100 flex flex-col'>
                 <div className='flex justify-around h-[15%] w-[75%] mx-auto mt-5 bg-gray-500 items-center font-semibold rounded-xl text-xl text-white'>
                    <h3>Date</h3>
                    <h3>Client Email</h3>
                    <h3>RFQ Number</h3>
                    <h3>Quantity</h3>
                    <h3>Action</h3>
                 </div>
                 <div className='flex justify-around h-[15%] w-[75%] mx-auto mt-5 bg-gray-300 items-center rounded-xl '>
                    <h3>01-02-2024</h3>
                    <a href='' className='text-red-500 font-semibold'>@adani.com</a>
                    <a href=''>GF12X365</a>
                    <h3>10</h3>
                    <h3>Pending</h3>
                 </div>
                 <div className='flex justify-around h-[15%] w-[75%] mx-auto mt-5 bg-gray-300 items-center rounded-xl'>
                    <h3>05-01-2024</h3>
                    <a href='' className='text-red-500 font-semibold'>@tata.com</a>
                    <a href=''>TF23X300</a>
                    <h3>5</h3>
                    <h3>Pending</h3>
                 </div>
                 <div className='flex justify-around h-[15%] w-[75%] mx-auto mt-5 bg-gray-300 items-center rounded-xl'>
                    <h3>05-01-2024</h3>
                    <a href='' className='text-green-700 font-semibold'>@jio.com</a>
                    <a href=''>TF23X300</a>
                    <h3>5</h3>
                    <h3>Completed</h3>
                 </div>
           </div>
      </div>
    </div>
  )
}

export default RFQ