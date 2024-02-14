import React, { useState } from "react";
import { FiAlignJustify } from "react-icons/fi";
import { GrAdd } from "react-icons/gr";
import { IoMdMail } from "react-icons/io";
import { FaLock } from "react-icons/fa6";
import { FaRegHandPointer } from "react-icons/fa6";
import { ImBin } from "react-icons/im";
import { FaUserPlus } from "react-icons/fa6";
import { FaUserMinus } from "react-icons/fa";
import { Link } from "react-router-dom";

const IndentCreate = () => {
  const [trackby, setTrackby] = useState("");
  const [startDate, setStartDate] = useState(null);

  const [consignorsAndConsignees, setConsignorsAndConsignees] = useState([
    { consignor: "", consignee: "" },
  ]);

  const addConsignorAndConsignee = () => {
    if (consignorsAndConsignees.length < 10) {
      setConsignorsAndConsignees([
        ...consignorsAndConsignees,
        { consignor: "", consignee: "" },
      ]);
    }
  };

  const handleInputChange = (index, event, field) => {
    const { value } = event.target;
    const list = [...consignorsAndConsignees];
    list[index][field] = value;
    setConsignorsAndConsignees(list);
  };

  const [Customer, setCustomer] = useState([
    { personname: "", personaddress: "", parsoncontact: "" },
  ]);

  const Customerfunction = () => {
    if (Customer.length < 10) {
      setCustomer([
        ...Customer,
        { personname: "", personaddress: "", parsoncontact: "" },
      ]);
    }
  };

  const CustomerhandleInputChange = (index, event, field) => {
    const { value } = event.target;
    const list = [...Customer];
    list[index][field] = value;
    setCustomer(list);
  };

  return (
    <div className="w-screen lg:bg-gray-200 h-screen ">
      <div className="lg:pl-[18px] lg:pt-[6px]">
        <div className="lg:flex lg:justify-between  ">
          <h1 className="lg:font-bold lg:text-[20px]">Indent Create</h1>
          <select className="lg:w-[10%]  lg:mr-[3%]  lg:border-2 lg:text-[13px]">
            <option>Ho-NSP </option>
            <option>Select</option>
          </select>
        </div>

        <div className="lg:flex  lg:justify-between">
          <div className="lg:flex">
            <button className="lg:bg-green-600 lg:px-4 lg:py-2 lg:mr-2 lg:rounded-xl lg:border-4  lg:text-white ">
              Submit
            </button>
            <button className="lg:bg-green-600 lg:px-4 lg:py-2 lg:rounded-xl lg:border-4 lg:text-white ">
              Discard
            </button>
          </div>
          <div className="lg:mr-[3%]">
            <Link to={"/indent"}>
            <button className=" lg:bg-green-600 lg:px-4 lg:py-2 lg:rounded-xl lg:border-4 lg:text-[20px] lg:text-white ">
              <FiAlignJustify />
            </button>
            </Link>
          </div>
        </div>
        <div className="container lg:w-[98%] lg:bg-white lg:h-[650px] ">
          <div className="lg:flex lg:font-semibold  lg:justify-between">
            <div className="lg:m-1.5">
              <h1>RFQ No.</h1>
              <input className="lg:border lg:border-2 lg:w-[140%]" />
            </div>

            <div className="lg:m-1.5 lg:ml-[-2.5%] lg:w-[20%]  ">
              <h1>RFQ Date</h1>
              <div className="lg:flex">
                <input className="lg:border lg:border-2 lg:w-[140%]" />
              </div>
            </div>

            <div className="lg:m-1.5 lg:ml-[-9%] lg:w-[10%]">
              <h1>Line No.</h1>
              <select className="lg:w-[180%] lg:border lg:border-2">
                <option>Select</option>
                <option>Select</option>
                <option>Select</option>
              </select>
            </div>

            <div className="lg:m-1.5  lg:w-[10%]">
              <h1>From</h1>
              <select className="lg:w-[180%] lg:border lg:border-2">
                <option>Select</option>
                <option>Select</option>
                <option>Select</option>
              </select>
            </div>

            <div className="lg:m-1.5 ">
              <h1>To</h1>
              <input className="lg:w-[100%] lg:border lg:border-2" />
            </div>
          </div>

          <div className="lg:flex lg:font-semibold  lg:justify-between">
            <div className="lg:m-1.5  lg:w-[22%]  ">
              <h1>Dimension</h1>
              <input className="lg:border lg:border-2 lg:w-[140%]" />
            </div>

            <div className="lg:m-1.5 lg:ml-[10%]">
              <h1>Qty.</h1>
              <input className="lg:border lg:border-2 lg:w-[70%]" />
            </div>

            <div className="lg:m-1.5   lg:ml-[-4%] lg:w-[10%]">
              <h1>Vichile Type</h1>
              <select className="lg:w-[80%] lg:border lg:border-2">
                <option>Select</option>
                <option>Select</option>
                <option>Select</option>
              </select>
            </div>

            <div className="lg:m-1.5lg:ml-[-8%]  lg:w-[15%] ">
              <h1>Date</h1>
              <div className="lg:flex">
                <input
                  className="lg:w-[65%] lg:border lg:border-2"
                  type="date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                />
                <input className="lg:w-[30%] lg:border lg:border-2" />
              </div>
            </div>

            <div className="lg:m-1.5 lg:w-[22%] ">
              <h1>Weight</h1>
              <input className="lg:w-[100%] lg:border lg:border-2" />
            </div>
          </div>

          <div className="lg:flex lg:ml-2 lg:mt-4 lg:w-[98.5%] lg:h-[5%] lg:bg-gray-100 lg:flex lg:items-center lg:justify-center lg:text-[20px] lg:font-bold lg:pl-2">
            Award
          </div>

          <div className="lg:flex lg:font-semibold  lg:justify-between">
            <div className="lg:m-1.5 lg:w-[30%]">
              <h1>Amount</h1>
              <input className="lg:border lg:border-2 lg:w-[100%]" />
            </div>

            <div className="lg:m-1.5 lg:w-[30%]  ">
              <h1>Amount Date</h1>
              <div className="lg:flex">
                <input className="lg:border lg:border-2 lg:w-[100%]" />
              </div>
            </div>

            <div className="lg:m-1.5  lg:w-[30%] ">
              <h1>To</h1>
              <input className="lg:w-[100%] lg:border lg:border-2" />
            </div>
          </div>
          <div className="lg:border-bold lg:border-2 lg:mt-3 lg:w-[98.5%] lg:ml-[8px]"></div>

          <div className="lg:flex lg:font-semibold  lg:justify-between">
            <div className="lg:m-1.5 lg:w-[30%]">
              <h1>Billing Customer Name </h1>
              <input className="lg:border lg:border-2 lg:w-[100%]" />
            </div>

            <div className="lg:m-1.5 lg:w-[30%]">
              <h1>Billing Customer GST </h1>
              <input className="lg:border lg:border-2 lg:w-[100%]" />
            </div>
            <div className="lg:m-1.5 lg:w-[30%]  ">
              <h1>No. of Vehicle</h1>
              <div className="lg:flex">
                <input className="lg:border lg:border-2 lg:w-[100%]" />
              </div>
            </div>

            <div className="lg:m-1.5  lg:w-[30%] ">
              <h1>Total indent value</h1>
              <input className="lg:w-[100%] lg:border lg:border-2" />
            </div>
          </div>

          <div className="lg:flex lg:font-semibold lg:justify-around">
            <div className="lg:m-1.5 lg:w-[30%]">
              <h1> Customer PAN No.</h1>
              <input className="lg:border lg:border-2 lg:w-[100%]" />
            </div>
          </div>

          <div className="lg:flex lg:font-semibold lg:justify-around">
            <div className="lg:m-1.5 lg:w-[30%]">
              <h1>(Optopnal) Customer Po No.</h1>
              <input className="lg:border lg:border-2 lg:w-[100%]" />
            </div>

            <div className="lg:m-1.5 lg:w-[30%]  ">
              <h1>Validity</h1>
              <div className="lg:flex">
                <input className="lg:border lg:border-2 lg:w-[100%]" />
              </div>
            </div>
          </div>

          <div className="lg:border-bold lg:border-2 lg:mt-3 lg:w-[98.5%] lg:ml-[8px]"></div>

          <div className="  lg:w-[98%] lg:flex  lg:justify-around">
            <div className="lg:w-[50%] ">
              <h1 className="lg:font-bold lg:m-4">Contact Person</h1>
              <div className="lg:border-bold lg:border-2 lg:mt-3 lg:w-[98.5%] lg:ml-[8px] lg:ml-4"></div>

              <div className="lg:flex lg:flex-col lg:ml-[2%] ">
                {Customer.map((item, index) => (
                  <div key={index} className="lg:w-[100%]  h-auto ">
                    <div className="lg:w-[100%] lg:flex lg:font-semibold lg:justify-between lg:mt-4 ">
                      <div className="lg:flex-col lg:w-[100%]">
                        <h1>Person Name</h1>
                        <div className="lg:flex">
                          <input
                            className="lg:w-[95%] lg:bg-gray-100 lg:border lg:border-2"
                            value={item.personname}
                            onChange={(e) =>
                              CustomerhandleInputChange(index, e, "personname")
                            }
                          />
                        </div>
                      </div>

                      <div className="lg:flex-col lg:w-[100%]">
                        <h1>Person Address</h1>
                        <div className="lg:flex">
                          <input
                            className="lg:w-[95%] lg:bg-gray-100 lg:border lg:border-2"
                            value={item.personaddress}
                            onChange={(e) =>
                              CustomerhandleInputChange(
                                index,
                                e,
                                "personaddress"
                              )
                            }
                          />
                        </div>
                      </div>
                      <div className="lg:flex-col lg:w-[100%]">
                        <h1>Person Contact</h1>
                        <div className="lg:flex">
                          <input
                            className="lg:w-[95%] lg:bg-gray-100 lg:border lg:border-2"
                            value={item.parsoncontact}
                            onChange={(e) =>
                              CustomerhandleInputChange(
                                index,
                                e,
                                "parsoncontact"
                              )
                            }
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="lg:flex">
                <button
                  className=" lg:flex  lg:ml-[95%] lg:mt-1 lg:justify-end lg:text-[25px]"
                  onClick={Customerfunction}
                >
                  <FaUserPlus />
                </button>
              </div>
            </div>

            <div className="lg:w-[50%] ">
              <h1 className="lg:font-bold lg:m-4">Party</h1>
              <div className="lg:border-bold lg:border-2 lg:mt-3 lg:w-[98.5%] lg:ml-[8px] lg:ml-4"></div>

              <div className="lg:flex lg:flex-col lg:ml-[2%] ">
                {consignorsAndConsignees.map((item, index) => (
                  <div key={index} className="lg:w-[100%]  h-auto ">
                    <div className="lg:w-[100%] lg:flex lg:font-semibold lg:justify-between lg:mt-4 ">
                      <div className="lg:flex-col lg:w-[100%]">
                        <h1>Consignor</h1>
                        <div className="lg:flex">
                          <input
                            className="lg:w-[95%] lg:bg-gray-100 lg:border lg:border-2"
                            value={item.consignor}
                            onChange={(e) =>
                              handleInputChange(index, e, "consignor")
                            }
                          />
                        </div>
                      </div>

                      <div className="lg:flex-col lg:w-[100%]">
                        <h1>Consignee</h1>
                        <div className="lg:flex">
                          <input
                            className="lg:w-[95%] lg:bg-gray-100 lg:border lg:border-2"
                            value={item.consignee}
                            onChange={(e) =>
                              handleInputChange(index, e, "consignee")
                            }
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="lg:flex">
                <button
                  className=" lg:flex  lg:ml-[95%] lg:mt-1 lg:justify-end lg:text-[25px]"
                  onClick={addConsignorAndConsignee}
                >
                  <FaUserPlus />
                </button>
              </div>
            </div>
          </div>

          <div className=" lg:border-bold lg:border-2 lg:mt-3 lg:w-[98.5%] lg:ml-[8px]"></div>
          <div className=" lg:font-semibold lg:ml-[1%]">
            <h1>Remarks</h1>
            <input className="lg:w-[99.5%] lg:border lg:border-2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndentCreate;
