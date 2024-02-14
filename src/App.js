import "./App.css";
import Navbar from "./component/Navbar";
import Signup from "./component/signup";
import ProfileDropdown from "./component/ProfileDropdown";
import Menu from "./component/Menu";
import Dashboard from "./pages/Dashboard";
import RFQ from "./component/RFQ";
import NegotiationPortal from "./component/NegotiationPortal";
import Qmp from "./component/QMP";
import QueryMp from "./component/QueryMp";
import Indent from "./component/Indent";
import JobOrder from "./component/JobOrder";
import Workflow from "./component/Workflow";
import JobCreate from "./component/JobCreate";
import Consignment from "./component/Consignment";
import VehicleHire from "./component/VehicleHire";
import VehiclePlaced from "./component/VehiclePlacement";
import IndentCreate from "./component/IndentCreate";
import Tracking from "./component/Tracking";
import { Route, Routes, Router } from "react-router-dom";
import { useState,useEffect } from "react";
function App() {
  const [RFQData,setRFQData]=useState([]);
  const [selectedRFQIndex, setSelectedRFQIndex] = useState(null);
  const [emailData,setEmailData]=useState([]);
  const [isLoading,setIsLoading]=useState(true);
  useEffect(()=>{
    const fetchData=async()=>{
      try {
        let response=await fetch('http://localhost:5000/getemaildata');
        const data = await response.json();
        setEmailData(data);
        setIsLoading(false);
        console.log(data);
      } catch (error) {
        console.error('Error fetching data:', error);
        setIsLoading(false);
      }
    }
    fetchData();

  },[])
  return (
    <div>
        <Routes>
          <Route path="/" element={<RFQ selectedRFQIndex={selectedRFQIndex} setSelectedRFQIndex={setSelectedRFQIndex} emailData={emailData} isLoading={isLoading} />} />
          <Route path="/Qmp" element={<QueryMp emailData={emailData} selectedRFQIndex={selectedRFQIndex}/>} />
          <Route path="/negotiation" element={<NegotiationPortal emailData={emailData} selectedRFQIndex={selectedRFQIndex}/>} />
          <Route path="/indent" element={<Indent />} />
          <Route path="/indentCreate" element={<IndentCreate />} />
          <Route path="/jobOrder" element={<JobOrder />} />
          <Route path="/tracking" element={<Tracking />} />
          <Route path="/workflow" element={<Workflow />} />
          <Route path="/jobcreate" element={<JobCreate />} />
          <Route path="/consignment" element={<Consignment />} />
          <Route path="/VehicleHire" element={<VehicleHire />} />
          <Route path="/VehiclePlaced" element={<VehiclePlaced />} />
        </Routes>

    </div>
  );
}

export default App;
