import React,{useState} from 'react'
import { crossButton, input } from "./login.css";
import { signInWithPhoneNumber } from "firebase/auth";
import firebaseAuth from "./firebase";
import { RecaptchaVerifier } from "firebase/auth";

function Register({ setView}) {
  const [number, setNumber] = useState("");

  //<---------------------------------------------------------------->//ReCaptcha
  const generateReCaptcha = () => {
    window.recaptchaVerifier = new RecaptchaVerifier(
      "recaptcha-Div",
      {
        //size: "invisible",
        callback: (response) => {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
        },
      },
      firebaseAuth
    );
  };
  //<---------------------------------------------------------------->*****

  const handleClick = (e) => {
    e.preventDefault();
    var phone = "+91"+number;
    generateReCaptcha();
    const appVerifier = window.recaptchaVerifier;
    signInWithPhoneNumber(firebaseAuth, phone, appVerifier)
      .then((confirmation) => {
        console.log(confirmation);
        window.confirmation= confirmation;
        setView("AuthOTP");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <button onClick={() => setView("front")} style={crossButton}>
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
      <form onSubmit={(e) => handleClick(e)}>
        <div style={{ width: "80%", margin: "auto" }}>
          <input
            onChange={(e) => setNumber(e.target.value)}
            required
            type="tel"
            placeholder="Enter Phone Number"
            minLength="10"
            maxLength="10"
            pattern="[0-9]{10}"
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
        <div style={{ width: "80%", margin: "20px auto" }} id="recaptcha-Div"></div>
        <div style={{ width: "80%", margin: "150px auto" }}>
          <button type="submit" style={input}>
            PROCEED
          </button>
        </div>
      </form>
    </div>
  );
}

export default Register