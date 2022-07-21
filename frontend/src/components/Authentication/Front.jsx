import React from 'react'
import {
  crossButton,
  Signin,
  h1,
  p,
  input,
  para,
  a,
  googlecss,
} from "./login.css";
import { useNavigate } from "react-router-dom";
import loginImage from "./login.png";
import google from "./google.png";
function Front({register,setRegister}) {
    const navigate = useNavigate();
  return (
    <div>
      <button
        onClick={() => {
          navigate("/");
        }}
        style={crossButton}
      >
        X
      </button>
      <br />
      <div style={Signin}>
        <h1 style={h1}>Sign in</h1>
        <p style={p}>
          To quickly find your favourites items, saved addresses and payments.
        </p>
        <div
          style={{
            width: "100%",
            height: "0px",
            border: "0.1px solid #c9c9c9",
          }}
        ></div>
        <p style={p}>Register and earn 2000 reward points</p>
      </div>
      <img src={loginImage} alt="gift Image" />
      <div style={para}>
        <button onClick={()=>setRegister(!register)} style={input}>Enter Phone Number or Email</button>
        <br />
        <img style={googlecss} src={google} alt="google Login" />
      </div>
      <div style={para}>
        <p>
          By continuing, you agree that you have read and accept our{" "}
          <a
            style={a}
            href="https://www.nykaa.com/terms-conditions"
            target="blank"
          >
            T&Cs
          </a>{" "}
          and{" "}
          <a
            style={a}
            href="https://www.nykaa.com/privacy-policy"
            target="blank"
          >
            Privacy Policy.
          </a>
        </p>
      </div>
    </div>
  );
}

export default Front