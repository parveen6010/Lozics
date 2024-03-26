import React from "react";
import { FaFilePdf } from "react-icons/fa";
import { Link } from "react-router-dom";

function RFQ({ selectedRFQIndex, setSelectedRFQIndex, emailData, isLoading }) {
  return (
    <div className="w-screen h-screen flex flex-col">
      <div className="w-screen h-[10%] bg-green-500 flex justify-center items-center">
        <h3 className="text-lg text-white font-semibold">Received RFQ'S</h3>
      </div>
      <div className="bg-gray-700 h-[90%] flex items-center">
        <div className="w-[90%] mx-auto bg-violet-100 rounded-lg p-8 overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-400">
              <tr>
                <th className="p-2 w-[200px]">Date</th>
                <th className="p-2 w-[300px]">Client Email</th>
                <th className="p-2 w-[200px]">RFQ Number</th>
                <th className="p-2 w-[200px]">Attachment</th>
                <th className="p-2 w-[200px]">CSE Assigned</th>
                <th className="p-2 w-[200px]">Quantity</th>
                <th className="p-2 w-[200px]">Action</th>
                <th className="p-2 w-[200px]">Date of Quotation</th>
                <th className="p-2 w-[200px]">Negotiation Status</th>
              </tr>
            </thead>
            <tbody>
              {!isLoading ? (
                emailData.map((item, index) => (
                  <tr key={index} className="text-center">
                    <td className="p-2 whitespace-nowrap">{item.DateOfRFQ}</td>
                    <td
                      className={`
                        p-2 font-semibold
                        ${
                          item.action === "quoted"
                            ? "text-green-500"
                            : item.action === "unquote"
                            ? "text-blue-500"
                            : "text-yellow-500"
                        } whitespace-nowrap`}
                    >
                      {item.email}
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <Link to={"/Qmp"} onClick={() => setSelectedRFQIndex(index)}>
                        {item.RFQ}
                      </Link>
                    </td>
                    <td className="p-2">
                      <Link to={"/"}>
                        <FaFilePdf />
                      </Link>
                    </td>
                    <td className="p-2">{item.cseassigned}</td>
                    <td className="p-2">{item.quantity}</td>
                    <td className="p-2">{item.action}</td>
                    <td className="p-2">{item.DateOfQuotation}</td>
                    <td className="p-2">
                      {item.negotiation === "ongoing" ? (
                        <Link to="/negotiation">{item.negotiation}</Link>
                      ) : item.negotiation === "completed" ? (
                        <Link to={"/indentCreate"}>{item.negotiation}</Link>
                      ) : (
                        item.negotiation
                      )}
                    </td>
                  </tr>
                ))
              ) : (
                <tr className="flex justify-center items-center">
                  <td colSpan="9" className="p-2 ">
                    Loading...
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default RFQ;
