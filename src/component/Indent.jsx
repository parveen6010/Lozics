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

const Indent = () => {
  const [trackby, setTrackby] = useState("");
  const [startDate, setStartDate] = useState(null);
  return (
    <div className="w-screen lg:bg-gray-200 h-screen ">
      <div className="lg:ml-[10px] lg:pt-[60px]">
        <h1 className="lg:font-semibold lg:text-[20px] ">Indent</h1>
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
                Line No.
              </div>
              <div className="lg:bg-green-600 lg:w-[15%] lg:h-100 lg:border-2 lg:text-white lg:flex lg:items-center  lg:justify-center  lg:text-[15px]    ">
                From
              </div>
              <div className="lg:bg-green-600 lg:w-[15%] lg:h-100 lg:border-2 lg:text-white lg:flex lg:items-center  lg:justify-center  lg:text-[15px]    ">
                To
              </div>
              <div className="lg:bg-green-600 lg:w-[15%] lg:h-100 lg:border-2 lg:text-white lg:flex lg:items-center  lg:justify-center  lg:text-[15px]    ">
                Vehicle Type
              </div>
              <div className="lg:bg-green-600 lg:w-[15%] lg:h-100 lg:border-2 lg:text-white lg:flex lg:items-center  lg:justify-center  lg:text-[15px]    ">
                Qty.
              </div>
              <div className="lg:bg-green-600 lg:w-[15%] lg:h-100 lg:border-2 lg:text-white lg:flex lg:items-center  lg:justify-center  lg:text-[15px]    ">
                Weight
              </div>
              <div className="lg:bg-green-600 lg:w-[12%] lg:h-100 lg:border-2 lg:text-white lg:flex lg:items-center  lg:justify-center  lg:text-[15px]    ">
                Dimension
              </div>

              <div className=" lg:flex lg:flex-col lg:bg-green-600 lg:w-[65%] lg:h-100 lg:border-2 lg:text-white lg:flex lg:items-center  lg:justify-center  lg:text-[15px]    ">
                <h1>Award</h1>
                <div className="lg:flex lg:flex-row lg:w-[100%]">
                  <div className="lg:bg-green-600 lg:w-[100%] lg:h-100 lg:border-2 lg:text-white lg:flex lg:items-center  lg:justify-center  lg:text-[15px]    ">
                    Date
                  </div>
                  <div className="lg:bg-green-600 lg:w-[100%] lg:h-100 lg:border-2 lg:text-white lg:flex lg:items-center  lg:justify-center  lg:text-[15px]    ">
                    Amount
                  </div>
                  <div className="lg:bg-green-600 lg:w-[100%] lg:h-100 lg:border-2 lg:text-white lg:flex lg:items-center  lg:justify-center  lg:text-[15px]    ">
                    Remarks
                  </div>
                </div>
              </div>
              <div className="lg:bg-green-600 lg:w-[15%] lg:h-100 lg:border-2 lg:text-white lg:flex lg:items-center  lg:justify-center  lg:text-[15px]    ">
                GST
              </div>
              <div className="lg:bg-green-600 lg:w-[15%] lg:h-100 lg:border-2 lg:text-white lg:flex lg:items-center  lg:justify-center  lg:text-[15px]    ">
                Customer Code
              </div>
              <div className="lg:bg-green-600 lg:w-[15%] lg:h-100 lg:border-2 lg:text-white lg:flex lg:items-center  lg:justify-center  lg:text-[15px]    ">
                Customer Name
              </div>
              <div className="lg:bg-green-600 lg:w-[12%] lg:h-100 lg:border-2 lg:text-white lg:flex lg:items-center  lg:justify-center  lg:text-[15px]    ">
                Billing Party
              </div>
              <div className="lg:bg-green-600 lg:w-[15%] lg:h-100 lg:border-2 lg:text-white lg:flex lg:items-center  lg:justify-center  lg:text-[15px]    ">
                Billing Party Name
              </div>
              <div className="lg:bg-green-600 lg:w-[15%] lg:h-100 lg:border-2 lg:text-white lg:flex lg:items-center  lg:justify-center  lg:text-[15px]    ">
                Customer Code
              </div>
              <div className="lg:bg-green-600 lg:w-[15%] lg:h-100 lg:border-2 lg:text-white lg:flex lg:items-center  lg:justify-center  lg:text-[15px]    ">
                Customer Name
              </div>
              <div className="lg:bg-green-600 lg:w-[12%] lg:h-100 lg:border-2 lg:text-white lg:flex lg:items-center  lg:justify-center  lg:text-[15px]    ">
                Billing Party
              </div>
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
                RFQ No.
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
                RFQ Date
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
                Line No.
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
                From
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
                To
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
                Vehicle Type
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
                Qty.
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
                Weight
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
                Dimension
              </div>

              <div className=" lg:flex lg:flex-col lg:bg-gray-200 lg:w-[65%] lg:h-100 lg:border-2 lg:text-black lg:flex lg:items-center  lg:justify-center  lg:text-[15px]    ">
                <div className="lg:flex lg:flex-row lg:w-[100%]">
                  <div
                    className="lg:bg-gray-200 lg:w-[100%] lg:h-100 lg:border-2 lg:textblacke lg:flex lg:items-center  lg:justify-center  lg:text-[15px]    "
                    style={{
                      overflowX: "auto",
                      overflowY: "auto",
                      whiteSpace: "nowrap",
                      scrollbarWidth: "none",
                      "-ms-overflow-style": "none",
                      "scrollbar-color": "transparent transparent",
                    }}
                  >
                    Date
                  </div>
                  <div
                    className="lg:bg-gray-200 lg:w-[100%] lg:h-100 lg:border-2 lg:textblacke lg:flex lg:items-center  lg:justify-center  lg:text-[15px]    "
                    style={{
                      overflowX: "auto",
                      overflowY: "auto",
                      whiteSpace: "nowrap",
                      scrollbarWidth: "none",
                      "-ms-overflow-style": "none",
                      "scrollbar-color": "transparent transparent",
                    }}
                  >
                    Amount
                  </div>
                  <div
                    className="lg:bg-gray-200 lg:w-[100%] lg:h-100 lg:border-2 lg:textblacke lg:flex lg:items-center  lg:justify-center  lg:text-[15px]    "
                    style={{
                      overflowX: "auto",
                      overflowY: "auto",
                      whiteSpace: "nowrap",
                      scrollbarWidth: "none",
                      "-ms-overflow-style": "none",
                      "scrollbar-color": "transparent transparent",
                    }}
                  >
                    Remarks
                  </div>
                </div>
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
                GST
              </div>
              <div
                className="lg:bg-gray-200 lg:w-[15%] lg:h-100 lg:border-2 lg:text-black lg:flex lg:items-center lg:justify-center lg:text-[15px]"
                style={{
                  overflowX: "auto",
                  overflowY: "auto",
                  whiteSpace: "nowrap",
                  scrollbarWidth: "none",
                  "-ms-overflow-style": "none",
                  "scrollbar-color": "transparent transparent",
                }}
              >
                Customer Code
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
                Customer Name
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
                Billing Party
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
                Billing Party Name
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
                Customer Code
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
                Customer Name
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
                Billing Party
              </div>
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
                RFQ No.
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
                RFQ Date
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
                Line No.
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
                From
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
                To
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
                Vehicle Type
              </div>
              <Link to={"/jobcreate"}>
              <div
                className="lg:bg-gray-700 lg:w-[100%] lg:h-100 lg:border-2 lg:text-black font-bold lg:flex lg:items-center  lg:justify-center  lg:text-[15px]    "
                style={{
                  overflowX: "auto",
                  overflowY: "auto",
                  whiteSpace: "nowrap",
                  scrollbarWidth: "none",
                  "-ms-overflow-style": "none",
                  "scrollbar-color": "transparent transparent",
                }}
              >
                Qty.
              </div>
              </Link>
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
                Weight
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
                Dimension
              </div>

              <div className=" lg:flex lg:flex-col lg:bg-gray-200 lg:w-[65%] lg:h-100 lg:border-2 lg:text-black lg:flex lg:items-center  lg:justify-center  lg:text-[15px]    ">
                <div className="lg:flex lg:flex-row lg:w-[100%]">
                  <div
                    className="lg:bg-gray-200 lg:w-[100%] lg:h-100 lg:border-2 lg:textblacke lg:flex lg:items-center  lg:justify-center  lg:text-[15px]    "
                    style={{
                      overflowX: "auto",
                      overflowY: "auto",
                      whiteSpace: "nowrap",
                      scrollbarWidth: "none",
                      "-ms-overflow-style": "none",
                      "scrollbar-color": "transparent transparent",
                    }}
                  >
                    Date
                  </div>
                  <div
                    className="lg:bg-gray-200 lg:w-[100%] lg:h-100 lg:border-2 lg:textblacke lg:flex lg:items-center  lg:justify-center  lg:text-[15px]    "
                    style={{
                      overflowX: "auto",
                      overflowY: "auto",
                      whiteSpace: "nowrap",
                      scrollbarWidth: "none",
                      "-ms-overflow-style": "none",
                      "scrollbar-color": "transparent transparent",
                    }}
                  >
                    Amount
                  </div>
                  <div
                    className="lg:bg-gray-200 lg:w-[100%] lg:h-100 lg:border-2 lg:textblacke lg:flex lg:items-center  lg:justify-center  lg:text-[15px]    "
                    style={{
                      overflowX: "auto",
                      overflowY: "auto",
                      whiteSpace: "nowrap",
                      scrollbarWidth: "none",
                      "-ms-overflow-style": "none",
                      "scrollbar-color": "transparent transparent",
                    }}
                  >
                    Remarks
                  </div>
                </div>
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
                GST
              </div>
              <div
                className="lg:bg-gray-200 lg:w-[15%] lg:h-100 lg:border-2 lg:text-black lg:flex lg:items-center lg:justify-center lg:text-[15px]"
                style={{
                  overflowX: "auto",
                  overflowY: "auto",
                  whiteSpace: "nowrap",
                  scrollbarWidth: "none",
                  "-ms-overflow-style": "none",
                  "scrollbar-color": "transparent transparent",
                }}
              >
                Customer Code
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
                Customer Name
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
                Billing Party
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
                Billing Party Name
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
                Customer Code
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
                Customer Name
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
                Billing Party
              </div>
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
                RFQ No.
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
                RFQ Date
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
                Line No.
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
                From
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
                To
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
                Vehicle Type
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
                Qty.
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
                Weight
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
                Dimension
              </div>

              <div className=" lg:flex lg:flex-col lg:bg-gray-200 lg:w-[65%] lg:h-100 lg:border-2 lg:text-black lg:flex lg:items-center  lg:justify-center  lg:text-[15px]    ">
                <div className="lg:flex lg:flex-row lg:w-[100%]">
                  <div
                    className="lg:bg-gray-200 lg:w-[100%] lg:h-100 lg:border-2 lg:textblacke lg:flex lg:items-center  lg:justify-center  lg:text-[15px]    "
                    style={{
                      overflowX: "auto",
                      overflowY: "auto",
                      whiteSpace: "nowrap",
                      scrollbarWidth: "none",
                      "-ms-overflow-style": "none",
                      "scrollbar-color": "transparent transparent",
                    }}
                  >
                    Date
                  </div>
                  <div
                    className="lg:bg-gray-200 lg:w-[100%] lg:h-100 lg:border-2 lg:textblacke lg:flex lg:items-center  lg:justify-center  lg:text-[15px]    "
                    style={{
                      overflowX: "auto",
                      overflowY: "auto",
                      whiteSpace: "nowrap",
                      scrollbarWidth: "none",
                      "-ms-overflow-style": "none",
                      "scrollbar-color": "transparent transparent",
                    }}
                  >
                    Amount
                  </div>
                  <div
                    className="lg:bg-gray-200 lg:w-[100%] lg:h-100 lg:border-2 lg:textblacke lg:flex lg:items-center  lg:justify-center  lg:text-[15px]    "
                    style={{
                      overflowX: "auto",
                      overflowY: "auto",
                      whiteSpace: "nowrap",
                      scrollbarWidth: "none",
                      "-ms-overflow-style": "none",
                      "scrollbar-color": "transparent transparent",
                    }}
                  >
                    Remarks
                  </div>
                </div>
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
                GST
              </div>
              <div
                className="lg:bg-gray-200 lg:w-[15%] lg:h-100 lg:border-2 lg:text-black lg:flex lg:items-center lg:justify-center lg:text-[15px]"
                style={{
                  overflowX: "auto",
                  overflowY: "auto",
                  whiteSpace: "nowrap",
                  scrollbarWidth: "none",
                  "-ms-overflow-style": "none",
                  "scrollbar-color": "transparent transparent",
                }}
              >
                Customer Code
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
                Customer Name
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
                Billing Party
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
                Billing Party Name
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
                Customer Code
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
                Customer Name
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
                Billing Party
              </div>
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
                RFQ No.
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
                RFQ Date
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
                Line No.
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
                From
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
                To
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
                Vehicle Type
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
                Qty.
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
                Weight
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
                Dimension
              </div>

              <div className=" lg:flex lg:flex-col lg:bg-gray-200 lg:w-[65%] lg:h-100 lg:border-2 lg:text-black lg:flex lg:items-center  lg:justify-center  lg:text-[15px]    ">
                <div className="lg:flex lg:flex-row lg:w-[100%]">
                  <div
                    className="lg:bg-gray-200 lg:w-[100%] lg:h-100 lg:border-2 lg:textblacke lg:flex lg:items-center  lg:justify-center  lg:text-[15px]    "
                    style={{
                      overflowX: "auto",
                      overflowY: "auto",
                      whiteSpace: "nowrap",
                      scrollbarWidth: "none",
                      "-ms-overflow-style": "none",
                      "scrollbar-color": "transparent transparent",
                    }}
                  >
                    Date
                  </div>
                  <div
                    className="lg:bg-gray-200 lg:w-[100%] lg:h-100 lg:border-2 lg:textblacke lg:flex lg:items-center  lg:justify-center  lg:text-[15px]    "
                    style={{
                      overflowX: "auto",
                      overflowY: "auto",
                      whiteSpace: "nowrap",
                      scrollbarWidth: "none",
                      "-ms-overflow-style": "none",
                      "scrollbar-color": "transparent transparent",
                    }}
                  >
                    Amount
                  </div>
                  <div
                    className="lg:bg-gray-200 lg:w-[100%] lg:h-100 lg:border-2 lg:textblacke lg:flex lg:items-center  lg:justify-center  lg:text-[15px]    "
                    style={{
                      overflowX: "auto",
                      overflowY: "auto",
                      whiteSpace: "nowrap",
                      scrollbarWidth: "none",
                      "-ms-overflow-style": "none",
                      "scrollbar-color": "transparent transparent",
                    }}
                  >
                    Remarks
                  </div>
                </div>
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
                GST
              </div>
              <div
                className="lg:bg-gray-200 lg:w-[15%] lg:h-100 lg:border-2 lg:text-black lg:flex lg:items-center lg:justify-center lg:text-[15px]"
                style={{
                  overflowX: "auto",
                  overflowY: "auto",
                  whiteSpace: "nowrap",
                  scrollbarWidth: "none",
                  "-ms-overflow-style": "none",
                  "scrollbar-color": "transparent transparent",
                }}
              >
                Customer Code
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
                Customer Name
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
                Billing Party
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
                Billing Party Name
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
                Customer Code
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
                Customer Name
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
                Billing Party
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Indent;
