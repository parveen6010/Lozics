import React from "react";
import { useState } from "react";
import { IoIosAddCircle } from "react-icons/io";
import { Link } from "react-router-dom";
export default function QueryMp({RFQData,selectedRFQIndex}) {
  const [cnt, setCnt] = useState(2);
  const [cntS, setCntS] = useState(1);
  const [valueArr,setValueArr]=useState([])
  const [tempCostChart, setTempCostChart] = useState({
    username: "",
    phone: "",
    amount: "",
  });
  const [LineNum,setLineNum]=useState(1);
  const [costChart, setCostChart] = useState([[{}]]);
  const [L1Rates,setL1Rates]=useState([]);
  const [L1Index,setL1Index]=useState([]);
  const [minValues, setMinValues] = useState([]);
  const [minIndices, setMinIndices] = useState([]);
  const [inputValues, setInputValues] = useState([]);
  const handleAdd = (e) => {
    if (cnt < 5) {
      setCnt(cnt + 1);
    } else if (cnt === 5) alert("limit reached");
    console.log("button clicked");
  };
  const handleADDS = (e) => {
    setCntS(cntS + 1);
  };
  const handleChange = (rowIndex, colIndex, subColIndex, newValue) => {
    // First, make a deep copy of the inputValues state
    let newInputValues = JSON.parse(JSON.stringify(inputValues));

    // Ensure the row array exists
    if (!newInputValues[rowIndex]) {
      newInputValues[rowIndex] = [];
    }

    // Ensure the column array exists
    if (!newInputValues[rowIndex][colIndex]) {
      newInputValues[rowIndex][colIndex] = [];
    }

    // Update the value in the copied array
    newInputValues[rowIndex][colIndex][subColIndex] = newValue;

    // Update the state with the copied array
    setInputValues(newInputValues);
  };
  const handleClick = () => {
    setCostChart([...costChart,tempCostChart]);
  };
  const handleBid = () => {
    let newL1Rates = [];
    let newMinIndices = [];

    // Iterate over each row
    inputValues.forEach((row, rowIndex) => {
      let mini = Number.MAX_SAFE_INTEGER;
      let minIndex = [-1, -1];

      // Iterate over each column in the row
      row.forEach((col, colIndex) => {
        // Check the value at subColIndex = 2
        const value = col[2];
        if (value < mini) {
          mini = value;
          minIndex = [rowIndex, colIndex];
        }
      });

      // Push the minimum value and its index of this row to newL1Rates and newMinIndices
      newL1Rates.push(mini);
      newMinIndices.push(minIndex);
    });

    // Update the L1Rates and minIndices state with the new arrays
    setL1Rates(newL1Rates);
    setMinIndices(newMinIndices);
  };
  
  return (
    <div className="w-screen h-screen flex flex-col">
      <div className="bg-green-500 w-full h-[10%] flex justify-center items-center font-bold text-xl text-white">
        Query Management Portal
      </div>
      <div className="bg-gray-700 w-full h-full flex  items-center justify-center">
        <div className="w-[97%] h-[90%] bg-white flex flex-col gap-2">
          <div className="p-4 max-h-[40vh] overflow-auto border-black border-4 m-2">
            <table className="w-full  flex flex-col pb-2 ">
              <tr className="w-full flex justify-around items-center">
                <th className="w-[14.285714286%] bg-green-400 border-black border-2">
                  S.No.
                </th>
                <th className="w-[14.285714286%] bg-green-400 border-black border-2">
                  From
                </th>
                <th className="w-[14.285714286%] bg-green-400 border-black border-2">
                  To
                </th>
                <th className="w-[14.285714286%] bg-green-400 border-black border-2">
                  Vehicle Type
                </th>
                <th className="w-[14.285714286%] bg-green-400 border-black border-2">
                  Dimension
                </th>
                <th className="w-[14.285714286%] bg-green-400 border-black border-2">
                  weight
                </th>
                <th className="w-[14.285714286%] bg-green-400 border-black border-2">
                  Qty.
                </th>
                <th className="w-[14.285714286%] bg-green-400 border-black border-2">
                  Branch
                </th>
                <th className="w-[14.285714286%] "></th>
                <th className="w-[14.285714286%] "></th>
              </tr>
              {Array.from({ length: cntS }, (_, index) => (
                <tr className="w-full flex justify-around items-center">
                  <td className="w-[14.285714286%]  flex justify-center items-center border-black border-2">
                    {index+1}
                  </td>
                  <td className="w-[14.285714286%]  flex justify-center items-center border-black border-2">
                    XXXX
                  </td>
                  <td className="w-[14.285714286%]  flex justify-center items-center border-black border-2">
                    XXXX
                  </td>
                  <td className="w-[14.285714286%]  flex justify-center items-center border-black border-2">
                    XXXX
                  </td>
                  <td className="w-[14.285714286%]  flex justify-center items-center border-black border-2">
                    XXXX
                  </td>
                  <td className="w-[14.285714286%]  flex justify-center items-center border-black border-2">
                    XXXX
                  </td>
                  <td className="w-[14.285714286%]  flex justify-center items-center border-black border-2">
                    XXXX
                  </td>
                  <td className="w-[14.285714286%]  flex justify-center items-center border-black border-2">
                    <select className="">
                      <option value="Baroda">Baroda</option>
                      <option value="Kolkata">Kolkata</option>
                      <option value="Pune">Pune</option>
                      <option value="Delhi">Delhi</option>
                      <option value="Vadodra">Vadodra</option>
                    </select>
                  </td>
                  <td className="w-[14.285714286%] flex justify-center">
                    <button className="px-3 rounded-md bg-green-500 text-white">
                      Forward
                    </button>
                  </td>
                   <td className="w-[14.285714286%]  flex justify-start items-center ">
                   {index==cntS-1 && <IoIosAddCircle
                      className="text-green-700 text-2xl font-extrabold"
                      onClick={handleADDS}
                    />}
                  </td>
                </tr>
              ))}
            </table>
          </div>
          {/* party table */}
          <div className=" flex justify-between  items-start p-4  border-black border-4 m-2 overflow-y-auto">
            <table className="w-[85%] flex gap-4 overflow-x-auto  ">
              {Array.from({ length: cnt }, (_, index) => (
                <tbody>
                  <tr className="w-full flex items-center">
                    <th className="w-[10vw] bg-green-400 border-black border-2 text-sm">
                      V{index + 1} Name
                    </th>
                    <th className="w-[10vw] bg-green-400 border-black border-2 text-sm">
                      V{index + 1} Phone
                    </th>
                    <th className="w-[10vw] bg-green-400 border-black border-2 text-sm">
                      V{index + 1} Rate
                    </th>
                  </tr>
                  {Array.from({ length: cntS }, (_, index2) => (
                    <tr className="w-full flex items-center">
                      <td className="w-[10vw] flex justify-center items-center border-black border-2">
                        <input
                          type="text"
                          placeholder="Enter Name"
                          name="username"
                          className="w-full outline-none text-center"
                          onChange={e => handleChange(index2, index,0, e.target.value)}
                        />
                      </td>
                      <td className="w-[10vw]  flex justify-center items-center border-black border-2">
                        <input
                          type="number"
                          placeholder="Enter Phone"
                          name="phone"
                          className="w-full outline-none text-center"
                          onChange={e => handleChange(index2, index,1, e.target.value)}
                        />
                      </td>
                      <td className="w-[10vw]  flex justify-center items-center border-black border-2">
                        <input
                          type="number"
                          placeholder="Enter amount"
                          name="amount"
                          className="w-full outline-none text-center"
                          onChange={e => handleChange(index2, index,2, e.target.value)}
                        />
                      </td>
                      {/* <td className="w-[10vw]  flex justify-center items-center ">
                        <button
                          className="px-2 rounded-md bg-green-500 text-white"
                          onClick={handleClick}
                        >
                          Submit Rates
                        </button>
                      </td> */}
                      {index === cnt - 1 && (
                        <td className="w-[10vw]  flex justify-center items-center">
                          <button
                            className="px-5 rounded-md bg-green-500 text-white"
                            onClick={handleBid}
                          >
                            Bid
                          </button>
                          {cnt<5 && <IoIosAddCircle
                            className="text-green-700 text-2xl font-extrabold"
                            onClick={handleAdd}
                          />}
                        </td>
                      )}
                    </tr>
                  ))}
                </tbody>
              ))}
            </table>
            {/* L1 table */}
            <table className="w-[10%] flex flex-col  border-black  ">
              <tr className="w-full flex items-center ">
                <th className="w-full bg-green-400 border-black border-2">
                  L1
                </th>
              </tr>
              {Array.from({ length: cntS }, (_, index) => (
                <tr className="w-full flex flex-col  items-center">
                  <td className="w-full border-black border-x-2 border-b-2 flex justify-center items-center">
                    {/* {valueArr[index]} */}
                    {L1Rates[index] | 0 }
                  </td>
                </tr>
              ))}
            </table>
          </div>
          {/* Submit */}
          <div className="  flex justify-center items-center">
            <Link to={"/negotiation"}>
              <button className="py-3 px-6 bg-green-500 rounded-md text-white">
                Transfer To CSE
              </button>
            </Link>
          </div>
          <div className=" overflow-auto border-black border-4 p-4 m-2">
            <table className="w-screen flex flex-col justify-evenly items-center">
              <tr className="w-[100vw] flex items-center">
                <th className="bg-green-400 w-[30vw] border-black border-2 text-sm ">
                  Date
                </th>
                <th className="bg-green-400 w-[50vw] border-black border-2 text-sm ">
                  RFQ
                </th>
                <th className="bg-green-400 w-[30vw] border-black border-2 text-sm ">
                  Line No.
                </th>
                <th className="w-[30vw] bg-green-400 border-black border-2 text-sm ">
                  From
                </th>
                <th className="w-[30vw] bg-green-400 border-black border-2 text-sm ">
                  To
                </th>
                <th className="w-[30vw] bg-green-400 border-black border-2 text-sm ">
                  Vehicle Type
                </th>
                <th className="w-[30vw] bg-green-400 border-black border-2 text-sm ">
                  Dimension
                </th>
                <th className="w-[30vw] bg-green-400 border-black border-2 text-sm ">
                  weight
                </th>
                <th className="w-[30vw] bg-green-400 border-black border-2 text-sm ">
                  Qty.
                </th>
                <th className="bg-green-400 w-[30vw] border-black border-2 text-sm ">
                  L1 Rate
                </th>
                <th className="bg-green-400 w-[50vw] border-black border-2 text-sm ">
                  Quotation to Submit
                </th>
                <th className="bg-green-400 w-[50vw] border-black border-2 text-sm ">
                  Privacy Terms
                </th>
                <th className="bg-green-400 w-[30vw] border-black border-2 text-sm ">
                  Checkbox
                </th>
                <th className=" w-[70vw]  text-sm "></th>
              </tr>
              {Array.from({ length: cntS }, (_, index2) => (
              <tr className="w-full flex items-center">
                <td className="w-[30vw] border-black border-2 flex justify-center items-center">Date</td>
                <td className="w-[50vw] border-black border-2 flex justify-center items-center">{RFQData[selectedRFQIndex] ? RFQData[selectedRFQIndex].rfqNumber : 'N/A'}</td>
                <td className="w-[30vw] border-black border-2 flex justify-center items-center">{index2+1}</td>
                <td className="w-[30vw] border-black border-2 flex justify-center items-center">From</td>
                <td className="w-[30vw] border-black border-2 flex justify-center items-center">To</td>
                <td className="w-[30vw] border-black border-2 flex justify-center items-center">Vehicle</td>
                <td className="w-[30vw] border-black border-2 flex justify-center items-center">Dimension</td>
                <td className="w-[30vw] border-black border-2 flex justify-center items-center">weight</td>
                <td className="w-[30vw] border-black border-2 flex justify-center items-center">Qty.</td>
                <td className="w-[30vw] border-black border-2 flex justify-center items-center">{L1Rates[index2] | 0}</td>
                <td className="w-[50vw] border-black border-2 flex justify-center">
                  <input type="number" className="w-full outline-none" placeholder="Enter Quotation Amt."/>
                </td>
                <td className="w-[50vw] border-black border-2 flex justify-center items-center">
                  Privacy Terms
                </td>
                <td className="w-[30vw] border-black border-2 ">
                  <input type="checkbox" className="w-full mx-auto"/>
                </td>
                <td className="w-[70vw]  flex justify-center">
                  <button
                    className="px-3 py-0.5 rounded-md bg-green-500 text-white"
                    onClick={handleClick}
                  >
                    Prepare Indent
                  </button>
                </td>
              </tr>))}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
