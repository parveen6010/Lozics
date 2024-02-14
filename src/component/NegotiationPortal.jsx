import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FiAlignJustify } from "react-icons/fi";
import { GrAdd } from "react-icons/gr";
import { IoMdMail } from "react-icons/io";
import { FaLock } from "react-icons/fa6";
import { FaRegHandPointer } from "react-icons/fa6";
import { ImBin } from "react-icons/im";
import { Link } from "react-router-dom";

const NegotiationPortal = ({emailData, selectedRFQIndex}) => {
  const [startDate, setStartDate] = useState(null);
  const [remarks, setRemarks] = useState("");
  const [Rejectedbox, setRejectedbox] = useState(false);
  const [Pendingbox, setPendingbox] = useState(false);
  const [text, setText] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);

  const handleChange = (event) => {
    const value = event.target.value;
    if (value.length <= 1000) {
      setText(value);
    } else {
      // Truncate the input to 1000 characters
      setText(value.slice(0, 1000));
      // Disable the textarea
      setIsDisabled(true);
    }
  };

  const handleRemarksChange = (event) => {
    const value = event.target.value;
    setRemarks(value);
    if(value ==="Awarded"){
        emailData[selectedRFQIndex].action="awarded";
        emailData[selectedRFQIndex].negotiation="completed";
    }
    if (value === "Pending") {
      setPendingbox(true);
    } else {
      setPendingbox(false);
    }
    if (value === "Rejected") {
      setRejectedbox(true);
    } else {
      setRejectedbox(false);
    }
  };

  // const gofunction = () => {
  //   if (remarks === "Awarded") {
  //     window.location.href = "/";
  //   } else if (remarks === "Adjoured") {
  //     window.location.href = "/";
  //   }
  // };

  return (
    <div className="w-screen lg:bg-gray-200 h-screen ">
      <div className="lg:ml-[10px] lg:pt-[60px]">
        <h1 className="lg:font-semibold lg:text-[20px] ">Negotiation Portal</h1>
        <div className="container  lg:w-[96%] lg:bg-white lg:h-[640px] ">
          <div className="lg:flex ">
            <div className="lg:ml-[2%] lg:mb-[6px] lg:font-semibold">
              From Date
            </div>
            <div className="lg:ml-[23%] lg:mb-[6px] lg:font-semibold">
              To Date
            </div>
          </div>
          <form className="lg:pl-6 lg:pt-4  lg:pb-4  lg:flex lg:w-screen">
            <label className="" htmlFor="trackBy ">
              <DatePicker
                placeholderText="dd/MM/yyyy"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                className="form-control form-control-lg lg:rounded-md mr-5 lg:p-1 lg:w-80 lg:border lg:border-solid lg:border-lightblack lg:border-2 "
              />
            </label>
            <label className=" " htmlFor="refNo">
              <DatePicker
                placeholderText="dd/MM/yyyy"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                className="form-control form-control-lg lg:rounded-md mr-5 lg:p-1 lg:w-80 lg:border lg:border-solid lg:border-lightblack lg:border-2 "
              />
            </label>

            <button className="lg:rounded-md lg:border-2 lg:bg-green-500 lg:py-1 lg:px-8 lg:font-semibold ">
              Go
            </button>
          </form>

          <div className="w-full lg:border lg:border-solid lg:border-semiblack lg:border-opacity-1000"></div>

          <div
            className="lg:ml-1.5 "
            style={{ overflowX: "auto", width: "99%", height: "auto" }}
          >
            <div className="  lg:flex lg:mt-4   lg:w-[191%] lg:h-[5%]  ">
              <div className="lg:bg-green-600 lg:w-[15%] lg:h-100 lg:border-2 lg:text-white lg:flex lg:items-center  lg:justify-center  lg:text-[15px]    ">
                RFQ No.
              </div>
              <div className="lg:bg-green-600 lg:w-[15%] lg:h-100 lg:border-2 lg:text-white lg:flex lg:items-center  lg:justify-center  lg:text-[15px]    ">
                RFQ Date
              </div>
              <div className="lg:bg-green-600 lg:w-[15%] lg:h-100 lg:border-2 lg:text-white lg:flex lg:items-center  lg:justify-center  lg:text-[15px]    ">
                Quatant Date
              </div>
              <div className="lg:bg-green-600 lg:w-[15%] lg:h-100 lg:border-2 lg:text-white lg:flex lg:items-center  lg:justify-center  lg:text-[15px]    ">
                Quatant Amount
              </div>
              <div className="lg:bg-green-600 lg:w-[15%] lg:h-100 lg:border-2 lg:text-white lg:flex lg:items-center  lg:justify-center  lg:text-[15px]    ">
                Counter rate
              </div>
              <div className="lg:bg-green-600 lg:w-[15%] lg:h-100 lg:border-2 lg:text-white lg:flex lg:items-center  lg:justify-center  lg:text-[15px]    ">
                Revised
              </div>
              <div className="lg:bg-green-600 lg:w-[15%] lg:h-100 lg:border-2 lg:text-white lg:flex lg:items-center  lg:justify-center  lg:text-[15px]    ">
                Rate Final Rate
              </div>
              <div className="lg:bg-green-600 lg:w-[15%] lg:h-100 lg:border-2 lg:text-white lg:flex lg:items-center  lg:justify-center  lg:text-[15px]    ">
                Terms
              </div>
              <div className="lg:bg-green-600 lg:w-[12%] lg:h-100 lg:border-2 lg:text-white lg:flex lg:items-center  lg:justify-center  lg:text-[15px]    ">
                Remarks
              </div>

              {/* <div className=' lg:flex lg:flex-col lg:bg-green-600 lg:w-[65%] lg:h-100 lg:border-2 lg:text-white lg:flex lg:items-center  lg:justify-center  lg:text-[15px]    '>
                    <h1>Award</h1>
                    <div className='lg:flex lg:flex-row lg:w-[100%]'>
                    <div className='lg:bg-green-600 lg:w-[100%] lg:h-100 lg:border-2 lg:text-white lg:flex lg:items-center  lg:justify-center  lg:text-[15px]    '>Date</div>        
                     <div className='lg:bg-green-600 lg:w-[100%] lg:h-100 lg:border-2 lg:text-white lg:flex lg:items-center  lg:justify-center  lg:text-[15px]    '>Amount</div>        
                     <div className='lg:bg-green-600 lg:w-[100%] lg:h-100 lg:border-2 lg:text-white lg:flex lg:items-center  lg:justify-center  lg:text-[15px]    '>Remarks</div>        
                    </div>
                   
                   </div>    */}
              {/* <div className='lg:bg-green-600 lg:w-[15%] lg:h-100 lg:border-2 lg:text-white lg:flex lg:items-center  lg:justify-center  lg:text-[15px]    '>GST</div>        
                     <div className='lg:bg-green-600 lg:w-[15%] lg:h-100 lg:border-2 lg:text-white lg:flex lg:items-center  lg:justify-center  lg:text-[15px]    '>Customer Code</div>        
                     <div className='lg:bg-green-600 lg:w-[15%] lg:h-100 lg:border-2 lg:text-white lg:flex lg:items-center  lg:justify-center  lg:text-[15px]    '>Customer Name</div>        
                     <div className='lg:bg-green-600 lg:w-[12%] lg:h-100 lg:border-2 lg:text-white lg:flex lg:items-center  lg:justify-center  lg:text-[15px]    '>Billing Party</div>        
                     <div className='lg:bg-green-600 lg:w-[15%] lg:h-100 lg:border-2 lg:text-white lg:flex lg:items-center  lg:justify-center  lg:text-[15px]    '>Billing Party Name</div>        
                     <div className='lg:bg-green-600 lg:w-[15%] lg:h-100 lg:border-2 lg:text-white lg:flex lg:items-center  lg:justify-center  lg:text-[15px]    '>Customer Code</div>        
                     <div className='lg:bg-green-600 lg:w-[15%] lg:h-100 lg:border-2 lg:text-white lg:flex lg:items-center  lg:justify-center  lg:text-[15px]    '>Customer Name</div>        
                     <div className='lg:bg-green-600 lg:w-[12%] lg:h-100 lg:border-2 lg:text-white lg:flex lg:items-center  lg:justify-center  lg:text-[15px]    '>Billing Party</div>        
         */}
            </div>

            <div className="  lg:flex  lg:w-[191%] lg:h-[5%]  ">
              <div
                className="lg:bg-gray-200 lg:w-[15%] lg:h-100 lg:border-2 lg:text-black lg:flex lg:items-center  lg:justify-center  lg:text-[15px]  "
                style={{
                  overflowX: "auto",
                  overflowY: "auto",
                  whiteSpace: "nowrap",
                  scrollbarWidth: "none",
                  "-ms-overflow-style": "none",
                  "scrollbar-color": "transparent transparent",
                }}
              >
                ###
              </div>
              <div
                className="lg:bg-gray-200 lg:w-[15%] lg:h-100 lg:border-2 lg:text-black lg:flex lg:items-center  lg:justify-center  lg:text-[15px]    "
                style={{
                  overflowX: "auto",
                  overflowY: "auto",
                  whiteSpace: "nowrap",
                  scrollbarWidth: "none",
                  "-ms-overflow-style": "none",
                  "scrollbar-color": "transparent transparent",
                }}
              >
                ###
              </div>
              <div
                className="lg:bg-gray-200 lg:w-[15%] lg:h-100 lg:border-2 lg:text-black lg:flex lg:items-center  lg:justify-center  lg:text-[15px]    "
                style={{
                  overflowX: "auto",
                  overflowY: "auto",
                  whiteSpace: "nowrap",
                  scrollbarWidth: "none",
                  "-ms-overflow-style": "none",
                  "scrollbar-color": "transparent transparent",
                }}
              >
                ###
              </div>
              <div
                className="lg:bg-gray-200 lg:w-[15%] lg:h-100 lg:border-2 lg:text-black lg:flex lg:items-center  lg:justify-center  lg:text-[15px]    "
                style={{
                  overflowX: "auto",
                  overflowY: "auto",
                  whiteSpace: "nowrap",
                  scrollbarWidth: "none",
                  "-ms-overflow-style": "none",
                  "scrollbar-color": "transparent transparent",
                }}
              >
                ###
              </div>
              <div
                className="lg:bg-gray-200 lg:w-[15%] lg:h-100 lg:border-2 lg:text-black lg:flex lg:items-center  lg:justify-center  lg:text-[15px]    "
                style={{
                  overflowX: "auto",
                  overflowY: "auto",
                  whiteSpace: "nowrap",
                  scrollbarWidth: "none",
                  "-ms-overflow-style": "none",
                  "scrollbar-color": "transparent transparent",
                }}
              >
                ###
              </div>
              <div
                className="lg:bg-gray-200 lg:w-[15%] lg:h-100 lg:border-2 lg:text-black lg:flex lg:items-center  lg:justify-center  lg:text-[15px]    "
                style={{
                  overflowX: "auto",
                  overflowY: "auto",
                  whiteSpace: "nowrap",
                  scrollbarWidth: "none",
                  "-ms-overflow-style": "none",
                  "scrollbar-color": "transparent transparent",
                }}
              >
                ###
              </div>
              <div
                className="lg:bg-gray-200 lg:w-[15%] lg:h-100 lg:border-2 lg:text-black lg:flex lg:items-center  lg:justify-center  lg:text-[15px]    "
                style={{
                  overflowX: "auto",
                  overflowY: "auto",
                  whiteSpace: "nowrap",
                  scrollbarWidth: "none",
                  "-ms-overflow-style": "none",
                  "scrollbar-color": "transparent transparent",
                }}
              >
                ###
              </div>
              <div
                className="lg:bg-gray-200 lg:w-[15%] lg:h-100 lg:border-2 lg:text-black lg:flex lg:items-center  lg:justify-center  lg:text-[15px]    "
                style={{
                  overflowX: "auto",
                  overflowY: "auto",
                  whiteSpace: "nowrap",
                  scrollbarWidth: "none",
                  "-ms-overflow-style": "none",
                  "scrollbar-color": "transparent transparent",
                }}
              >
                ###
              </div>
              <div
                className="lg:bg-gray-200 lg:w-[12%] lg:h-100 lg:border-2 lg:text-black lg:flex lg:items-center  lg:justify-center  lg:text-[15px]    "
                style={{
                  overflowX: "auto",
                  overflowY: "auto",
                  whiteSpace: "nowrap",
                  scrollbarWidth: "none",
                  "-ms-overflow-style": "none",
                  "scrollbar-color": "transparent transparent",
                }}
              >
                ###
              </div>

              {/* <div className=' lg:flex lg:flex-col lg:bg-gray-200 lg:w-[65%] lg:h-100 lg:border-2 lg:text-black lg:flex lg:items-center  lg:justify-center  lg:text-[15px]    '>
                          <div className='lg:flex lg:flex-row lg:w-[100%]'>
                          <div className='lg:bg-gray-200 lg:w-[100%] lg:h-100 lg:border-2 lg:textblacke lg:flex lg:items-center  lg:justify-center  lg:text-[15px]    ' style={{ overflowX: 'auto', overflowY: 'auto', whiteSpace: 'nowrap' , scrollbarWidth: 'none', '-ms-overflow-style': 'none', 'scrollbar-color': 'transparent transparent' }}  >Date</div>        
                           <div className='lg:bg-gray-200 lg:w-[100%] lg:h-100 lg:border-2 lg:textblacke lg:flex lg:items-center  lg:justify-center  lg:text-[15px]    ' style={{ overflowX: 'auto', overflowY: 'auto', whiteSpace: 'nowrap' , scrollbarWidth: 'none', '-ms-overflow-style': 'none', 'scrollbar-color': 'transparent transparent' }}  >Amount</div>        
                           <div className='lg:bg-gray-200 lg:w-[100%] lg:h-100 lg:border-2 lg:textblacke lg:flex lg:items-center  lg:justify-center  lg:text-[15px]    ' style={{ overflowX: 'auto', overflowY: 'auto', whiteSpace: 'nowrap' , scrollbarWidth: 'none', '-ms-overflow-style': 'none', 'scrollbar-color': 'transparent transparent' }}  >Remarks</div>        
                          </div>
                         
                         </div>    */}
              {/* <div className='lg:bg-gray-200 lg:w-[15%] lg:h-100 lg:border-2 lg:text-black lg:flex lg:items-center  lg:justify-center  lg:text-[15px]    ' style={{ overflowX: 'auto', overflowY: 'auto', whiteSpace: 'nowrap' , scrollbarWidth: 'none', '-ms-overflow-style': 'none', 'scrollbar-color': 'transparent transparent' }}  >GST</div>        
                         <div className='lg:bg-gray-200 lg:w-[15%] lg:h-100 lg:border-2 lg:text-black lg:flex lg:items-center lg:justify-center lg:text-[15px]' style={{ overflowX: 'auto', overflowY: 'auto', whiteSpace: 'nowrap' , scrollbarWidth: 'none', '-ms-overflow-style': 'none', 'scrollbar-color': 'transparent transparent' }} >Customer Code</div>
                           <div className='lg:bg-gray-200 lg:w-[15%] lg:h-100 lg:border-2 lg:text-black lg:flex lg:items-center  lg:justify-center  lg:text-[15px]    ' style={{ overflowX: 'auto', overflowY: 'auto', whiteSpace: 'nowrap' , scrollbarWidth: 'none', '-ms-overflow-style': 'none', 'scrollbar-color': 'transparent transparent' }}  >Customer Name</div>        
                           <div className='lg:bg-gray-200 lg:w-[12%] lg:h-100 lg:border-2 lg:text-black lg:flex lg:items-center  lg:justify-center  lg:text-[15px]    ' style={{ overflowX: 'auto', overflowY: 'auto', whiteSpace: 'nowrap' , scrollbarWidth: 'none', '-ms-overflow-style': 'none', 'scrollbar-color': 'transparent transparent' }}  >Billing Party</div>        
                           <div className='lg:bg-gray-200 lg:w-[15%] lg:h-100 lg:border-2 lg:text-black lg:flex lg:items-center  lg:justify-center  lg:text-[15px]    ' style={{ overflowX: 'auto', overflowY: 'auto', whiteSpace: 'nowrap' , scrollbarWidth: 'none', '-ms-overflow-style': 'none', 'scrollbar-color': 'transparent transparent' }}  >Billing Party Name</div>        
                           <div className='lg:bg-gray-200 lg:w-[15%] lg:h-100 lg:border-2 lg:text-black lg:flex lg:items-center  lg:justify-center  lg:text-[15px]    ' style={{ overflowX: 'auto', overflowY: 'auto', whiteSpace: 'nowrap' , scrollbarWidth: 'none', '-ms-overflow-style': 'none', 'scrollbar-color': 'transparent transparent' }}  >Customer Code</div>        
                           <div className='lg:bg-gray-200 lg:w-[15%] lg:h-100 lg:border-2 lg:text-black lg:flex lg:items-center  lg:justify-center  lg:text-[15px]    ' style={{ overflowX: 'auto', overflowY: 'auto', whiteSpace: 'nowrap' , scrollbarWidth: 'none', '-ms-overflow-style': 'none', 'scrollbar-color': 'transparent transparent' }}  >Customer Name</div>        
                           <div className='lg:bg-gray-200 lg:w-[12%] lg:h-100 lg:border-2 lg:text-black lg:flex lg:items-center  lg:justify-center  lg:text-[15px]    ' style={{ overflowX: 'auto', overflowY: 'auto', whiteSpace: 'nowrap' , scrollbarWidth: 'none', '-ms-overflow-style': 'none', 'scrollbar-color': 'transparent transparent' }}  >Billing Party</div>        
              
       */}
            </div>
          </div>

          <div className="lg:flex ">
            <div className="lg:flex lg:w-[100%]  lg:ml-[12%] lg:mt-[5%]">
              <h1 className="lg:font-semibold  lg:mr-2 lg:text-[20px]">
                Remarks*
              </h1>
              <select
                className="lg:w-[10%] lg:p-2 lg:border-2 lg:font-semibold  "
                value={remarks}
                onChange={handleRemarksChange}
              >
                <option>Awarded</option>
                <option>Rejected</option>
                <option>Adjoured</option>
                <option>Pending</option>
              </select>
              <Link to={"/"}>
              <button
                className="lg:px-8 lg:py-1 lg:bg-green-600 lg:border-2 lg:rounded-md lg:text-white lg:font-bold lg:m-2"
              >
                Submit
              </button>
              </Link>
            </div>
          </div>
          <div className="lg:w-[80%] lg:h-[70%]   lg:mt-[-6%] lg:ml-[38%]">
            {Rejectedbox && (
              <textarea
                className="lg:border-2 lg:w-[70%] lg:h-[70%] lg:bg-gray-200 lg:text-black lg:p-6 lg:text-xl lg:font-semibold lg:rounded-md "
                value={text}
                placeholder="Why Rejected"
                onChange={handleChange}
                disabled={isDisabled}
              />
            )}
            {Pendingbox && (
              <textarea
                className="lg:border-2 lg:w-[70%] lg:h-[70%] lg:bg-gray-200 lg:text-black lg:p-6 lg:text-xl lg:font-semibold lg:rounded-md "
                placeholder="Why Pending"
                value={text}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NegotiationPortal;
