import React, { useState } from 'react'
import style from './Navbar.module.css'
import { IoIosSearch } from 'react-icons/io';
import { FaRegUser } from 'react-icons/fa';
import { RiGift2Line } from 'react-icons/ri';
import { BsHandbag } from 'react-icons/bs';
import NavbarPopUpComponents from '../NavComponent/NavbarPopUpComponents';
 



const Navbar = () => {
  const [howerState, setHowerState] = useState("");

  const hoverHandler =(type)=>{
    setHowerState(type)
}

 
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
            <p>Account</p>

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
 

 