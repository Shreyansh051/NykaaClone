import React from 'react'
import "./App.css";
import { Routes, Route } from 'react-router-dom'
import Login from './components/Authentication/Login'
import ManualRegistration from "./components/Authentication/ManualRegistration"
import Products from "./components/Product page/Products";
import HomePage from "./components/Home/HomePage";
import { Address } from "./components/Address/Address"
import { Payment } from "./components/Payment/Payment"
import {Thnks} from "./components/Payment/paymentComponent/Thnks"
function Main() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/face" element={<Products />} />
        <Route path="/login" element={<Login />} />
        <Route path="/address" element={<Address />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/thanks" element={<Thnks />} />
        <Route path="/register" element={<ManualRegistration />} />
      </Routes>
    </div>
  );
}

export default Main