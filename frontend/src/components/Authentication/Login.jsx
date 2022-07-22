import React,{useState} from 'react'
import Front from './Front'
import Register from './Register'
import { container } from "./login.css"
function Login() {
  const [register,setRegister]= useState(false)
  return (
    <div style={container}>
      {!register ? (
        <Front register={register} setRegister={setRegister} />
      ) : (
        <Register register={register} setRegister={setRegister} />
      )}
    </div>
  );
}

export default Login