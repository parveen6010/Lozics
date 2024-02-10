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
import { Route, Routes, Router } from "react-router-dom";
import { useState } from "react";
function App() {
  const [RFQData,setRFQData]=useState([]);
  const [selectedRFQIndex, setSelectedRFQIndex] = useState(null);
  return (
    <div>
        <Routes>
          <Route path="/" element={<RFQ RFQData={RFQData} setRFQData={setRFQData} selectedRFQIndex={selectedRFQIndex} setSelectedRFQIndex={setSelectedRFQIndex} />} />
          <Route path="/Qmp" element={<QueryMp RFQData={RFQData} selectedRFQIndex={selectedRFQIndex}/>} />
          <Route path="/negotiation" element={<NegotiationPortal />} />
          <Route path="/indent" element={<Indent />} />
          <Route path="/jobOrder" element={<JobOrder />} />
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
