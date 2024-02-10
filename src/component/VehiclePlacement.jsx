import React, { useState } from 'react';
import { FiAlignJustify } from "react-icons/fi";
import { GrAdd } from "react-icons/gr";
import { IoMdMail } from "react-icons/io";
import { FaLock } from "react-icons/fa6";
import { FaRegHandPointer } from "react-icons/fa6";
import { ImBin } from "react-icons/im";

const VehiclePlaced = () => {
  const [trackby, setTrackby] = useState("");
  const [startDate, setStartDate] = useState(null);

  return (
    <div className='w-screen lg:bg-gray-200 h-screen '>
      <div className='lg:pl-[18px] lg:pt-[6px] '>
        <div className='lg:flex lg:justify-between  '>
        <h1 className='lg:font-bold lg:text-[20px]'>Vehicle Placement</h1>
        <select className='lg:w-[10%]  lg:mr-[3%]  lg:border-2 lg:text-[13px]'>
          <option>Ho-NSP </option>
          <option>Select</option>
        </select>
        </div>

        <div className='lg:flex  lg:justify-between'>
  <div className='lg:flex' > 
    <button className='lg:bg-green-600 lg:px-4 lg:py-2 lg:mr-2 lg:rounded-xl lg:border-4  lg:text-white '>Submit</button>
    <button className='lg:bg-green-600 lg:px-4 lg:py-2 lg:rounded-xl lg:border-4 lg:text-white '>Discard</button>
  </div>
  <div className='lg:mr-[3%]'>
    <button className=' lg:bg-green-600 lg:px-4 lg:py-2 lg:rounded-xl lg:border-4 lg:text-[20px] lg:text-white '><FiAlignJustify />
</button>
  </div>
</div>
        <div className="container lg:w-[98%] lg:bg-white lg:h-auto ">
 
          <div className='lg:flex lg:font-semibold  lg:justify-between   '>
        
        
            <div className='lg:mt-1.5 lg:ml-2 '>
              <h1>Vechicle Placement No.</h1>
              <div className='lg:flex  '>
              <h1 className='lg:border-2 lg:w-[30%] lg:text-[12px] lg:flex lg:items-center'>TWIHO23VP</h1>
              <input className='lg:w-[75%] lg:border lg:border-2 lg:bg-green-400' placeholder='No.'  />              
            </div>

            </div>

             <div  className='lg:m-1.5  lg:w-[25%]' >
             <h1>Date</h1>
              <div className='lg:flex'>
              <input className='lg:w-[90%] lg:border lg:border-2' type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
              <input className='lg:w-[29%] lg:border lg:border-2' />
            </div>
            </div>

      
            <div  className='lg:m-1.5 lg:ml-[2%] ' >
              <h1>Againt</h1>
              <select className='lg:w-[380%] lg:border lg:border-2' >
                <option>Select</option>
                <option>Select</option>
                <option>Select</option>
              </select>
            </div>

         <div className='lg:m-1.5 lg:ml-[15%]  ' >
              <h1>No.</h1>
              <input className='lg:w-[98%] lg:border lg:border-2' />
            </div>

          </div>


       <div className='lg:flex lg:font-semibold lg:justify-between lg:w-[90%] '>

          <div className='lg:m-1.5 lg:ml-[0.5%]'>
         <h1>Customer</h1> 
         <div className='lg:flex lg:w-[150%]'>
         <input className='lg:w-[206%] lg:border lg:border-2' />
        <h1 className='lg:bg-red-500 lg:px-2 lg:py-1'>N</h1>
         </div>
        </div>


        <div className='lg:m-1.5 lg:ml-[-20%] ' >
          <h1>Source</h1>
          <input className='lg:w-[160%] lg:border lg:border-2' />
        </div>      


        <div className='lg:m-1.5 lg:ml-[-20%] ' >
          <h1>Destination</h1>
          <input className='lg:w-[160%] lg:border lg:border-2' />
        </div>  
     
      </div>

         <div className='lg:border-bold lg:border-2 lg:mt-3 lg:w-[98.5%] lg:ml-[8px]'></div>

         <button className=' lg:mt-[10px] lg:text-white  lg:flex  lg:ml-[8px] lg:w-[98.5%] lg:py-2 lg:bg-green-600'>
         <GrAdd className=' lg:ml-2 lg:mt-1' />
         <h1 className='lg:font-semibold lg:ml-1 ' >Order Detail</h1>
         </button>
      
         <button className=' lg:mt-[10px] lg:text-white  lg:flex  lg:ml-[8px] lg:w-[98.5%] lg:py-2 lg:bg-green-600'>
         <GrAdd className=' lg:ml-2 lg:mt-1' />
         <h1 className='lg:font-semibold lg:ml-1 ' >Sundries</h1>
         </button>

          
          <div className='  lg:w-[98%] lg:flex  lg:justify-around'>

          <div className='lg:w-[50%]'>
            <h1 className='lg:font-bold lg:m-4'>Vehicle Detail</h1>
            <div className='lg:border-bold lg:border-2 lg:mt-3 lg:w-[98.5%] lg:ml-[8px] lg:ml-4'></div>

           <div className='lg:flex lg:font-semibold lg:justify-between lg:mt-4 lg:ml-2 '>
           <div className=' lg:ml-2 lg:flex:col lg:w-[45%]'>
               <h1>
               Vehicle
               </h1>
               <div className='lg:flex'>
               <input className='lg:w-[108%] lg:bg-gray-100 lg:border lg:border-2' />
             <button className='lg:bg-red-500 lg:px-2  lg:py-1'>N</button>
             <button className='lg:bg-green-600 lg:px-2  lg:py-1'>C</button>

             </div>
                 </div>
             
 
             <div className=' lg:flex:col  lg:w-[50%] '>
               <h1>
              Load Type
               </h1>
               <select className='lg:w-[98%] lg:border lg:border-2' >
                <option>Select</option>
                <option>Select</option>
                <option>Select</option>
              </select>

             </div>
             </div>

             <div className='lg:flex lg:font-semibold lg:justify-between lg:mt-4 lg:ml-2 '>
           <div className=' lg:ml-2 lg:flex:col lg:w-[75%]'>
               <h1>
               Transporter
               </h1>
               <div className='lg:flex'>
               <input className='lg:w-[108%] lg:bg-gray-100 lg:border lg:border-2' />
            
             </div>
                 </div>
             
 
             <div className=' lg:flex:col  lg:w-[50%] lg:ml-[2%] '>
               <h1>
              Mobile
               </h1>
               <input className='lg:w-[97%] lg:bg-gray-100 lg:border lg:border-2' />

             </div>
             </div>

             <div className='lg:flex lg:font-semibold lg:justify-between lg:mt-4 lg:ml-2 '>
           <div className=' lg:ml-2 lg:flex:col lg:w-[75%]'>
               <h1>
               Broker
               </h1>
               <div className='lg:flex'>
               <input className='lg:w-[108%] lg:bg-gray-100 lg:border lg:border-2' />
            
             </div>
                 </div>
             
 
             <div className=' lg:flex:col  lg:w-[50%] lg:ml-[2%] '>
               <h1>
              Mobile
               </h1>
               <input className='lg:w-[97%] lg:bg-gray-100 lg:border lg:border-2' />

             </div>
             </div>

             <div className='lg:flex lg:font-semibold lg:justify-between lg:mt-4 lg:ml-2 '>
           <div className=' lg:ml-2 lg:flex:col lg:w-[75%]'>
               <h1>
               Driver
               </h1>
               <div className='lg:flex'>
               <input className='lg:w-[108%] lg:bg-gray-100 lg:border lg:border-2' />
            
             </div>
                 </div>
             
 
             <div className=' lg:flex:col  lg:w-[50%] lg:ml-[2%] '>
               <h1>
              Mobile
               </h1>
               <input className='lg:w-[97%] lg:bg-gray-100 lg:border lg:border-2' />

             </div>
             </div>

             <div className='lg:flex lg:font-semibold lg:justify-between lg:mt-4 lg:ml-2 '>
           <div className=' lg:ml-2 lg:flex:col lg:w-[45%]'>
               <h1>
               Licence No.
               </h1>
               <div className='lg:flex'>
               <input className='lg:w-[108%] lg:bg-gray-100 lg:border lg:border-2' />
             </div>
                 </div>
             
 
             <div className=' lg:flex:col  lg:w-[50%] '>
               <h1>
              Validity
               </h1>
               <input className='lg:w-[98%] lg:border lg:border-2' type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />

             </div>
             </div>


             <div className='lg:flex lg:font-semibold lg:justify-between lg:mt-4 lg:ml-2 '>
             <div className=' lg:flex:col  lg:w-[50%] lg:ml-2 '>
               <h1>
              Payment Through
               </h1>
               <select className='lg:w-[92%] lg:border lg:border-2' >
                <option>Select</option>
                <option>Select</option>
                <option>Select</option>
              </select>

             </div>
             
 
             <div className=' lg:flex:col  lg:w-[50%] '>
               <h1>
               Payment to
               </h1>
               <select className='lg:w-[98%] lg:border lg:border-2' >
                <option>Select</option>
                <option>Select</option>
                <option>Select</option>
              </select>

             </div>
             </div>


             <div className='lg:flex lg:font-semibold lg:justify-between lg:mt-4 lg:ml-2 '>
           <div className=' lg:ml-2 lg:flex:col lg:w-[45%]'>
               <h1>
               Approved Status
               </h1>
               <div className='lg:flex'>
               <input className='lg:w-[108%] lg:bg-gray-100 lg:border lg:border-2' />
             </div>
                 </div>
             
 
             <div className=' lg:flex:col  lg:w-[50%] '>
               <h1>
               Approved Comment
               </h1>
               <input className='lg:w-[98%] lg:bg-gray-100 lg:border lg:border-2' />
             </div>
             </div>

           </div>

           <div className='lg:w-[50%]'>
            <h1 className='lg:font-bold lg:m-4'>Weight</h1>
            <div className='lg:border-bold lg:border-2 lg:mt-3 lg:w-[98.5%] lg:ml-[8px] lg:ml-4'></div>

           <div className='lg:flex lg:font-semibold lg:justify-between lg:mt-4 lg:ml-2 '>
           <div className=' lg:ml-2 lg:flex:col lg:w-[45%]'>
               <h1>
               Guaranteed
               </h1>
               <div className='lg:flex'>
               <input className='lg:w-[108%] lg:bg-gray-100 lg:border lg:border-2' />
             </div>
                 </div>
             
 
             <div className=' lg:flex:col  lg:w-[50%] '>
               <h1>
              To Load
               </h1>
               <input className='lg:w-[98%] lg:bg-gray-100 lg:border lg:border-2' />

             </div>
             </div>

             <div className='lg:flex lg:font-semibold lg:justify-between lg:mt-4 lg:ml-2 '>
           <div className=' lg:ml-2 lg:flex:col lg:w-[45%]'>
               <h1>
               Freight Calc. On Type
               </h1>
               <div className='lg:flex'>
               <input className='lg:w-[108%] lg:bg-gray-100 lg:border lg:border-2' />
             </div>
                 </div>
             
 
             <div className=' lg:flex:col  lg:w-[50%] '>
               <h1>
               Freight Calc. On
               </h1>
               <select className='lg:w-[98%] lg:border lg:border-2' >
                <option>Select</option>
                <option>Select</option>
                <option>Select</option>
              </select>
             </div>
             </div>



             <div className='lg:flex lg:font-semibold lg:justify-between lg:mt-4 lg:ml-2 '>
             <div className=' lg:ml-2 lg:flex:col lg:w-[45%]'>
               <h1>
               Rate
               </h1>
               <div className='lg:flex'>
               <h1 className='lg:bg-red-500 lg:w-[58%] lg:flex lg:justify-center lg:items-center'>Get Rate</h1>
               <input className='lg:w-[88%] lg:bg-gray-100 lg:border lg:border-2' />
             </div>
                 </div>
             
                <div className='lg:flex'>
             <div className=' lg:flex:col  lg:w-[50%] lg:ml-[8%] '>
               <h1>
               Rate Contract Rate.
               </h1> 
               <input className='lg:w-[90%] lg:bg-gray-100 lg:border lg:border-2' />
             </div>
            
             <div className=' lg:flex:col  lg:w-[50%] '>
               <h1>
               Freight
               </h1>
               <input className='lg:w-[98%] lg:bg-gray-100 lg:border lg:border-2' />
              </div>
              </div>

             </div>


             <div className='lg:flex lg:font-semibold lg:justify-between lg:mt-4 lg:ml-2 '>
             <div className='lg:flex'>
             <div className=' lg:flex:col  lg:w-[50%] lg:ml-[2%] '>
               <h1>
               Other Charge
               </h1> 
               <input className='lg:w-[80%] lg:bg-gray-100 lg:border lg:border-2' />
             </div>
            
             <div className=' lg:flex:col  lg:w-[40%] '>
               <h1>
               Total
               </h1>
               <input className='lg:w-[98%] lg:bg-gray-100 lg:border lg:border-2' />
              </div>
              </div>
             
                <div className='lg:flex'>
             <div className=' lg:flex:col  lg:w-[50%] lg:ml-[1%] '>
               <h1>
              Advance
               </h1> 
               <input className='lg:w-[90%] lg:bg-gray-100 lg:border lg:border-2' />
             </div>
            
             <div className=' lg:flex:col  lg:w-[50%] '>
               <h1>
               Balance
               </h1>
               <input className='lg:w-[98%] lg:bg-gray-100 lg:border lg:border-2' />
              </div>
              </div>

             </div>





             <div className='lg:flex lg:font-semibold lg:justify-between lg:mt-4 lg:ml-2 '>
             <div className=' lg:flex:col  lg:w-[50%] lg:ml-2 '>
               <h1>
              Payment At
               </h1>
               <select className='lg:w-[92%] lg:border lg:border-2' >
                <option>Select</option>
                <option>Select</option>
                <option>Select</option>
              </select>

             </div>
             
 
             <div className=' lg:flex:col  lg:w-[50%] '>
               <h1>
               Payment Cnmt No.
               </h1>
               <input className='lg:w-[98%] lg:bg-gray-100 lg:border lg:border-2' />
             </div>
             </div>


             
             <div className='lg:flex lg:font-semibold lg:justify-between lg:mt-4 lg:ml-2 '>
           <div className=' lg:ml-2 lg:flex:col lg:w-[45%]'>
               <h1>
               Consignor
               </h1>
               <div className='lg:flex'>
               <input className='lg:w-[108%] lg:bg-gray-100 lg:border lg:border-2' />
             <button className='lg:bg-red-500 lg:px-2  lg:py-1'>N</button>
             </div>
                 </div>
             
 
             <div className=' lg:flex:col  lg:w-[50%] '>
               <h1>
              Consignee
               </h1>
               <div className='lg:flex'>
               <input className='lg:w-[108%] lg:bg-gray-100 lg:border lg:border-2' />
             <button className='lg:bg-red-500 lg:px-2  lg:py-1'>N</button>
             </div>

             </div>
             </div>

           </div>

           </div>
           
     
           <div className=' lg:border-bold lg:border-2 lg:mt-3 lg:w-[98.5%] lg:ml-[8px]'></div>
           <div  className='lg:mt-[2%] lg:font-semibold lg:ml-[1%]' >
               <h1>Remarks</h1>
               <input className='lg:w-[99.5%] lg:border lg:border-2' />
              </div>
       
        </div>
        
      </div>
    </div>
  );
}

export default VehiclePlaced;