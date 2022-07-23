import React, { useState } from 'react'
import styled from 'styled-components'
import NavbarPopUpComponents from '../NavComponent/NavbarPopUpComponents';
 

const SubNavbar = () => {
   const [howerState, setHowerState] = useState("");

    const hoverHandler = (type) => {
        setHowerState(type)
    }
    
    const handleNoHover = () => {
      setHowerState("")
    }
    return (
        <>
            <Subnav>
                <p onMouseOver={() => hoverHandler('MAKEUP')}>Makeup </p>
                <p onMouseEnter={() => hoverHandler('SKIN')}>Skin</p>
                <p onMouseEnter={() => hoverHandler('HAIR')}>Hair</p>
                <p onMouseEnter={() => hoverHandler('APPLIANCES')}>Appliances</p>
                <p onMouseEnter={() => hoverHandler('BATH&BODY')}>Bath & Body</p>
                <p onMouseEnter={() => hoverHandler('NATURAL')}>Natural</p>
                <p onMouseEnter={() => hoverHandler('MOM&BABY')}>Mom & Baby</p>
                <p onMouseEnter={() => hoverHandler('HEALTH')}>Health & Wellness</p>
                <p onMouseEnter={() => hoverHandler('MEN')}>Men</p>
                <p onMouseEnter={() => hoverHandler('FRAGRENCE')}>Fragrance</p>
                <p onMouseEnter={() => hoverHandler('POPUPS')}>Pop Ups</p>
            </Subnav>
            <Content>
                <div className='content' onMouseLeave={handleNoHover}>
                    {howerState && <NavbarPopUpComponents type={howerState}/>}
                </div>
            </Content>
        </>
    )
}

export default SubNavbar

const Subnav = styled.div`
display:flex;
justify-content:center;
margin:auto;
border:1px solid #e6dede;
align-items: center;
height:6.3vh;
background-color: #ffffff;
gap:2vw;
font-weight:400;
color:gray;
font-size:15px;
margin-top:63px;
p:hover{
    border-bottom:3px solid #fc3581;
    cursor:pointer;
    padding:1.7vh 0 1.7vh 0;
    color:#fc3581;
    font-weight:600;
}

`
const Content = styled.div`
.content{
    position: absolute;
    z-index: 100000;
    width: 100vw;
}
`
