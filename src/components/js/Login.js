import React, {useState} from "react";
import axios from "axios";
import '../css/login.css'

function Login(){
    const [show, setShow]=useState(false);
    const handleShow=()=>{
        if(show){
           setShow(false)
         }
       else{
       setShow(true)
       }
    }
    const [message, setMessage]=useState('')

    const formSubmit=async(e)=>{
        const [username, password]=e.target
        e.preventDefault()
        const got=await axios.post("https://geekahertz-backend.darshsikka.repl.co/api/auth/login", 
{identity: username.value, credential: password.value})
if( got.data.status===401){
    setMessage(got.data.message)
}else{
    localStorage.setItem("userId", got.data.uuid)
    setMessage("Logged in")
}

    }

    return(
        <div>
            <div className="signup-ultra-pro-max">
            <div className="signup-main">
            <h1 className="main-h1">Login</h1>
            <form onSubmit={formSubmit}>
                <div className="form">
                    <div className="form-group">
                        <input type="text" name="username" id="username" placeholder="Username or Email" />
                    </div>
                    <div className="form-group">
                        <input type={show?"text":"password"} name="password" id="password" placeholder="Password" />
                        <button className="show-button" type="button" onClick={handleShow}>👁️</button>
                  </div>
                  <div className="form-group">
                      <input id="submit" type="submit" value="Submit" />
                  </div>
                </div>
            </form>        
            <p>{message}</p>
            </div>
            </div>
            <p style={{textAlign: "center"}}>© Drone buzz | Made with 💙 by Exun</p>
            </div>
    )
}

export default Login;