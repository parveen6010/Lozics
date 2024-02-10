import React, { useState } from 'react';
import { FiAlignJustify } from "react-icons/fi";
import { GrAdd } from "react-icons/gr";
import { IoMdMail } from "react-icons/io";
import { FaLock } from "react-icons/fa6";
import { FaRegHandPointer } from "react-icons/fa6";
import { ImBin } from "react-icons/im";

const Consignment = () => {
  const [trackby, setTrackby] = useState("");
  const [startDate, setStartDate] = useState(null);

  return (
    <div className='w-screen lg:bg-gray-200 h-screen '>
      <div className='lg:pl-[18px] lg:pt-[6px]'>
        <div className='lg:flex '>
        <h1 className='lg:font-bold lg:text-[20px]'>Consignment</h1>
        <select className='lg:w-[10%] lg:ml-[79%]  lg:border-2 lg:text-[13px]'>
          <option>Ho-NSP </option>
          <option>Select</option>
        </select>
        </div>

        <div className='lg:flex '>
  <div className='lg:flex' > 
    <button className='lg:bg-green-600 lg:px-4 lg:py-2 lg:mr-2 lg:rounded-xl lg:border-4  lg:text-white '>Submit</button>
    <button className='lg:bg-green-600 lg:px-4 lg:py-2 lg:rounded-xl lg:border-4 lg:text-white '>Discard</button>
  </div>
  <div className='lg:ml-[78.5%]'>
    <button className='lg:bg-green-600 lg:px-4 lg:py-2 lg:rounded-xl lg:border-4 lg:text-[20px] lg:text-white '><FiAlignJustify />
</button>
  </div>
</div>
        <div className="container lg:w-[98%] lg:bg-white lg:h-[1100px] ">

          <div className='lg:flex lg:font-semibold '>
            <div className='lg:mt-1.5 lg:ml-2 '>
              <h1>Document Type</h1>
              <select className='lg:w-[235%] lg:border lg:border-2' >
                <option>Select</option>
                <option>Select</option>
                <option>Select</option>
              </select>

            </div>

             <div  className='lg:m-1.5  lg:ml-[13.7%] lg:w-[25%]' >
              <h1>Type</h1>
              <div className='lg:flex'>
              <select className='lg:w-[140%] lg:border lg:border-2' >
                <option>Select</option>
                <option>Select</option>
                <option>Select</option>
              </select>
         <input className='lg:w-[50%] lg:border lg:border-2' />
            </div>
            </div>

            <div className='lg:m-1.5 lg:ml-[1.7%]'>
             <h1>Consignor</h1> 
              <input className='lg:w-[126%] lg:border lg:border-2' />
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
              <input className='lg:w-[98%] lg:border lg:border-2' />
            </div>
          </div>


         
          <div className='lg:flex lg:font-semibold '>
            <div className='lg:mt-1.5 lg:ml-2  '>
              <h1>Againts</h1>
              <div className='lg:flex'>
              <select className='lg:w-[160%] lg:border lg:border-2' >
                <option>Select</option>
                <option>Select</option>
                <option>Select</option>
              </select>
         <input className='lg:w-[50%] lg:border lg:border-2' />
            </div>

            </div>

             <div  className='lg:m-1.5  lg:ml-[1.5%] lg:w-[25%]' >
             <h1>Date</h1>
              <div className='lg:flex'>
              <input className='lg:w-[100%] lg:border lg:border-2' type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />

            </div>
            </div>

            <div className='lg:m-1.5 lg:ml-[1.7%]'>
             <h1>Consignor</h1> 
              <input className='lg:w-[126%] lg:border lg:border-2' />
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
              <input className='lg:w-[98%] lg:border lg:border-2' />
            </div>
          </div>


          <div className='lg:flex lg:font-semibold '>
        
        
            <div className='lg:mt-1.5 lg:ml-2 '>
              <h1>Conignment No.</h1>
              <div className='lg:flex  '>
              <h1 className='lg:border-2 lg:w-[20%] lg:text-[12px] lg:items-center'>TWIHO</h1>
              <input className='lg:w-[25%] lg:border lg:border-2 lg:bg-green-400' placeholder='Conign No.'  />              
         <input className='lg:w-[15%] lg:border lg:border-2' />

            </div>

            </div>

             <div  className='lg:m-1.5    lg:ml-[-11%] lg:w-[25%]' >
             <h1>Date</h1>
              <div className='lg:flex'>
              <input className='lg:w-[90%] lg:border lg:border-2' type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
              <input className='lg:w-[29%] lg:border lg:border-2' />
            </div>
            </div>

            <div className='lg:m-1.5 lg:ml-[2.5%]'>
             <h1>Billing Party</h1> 
             <div className='lg:flex lg:w-[120%]'>
             <input className='lg:w-[126%] lg:border lg:border-2' />
            <h1 className='lg:bg-red-500 lg:px-2 lg:py-1'>N</h1>
             </div>
              
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
              <input className='lg:w-[98%] lg:border lg:border-2' />
            </div>
          </div>


       <div className='lg:flex lg:font-semibold '>

          <div className='lg:m-1.5 lg:ml-[0.5%]'>
         <h1>Source</h1> 
         <div className='lg:flex lg:w-[120%]'>
         <input className='lg:w-[126%] lg:border lg:border-2' />
        <h1 className='lg:bg-red-500 lg:px-2 lg:py-1'>N</h1>
         </div>
        </div>

        <div className='lg:m-1.5 lg:ml-[4.5%]'>
         <h1>Destination</h1> 
         <div className='lg:flex lg:w-[135%]'>
         <input className='lg:w-[136%] lg:border lg:border-2' />
        <h1 className='lg:bg-red-500 lg:px-2 lg:py-1'>N</h1>
         </div>
          
        </div>

        <div className='lg:m-1.5 lg:ml-[8%]'>
         <h1>Delivery At</h1> 
         <div className='lg:flex lg:w-[240%]'>
         <select className='lg:w-[180%] lg:border lg:border-2' >
                <option>Select</option>
                <option>Select</option>
                <option>Select</option>
              </select>     
            <h1 className='lg:bg-red-500 lg:px-3 lg:py-1'>TP</h1>
         </div>
          
        </div>

        <div className='lg:m-1.5 lg:ml-[13%]' >
          <h1>Delivery Address</h1>
          <input className='lg:w-[160%] lg:border lg:border-2' />
        </div>
      </div>


    <div className='lg:flex lg:font-semibold '>

<div className='lg:m-1.5 lg:ml-[0.5%]'>
<h1>via</h1> 
<div className='lg:flex lg:w-[135%]'>
<input className='lg:w-[100%] lg:border lg:border-2' />
</div>
</div>

<div className='lg:m-1.5 lg:ml-[7%]'>
<h1>Container No.</h1> 
<div className='lg:flex lg:w-[135%]'>
<input className='lg:w-[40%] lg:border lg:border-2' />
<h1 className='lg:bg-red-500 lg:px-2 lg:py-1'>N</h1>
</div>

</div>

<div className='lg:m-1.5 lg:ml-[-4%] '>
<h1>Seal No.</h1> 
<div className='lg:flex lg:w-[135%]'>
<input className='lg:w-[30%] lg:border lg:border-2' />
<h1 className='lg:bg-red-500 lg:px-2 lg:py-1'>N</h1>
</div>

</div>

<div className='lg:m-1.5  lg:ml-[-7%] '>
<h1>Loading Type</h1> 
<div className='lg:flex lg:w-[270%]'>
<select className='lg:w-[200%] lg:border lg:border-2' >
      <option>Select</option>
      <option>Select</option>
      <option>Select</option>
    </select>     
 
</div>

</div>

<div className='lg:m-1.5 lg:ml-[14%]' >
<h1>Transporter</h1>
<input className='lg:w-[160%] lg:border lg:border-2' />
</div>
</div>


     <div className='lg:flex lg:font-semibold '>

<div className='lg:m-1.5 lg:ml-[0.5%]'>
<h1>Route</h1> 
<div className='lg:flex lg:w-[135%]'>
<input className='lg:w-[50%] lg:border lg:border-2' />
</div>

</div> 

<div className='lg:m-1.5 lg:ml-[-5%] '>
<h1>Distance</h1> 
<div className='lg:flex lg:w-[125%]'>
<input className='lg:w-[50%] lg:border lg:border-2' />
</div>
</div>

<div className='lg:m-1.5 lg:ml-[-4.5%] '>
<h1>Vechicle</h1> 
<div className='lg:flex lg:w-[135%]'>
<input className='lg:w-[102%] lg:border lg:border-2' />
<h1 className='lg:bg-red-500 px-2 py-1 '>N</h1> 
</div>
</div>

<div className='lg:m-1.5  lg:ml-[8%] '>
<h1>Mark No.</h1> 
<div className='lg:flex lg:w-[370%]'>
<select className='lg:w-[200%] lg:border lg:border-2' >
      <option>Select</option>
      <option>Select</option>
      <option>Select</option>
    </select>     
 
</div>

</div>

<div className='lg:m-1.5 lg:ml-[16%]' >
<h1>Connect To</h1>
<input className='lg:w-[160%] lg:border lg:border-2' />
</div>
</div>


<div className='lg:flex lg:font-semibold '>

<div className='lg:m-1.5 lg:ml-[0.5%]'>
<h1>Payment Terms</h1> 
<div className='lg:flex lg:w-[135%]'>
<select className='lg:w-[200%] lg:border lg:border-2' >
      <option>Select</option>
      <option>Select</option>
      <option>Select</option>
    </select></div>

</div> 

<div className='lg:m-1.5 lg:ml-14  '>
<h1>Mode</h1> 
<div className='lg:flex lg:w-[135%]'>
<select className='lg:w-[200%] lg:border lg:border-2' >
      <option>Select</option>
      <option>Select</option>
      <option>Select</option>
    </select>
</div>
</div>

<div className='lg:m-1.5   lg:ml-10  '>
<h1>At</h1> 
<div className='lg:flex lg:w-[135%]'>
<input className='lg:w-[102%] lg:border lg:border-2' />
<h1 className='lg:bg-red-500 px-2 py-1 '>N</h1> 
</div>
</div>


<div className='lg:m-1.5 lg:ml-[8%]   '>
<h1>Expected Delivery Date</h1> 
<div className='lg:flex lg:w-[80%]'>
<input className='lg:w-[70%] lg:border lg:border-2' type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
        <input className='lg:w-[25%] lg:border lg:border-2' />     
 
</div>

</div>


<div className='lg:m-1.5 lg:ml-[-5.5%] ' >
<h1>Godown</h1>
<select className='lg:w-[390%] lg:border lg:border-2' >
      <option>Select</option>
      <option>Select</option>
      <option>Select</option>
    </select>
</div>

</div>

 
         <div className='lg:border-bold lg:border-2 lg:mt-3 lg:w-[98.5%] lg:ml-[8px]'></div>

         <div className='lg:flex lg:font-semibold '>

         <button className='lg:ml-[5px] lg:mt-[10px] lg:bg-green-600 lg:px-4 lg:py-2 lg:mr-2 lg:rounded-xl lg:border-4  lg:text-white '>Add item</button>

<div className='lg:m-1.5 lg:ml-[2%] ' >
<h1>Rate Type </h1>
<select className='lg:w-[290%] lg:border lg:border-2' >
      <option>Select</option>
      <option>Select</option>
      <option>Select</option>
    </select>
</div>

<div className='lg:m-1.5 lg:ml-[13%] ' >
<h1>Rate Type </h1>
<select className='lg:w-[390%] lg:border lg:border-2' >
      <option>Select</option>
      <option>Select</option>
      <option>Select</option>
    </select>
</div>

<div className='lg:m-1.5 lg:ml-[18%]' >
<h1>Base</h1>
<input className='lg:w-[130%]  lg:bg-gray-200 lg:border lg:border-2' />
</div>

<div className='lg:m-1.5 lg:ml-[6%]' >
<h1>Calculation</h1>
<input className='lg:w-[135%] lg:border lg:bg-gray-200 lg:border-2' />
</div>
</div>

        
         <div style={{overflowX: 'auto', width: '100%', height: 'auto'}}>
                   
                   
           <div className='  lg:flex lg:ml-2 lg:mt-4  lg:w-[155%] lg:h-[5%]  '>
             
             <div className='lg:bg-green-600 lg:w-[5%] lg:h-100 lg:border-2 lg:text-white lg:flex lg:items-center  lg:justify-center    '><IoMdMail /></div>
             <div className='lg:bg-green-600 lg:w-[5%] lg:h-100 lg:border-2 lg:text-white lg:flex lg:items-center  lg:justify-center    '><ImBin /></div>        
             <div className='lg:bg-green-600 lg:w-[5%] lg:h-100 lg:border-2 lg:text-white lg:flex lg:items-center  lg:justify-center    '>#</div>        
          
           <div className='lg:flex lg:flex-col lg:w-[45%]'>
           <div className='lg:bg-green-600 lg:w-[100%] lg:h-[100%] lg:border-2 lg:text-white lg:flex lg:items-center  lg:justify-center    '>Invoice</div>
           <div className='lg:flex lg:w-full'>
             <div className='lg:bg-green-600 lg:w-[50%] lg:h-[100%] lg:border-2 lg:text-white lg:flex lg:items-center  lg:justify-center    '>No.</div>        
             <div className='lg:bg-green-600 lg:w-[50%] lg:h-[100%] lg:border-2 lg:text-white lg:flex lg:items-center  lg:justify-center    '>Date</div> 
             </div>    
           </div>
           <div className='lg:bg-green-600 lg:w-[5%] lg:h-100 lg:border-2 lg:text-white lg:flex lg:items-center  lg:justify-center    '>pkgs</div>        

           <div className='lg:flex lg:flex-col lg:w-[40%]'>
           <div className='lg:bg-green-600 lg:w-[100%] lg:h-[100%] lg:border-2  lg:text-white  lg:flex lg:items-center  lg:justify-center   '>weight</div>
           <div className='lg:flex lg:w-full'>
             <div className='lg:bg-green-600 lg:w-[50%] lg:h-[100%] lg:border-2  lg:text-white lg:flex lg:items-center  lg:justify-center    '>Net</div>        
             <div className='lg:bg-green-600 lg:w-[50%] lg:h-[100%] lg:border-2  lg:text-white lg:flex lg:items-center  lg:justify-center    '>Fare</div> 
             <div className='lg:bg-green-600 lg:w-[50%] lg:h-[100%] lg:border-2  lg:text-white  lg:flex lg:items-center  lg:justify-center   '>Container</div> 
             <div className='lg:bg-green-600 lg:w-[50%] lg:h-[100%] lg:border-2  lg:text-white  lg:flex lg:items-center  lg:justify-center   '>Gross</div> 
             </div>    
           </div>
           <div className='lg:bg-green-600 lg:w-[15%] lg:h-100 lg:border-2 lg:text-white lg:flex lg:items-center  lg:justify-center    '>Content</div>        
             <div className='lg:bg-green-600 lg:w-[15%] lg:h-100 lg:border-2 lg:text-white lg:flex lg:items-center  lg:justify-center    '>Remarks</div>        
          
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
               Qty.
               </h1>
               <input className='lg:w-[98%] lg:bg-gray-100 lg:border lg:border-2' />
              </div>
             
 
             <div className=' lg:flex:col '>
               <h1>
              Pkgs.
               </h1>
               <input className='lg:w-[98%] lg:bg-gray-100 lg:border lg:border-2' />
             </div>
 
              <div  className=' lg:ml-[3%]' >
               <h1>Actual Weights</h1>
               <input className='lg:w-[98%] lg:bg-gray-100 lg:border lg:border-2' />
              </div>
 
             
             <div  className='lg:ml-[3%] ' >
               <h1>Charge Weight</h1>
               <input className='lg:w-[98%] lg:bg-gray-100 lg:border lg:border-2' />
             </div>
             <div className='lg:ml-[3%]' >
               <h1>Taxable</h1>
               <input className='lg:w-[98%] lg:bg-gray-100 lg:border lg:border-2' />
                </div>
 
             <div className='lg:ml-[3%]' >
               <h1>Non Taxable</h1> 
               <input className='lg:w-[98%] lg:bg-gray-100 lg:border lg:border-2' />
              </div>
              <div className='lg:ml-[3%]' >
               <h1>GST</h1> 
               <input className='lg:w-[98%] lg:bg-gray-100 lg:border lg:border-2' />
              </div>
           </div>

           <div className='lg:flex lg:font-semibold lg:mt-4 '>
           
           <div className=' lg:ml-2 lg:flex:col lg:mr-8'>
               <h1>
               Rate
               </h1>
               <input className='lg:w-[98%] lg:bg-gray-100 lg:border lg:border-2' />
              </div>
             
 
             <div className=' lg:flex:col '>
               <h1>
               Freight
               </h1>
               <input className='lg:w-[98%] lg:bg-gray-100 lg:border lg:border-2' />
             </div>
 
              <div  className=' lg:ml-[3%]' >
               <h1>Other Charges</h1>
               <input className='lg:w-[98%] lg:bg-gray-100 lg:border lg:border-2' />
              </div>
 
             
             <div  className='lg:ml-[3%] ' >
               <h1>Gross Amount</h1>
               <input className='lg:w-[98%] lg:bg-gray-100 lg:border lg:border-2' />
             </div>
             <div className='lg:ml-[3%]' >
               <h1>Total GST</h1>
               <input className='lg:w-[98%] lg:bg-gray-100 lg:border lg:border-2' />
                </div>
 
             <div className='lg:ml-[3%]' >
               <h1>Round OFF</h1> 
               <input className='lg:w-[98%] lg:bg-gray-100 lg:border lg:border-2' />
                  </div>
                  <div className='lg:ml-[3%]' >
               <h1>Total Amount</h1> 
               <input className='lg:w-[98%] lg:bg-gray-100 lg:border lg:border-2' />
                  </div>
           </div>

           <div className='lg:flex lg:font-semibold lg:mt-4 '>
           
           <div className=' lg:ml-2 lg:flex:col lg:mr-8'>
               <h1>
               IGST
               </h1>
               <input className='lg:w-[98%] lg:bg-gray-100 lg:border lg:border-2' />
              </div>
             
 
             <div className=' lg:flex:col '>
               <h1>
               CGST
               </h1>
               <input className='lg:w-[98%] lg:bg-gray-100 lg:border lg:border-2' />
             </div>
 
              <div  className=' lg:ml-[3%]' >
               <h1>SGST</h1>
               <input className='lg:w-[98%] lg:bg-gray-100 lg:border lg:border-2' />
              </div>
 
             
             <div  className='lg:ml-[3%] ' >
               <h1>Cess</h1>
               <input className='lg:w-[98%] lg:bg-gray-100 lg:border lg:border-2' />
             </div>
             <div className='lg:ml-[3%]' >
               <h1>Paid</h1>
               <input className='lg:w-[98%] lg:bg-gray-100 lg:border lg:border-2' />
                </div>
 
             <div className='lg:ml-[3%]' >
               <h1>Pay To Driver</h1> 
               <input className='lg:w-[98%] lg:bg-gray-100 lg:border lg:border-2' />
                  </div>

                  <div className='lg:ml-[3%]' >
               <h1>M.R. No.</h1> 
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

export default Consignment;