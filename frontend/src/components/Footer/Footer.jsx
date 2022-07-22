import React from 'react'
import style from './Footer.module.css'
import { HiOutlineMail } from 'react-icons/hi';
import { GoDeviceMobile } from 'react-icons/go';
import { BsTelephone } from 'react-icons/bs';
import { FaInstagramSquare } from 'react-icons/fa';
import { BsFacebook } from 'react-icons/bs';
import { FaYoutube } from 'react-icons/fa';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { BsPinterest } from 'react-icons/bs';


const Footer = () => {
  return (
    <>
      <div className={style.box}>

        <div>
          <div className={style.box1}>
            <p><HiOutlineMail fontSize="3.5vh" color='white' /></p>
            <p>Get special discount on your inbox</p>
          </div>
          <div className={style.box3}>
            <input type="email" placeholder='Your Email' />
            <button>SEND</button>
          </div>
        </div>


        <div>
          <div className={style.box1}>
            <p><GoDeviceMobile fontSize="3vh" color='white' /></p>
            <p>EXPERIENCE THE NYKAA MOBILE <br />APP</p>
          </div>
          <div className={style.box4}>
            <img src="https://hotelprojectleads.com/wp-content/uploads/2020/05/google-play-badge-e1522090059399.png" alt="" />
            <img src="https://hotelprojectleads.com/wp-content/uploads/2020/05/app-store-e1522090081753.png" alt="" />
          </div>

        </div>
        <div>
          <div className={style.box1}>
            <p><BsTelephone fontSize="3vh" color='white' /></p>
            <p>FOR ANY HELP YOU MAY CALL US AT <br />1800-267-4444</p>
          </div>
          <p style={{ marginLeft: "2vw", color: 'white' }}>(Monday to Saturday, 8AM to 10PM and Sunday, 10AM to<br /> 7PM)</p>

        </div>
      </div>
      <div className={style.box5}>
        <div>
          <img src="https://cdn.iconscout.com/icon/free/png-256/nykaa-3384872-2822953.png" style={{ height: "12vh", color:"white"}} alt="" />
          <p>Who are we?</p>
          <p>Careers</p>
          <p>Authenticity</p>
          <p>Press</p>
          <p>Testimonials</p>
          <p>Nykaa CSR</p>
          <p>Responsible Disclosure</p>
          <p>Investor Relations</p>
        </div>
        <div>
          <h4>Help</h4>
          <p>Contact Us</p>
          <p>Frequently asked questions</p>
          <p>Store Locator</p>
          <p>Cancellation & Return</p>
          <p>Shipping & Delivery</p>
          <p>Sell on Nykaa</p>

        </div>
        <div>
          <h4>Inspire Me</h4>
          <p>Beauty Book</p>
          <p>Nykaa TV</p>
          <p>Nykaa Network</p>
          <p>Buying Guides</p>
        </div>
        <div>
          <h4>Quick Links</h4>
          <p>Offer Zone</p>
          <p>New Launches</p>
          <p>Nykaa Man</p>
          <p>Nykaa Fashion</p>
          <p>Nykaa Pro</p>
          <p>Nykaa femina beauty awards <br /> winners 2019</p>
          <p>Sitemap</p>
        </div>
        <div>
          <h4>Top Categories</h4>
          <p>Makeup</p>
          <p>Skin</p>
          <p>Hair</p>
          <p>Personal Care</p>
          <p>Appliances</p>
          <p>Mom and Baby</p>
          <p>Wellness</p>
          <p>Fragrance</p>
          <p>Natura</p>
          <p>Luxe</p>
        </div>
      </div>
      <div className={style.box6}>
        <div>
          <div>
            <img style={{ marginTop: "2vh" }} src="https://adn-static2.nykaa.com/media/wysiwyg/2021/Free-shipping.svg" alt="" />
          </div>
          <div>
            <h4 style={{ marginBottom: "0.5vh" }}>FREE SHIPPING</h4>
            <hr />
            <p style={{ marginTop: "0.5vh" }}>On Orders Above<br /> ₹299</p>
          </div>
        </div>
        <div>
          <div>
            <img style={{ marginTop: "2vh" }} src="https://adn-static2.nykaa.com/media/wysiwyg/2021/return_accepted.svg" alt="" />
          </div>
          <div>
            <h4 style={{ marginBottom: "0.5vh" }}>EASY RETURNS</h4>
            <hr />
            <p style={{ marginTop: "0.5vh" }}>15-Day Return Policy</p>
          </div>
        </div>
        <div>
          <div>
            <img style={{ marginTop: "2vh" }} src="https://adn-static2.nykaa.com/media/wysiwyg/2021/Authenticity.svg" alt="" />
          </div>
          <div>
            <h4 style={{ marginBottom: "0.5vh" }}>100% <br /> AUTHENTIC</h4>
            <hr />
            <p style={{ marginTop: "0.5vh" }}>Products Sourced Directly</p>
          </div>
        </div>
        <div>
          <div>
            <img style={{ marginTop: "2vh" }} src="https://adn-static2.nykaa.com/media/wysiwyg/2021/Brands.svg" alt="" />
          </div>
          <div>
            <h4 style={{ marginBottom: "0.5vh" }}>2400+ BRANDS</h4>
            <hr />
            <p style={{ marginTop: "0.5vh" }}>1.9 Lakh+ Products</p>
          </div>
        </div>
        <div>
          <div >
            <div>
              <p>Show us some love ❤ on social <br /> media</p>
            </div>
            <div style={{ display: "flex", gap: '1.5vw' }}>
              <FaInstagramSquare fontSize="3vh" cursor="pointer" />
              <BsFacebook fontSize="3vh" cursor="pointer" />
              <FaYoutube fontSize="3vh" cursor="pointer" />
              <AiFillTwitterCircle fontSize="3vh" cursor="pointer" />
              <BsPinterest fontSize="3vh" cursor="pointer" />
            </div>
          </div>
        </div>
      </div>
      <div style={{background:"#fc3581", color:"white",padding:"5px 0px 20px 0px"}}>
        <div className={style.box7}>
          <p>Terms & Conditions</p>
          <p>Shipping Policy</p>
          <p>Cancellation Policy</p>
          <p>Privacy Policy</p>
        </div>
        <div className={style.box7}>
        © 2022 Nykaa E-Retail Pvt. Ltd. All Rights Reserved.
        </div>
      </div>

    </>
  )
}

export default Footer
