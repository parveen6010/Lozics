import React, { useState } from 'react';
import { FiAlignJustify } from "react-icons/fi";
import { GrAdd } from "react-icons/gr";
import { IoMdMail } from "react-icons/io";
import { FaLock } from "react-icons/fa6";
import { FaRegHandPointer } from "react-icons/fa6";
import { ImBin } from "react-icons/im";




const JobCreate = () => {
  const [trackby, setTrackby] = useState("");
  const [startDate, setStartDate] = useState(null);

  return (
    <div className='w-screen lg:bg-gray-200 h-screen '>
      <div className='lg:pl-[18px] lg:pt-[6px]'>
        <div className='lg:flex '>
        <h1 className='lg:font-bold lg:text-[20px]'>Job Order/ Create</h1>
        <select className='lg:w-[10%] lg:ml-[75%]  lg:border-2 lg:text-[13px]'>
          <option>Ho-NSP </option>
          <option>Select</option>
        </select>
        </div>

        <div className='lg:flex '>
  <div className='lg:flex' > 
    <button className='lg:bg-green-500 lg:px-4 lg:py-2 lg:mr-2 lg:rounded-xl lg:border-4  lg:text-white '>Submit</button>
    <button className='lg:bg-green-500 lg:px-4 lg:py-2 lg:rounded-xl lg:border-4 lg:text-white '>Discard</button>
  </div>
  <div className='lg:ml-[78.5%]'>
    <button className='lg:bg-green-500 lg:px-4 lg:py-2 lg:rounded-xl lg:border-4 lg:text-[20px] lg:text-white '><FiAlignJustify />
</button>
  </div>
</div>
        <div className="container lg:w-[98%] lg:bg-white lg:h-[870px] ">

          <div className='lg:flex lg:font-semibold '>
            <div className='lg:m-1.5'>
              <h1>Indent No.</h1>
              <input className='lg:border lg:border-2 lg:w-[140%]' />
            </div>

             <div  className='lg:m-1.5  lg:ml-[7%]' >
              <h1>Date</h1>
              <div className='lg:flex'>
              <input className='lg:w-[65%] lg:border lg:border-2' type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
              <input className='lg:w-[30%] lg:border lg:border-2' />
            </div>
            </div>

            <div className='lg:m-1.5'>
             <h1>Consignor</h1> 
              <input className='lg:w-[130%] lg:border lg:border-2' />
            </div>


            <div  className='lg:m-1.5 lg:ml-[5%]' >
              <h1>Location</h1>
              <select className='lg:w-[180%] lg:border lg:border-2' >
                <option>Select</option>
                <option>Select</option>
                <option>Select</option>
              </select>
            </div>

            <div className='lg:m-1.5 lg:ml-[5%]' >
              <h1>GSTIN</h1>
              <input className='lg:w-[97%] lg:border lg:border-2' />
            </div>
          </div>


         
          <div className='lg:flex lg:font-semibold lg:pt-4 '>
          <div className='lg:mb-1.5 lg:ml-2 '>
              <h1>Customer</h1>
              <input className='lg:border lg:border-2 lg:w-[136%]' />
            </div>

             <div  className='lg:ml-[7%] ' >
              <h1>Location</h1>
              <select className='lg:w-[200%] lg:border lg:border-2' >
                <option>Select</option>
                <option>Select</option>
                <option>Select</option>
              </select>
             </div>

            <div className=' lg:flex lg:flex-col lg:ml-[6%]'>
              <h1>GSTIN</h1>
              <div>
              <input className='lg:w-[89%]  lg:border lg:border-2' />
              </div>
            </div>

            <div className=' lg:ml-[0.5%]' >
             <h1>Consignee</h1>
              <input  className=' lg:w-[126%] lg:border lg:border-2' />
            </div>
            
            <div  className='lg:ml-[5%]' >
              Location
              <select className='lg:w-[95%] lg:border lg:border-2' >
                <option>Select</option>
                <option>Select</option>
                <option>Select</option>
              </select>
            </div>

            <div className=' lg:ml-[0.5%]' >
              <h1>GSTIN</h1>
              <input className='lg:w-[95%] lg:border lg:border-2' />
            </div>
          </div>


          <div className='lg:flex lg:font-semibold lg:mt-4 lg:mb-1.5 '>
            <div className=' lg:pl-2 lg:flex:col lg:mr-8'>
              <h1>
              Order Mode
              </h1>
              <select className='lg:w-[140%] lg:border lg:border-2' >
                <option>Select</option>
                <option>Select</option>
                <option>Select</option>
              </select>
             </div>
            

            <div className=' lg:pl-[1%] lg:flex:col '>
              <h1>
              Order Type
              </h1>
              <select className='lg:w-[170%] lg:border lg:border-2' >
                <option>Select</option>
                <option>Select</option>
                <option>Select</option>
              </select>
           
            </div>

            <div className='lg:ml-[6%]'>
              <h1>Assigned to Branch</h1>
              <input className='lg:w-[160%] lg:border lg:border-2' />
            </div>

            <div className='lg:ml-[11.8%]'>
              <h1>Forwarder</h1>
              <input className='lg:w-[126%] lg:border lg:border-2' />
            </div>

            <div className='lg:ml-[5.2%]' >
              <h1>Port</h1> 
              <input className='lg:w-[164.5%] lg:border lg:border-2' />
            </div>           


          </div>


          <div className='lg:flex lg:font-semibold lg:mt-4 '>
           
          <div className=' lg:pl-2 lg:flex:col lg:mr-8'>
              <h1>
              Order Mode
              </h1>
              <select className='lg:w-[140%] lg:border lg:border-2' >
                <option>Select</option>
                <option>Select</option>
                <option>Select</option>
              </select>
             </div>
            

            <div className=' lg:pl-[1%] lg:flex:col '>
              <h1>
              Order Type
              </h1>
              <select className='lg:w-[170%] lg:border lg:border-2' >
                <option>Select</option>
                <option>Select</option>
                <option>Select</option>
              </select>
           
            </div>

             <div  className=' lg:ml-[6%]' >
              <h1>Order no.</h1>
              <select className='lg:w-[200%] lg:border lg:border-2' >
                <option>Select</option>
                <option>Select</option>
                <option>Select</option>
              </select>
             </div>

            
            <div  className='lg:ml-[6%] ' >
              <h1>Order Date</h1>
              <select className='lg:w-[215%] lg:border lg:border-2' >
                <option>Select</option>
                <option>Select</option>
                <option>Select</option>
              </select>
            </div>
            <div className='lg:ml-[9.6%]' >
              <h1>Source</h1>
              <input className='lg:w-[126%] lg:border lg:border-2' />
            </div>

            <div className='lg:ml-[5.2%]' >
              <h1>Destination</h1> 
              <input className='lg:w-[164.5%] lg:border lg:border-2' />
            </div>
          </div>


          <div className='lg:flex lg:font-semibold lg:mt-4 '>
           
            <div className=' lg:ml-2'>
              <h1>Expentaion Date</h1>
              <div className='lg:flex'>
              <input className='lg:w-[50%] lg:border lg:border-2' type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
              <input className='lg:w-[29%] lg:border lg:border-2' />
            </div>
          </div>

             <div  className=' lg:ml-[-4%]' >
              <h1>Service Mode</h1>
              <select className='lg:w-[150%] lg:border lg:border-2' >
                <option>Select</option>
                <option>Select</option>
                <option>Select</option>
              </select>
             </div>

            
            <div  className='lg:ml-14 ' >
              <h1>Load Type</h1>
              <select className='lg:w-[215%] lg:border lg:border-2' >
                <option>Select</option>
                <option>Select</option>
                <option>Select</option>
              </select>
            </div>
            <div className='lg:ml-[9%]' >
              <h1>via</h1>
              <input className='lg:w-[126%] lg:border lg:border-2' />
            </div>

            <div className='lg:ml-[5.2%]' >
              <h1>Marketing Person</h1> 
              <input className='lg:w-[164.5%] lg:border lg:border-2' />
            </div>
          </div>

          <div className='lg:border-bold lg:border-2 lg:mt-3 lg:w-[98.5%] lg:ml-[8px]'></div>
        
         <button className=' lg:mt-[10px] lg:text-white  lg:flex  lg:ml-[8px] lg:w-[98.5%] lg:py-2 lg:bg-green-500'>
         <GrAdd className=' lg:ml-2 lg:mt-1' />
         <h1 className='lg:font-semibold lg:ml-1 ' >Additional Detail</h1>
         </button>
 
         <div className='lg:border-bold lg:border-2 lg:mt-3 lg:w-[98.5%] lg:ml-[8px]'></div>
         
         <button className='lg:ml-[5px] lg:mt-[10px] lg:bg-green-500 lg:px-4 lg:py-2 lg:mr-2 lg:rounded-xl lg:border-4  lg:text-white '>Add item</button>
        
         <div style={{overflowX: 'auto', width: '100%', height: 'auto'}}>
                   
                   
           <div className='  lg:flex lg:ml-2 lg:mt-4  lg:w-[155%] lg:h-[5%]  '>
             
             <div className='lg:bg-green-500 lg:w-[5%] lg:h-100 lg:border-2 lg:text-white lg:flex lg:items-center  lg:justify-center    '><IoMdMail /></div>
             <div className='lg:bg-green-500 lg:w-[5%] lg:h-100 lg:border-2 lg:text-white lg:flex lg:items-center  lg:justify-center    '><ImBin /></div>        
             <div className='lg:bg-green-500 lg:w-[5%] lg:h-100 lg:border-2 lg:text-white lg:flex lg:items-center  lg:justify-center    '>#</div>        
          
           <div className='lg:flex lg:flex-col lg:w-[45%]'>
           <div className='lg:bg-green-500 lg:w-[100%] lg:h-[100%] lg:border-2 lg:text-white lg:flex lg:items-center  lg:justify-center    '>Invoice</div>
           <div className='lg:flex lg:w-full'>
             <div className='lg:bg-green-500 lg:w-[50%] lg:h-[100%] lg:border-2 lg:text-white lg:flex lg:items-center  lg:justify-center    '>No.</div>        
             <div className='lg:bg-green-500 lg:w-[50%] lg:h-[100%] lg:border-2 lg:text-white lg:flex lg:items-center  lg:justify-center    '>Date</div> 
             </div>    
           </div>
           <div className='lg:bg-green-500 lg:w-[5%] lg:h-100 lg:border-2 lg:text-white lg:flex lg:items-center  lg:justify-center    '>pkgs</div>        

           <div className='lg:flex lg:flex-col lg:w-[40%]'>
           <div className='lg:bg-green-500 lg:w-[100%] lg:h-[100%] lg:border-2  lg:text-white  lg:flex lg:items-center  lg:justify-center   '>weight</div>
           <div className='lg:flex lg:w-full'>
             <div className='lg:bg-green-500 lg:w-[50%] lg:h-[100%] lg:border-2  lg:text-white lg:flex lg:items-center  lg:justify-center    '>Net</div>        
             <div className='lg:bg-green-500 lg:w-[50%] lg:h-[100%] lg:border-2  lg:text-white lg:flex lg:items-center  lg:justify-center    '>Fare</div> 
             <div className='lg:bg-green-500 lg:w-[50%] lg:h-[100%] lg:border-2  lg:text-white  lg:flex lg:items-center  lg:justify-center   '>Container</div> 
             <div className='lg:bg-green-500 lg:w-[50%] lg:h-[100%] lg:border-2  lg:text-white  lg:flex lg:items-center  lg:justify-center   '>Gross</div> 
             </div>    
           </div>
           <div className='lg:bg-green-500 lg:w-[15%] lg:h-100 lg:border-2 lg:text-white lg:flex lg:items-center  lg:justify-center    '>Content</div>        
             <div className='lg:bg-green-500 lg:w-[15%] lg:h-100 lg:border-2 lg:text-white lg:flex lg:items-center  lg:justify-center    '>Remarks</div>        
          
           </div>

           <div className='  lg:flex lg:ml-2   lg:w-[155%] lg:h-[5%]  '>
             
             <div className='lg:bg-gray-100 lg:w-[5%] lg:h-100 lg:border-2 lg:text-black lg:font-semibold lg:flex lg:items-center  lg:justify-center  lg:text-xs  '><IoMdMail /></div>
             <div className='lg:bg-gray-100 lg:w-[5%] lg:h-100 lg:border-2 lg:text-black lg:font-semibold lg:flex lg:items-center  lg:justify-center  lg:text-xs  '><ImBin /></div>        
             <div className='lg:bg-gray-100 lg:w-[5%] lg:h-100 lg:border-2 lg:text-black lg:font-semibold lg:flex lg:items-center  lg:justify-center  lg:text-xs  '>1</div>        
          
           <div className='lg:flex lg:flex-row lg:w-[45%]'>
           <div className='lg:flex lg:w-full'>
             <div className='lg:bg-gray-100 lg:w-[50%] lg:h-100 lg:border-2 lg:text-black lg:font-semibold lg:flex lg:items-center  lg:justify-center  lg:text-xs  '></div>        
             <div className='lg:bg-gray-100 lg:w-[50%] lg:h-100 lg:border-2 lg:text-black lg:font-semibold lg:flex lg:items-center  lg:justify-center  lg:text-xs  '>dd/mm/yyyy</div> 
             </div>    
           </div>
           <div className='lg:bg-gray-100 lg:w-[5%] lg:h-100 lg:border-2 lg:text-black lg:font-semibold lg:flex lg:items-center  lg:justify-center  lg:text-xs  '>500</div>        

           <div className='lg:flex lg:flex-col lg:w-[40%]'>
           <div className='lg:flex lg:w-full'>
             <div className='lg:bg-gray-100 lg:w-[50%] lg:h-100 lg:border-2 lg:text-black lg:font-semibold lg:flex lg:items-center  lg:justify-center  lg:text-xs  '>2500</div>        
             <div className='lg:bg-gray-100 lg:w-[50%] lg:h-100 lg:border-2 lg:text-black lg:font-semibold lg:flex lg:items-center  lg:justify-center  lg:text-xs  '>0</div> 
             <div className='lg:bg-gray-100 lg:w-[50%] lg:h-100 lg:border-2 lg:text-black lg:font-semibold  lg:flex lg:items-center  lg:justify-center  lg:text-xs '>0</div> 
             <div className='lg:bg-gray-100 lg:w-[50%] lg:h-100 lg:border-2 lg:text-black lg:font-semibold  lg:flex lg:items-center  lg:justify-center  lg:text-xs '>2500</div> 
             </div>    
           </div>
           <div className='lg:bg-gray-100 lg:w-[15%] lg:h-100 lg:border-2 lg:text-black lg:font-semibold lg:flex lg:items-center  lg:justify-center  lg:text-xs  '>MACHINERY PART</div>        
             <div className='lg:bg-gray-100 lg:w-[15%] lg:h-100 lg:border-2 lg:text-black lg:font-semibold lg:flex lg:items-center  lg:justify-center  lg:text-xs  '></div>        
          
           </div>

           <div className='  lg:flex lg:ml-2   lg:w-[155%] lg:h-[5%]  '>
             
             <div className='lg:bg-gray-100 lg:w-[5%] lg:h-100 lg:border-2 lg:text-black lg:font-semibold lg:flex lg:items-center  lg:justify-center  lg:text-xs  '><IoMdMail /></div>
             <div className='lg:bg-gray-100 lg:w-[5%] lg:h-100 lg:border-2 lg:text-black lg:font-semibold lg:flex lg:items-center  lg:justify-center  lg:text-xs  '><ImBin /></div>        
             <div className='lg:bg-gray-100 lg:w-[5%] lg:h-100 lg:border-2 lg:text-black lg:font-semibold lg:flex lg:items-center  lg:justify-center  lg:text-xs  '>2</div>        
          
           <div className='lg:flex lg:flex-row lg:w-[45%]'>
           <div className='lg:flex lg:w-full'>
             <div className='lg:bg-gray-100 lg:w-[50%] lg:h-100 lg:border-2 lg:text-black lg:font-semibold lg:flex lg:items-center  lg:justify-center  lg:text-xs  '></div>        
             <div className='lg:bg-gray-100 lg:w-[50%] lg:h-100 lg:border-2 lg:text-black lg:font-semibold lg:flex lg:items-center  lg:justify-center  lg:text-xs  '>dd/mm/yyyy</div> 
             </div>    
           </div>
           <div className='lg:bg-gray-100 lg:w-[5%] lg:h-100 lg:border-2 lg:text-black lg:font-semibold lg:flex lg:items-center  lg:justify-center  lg:text-xs  '>500</div>        

           <div className='lg:flex lg:flex-col lg:w-[40%]'>
           <div className='lg:flex lg:w-full'>
             <div className='lg:bg-gray-100 lg:w-[50%] lg:h-100 lg:border-2 lg:text-black lg:font-semibold lg:flex lg:items-center  lg:justify-center  lg:text-xs  '>2500</div>        
             <div className='lg:bg-gray-100 lg:w-[50%] lg:h-100 lg:border-2 lg:text-black lg:font-semibold lg:flex lg:items-center  lg:justify-center  lg:text-xs  '>0</div> 
             <div className='lg:bg-gray-100 lg:w-[50%] lg:h-100 lg:border-2 lg:text-black lg:font-semibold  lg:flex lg:items-center  lg:justify-center  lg:text-xs '>0</div> 
             <div className='lg:bg-gray-100 lg:w-[50%] lg:h-100 lg:border-2 lg:text-black lg:font-semibold  lg:flex lg:items-center  lg:justify-center  lg:text-xs '>2500</div> 
             </div>    
           </div>
           <div className='lg:bg-gray-100 lg:w-[15%] lg:h-100 lg:border-2 lg:text-black lg:font-semibold lg:flex lg:items-center  lg:justify-center  lg:text-xs  '>MACHINERY PART</div>        
             <div className='lg:bg-gray-100 lg:w-[15%] lg:h-100 lg:border-2 lg:text-black lg:font-semibold lg:flex lg:items-center  lg:justify-center  lg:text-xs  '></div>        
          
           </div>
           
           </div>

           <div className='lg:flex lg:ml-2 lg:mt-4 lg:w-[98.5%] lg:h-[5%] lg:bg-gray-100 lg:flex lg:items-center lg:font-semibold lg:pl-2'>No data available in the table</div>
      
           <div className='lg:flex lg:font-semibold lg:mt-4 '>
           
           <div className=' lg:ml-2 lg:flex:col lg:mr-8'>
               <h1>
               Pkgs
               </h1>
               <input className='lg:w-[98%] lg:bg-gray-100 lg:border lg:border-2' />
              </div>
             
 
             <div className=' lg:flex:col '>
               <h1>
               Net Weights
               </h1>
               <input className='lg:w-[98%] lg:bg-gray-100 lg:border lg:border-2' />
             </div>
 
              <div  className=' lg:ml-[3%]' >
               <h1>Tara Weight</h1>
               <input className='lg:w-[98%] lg:bg-gray-100 lg:border lg:border-2' />
              </div>
 
             
             <div  className='lg:ml-[3%] ' >
               <h1>Container Weight</h1>
               <input className='lg:w-[98%] lg:bg-gray-100 lg:border lg:border-2' />
             </div>
             <div className='lg:ml-[3%]' >
               <h1>Gross Weight</h1>
               <input className='lg:w-[98%] lg:bg-gray-100 lg:border lg:border-2' />
                </div>
 
             <div className='lg:ml-[3%]' >
               <h1>No. of Vechicle</h1> 
               <input className='lg:w-[98%] lg:bg-gray-100 lg:border lg:border-2' />
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

export default JobCreate;