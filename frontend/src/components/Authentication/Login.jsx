import React,{useState,useRef} from 'react'
import Front from './Front'
import Register from './Register'
import PhoneOTP from "./AuthOTP";

import { container } from "./login.css"
//<------------------------------------------------------------------------------------------------>
function Login() {
  const [view, setView] = useState("front");
  const [number, setNumber] = useState("");
  return (
    <div style={container}>
      {view == "front" && <Front setView={setView} />}
      {view == "register" && (
        <Register
          setView={setView}
          number={number}
          setNumber={setNumber}
        />
      )}
      {view == "AuthOTP" && (
        <PhoneOTP
          setView={setView}
          number={number}
        />
      )}
    </div>
  );
}

export default Login