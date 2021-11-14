import React, {useState} from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import '../css/signup.css'

function Signup(){
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

    const formSubmit= async (e)=>{
        e.preventDefault()

        const [username, email, password]=e.target
        if(password.value.length<8){
            return setMessage("Password needs to be greater than or equal to 8");
          }else if(email.value.length === 0){
            return setMessage("Please fill your email");
          }else if(username.value.length === 0){
            return setMessage("Please fill your username");
          }
        const got= await axios.post('https://geekahertz-backend.darshsikka.repl.co/api/auth/signup', 
{email: email.value, password:password.value, username:username.value});
if(got.data.error){
    return setMessage(got.data.message)
}
localStorage.setItem("userId", got.data.uuid);
setMessage("You are now signed up")
setMessage(<Redirect to="/verify-email"></Redirect>)    }

        
       
    return(
        <div>
            <div className="signup-ultra-pro-max">
            <div className="signup-main">
            <h1 className="main-h1">Signup</h1>
            <form onSubmit={formSubmit}>
                <div className="form">
                    <div className="form-group">
                        <input type="text" name="username" id="username" placeholder="Username" />
                    </div>
                    <div className="form-group">
                        <input type="email" name="email" id="email" placeholder="Email" />
                    </div>
                    <div className="form-group">
                        <input type={show?"text":"password"} name="password" id="password" placeholder="Password" />
                        <button className="show-button" type="button" onClick={handleShow}>👁️</button>
                  </div>
                  <div className="form-group">
                      <input type="submit" value="Submit" id="submit" />
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

export default Signup;