import React, { useEffect,useState} from 'react';
import {Routes,Route} from "react-router-dom";
import CallActivity from '../pages/CallActivity/CallActivity';
import ActivityDetail from '../pages/CallActivity/ActivityDetail';


function AppRoutes() {
  return (
    <div>
    <Routes>
      <Route path="/:id" element={<ActivityDetail />} />
      <Route path="" element={<CallActivity />} />
    </Routes>
    
  </div>
  )
}

export default AppRoutes