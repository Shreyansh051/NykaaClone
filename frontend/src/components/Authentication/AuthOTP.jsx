import React, { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  crossButton,
  grayBox,
  inputOTP,
  submitButton,
  input,
  alertPopup,
} from "./login.css";
import Timer from "./Timer"
import axios from "axios"
import { v4 } from "uuid";

function AuthOTP({ setView, number,name, password, email}) {
  const navigate = useNavigate();
  const [otp, setOtp] = useState("");
  const [Alert, setAlert] = useState(false)
  const [popUp, setPopUp] = useState(true)
  //<---------------------------------------------------------------->//SetInterval for 30 sec timer
  useEffect(() => {
    setTimeout(() => {
      setAlert(false)
      setView("front")
    }, 35000)
  },[])
  const handleSubmit = (e) => {
    e.preventDefault();
    //<-----------------------------> //OTP Logic for verification
    const result = window.confirmation;
    result
      .confirm(otp)
      .then((result) => {
        // User signed in successfully.
        const user = result.user;
        const userData = {
          ID: v4(),
          Email: email,
          Password: password,
          Name: name,
          Phone: number,
        }
        axios
          .post("https://nyku.herokuapp.com/auth/register", userData)
          .then((response) => {
            const localData = {
              ID: response.data.ID,
              Email: email,
              Name: name,
              Token: user.accessToken,
              Photo:
                "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png",
            };
            localStorage.setItem("oAuth", JSON.stringify(localData));
            alert("Login Successful");
            navigate("/");
          });
      })
      .catch((error) => {
        // User couldn't sign in (bad verification code?)
        alert("Wrong verification code");
        setView("front");
      });
  };

  //<---------------------------------------------------------------------------->*****
  return (
    <>
      {Alert && (
        <div style={alertPopup}>
          OTP Expired. Try to register here :
          <p
            style={{ color: "#fc2779", cursor: "pointer" }}
            onClick={() => navigate("/register")}
          >Register
          </p>
        </div>
      )}
      <div>
        <button onClick={() => setView("front")} style={crossButton}>
          X
        </button>
        <h3
          style={{
            position: "absolute",
            left: "40%",
            fontWeight: "600",
          }}
        >
          REGISTER
        </h3>
        <br />
        <br />
        <br />
        <div
          style={{
            width: "90%",
            height: "0px",
            border: "0.1px solid whitesmoke",
            margin: "auto",
          }}
        ></div>
        <p>Welcome to Nykaa!</p>
        <br />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Register now and get ,
          <p style={{ color: "#fc2779" }}>2000 Reward Points!</p>
        </div>
        <div style={grayBox}>{number}</div>
        <br />
        <div style={{ width: "70%", margin: "auto" }}>
          <p style={{ fontWeight: "300", fontSize: "13px" }}>
            Please enter the OTP sent to verify your phone number
          </p>
        </div>
        <br />
        <div style={{ width: "80%", margin: "auto" }}>
          <form onSubmit={(e) => handleSubmit(e)}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <input
                onClick={()=>setPopUp(false)}
                required
                pattern="[0-9]{4}"
                minLength="4"
                maxLength="4"
                onChange={(e) => setOtp(e.target.value)}
                placeholder="OTP"
                type="number"
                style={inputOTP}
              />
              <div style={{ lineHeight: "0.1" }}>
                <div style={{ color: "gray" }}>
                  <Timer setAlert={setAlert} />
                </div>
                <p style={{ color: "pink", fontSize: "14px" }}>RE-SEND OTP</p>
              </div>
            </div>
            <br />
            <br />
            <button style={otp == "" ? submitButton : input}>VERIFY</button>
          </form>
        </div>
        <br />
        <div style={{ width: "60%", margin: "80px 17%" }}>
          {popUp && <div style={input}>OTP sent successfully!</div>}
        </div>
      </div>
    </>
  );
}

export default AuthOTP;
