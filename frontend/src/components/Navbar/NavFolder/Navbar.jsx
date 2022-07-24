import React, { useState,useEffect } from 'react'
import style from './Navbar.module.css'
import { IoIosSearch } from 'react-icons/io';
import { FaRegUser } from 'react-icons/fa';
import { RiGift2Line } from 'react-icons/ri';
import { BsHandbag } from 'react-icons/bs';
import NavbarPopUpComponents from '../NavComponent/NavbarPopUpComponents';
import {useNavigate} from 'react-router-dom'


const Navbar = () => {
  const navigate= useNavigate()
  const [howerState, setHowerState] = useState("");
  const [login,setLogin] = useState(false)
  const hoverHandler =(type)=>{
    setHowerState(type)
  }
  const handleLogin = () => {
    if (login) {
      setLogin(false)
      localStorage.removeItem("user")
      localStorage.removeItem("oAuth");
    } else {
      navigate("/login")
    }
  }

  useEffect(() => {
    const data =
      JSON.parse(localStorage.getItem("user")) ||
      JSON.parse(localStorage.getItem("oAuth"));
    
    if(data) setLogin(true)
  },[])
  return (
    <>
      <div  className={style.container}>
      <div className={style.card}>
        <div >
          <img src="https://cdn.iconscout.com/icon/free/png-256/nykaa-3384872-2822953.png" className={style.card4} alt="" />
          <p>Categories</p>
          <p onMouseOver={()=>hoverHandler('BRANDS')} >Brands</p>
          <p onMouseEnter={()=>hoverHandler('LUXE')}>Luxe</p>
          <p onMouseEnter={()=>hoverHandler('NYKAA')}>Nykaa Fashion</p>
          <p onMouseEnter={()=>hoverHandler('BEAUTY')}>Beauty Advice</p>

        </div>
        <div>
          <div className={style.inputContainer}>
            <p><IoIosSearch fontSize="3vh" cursor="pointer"/></p>   
            <input type="text" className={style.input} placeholder="Search on Nykaa"/>
          </div>
          <div className={style.card2}>
            <p><FaRegUser fontSize="2.5vh" cursor="pointer"/></p>
            <p onClick={()=>handleLogin()}>{!login?"Login": "Logout" }</p>

          </div>
          <div className={style.card3}>
            <p><RiGift2Line fontSize="3vh"  color="#fc3581" cursor="pointer"/></p>
            <p><BsHandbag fontSize="2.8vh" cursor="pointer"/></p>

          </div>

        </div>
      </div>
 
      <div className={style.content} onMouseLeave={()=> setHowerState("")}>
           { howerState && <NavbarPopUpComponents type={howerState}  /> }
      </div>
      </div>
    </>
  )
}

export default Navbar
 

 