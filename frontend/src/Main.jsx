import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from './components/Authentication/Login'
function Main() {
  return (
      <div>
          <Routes>
              <Route path="/login" element={<Login/>} />
          </Routes>
    </div>
  )
}

export default Main