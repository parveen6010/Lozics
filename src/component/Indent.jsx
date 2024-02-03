import React, { useState } from 'react'


const Indent = () => {
    const [trackby, setTrackby] = useState("");
    const [startDate, setStartDate] = useState(null);
    return (
      <div className='w-screen lg:bg-gray-200 h-screen '>
        <div className='lg:pl-[88px] lg:pt-[60px]'>
        <h1 className='lg:font-semibold lg:text-[20px] ' >Indent</h1>
        <div className="container  lg:w-[96%] lg:bg-white lg:h-[640px] ">
             <div className='lg:flex '>
             <div className='lg:ml-[2%] lg:mb-[6px] lg:font-semibold'>
                From Date
                </div> 
                <div className='lg:ml-[23%] lg:mb-[6px] lg:font-semibold'>
                To Date
                </div>  
                </div>
          <form className='lg:pl-6 lg:pt-4  lg:pb-4  lg:flex lg:w-screen'>
           
            <label className='' htmlFor="trackBy ">
                  {/* <DatePicker
                    placeholderText='dd/MM/yyyy'
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    className='form-control form-control-lg lg:rounded-md mr-5 lg:p-1 lg:w-80 lg:border lg:border-solid lg:border-lightblack lg:border-2 '
                  /> */}
              </label>
            <label className=' ' htmlFor="refNo">
              
                  {/* <DatePicker
                    placeholderText='dd/MM/yyyy'
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    className='form-control form-control-lg lg:rounded-md mr-5 lg:p-1 lg:w-80 lg:border lg:border-solid lg:border-lightblack lg:border-2 '
                  />                          */}
               </label>
               <button className=' position-fixed lg:rounded-md lg:border-2 lg:bg-green-500 lg:py-1 lg:px-12 lg:font-semibold '>Show</button>
                <select id="trackBy" className="lg:rounded-md lg:ml-80  lg:p-1 lg:w-30 lg:border lg:border-solid lg:border-semiblack lg:border-opacity-1000 lg:border-lightblack lg:border-2" onChange={(e) => setTrackby(e.target.value)}>
                  <option value="Excel">Excel</option>
                </select>
               <button className='lg:rounded-md lg:border-2 lg:bg-green-500 lg:py-1 lg:px-8 lg:font-semibold '>Go</button>     
              
          </form>
          
           <div className='w-full lg:border lg:border-solid lg:border-semiblack lg:border-opacity-1000'></div>
        
  <div className=' lg:mt-[20px] lg:bg-gray-200 lg:flex lg:ml-[20px] lg:mr-[20px] '> 
  <div className='lg:text-sm lg:font-semibold lg:p-2.5 lg:border lg:border-solid lg:border-black lg:border-opacity-1000 lg:w-[10%]'>
            ##
            </div>
            <div className=' lg:text-sm lg:font-semibold lg:p-3 lg:border lg:border-solid lg:border-black lg:border-opacity-1000 lg:w-[20%]'>
            Indent No.
            </div>
            <div className=' lg:text-sm lg:font-semibold lg:p-3 lg:border lg:border-solid lg:border-black lg:border-opacity-1000 lg:w-[20%]'>
            Indent Date
            </div>
            <div className=' lg:text-sm lg:font-semibold lg:p-3 lg:border lg:border-solid lg:border-black lg:border-opacity-1000 lg:w-[19%]'>
            From
            </div> 
            <div className=' lg:text-sm lg:font-semibold lg:p-3 lg:border lg:border-solid lg:border-black lg:border-opacity-1000 lg:w-[22%]'>
            To
            </div>
            <div className=' lg:text-sm lg:font-semibold lg:p-3 lg:border lg:border-solid lg:border-black lg:border-opacity-1000 lg:w-[17%]'>
            Email
            </div>
            <div className=' lg:text-sm lg:font-semibold lg:p-3 lg:border lg:border-solid lg:border-black lg:border-opacity-1000 lg:w-[25%]'>
            Phone
            </div>
            <div className=' lg:text-sm lg:font-semibold lg:p-3 lg:border lg:border-solid lg:border-black lg:border-opacity-1000 lg:w-[25%]'>
            Gst no.
            </div>
            <div className=' lg:text-sm lg:font-semibold lg:p-3 lg:border lg:border-solid lg:border-black lg:border-opacity-1000 lg:w-[30%]'>
            Weight
            </div>
            <div className=' lg:text-sm lg:font-semibold lg:p-3 lg:border lg:border-solid lg:border-black lg:border-opacity-1000 lg:w-[32%]'>
            Consignor
            </div>
            <div className=' lg:text-sm lg:font-semibold lg:p-3 lg:border lg:border-solid lg:border-black lg:border-opacity-1000 lg:w-[35%]'>
           Consignee
            </div>
            
            <div className=' lg:text-sm lg:font-semibold lg:p-3 lg:border lg:border-solid lg:border-black lg:border-opacity-1000 lg:w-[20%]'>
           Bill No.
            </div>
          </div>
          
        </div>
      </div>
      </div>
      );
}

export default Indent