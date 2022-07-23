import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from './components/Authentication/Login'
import ManualRegistration from "./components/Authentication/ManualRegistration"
function Main() {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<ManualRegistration />} />
      </Routes>
    </div>
  );
}

export default Main