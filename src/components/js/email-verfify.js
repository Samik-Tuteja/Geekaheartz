import React, {useState} from "react";
import axios from 'axios'
import { Redirect } from "react-router-dom";
import '../css/email-verify.css'

function EmailVerify(){
    const [ showInput, setShowInput ] = useState(false);
    const [otp, setOtp] = useState(0);
    const [message, setMessage] = useState("");
    const buttonClick = async() => {
        const got=await axios.post("https://geekahertz-backend.darshsikka.repl.co/api/auth/createotp", {uuid: localStorage.getItem('userId')});
        setShowInput(true);
    }
    const submitOtp = async() => {
        const got=await axios.post("https://geekahertz-backend.darshsikka.repl.co/api/auth/confirmotp", {uuid: localStorage.getItem('userId'), otp})
        if(got.data.status === 400){
            return setMessage("Wrong otp")
        }else{
            setMessage("Your email has been verified")
        }
        setMessage(<Redirect to="/products"></Redirect>)
    }
    return(
        <div>
            <div className="main-email-verify">
            <p style={{display: showInput? " ": "none"}}>An email has been sent to the registered address. Type the Otp to confirm it.</p>
            <form className="email-form" onSubmit={(e)=>e.preventDefault()}>
                <input value={otp} onChange={(e)=>{setOtp(Number(e.target.value))}} type="text" placeholder="Enter your Otp" style={{display: showInput? " ": "none"}} id="otp-input" />
                <input onClick={submitOtp} type="submit" value="Submit" style={{display: showInput? " ": "none"}} id="submit-email" />
            </form>
            <p style={{textAlign: "center"}}>{message}</p>
            <button className="send-btn" onClick={buttonClick}>Send otp</button>
            </div>
        </div>
    )
}

export default EmailVerify;

