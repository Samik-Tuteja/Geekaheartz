import React from "react";
import drone1 from '../../images/drone1.jpg'
import dronemain from '../../images/drone-main.jpeg'
import '../css/home.css'
import dronegif from '../../images/dronegif.gif'



function Home(){
    return(
        <div>
      <div className="first-section">
        <div className="main-content">
          <h1 className="main-content-header">Drone Buzz</h1>
          <h1 className="main-content-tagline">Drones that buzz to help</h1>
      </div>
      <div className="main-img">
        <img src={dronemain} alt="ono image didnt load" />
      </div>
  </div>

  <div className="second-section">
    <div className="second-section-left">
      <div className="second-section-left-content"> 
      <h1>The SPR Drone</h1>
      <p>The drone uses mist spray technologies, with system that can carry any kind of spray.
From cleaning an area or chlorinating a swimming pool, it can even be used to carry drinks for sportspersons.
Lighweight and low costs systems make it a multipurpose optimized product.
</p>
      </div>
      <img className="drone1" src={drone1} alt="ono image didnt load ig" />
    </div>
    <div className="second-section-right">
    </div>
  </div>

  <div className="third-section">
      <div className="left-gif">
        <img src={dronegif} alt="ono image didnt load" />
      </div>
      <div className="right-comps">
        <h1>Components</h1>
        <div className="all-ul">
        <ul>
          <li>light sensor</li>
          <li>lightweight body</li>
          <li>spray holder</li>
          <li>spraying gear set</li>
        </ul>
        <ul>
          <li>flight optimizing wings</li>
          <li>strong antenna</li>
          <li>location sensor</li>
          <li>navigation AI</li>
       </ul>

        </div>
      </div>
  </div>
  <p style={{textAlign: "center"}}>© Drone buzz | Made with 💙 by Exun</p>

        </div>

    )
}

export default Home;