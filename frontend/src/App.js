import './App.css';
import Footer from './components/Footer/Footer';
import MainNavbar from './components/Navbar/MainNavbar';
import Main from './Main';
import React, { useState,useEffect} from 'react';
import {useLocation} from 'react-router-dom'
function App() {
  const params = useLocation()
  const [visible, setVisible] = useState(true)
  useEffect(() => {
    if (params.pathname == "/login" || params.pathname == "/address" || params.pathname == "/payment" || params.pathname == "/register" || params.pathname == "/thanks") {
      setVisible(false)
    } else setVisible(true)
  },[params])
  return (
    <div className="App">
      {visible && <MainNavbar/>}
      <Main />
      {visible && <Footer/>}
    </div>
  )};
export default App;
