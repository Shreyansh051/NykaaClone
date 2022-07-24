import React,{useState} from 'react'
import { container, crossButton, submit, inputReg,h2Reg } from "./login.css";
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { v4 } from "uuid";

function ManualRegistration() {
    const navigate = useNavigate()
    const [login, setLogin] = useState(false)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const handleSubmit = (e, i) => {
        e.preventDefault()
        if (i == "login") {
            const data = {
                Email: email,
                Password: password,
            }
            axios.post("https://nyku.herokuapp.com/auth/login", data).then((response) => {
                console.log(response)
                if (response.data.Message == "Account does not exist") {
                    alert("Account does not exist, please create one")
                    setLogin(false)
                }
                if (response.data.Message == "Password doesn't match!") {
                    alert("Password doesn't match, Try once again")
                    setPassword("")
                }
                else {
                  const localData = {
                    ID: response.data.ID,
                    Email: email,
                    Name: response.data.Name,
                    Token: response.data.Token,
                    Photo:
                      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png",
                  };
                  localStorage.setItem("user", JSON.stringify(localData));
                } 
            }).catch((error) => {
                console.log(error)
            })
        } else {
          const data = {
            ID: v4(),
            Email: email,
            Password: password,
            Name: name,
            Phone: phone,
          };
            axios
              .post("https://nyku.herokuapp.com/auth/register", data)
              .then((response) => {
                const localData = {
                  ID: response.data.ID,
                  Email: email,
                  Name: name,
                  Token: response.data.Token,
                  Photo:
                    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png",
                };
                  localStorage.setItem("user", JSON.stringify(localData))
                  alert("Login Successful");
                  navigate("/")
              })
              .catch((error) => {
                console.log(error);
              });
        }
    }
  return (
    <div style={container}>
      <button onClick={() => navigate("/")} style={crossButton}>
        X
      </button>
      <h2
        style={{
          position: "absolute",
          left: "37%",
          fontWeight: "500",
        }}
      >
        {login ? "SIGN IN" : "SIGN UP"}
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
      {login ? (
        <>
          <div style={{ width: "90%", margin: "auto", textAlign: "left" }}>
            <form onSubmit={(e) => handleSubmit(e, "login")}>
              <h2 style={h2Reg}>Email:</h2>
              <input
                onChange={(e) => setEmail(e.target.value)}
                style={inputReg}
                required
                type="email"
                placeholder="Enter Email"
              />
              <br />
              <h2 style={h2Reg}>Password:</h2>
              <input
                onChange={(e) => setPassword(e.target.value)}
                style={inputReg}
                required
                type="password"
                placeholder="Enter Password"
              />
              <br />
              <br />
              <br />
              <input style={submit} type="submit" value="LOGIN" />
              <br />
            </form>
            <p
              onClick={() => setLogin(false)}
              style={{ color: "#fc2779", cursor: "pointer" }}
            >
              New user? Register here
            </p>
          </div>
        </>
      ) : (
        <>
          <div style={{ width: "90%", margin: "auto", textAlign: "left" }}>
            <form onSubmit={(e) => handleSubmit(e, "register")}>
              <h2 style={h2Reg}>Email:</h2>
              <input
                onChange={(e) => setEmail(e.target.value)}
                style={inputReg}
                required
                type="email"
                placeholder="Enter Email"
              />
              <br />
              <h2 style={h2Reg}>Password:</h2>
              <input
                onChange={(e) => setPassword(e.target.value)}
                style={inputReg}
                required
                type="password"
                placeholder="Enter Password"
              />
              <br />
              <h2 style={h2Reg}>Name:</h2>
              <input
                onChange={(e) => setName(e.target.value)}
                style={inputReg}
                required="required"
                type="text"
                placeholder="Enter Name"
              />
              <br /> 
              <h2 style={h2Reg}>Phone:</h2>
              <input
                onChange={(e) => setPhone(e.target.value)}
                style={inputReg}
                type="tel"
                placeholder="Enter Phone"
              />
              <br />
              <br />
              <br />
              <br />
              <input style={submit} type="submit" value="REGISTER" />
              <br />
            </form>
            <p
              onClick={() => setLogin(true)}
              style={{ color: "#fc2779", cursor: "pointer" }}
            >
              Already an user? Please Login
            </p>
          </div>
        </>
      )}
    </div>
  );
}

export default ManualRegistration