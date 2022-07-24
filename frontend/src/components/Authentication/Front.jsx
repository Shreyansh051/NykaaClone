import React from 'react'
import { crossButton,Signin,h1,p,input,para,a,googlecss } from "./login.css";
import { useNavigate } from "react-router-dom";
import loginImage from "./login.png";
import google from "./google.png";
import firebaseAuth from "./firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import axios from "axios";
import{v4} from "uuid"
function Front({setView}) {
  const navigate = useNavigate();
  const signInWithFirebase = () => {
    var googleProvider = new GoogleAuthProvider()
    signInWithPopup(firebaseAuth, googleProvider)
      .then((response) => {
        const user = {
          ID: v4(),
          Email: response._tokenResponse.email,
          Photo: response._tokenResponse.photoUrl,
          Name: response._tokenResponse.displayName,
          Token: response._tokenResponse.oauthAccessToken,
          Password: response._tokenResponse.email,
        }
        axios
          .post("https://nyku.herokuapp.com/auth/register", user)
          .then((res) => {
            const localData = {
              ID: res.data.data,
              Email: response._tokenResponse.email,
              Name: response._tokenResponse.displayName,
              Token: response._tokenResponse.oauthAccessToken,
              Photo: response._tokenResponse.photoUrl,
            };
            localStorage.setItem("oAuth", JSON.stringify(localData));
            navigate("/");
          });
      })
      .catch((error) => {
        console.log(error);
      });
  }
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
        <button onClick={() => setView("register")} style={input}>
          Login By OTP
        </button>
        <br /><br />
        <button onClick={() => navigate("/register")} style={input}>
          register
        </button>
        <br />
        <img
          onClick={signInWithFirebase}
          style={googlecss}
          src={google}
          alt="google Login"
        />
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