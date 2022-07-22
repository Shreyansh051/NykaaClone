import React,{useState} from 'react'
import Front from './Front'
import Register from './Register'
import PhoneOTP from "./AuthOTP";

import { container } from "./login.css"
//<------------------------------------------------------------------------------------------------>
function Login() {
  const [view, setView] = useState("front");
  return (
    <div style={container}>
      {view == "front" && <Front setView={setView} />}
      {view == "register" && (
        <Register
          setView={setView}
        />
      )}
      {view == "AuthOTP" && (
        <PhoneOTP setView={setView} />
      )}
    </div>
  );
}

export default Login