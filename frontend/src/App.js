import "./App.css";



// import HomePage from "./components/Home/HomePage"
// import Products from "./components/Product page/Products";
// import Main from './Main';
import React, { useState,useEffect} from 'react';
import {useLocation} from 'react-router-dom'
import Products from './components/Product page/Products';
function App() {
  const params = useLocation()
  const [visible, setVisible] = useState(true)
  useEffect(() => {
    console.log(params)
    if (params.pathname == "/login" || params.pathname == "/address" || params.pathname == "/payment") {
      setVisible(false)
    } else setVisible(true)
  },[params])
  return (
    <div className="App">
    {/* <Products/> */}
    {/* <HomePage/> */}
   
    {/* <Siderbar/> */}
    </div>
  )};
export default App;
