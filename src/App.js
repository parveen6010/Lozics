import './App.css';
import Navbar from './component/Navbar';
import Signup from './component/signup'; 
import ProfileDropdown from './component/ProfileDropdown';
import Menu from './component/Menu';
import Dashboard from './pages/Dashboard';
import RFQ from './component/RFQ';
import NegotiationPortal from './component/NegotiationPortal';
import Qmp from './component/QMP';
import QueryMp from './component/QueryMp';
import Indent from './component/Indent';
import { useState } from 'react';
function App() {
  return (
    <div className="">
   {/* < Signup /> */}
   
   {/* <div className=''>
    <Menu />
    <Navbar />
   </div>
   <Dashboard/> */}
   <RFQ/>
   <Qmp/>
    <NegotiationPortal/>
    <Indent/>
    </div>
  );
}

export default App;
