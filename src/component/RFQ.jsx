import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
function RFQ({ RFQData, setRFQData,selectedRFQIndex,setSelectedRFQIndex}) {
  // useEffect(()=>{
  //       let RFQNumber=["GF12X365" ,"TF23Z300","NF23Y300","UF23P300"]
  //       setRFQData([...RFQData,RFQNumber]);
  // },[])
  useEffect(() => {
    // This function generates a random email
    const generateEmail = () => {
      const chars = "abcdefghijklmnopqrstuvwxyz1234567890";
      let email = "";
      for (let i = 0; i < 10; i++) {
        email += chars[Math.floor(Math.random() * chars.length)];
      }
      return email + "@example.com";
    };

    // This function generates a random date in the format YYYY-MM-DD
    const generateDate = () => {
      const date = new Date(
        +new Date() - Math.floor(Math.random() * 10000000000)
      );
      return date.toISOString().slice(0, 10);
    };
    const generateRFQNumber = () => {
      const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
      let rfqNumber = "";
      for (let i = 0; i < 10; i++) {
        rfqNumber += chars[Math.floor(Math.random() * chars.length)];
      }
      return rfqNumber;
    };

    let newRFQData = [];

    // Generate 5 random data entries
    for (let i = 0; i < 5; i++) {
      newRFQData.push({
        date: generateDate(),
        clientEmail: generateEmail(),
        rfqNumber: generateRFQNumber(), // Random number between 0 and 9999
        quantity: Math.floor(Math.random() * 100), // Random number between 0 and 99
        action: Math.random() > 0.5 ? "Quoted" : "Unquoted", // Randomly either 'Buy' or 'Sell'
        dateOfQuotation: generateDate(),
        quotationStatus: Math.random() > 0.5 ? "Accepted" : "Pending", // Randomly either 'Accepted' or 'Pending'
      });
    }

    // Update the RFQData state with the new array
    setRFQData(newRFQData);
  }, []);

  const handleRFQClick=()=>{

  }

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
          {RFQData.map((item, index) => (
            <div
              key={index}
              className="flex justify-around h-[15%] w-[95%] mx-auto mt-5 bg-gray-300 items-center rounded-xl "
            >
              <h3 className="w-1/6 flex justify-center items-center">
                {item.date}
              </h3>
              <h3 className={`${(item.action==="Unquoted")?"text-red-500 w-2/6 font-semibold  flex justify-center items-center" : "text-green-500 w-2/6 font-semibold  flex justify-center items-center"}`}>
                {item.clientEmail}
              </h3>
              <Link to={"/Qmp"}>
                <h3 className=" flex justify-center items-center" onClick={() => setSelectedRFQIndex(index)}>
                  {item.rfqNumber}
                </h3>
              </Link>
              <h3 className="w-1/6 flex justify-center items-center">
                {item.quantity}
              </h3>
              <h3 className="w-1/6 flex justify-center items-center">
                {item.action}
              </h3>
              <h3 className="w-1/6 flex justify-center items-center">
                {item.dateOfQuotation}
              </h3>
              <h3 className="w-1/6 flex justify-center items-center">
                {item.quotationStatus}
              </h3>
              <h3 className="w-1/6 flex justify-center items-center">
                {item.quotationStatus}
              </h3>
            </div>
          ))}
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
