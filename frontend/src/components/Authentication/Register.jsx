import React from 'react'
import { useNavigate } from "react-router-dom";
import { crossButton, input } from "./login.css";
function Register({ register, setRegister }) {
  return (
    <div>
      <button onClick={() => setRegister(!register)} style={crossButton}>
        X
      </button>
      <h2
        style={{
          position: "absolute",
          left: "27%",
          fontWeight: "400",
        }}
      >
        LOGIN / REGISTER
      </h2>
      <br />
      <br />
      <br />
      <br />
      <div
        style={{
          width: "90%",
          height: "0px",
          border: "0.1px solid #c9c9c9",
          margin: "auto",
        }}
      ></div>
      <br />
      <div style={{ width: "80%", margin: "auto" }}>
        <input
          type="text"
          placeholder="Enter Email ID or Phone Number"
          style={{
            border: "1px solid red",
            background: "#f3f3f3",
            width: "100%",
            height: "40px",
            fontSize: "16px",
            textAlign: "center",
            outline: "none",
          }}
        />
      </div>
      <div
        style={{
          width: "80%",
          margin: "-20px auto",
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <h5 style={{ color: "gray" }}>REQUIRED</h5>
      </div>
      <div style={{ width: "80%", margin: "150px auto" }}>
        <button style={input}>PROCEED</button>
      </div>
    </div>
  );
}

export default Register