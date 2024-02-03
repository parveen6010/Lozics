import React from "react";
import { LiaDesktopSolid } from "react-icons/lia";
import { IoLayersSharp } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { FiLayers } from "react-icons/fi";
import { MdKeyboardArrowRight } from "react-icons/md";
import { RiArrowRightSLine } from "react-icons/ri";
import LozicsLogo from "../resources/LozicsNxt_logo.png";
function Menu() {
  const [elementsClick, setElementClick] = useState({
    hamburger: false,
    Dashboard: false,
    Tracking: false,
    Booking: false,
    Reports: false,
    Panels: false,
    Pending: false,
  });

  const handleClick = (e) => {
    const name = e.currentTarget.getAttribute("name");
    setElementClick((prevState) => ({
      ...prevState,
      [name]: !prevState[name],
    }));
    console.log(name);
  };

  return (
    <div
      className={`bg-[#181824]  h-screen flex flex-col justify-start items-center m-auto ${
        elementsClick.hamburger ? "w-[12vw]" : "w-[5vw]"
      }`}
    >
      <div className={` ${elementsClick.hamburger ? "flex justify-between py-2" : ""}`}>
        {elementsClick.hamburger && <img src={LozicsLogo} className="w-8/12 p-2" />}
        <GiHamburgerMenu
          className="text-xl text-white m-5"
          name="hamburger"
          onClick={handleClick}
        />
      </div>

      <div className="h-auto w-full bg-black flex flex-col items-center gap-4 py-5 px-3 cursor-pointer">
        {/*  */}
        <div
          className={` ${
            elementsClick.hamburger
              ? "flex text-green-500 w-full justify-between items-center"
              : ""
          }`}
        >
          {elementsClick.hamburger && (
            <div>
              Dashboard
              {elementsClick.Dashboard && (
                <div>
                  <h3></h3>
                </div>
              )}
            </div>
          )}
          <LiaDesktopSolid className="text-xl  text-white" />
        </div>
        <div
          className={` ${
            elementsClick.hamburger
              ? "flex text-green-500 w-full justify-between items-center"
              : ""
          }`}
        >
          {elementsClick.hamburger && (
            <div className="w-full" name="Tracking"  onClick={handleClick}>
              
              <div className="flex w-full justify-between ">
                <h3> Tracking</h3>
                <FiLayers className="text-xl  text-white" />
              </div>
              {elementsClick.Tracking && (
                <div className="flex flex-col text-white text-sm gap-2 p-2">
                  <div className="flex items-center gap-2">
                    <RiArrowRightSLine className="text-gray-500 text-lg"/>
                    <h3 className="hover:text-gray-500 transition-colors duration-300">Docket Tracking</h3>
                  </div>
                  <div className="flex items-center gap-2">
                    <RiArrowRightSLine className="text-gray-500 text-lg"/>
                    <h3 className="hover:text-gray-500 transition-colors duration-300">Indent</h3>
                  </div>
                </div>
              )}
            </div>
          )}
          {(!elementsClick.hamburger) && <FiLayers className="text-xl  text-white" />}
        </div>
        <div
          className={` ${
            elementsClick.hamburger
              ? "flex text-green-500 w-full justify-between items-center"
              : ""
          }`}
        >
          {elementsClick.hamburger && (
            <div className="w-full" name="Booking" onClick={handleClick}>
             
              <div className="flex w-full justify-between ">
                <h3> Booking</h3>
                <FiLayers className="text-xl  text-white" />
              </div>
              {elementsClick.Booking && (
                <div className="flex flex-col text-white text-sm gap-2 p-2">
                  <div className="flex items-center gap-2">
                    <RiArrowRightSLine className="text-gray-500 text-lg"/>
                    <h3 className="hover:text-gray-500 transition-colors duration-300">Consignment</h3>
                  </div>
                </div>
              )}
            </div>
          )}
            {(!elementsClick.hamburger) && <FiLayers className="text-xl  text-white" />}
        </div>
        <div
          className={` ${
            elementsClick.hamburger
              ? "flex text-green-500 w-full justify-between items-center"
              : ""
          }`}
        >
          {elementsClick.hamburger && (
            <div className="w-full" name="Reports" onClick={handleClick}>
              
              <div className="flex w-full justify-between ">
                <h3>My Reports</h3>
                <FiLayers className="text-xl  text-white" />
              </div>
              {elementsClick.Reports && (
                <div className="flex flex-col text-white text-sm gap-2 p-2">
                  <div className="flex items-center gap-2">
                    <RiArrowRightSLine className="text-gray-500 text-lg"/>
                    <h3 className="hover:text-gray-500 transition-colors duration-300">Booking</h3>
                  </div>
                  <div className="flex items-center gap-2">
                    <RiArrowRightSLine className="text-gray-500 text-lg"/>
                    <h3 className="hover:text-gray-500 transition-colors duration-300">Deliveries</h3>
                  </div>
                  <div className="flex items-center gap-2">
                    <RiArrowRightSLine className="text-gray-500 text-lg"/>
                    <h3 className="hover:text-gray-500 transition-colors duration-300">Outstanding</h3>
                  </div>
                  <div className="flex items-center gap-2">
                    <RiArrowRightSLine className="text-gray-500 text-lg"/>
                    <h3 className="hover:text-gray-500 transition-colors duration-300">Ledger</h3>
                  </div>
                </div>
              )}
            </div>
          )}
            {(!elementsClick.hamburger) && <FiLayers className="text-xl  text-white" />}
        </div>
        <div
          className={` ${
            elementsClick.hamburger
              ? "flex text-green-500 w-full justify-between items-center"
              : ""
          }`}
        >
          {elementsClick.hamburger && (
            <div className="w-full" name="Panels" onClick={handleClick}>
               <div className="flex w-full justify-between ">
                <h3>My Panels</h3>
                <FiLayers className="text-xl  text-white" />
              </div>
              {elementsClick.Panels && (
                <div className="text-white flex flex-col text-sm gap-2 p-2" >
                  <div className="flex items-center gap-2">
                    <RiArrowRightSLine className="text-gray-500 text-lg"/>
                    <h3 className="hover:text-gray-500 transition-colors duration-300">Users</h3>
                  </div>
                </div>
              )}
            </div>
          )}
            {(!elementsClick.hamburger) && <FiLayers className="text-xl  text-white" />}
        </div>
        <div
          className={` ${
            elementsClick.hamburger
              ? "flex text-green-500 w-full justify-between items-center"
              : ""
          }`}
        >
          {elementsClick.hamburger && (
            <div className="w-full" name="Pending" onClick={handleClick}>
              <div className="flex w-full justify-between ">
                <h3>Pending</h3>
                <FiLayers className="text-xl  text-white" />
              </div>
              {elementsClick.Pending && (
                <div className="flex flex-col text-white text-sm gap-2 p-2">
                  <div className="flex items-center gap-2">
                    <RiArrowRightSLine className="text-gray-500 text-lg"/>
                    <h3 className="hover:text-gray-500 transition-colors duration-300">Job Order</h3>
                  </div>
                  <div className="flex items-center gap-2">
                    <RiArrowRightSLine className="text-gray-500 text-lg"/>
                    <h3 className="hover:text-gray-500 transition-colors duration-300">Placement</h3>
                  </div>
                  <div className="flex items-center gap-2">
                    <RiArrowRightSLine className="text-gray-500 text-lg"/>
                    <h3 className="hover:text-gray-500 transition-colors duration-300">Consignment</h3>
                  </div>
                  <div className="flex items-center gap-2">
                    <RiArrowRightSLine className="text-gray-500 text-lg"/>
                    <h3 className="hover:text-gray-500 transition-colors duration-300">Billing</h3>
                  </div>
                </div>
              )}
            </div>
          )}
           {(!elementsClick.hamburger) && <FiLayers className="text-xl  text-white" />}
        </div>
      </div>
    </div>
  );
}

export default Menu;
