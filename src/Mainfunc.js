import React from 'react'
import './App.css';
import Fixed from './components/Fixed';
import Dashboard from './components/Dashboard';
import{BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import Compbuttons from './components/Fixedcomp/Compbuttons';
import Compcards from './components/Fixedcomp/Compcards';
import Colors from './components/Utilities/Colors';
import Borders from './components/Utilities/Borders';
import Animations from './components/Utilities/Animations';
import Others from './components/Utilities/Others';
import Error from './components/Pages/OtherPage/404';
import Blank from './components/Pages/OtherPage/Blank';
import Chart from './components/Chart';
import Tables from './components/Tables';



function Mainfunc() {
    return (
      <div style={{display:"grid", gridTemplateColumns:"15% 85%"}}>
        <div>
          <Fixed />
        </div>
        <div>
          <Routes>
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/buttons' element={<Compbuttons />} />
            <Route path='/card' element={<Compcards />} />
            <Route path='/colors' element={<Colors />} />
            <Route path='/border' element={<Borders />} />
            <Route path='/animation' element={<Animations />} />
            <Route path='/other' element={<Others />} />
            <Route path='/error' element={<Error />} />
            <Route path='/blank' element={<Blank />} />
            <Route path='/chart' element={<Chart />} />
            <Route path='/table' element={<Tables />} />
            <Route path='*' element={<Navigate to='/dashboard' replace />} />
          </Routes>
        </div>
      </div>
    );
  }
  
export default Mainfunc