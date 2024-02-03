import React, { useState } from 'react'

const Qmp = () => {
    const [trackby, setTrackby] = useState("");
    const [startDate, setStartDate] = useState(null);
    return (
      <div className='w-screen lg:bg-gray-200 h-screen '>
        <div className='lg:pl-[88px] lg:pt-[60px]'>
        <h1 className='lg:font-semibold lg:text-[20px] ' >QMP</h1>
        <div className="container  lg:w-[96%] lg:bg-white lg:h-[500px] ">    
         <div className='lg:flex lg:flex-row'>

      <div  className='lg:flex lg:flex-col lg:w-[100%] lg:p-[20px] '  >
        <div className='lg:flex lg:flex-row'>
            <div className=''>
        <div className=' lg:text-center lg:mt-[20px] lg:bg-green-500 lg:flex lg:ml-[20px] lg:mr-[20px] lg:w-[210.2%]  '> 
          <div className='lg:text-sm lg:font-semibold lg:p-2.5 lg:border lg:border-solid lg:border-black lg:border-opacity-1000 lg:w-[10.2%]'>
            S.No.
            </div>
           
            <div className='lg:text-center lg:text-sm lg:font-semibold lg:p-3 lg:border lg:border-solid lg:border-black lg:border-opacity-1000 lg:w-[19.5%]'>
            From
            </div> 
            <div className='lg:text-center lg:text-sm lg:font-semibold lg:p-3 lg:border lg:border-solid lg:border-black lg:border-opacity-1000 lg:w-[22.2%]'>
            To
            </div>
            <div className='lg:text-center lg:text-sm lg:font-semibold lg:p-3 lg:border lg:border-solid lg:border-black lg:border-opacity-1000 lg:w-[17.6%]'>
            Vehicle Type
            </div>
            <div className='lg:text-center lg:text-sm lg:font-semibold lg:p-3 lg:border lg:border-solid lg:border-black lg:border-opacity-1000 lg:w-[25.2%]'>
            Dimension
            </div>
            <div className='lg:text-center lg:text-sm lg:font-semibold lg:p-3 lg:border lg:border-solid lg:border-black lg:border-opacity-1000 lg:w-[25.4%]'>
            Weight
            </div>
            <div className='lg:text-center lg:text-sm lg:font-semibold lg:p-3 lg:border lg:border-solid lg:border-black lg:border-opacity-1000 lg:w-[30.5%]'>
            Qty.
            </div>
            <div className='lg:text-center lg:text-sm lg:font-semibold lg:p-3 lg:border lg:border-solid lg:border-black lg:border-opacity-1000 lg:w-[32.4%]'>
            XXX
            </div>
            <div className='lg:text-center lg:text-sm lg:font-semibold lg:p-3 lg:border lg:border-solid lg:border-black lg:border-opacity-1000 lg:w-[35%]'>
            XXX
            </div>
          </div>    

          <div className=' lg:text-center  lg:bg-white-200 lg:flex lg:ml-[20px] lg:mr-[20px] lg:w-[210.2%]  '> 
          <div className='lg:text-sm lg:font-semibold lg:p-2 lg:border lg:border-solid lg:border-black lg:border-opacity-1000 lg:w-[10.4%]'>
            #
            </div>
            <div className='lg:text-center lg:text-sm lg:font-semibold lg:p-2 lg:border lg:border-solid lg:border-black lg:border-opacity-1000 lg:w-[19.9%]'>
            xxx
            </div> 
            <div className='lg:text-center lg:text-sm lg:font-semibold lg:p-2 lg:border lg:border-solid lg:border-black lg:border-opacity-1000 lg:w-[22.5%]'>
            xxx
            </div>
            <div className='lg:text-center lg:text-sm lg:font-semibold lg:p-2 lg:border lg:border-solid lg:border-black lg:border-opacity-1000 lg:w-[18%]'>
            xxx
            </div>
            <div className='lg:text-center lg:text-sm lg:font-semibold lg:p-2 lg:border lg:border-solid lg:border-black lg:border-opacity-1000 lg:w-[25.5%]'>
            xxx
            </div>
            <div className='lg:text-center lg:text-sm lg:font-semibold lg:p-2 lg:border lg:border-solid lg:border-black lg:border-opacity-1000 lg:w-[25.4%]'>
            xxx
            </div>
            <div className='lg:text-center lg:text-sm lg:font-semibold lg:p-2 lg:border lg:border-solid lg:border-black lg:border-opacity-1000 lg:w-[30.4%]'>
            xxx
            </div>
            <div className='lg:text-center lg:text-sm lg:font-semibold lg:p-2 lg:border lg:border-solid lg:border-black lg:border-opacity-1000 lg:w-[32%]'>
            xxx
            </div>
            <div className='lg:text-center lg:text-sm lg:font-semibold lg:p-2 lg:border lg:border-solid lg:border-black lg:border-opacity-1000 lg:w-[35%]'>
            xxx
            </div>
          </div>    
        
          <div className=' lg:text-center  lg:bg-white-200 lg:flex lg:ml-[20px] lg:mr-[20px] lg:w-[210.2%]  '> 
          <div className='lg:text-sm lg:font-semibold lg:p-2 lg:border lg:border-solid lg:border-black lg:border-opacity-1000 lg:w-[10.4%]'>
            #
            </div>
            <div className='lg:text-center lg:text-sm lg:font-semibold lg:p-2 lg:border lg:border-solid lg:border-black lg:border-opacity-1000 lg:w-[19.9%]'>
            xxx
            </div> 
            <div className='lg:text-center lg:text-sm lg:font-semibold lg:p-2 lg:border lg:border-solid lg:border-black lg:border-opacity-1000 lg:w-[22.5%]'>
            xxx
            </div>
            <div className='lg:text-center lg:text-sm lg:font-semibold lg:p-2 lg:border lg:border-solid lg:border-black lg:border-opacity-1000 lg:w-[18%]'>
            xxx
            </div>
            <div className='lg:text-center lg:text-sm lg:font-semibold lg:p-2 lg:border lg:border-solid lg:border-black lg:border-opacity-1000 lg:w-[25.5%]'>
            xxx
            </div>
            <div className='lg:text-center lg:text-sm lg:font-semibold lg:p-2 lg:border lg:border-solid lg:border-black lg:border-opacity-1000 lg:w-[25.4%]'>
            xxx
            </div>
            <div className='lg:text-center lg:text-sm lg:font-semibold lg:p-2 lg:border lg:border-solid lg:border-black lg:border-opacity-1000 lg:w-[30.4%]'>
            xxx
            </div>
            <div className='lg:text-center lg:text-sm lg:font-semibold lg:p-2 lg:border lg:border-solid lg:border-black lg:border-opacity-1000 lg:w-[32%]'>
            xxx
            </div>
            <div className='lg:text-center lg:text-sm lg:font-semibold lg:p-2 lg:border lg:border-solid lg:border-black lg:border-opacity-1000 lg:w-[35%]'>
            xxx
            </div>
          </div>   
         
          <div className=' lg:text-center  lg:bg-white-200 lg:flex lg:ml-[20px] lg:mr-[20px] lg:w-[210.2%] '> 
          <div className='lg:text-sm lg:font-semibold lg:p-2 lg:border lg:border-solid lg:border-black lg:border-opacity-1000 lg:w-[10.4%]'>
            #
            </div>
            <div className='lg:text-center lg:text-sm lg:font-semibold lg:p-2 lg:border lg:border-solid lg:border-black lg:border-opacity-1000 lg:w-[19.9%]'>
            xxx
            </div> 
            <div className='lg:text-center lg:text-sm lg:font-semibold lg:p-2 lg:border lg:border-solid lg:border-black lg:border-opacity-1000 lg:w-[22.5%]'>
            xxx
            </div>
            <div className='lg:text-center lg:text-sm lg:font-semibold lg:p-2 lg:border lg:border-solid lg:border-black lg:border-opacity-1000 lg:w-[18%]'>
            xxx
            </div>
            <div className='lg:text-center lg:text-sm lg:font-semibold lg:p-2 lg:border lg:border-solid lg:border-black lg:border-opacity-1000 lg:w-[25.5%]'>
            xxx
            </div>
            <div className='lg:text-center lg:text-sm lg:font-semibold lg:p-2 lg:border lg:border-solid lg:border-black lg:border-opacity-1000 lg:w-[25.4%]'>
            xxx
            </div>
            <div className='lg:text-center lg:text-sm lg:font-semibold lg:p-2 lg:border lg:border-solid lg:border-black lg:border-opacity-1000 lg:w-[30.4%]'>
            xxx
            </div>
            <div className='lg:text-center lg:text-sm lg:font-semibold lg:p-2 lg:border lg:border-solid lg:border-black lg:border-opacity-1000 lg:w-[32%]'>
            xxx
            </div>
            <div className='lg:text-center lg:text-sm lg:font-semibold lg:p-2 lg:border lg:border-solid lg:border-black lg:border-opacity-1000 lg:w-[35%]'>
            xxx
            </div>
          </div>     
          </div>    
        
          </div>

          <div className='lg:flex '>    

          <div className='left '>

<div className=' lg:text-center lg:mt-[20px] lg:bg-green-500 lg:flex lg:ml-[20px] lg:mr-[20px] lg:w-[340%] '> 
<div className=' lg:text-center lg:text-sm lg:font-semibold lg:p-3 lg:border lg:border-solid lg:border-black lg:border-opacity-1000 lg:w-[20%]'>
XXX
  </div>
  <div className=' lg:text-center lg:text-sm lg:font-semibold lg:p-3 lg:border lg:border-solid lg:border-black lg:border-opacity-1000 lg:w-[20%]'>
  XXX
  </div>
  <div className=' lg:text-center lg:text-sm lg:font-semibold lg:p-3 lg:border lg:border-solid lg:border-black lg:border-opacity-1000 lg:w-[20%]'>
  XXX
  </div>
  <div className=' lg:text-center lg:text-sm lg:font-semibold lg:p-3 lg:border lg:border-solid lg:border-black lg:border-opacity-1000 lg:w-[20%]'>
 XXX
  </div>
  <div className=' lg:text-center lg:text-sm lg:font-semibold lg:p-3 lg:border lg:border-solid lg:border-black lg:border-opacity-1000 lg:w-[20%]'>
  XXX
  </div>
  {/* <div className=' lg:text-center lg:text-sm lg:font-semibold lg:p-3 lg:border lg:border-solid lg:border-black lg:border-opacity-1000 lg:w-[20%]'>
 L1
  </div> */}
</div>  

<div className=' lg:text-center lg:bg-white-200 lg:flex lg:ml-[20px] lg:mr-[20px] lg:w-[340%]'> 
<div className=' lg:text-center lg:text-sm lg:font-semibold lg:p-2 lg:border lg:border-solid lg:border-black lg:border-opacity-1000 lg:w-[20%]'>
 xxx
  </div>
  <div className=' lg:text-center lg:text-sm lg:font-semibold lg:p-2 lg:border lg:border-solid lg:border-black lg:border-opacity-1000 lg:w-[20%]'>
  xxx
  </div>
  <div className=' lg:text-center lg:text-sm lg:font-semibold lg:p-2 lg:border lg:border-solid lg:border-black lg:border-opacity-1000 lg:w-[20%]'>
  xxx
  </div>
  <div className=' lg:text-center lg:text-sm lg:font-semibold lg:p-2 lg:border lg:border-solid lg:border-black lg:border-opacity-1000 lg:w-[20%]'>
 xxx
  </div>
  <div className=' lg:text-center lg:text-sm lg:font-semibold lg:p-2 lg:border lg:border-solid lg:border-black lg:border-opacity-1000 lg:w-[20%]'>
  xxx
  </div>
  {/* <div className=' lg:text-center lg:text-sm lg:font-semibold lg:p-2 lg:border lg:border-solid lg:border-black lg:border-opacity-1000 lg:w-[20%]'>
 xxx
  </div> */}
</div>  
<div className=' lg:text-center lg:bg-white-200 lg:flex lg:ml-[20px] lg:mr-[20px] lg:w-[340%]'> 
<div className=' lg:text-center lg:text-sm lg:font-semibold lg:p-2 lg:border lg:border-solid lg:border-black lg:border-opacity-1000 lg:w-[20%]'>
 xxx
  </div>
  <div className=' lg:text-center lg:text-sm lg:font-semibold lg:p-2 lg:border lg:border-solid lg:border-black lg:border-opacity-1000 lg:w-[20%]'>
  xxx
  </div>
  <div className=' lg:text-center lg:text-sm lg:font-semibold lg:p-2 lg:border lg:border-solid lg:border-black lg:border-opacity-1000 lg:w-[20%]'>
  xxx
  </div>
  <div className=' lg:text-center lg:text-sm lg:font-semibold lg:p-2 lg:border lg:border-solid lg:border-black lg:border-opacity-1000 lg:w-[20%]'>
 xxx
  </div>
  <div className=' lg:text-center lg:text-sm lg:font-semibold lg:p-2 lg:border lg:border-solid lg:border-black lg:border-opacity-1000 lg:w-[20%]'>
  xxx
  </div>
  {/* <div className=' lg:text-center lg:text-sm lg:font-semibold lg:p-2 lg:border lg:border-solid lg:border-black lg:border-opacity-1000 lg:w-[20%]'>
 xxx
  </div> */}
</div> 

<div className=' lg:text-center lg:bg-white-200 lg:flex lg:ml-[20px] lg:mr-[20px] lg:w-[340%]  '> 
<div className=' lg:text-center lg:text-sm lg:font-semibold lg:p-2 lg:border lg:border-solid lg:border-black lg:border-opacity-1000 lg:w-[20%]'>
 xxx
  </div>
  <div className=' lg:text-center lg:text-sm lg:font-semibold lg:p-2 lg:border lg:border-solid lg:border-black lg:border-opacity-1000 lg:w-[20%]'>
  xxx
  </div>
  <div className=' lg:text-center lg:text-sm lg:font-semibold lg:p-2 lg:border lg:border-solid lg:border-black lg:border-opacity-1000 lg:w-[20%]'>
  xxx
  </div>
  <div className=' lg:text-center lg:text-sm lg:font-semibold lg:p-2 lg:border lg:border-solid lg:border-black lg:border-opacity-1000 lg:w-[20%]'>
 xxx
  </div>
  <div className=' lg:text-center lg:text-sm lg:font-semibold lg:p-2 lg:border lg:border-solid lg:border-black lg:border-opacity-1000 lg:w-[20%]'>
  xxx
  </div>
  {/* <div className=' lg:text-center lg:text-sm lg:font-semibold lg:p-2 lg:border lg:border-solid lg:border-black lg:border-opacity-1000 lg:w-[20%]'>
 xxx
  </div> */}
</div>   
<div className=' lg:text-center lg:bg-white-200 lg:flex lg:ml-[20px] lg:mr-[20px] lg:w-[340%]  '> 
<div className=' lg:text-center lg:text-sm lg:font-semibold lg:p-2 lg:border lg:border-solid lg:border-black lg:border-opacity-1000 lg:w-[20%]'>
 xxx
  </div>
  <div className=' lg:text-center lg:text-sm lg:font-semibold lg:p-2 lg:border lg:border-solid lg:border-black lg:border-opacity-1000 lg:w-[20%]'>
  xxx
  </div>
  <div className=' lg:text-center lg:text-sm lg:font-semibold lg:p-2 lg:border lg:border-solid lg:border-black lg:border-opacity-1000 lg:w-[20%]'>
  xxx
  </div>
  <div className=' lg:text-center lg:text-sm lg:font-semibold lg:p-2 lg:border lg:border-solid lg:border-black lg:border-opacity-1000 lg:w-[20%]'>
 xxx
  </div>
  <div className=' lg:text-center lg:text-sm lg:font-semibold lg:p-2 lg:border lg:border-solid lg:border-black lg:border-opacity-1000 lg:w-[20%]'>
  xxx
  </div>
  {/* <div className=' lg:text-center lg:text-sm lg:font-semibold lg:p-2 lg:border lg:border-solid lg:border-black lg:border-opacity-1000 lg:w-[20%]'>
 xxx
  </div> */}
</div>   
<div className=' lg:text-center lg:bg-white-200 lg:flex lg:ml-[20px] lg:mr-[20px] lg:w-[340%] '> 
  <div className=' lg:text-center lg:text-sm lg:font-semibold lg:p-2 lg:border lg:border-solid lg:border-black lg:border-opacity-1000 lg:w-[20%]'>
  xxx
  </div>
  <div className=' lg:text-center lg:text-sm lg:font-semibold lg:p-2 lg:border lg:border-solid lg:border-black lg:border-opacity-1000 lg:w-[20%]'>
  xxx
  </div>
  <div className=' lg:text-center lg:text-sm lg:font-semibold lg:p-2 lg:border lg:border-solid lg:border-black lg:border-opacity-1000 lg:w-[20%]'>
 xxx
  </div>
  <div className=' lg:text-center lg:text-sm lg:font-semibold lg:p-2 lg:border lg:border-solid lg:border-black lg:border-opacity-1000 lg:w-[20%]'>
  xxx
  </div>
  <div className=' lg:text-center lg:text-sm lg:font-semibold lg:p-2 lg:border lg:border-solid lg:border-black lg:border-opacity-1000 lg:w-[20%]'>
  xxx  </div>
  {/* <div className=' lg:text-center lg:text-sm lg:font-semibold lg:p-2 lg:border lg:border-solid lg:border-black lg:border-opacity-1000 lg:w-[20%]'>
 xxx
  </div>
   */}
</div>  
   
</div>


         <div className='right lg:ml-48 '>

          <div className=' lg:text-center lg:mt-[20px] lg:bg-green-500 lg:flex lg:ml-[1000%] lg:mr-[20px] lg:w-[250%] '> 
          <div className=' lg:text-center lg:text-sm lg:font-semibold lg:p-3 lg:border lg:border-solid lg:border-black lg:border-opacity-1000 lg:w-[100%]'>
          L1
            </div>
            
          </div>  

          <div className=' lg:text-center lg:bg-white-200 lg:flex lg:ml-[1000%] lg:mr-[20px] lg:w-[250%]'> 
          <div className=' lg:text-center lg:text-sm lg:font-semibold lg:p-2 lg:border lg:border-solid lg:border-black lg:border-opacity-1000 lg:w-[100%]'>
           xxx
            </div>
            
          </div>  
          
          <div className=' lg:text-center lg:bg-white-200 lg:ml-[1000%] lg:mr-[20px] lg:w-[250%]'> 
          <div className=' lg:text-center lg:text-sm lg:font-semibold lg:p-2 lg:border lg:border-solid lg:border-black lg:border-opacity-1000 lg:w-[100%]'>
           xxx
            </div>
            
          </div> 

          <div className=' lg:text-center lg:bg-white-200 lg:flex lg:ml-[1000%] lg:mr-[20px] lg:w-[250%]  '> 
            <div className=' lg:text-center lg:text-sm lg:font-semibold lg:p-2 lg:border lg:border-solid lg:border-black lg:border-opacity-1000 lg:w-[100%]'>
            xxx
            </div>
           
          </div>    

          <div className=' lg:text-center lg:bg-white-200 lg:flex lg:ml-[1000%] lg:mr-[20px] lg:w-[250%]  '> 
          <div className=' lg:text-center lg:text-sm lg:font-semibold lg:p-2 lg:border lg:border-solid lg:border-black lg:border-opacity-1000 lg:w-[100%]'>
           xxx
            </div>
          </div>  
           
          <div className=' lg:text-center lg:bg-white-200 lg:flex lg:ml-[1000%] lg:mr-[20px] lg:w-[250%]  '> 
          <div className=' lg:text-center lg:text-sm lg:font-semibold lg:p-2 lg:border lg:border-solid lg:border-black lg:border-opacity-1000 lg:w-[100%]'>
           xxx
            </div>
          </div>  
             
          </div>
          </div>
         
          </div>
    
      </div>
      </div>
     
            <div className='w-28 p-2 mx-auto flex justify-center lg:rounded-md lg:mt-[40px] lg:bg-yellow-500 '> 
            <button className='lg:font-bold  lg:text-[1i0px] lg:text-center  lg:font-semibold w-20'>
           Submit
            </button>
          </div>  
   
   
   
      </div>
      </div>
     
      );
}

export default Qmp