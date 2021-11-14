import React, {useEffect, useState} from 'react';
import Navbar from './components/js/Navbar'
import dronegif from './images/dronegif.gif'
import './App.css'
import { HashRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import Home from './components/js/Home'
import Signup from './components/js/Signup';
import Login from './components//js/Login'
import axios from 'axios';
import EmailVerify from './components/js/email-verfify';
import Products from './components/js/Products';



function App() {
  const [user, setUser] = useState({});
  useEffect(async()=>{
    if(!localStorage.getItem('userId')){
      setUser({guest: true})
    }
    else{
    const got=await axios.post('https://geekahertz-backend.darshsikka.repl.co/api/auth/get-details', {uuid: localStorage.getItem('userId')}) 
    if(got.data.message==="User Not Found"){
      setUser({guest: true})
    } else if(got.data.message==="User not verified"){
      setUser({guest: false, verified: false, email: got.data.email, username: got.data.username})
    } else{
      setUser({guest: false, verified: true, email: got.data.email, username: got.data.username})
    }
    }
    })
  return (
      <>
<Router>
<Navbar user={user} />
<Switch>
   <Route exact path="/">
     <Home />
   </Route>
   <Route exact path="/signup">
     <Signup />
   </Route>
   <Route exact path="/login">
     <Login />
   </Route>
   <Route exact path="/verify-email">
     <EmailVerify />
   </Route>
   <Route exact path="/products">
     <Products />
   </Route>
</Switch>
</Router>
</>
  );
}

export default App;
