import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
function RFQ({ selectedRFQIndex, setSelectedRFQIndex, emailData, isLoading }) {
  return (
    <div className="w-screen h-screen flex flex-col">
      <div className="w-screen h-[10%] bg-green-500 flex justify-center items-center">
        <h3 className="text-lg text-white font-semibold">Received RFQ'S</h3>
      </div>
      <div className="bg-gray-700 h-[90%] flex items-center">
        
        <div className="w-[75%] h-[85%] mx-auto my-auto bg-violet-100 flex flex-col rounded-lg p-5">
          <div className="flex justify-around h-[15%] w-[95%] mx-auto mt-5 bg-gray-500 items-center font-semibold rounded-xl text-xl text-white pr-4">
            <h3 className="w-1/6 flex justify-center items-center text-[1rem]">
              Date
            </h3>
            <h3 className="w-2/6 flex justify-center items-center text-[1rem]">
              Client Email
            </h3>
            <h3 className=" flex justify-center items-center text-[1rem]">
              RFQ Number
            </h3>
            <h3 className=" flex justify-center items-center text-[1rem]">
              CSE Assigned
            </h3>
            <h3 className="w-1/6 flex justify-center items-center text-[1rem]">
              Quantity
            </h3>
            <h3 className="w-1/6 flex justify-center items-center text-[1rem]">
              Action
            </h3>
            <h3 className="w-1/6 flex justify-center items-center text-[1rem]">
              Date of Quotation
            </h3>
            <h3 className="w-1/6 flex justify-center items-center text-[1rem]">
              Quotation Status
            </h3>
            <h3 className="w-1/6 flex justify-center items-center text-[1rem]">
              Negotiation Status
            </h3>
          </div>
          {!isLoading ? (
            emailData.map((item, index) => (
              <div
                key={index}
                className="flex justify-around h-[15%] w-[95%] mx-auto mt-5 bg-gray-300 items-center rounded-xl "
              >
                <h3 className="w-1/6 flex justify-center items-center">
                  {item.DateOfRFQ}
                </h3>
                <h3
                  className={`
  w-2/6 font-semibold flex justify-center items-center 
  ${
    item.action === "awarded"
      ? "text-green-500"
      : item.action === "pending"
      ? "text-blue-500"
      : "text-yellow-500"
  }`}
                >
                  {item.email}
                </h3>
                <Link to={"/Qmp"}>
                  <h3
                    className=" flex justify-center items-center"
                    onClick={() => setSelectedRFQIndex(index)}
                  >
                    {item.RFQ}
                  </h3>
                </Link>
                <h3 className="w-1/6 flex justify-center items-center">
                  {item.cseassigned}
                </h3>
                <h3 className="w-1/6 flex justify-center items-center">
                  {item.quantity}
                </h3>
                <h3 className="w-1/6 flex justify-center items-center">
                  {item.action}
                </h3>
                <h3 className="w-1/6 flex justify-center items-center">
                  {item.DateOfQuotation}
                </h3>
                <h3 className="w-1/6 flex justify-center items-center">
                  {item.Quotation}
                </h3>
                {item.negotiation === "ongoing" ? (
                  <Link to="/negotiation">
                    <h3 className="w-1/6 flex justify-center items-center">
                      {item.negotiation}
                    </h3>
                  </Link>
                ) : ( item.negotiation==="completed"? 
                <Link to={"/indentCreate"}>
                  <h3 className="w-1/6 flex justify-center items-center">
                    {item.negotiation}
                  </h3>
                  </Link>:<h3 className="w-1/6 flex justify-center items-center">
                    {item.negotiation}
                  </h3>
                )}
               
              </div>
            ))
          ) : (
            <div>Loading....</div>
          )}
          {/* <div className="flex justify-around h-[15%] w-[95%] mx-auto mt-5 bg-gray-300 items-center rounded-xl">
            <h3 className="w-[14.285714286%] flex justify-center items-center">
              05-01-2024
            </h3>
            <h3 className="text-red-500 font-semibold w-[14.285714286%] flex justify-center items-center">
              @tata.com
            </h3>
            <Link to={"/Qmp"}>
              <h3 className="w-[14.285714286%] flex justify-center items-center">
                TF23X300
              </h3>
            </Link>
            <h3 className="w-[14.285714286%] flex justify-center items-center">
              5
            </h3>
            <h3 className="w-[14.285714286%] flex justify-center items-center">
              Pending
            </h3>
            <h3 className="w-[14.285714286%] flex justify-center items-center">
              01-02-2024
            </h3>
            <h3 className="w-[14.285714286%] flex justify-center items-center">
              Awarded
            </h3>
          </div>
          <div className="flex justify-around h-[15%] w-[95%] mx-auto mt-5 bg-gray-300 items-center rounded-xl">
            <h3 className="w-[14.285714286%] flex justify-center items-center">
              05-01-2024
            </h3>
            <h3 className="text-green-700 font-semibold w-[14.285714286%] flex justify-center items-center">
              @jio.com
            </h3>
            <Link to={"/Qmp"}>
              <h3 className="w-[14.285714286%] flex justify-center items-center">
                TF23X300
              </h3>
            </Link>
            <h3 className="w-[14.285714286%] flex justify-center items-center">
              5
            </h3>
            <h3 className="w-[14.285714286%] flex justify-center items-center">
              Completed
            </h3>
            <h3 className="w-[14.285714286%] flex justify-center items-center">
              01-02-2024
            </h3>
            <h3 className="w-[14.285714286%] flex justify-center items-center">
              Awarded
            </h3>
          </div>
          <div className="flex justify-around h-[15%] w-[95%] mx-auto mt-5 bg-gray-300 items-center rounded-xl">
            <h3 className="w-[14.285714286%] flex justify-center items-center">
              05-01-2024
            </h3>
            <h3 className="text-green-700 font-semibold w-[14.285714286%] flex justify-center items-center">
              @jio.com
            </h3>
            <Link to={"/Qmp"}>
              <h3 className="w-[14.285714286%] flex justify-center items-center">
                TF23X300
              </h3>
            </Link>
            <h3 className="w-[14.285714286%] flex justify-center items-center">
              5
            </h3>
            <h3 className="w-[14.285714286%] flex justify-center items-center">
              Completed
            </h3>
            <h3 className="w-[14.285714286%] flex justify-center items-center">
              01-02-2024
            </h3>
            <h3 className="w-[14.285714286%] flex justify-center items-center">
              Awarded
            </h3>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default RFQ;
