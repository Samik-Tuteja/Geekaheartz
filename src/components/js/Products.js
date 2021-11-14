import React from "react";
import dronemain from '../../images/drone-main.jpeg'
import '../css/products.css'
import prod1 from '../../images/drone-prod-1.jpg'
import prod2 from '../../images/drone-prod-2.jpg'
import prod3 from '../../images/drone-prod-3.jpg'
import prod4 from '../../images/drone-prod-4.jpg'
import prod5 from '../../images/drone-prod-5.jpg'
import axios from "axios";

function Products(){
    const buy=async(id)=>{
        console.log('tumpi')
        const got=await axios.post(`https://geekahertz-backend.darshsikka.repl.co/api/products/buy/${id}`, {uuid: localStorage.getItem('userId')});
        alert("Bill has been sent to registered email, contact number emailed for payment and receival");
        console.log('thumpi')
        }
        
    return(
        <div>
            <h1 className="main-products-h1">Products</h1>
            <div className="products-all"> 
                <div className="product">
                    <img className="products-img" src={prod1} alt="ono image didnt load" />
                    <div className="product-content">
                         <h1 className="products-h1">Exegi Enterprise Drone</h1>
                         <p className="products-price">₹8500</p>
                         <p className="products-desc">Exegi Enterprise Drone with HD Camera Live Video,WiFi FPV Drone for Adults with HD 120° Wide Angle Camera 1000 Mah Long Flight time Auto Hover Fold able RC Drone Quad-copter (Multi Colored)</p>
                         <button onClick={()=>buy(1)}  className="products-buy-btn">Buy now</button>
                    </div>
                </div>
                <div className="product">
                    <img className="products-img" src={prod2} alt="ono image didnt load" />
                    <div className="product-content">
                         <h1 className="products-h1">AAA STORE®Drone</h1>
                         <p className="products-price">₹6500</p>
                         <p className="products-desc">AAA STORE®Drone with HD Camera Live Video,WiFi FPV Drone for Adults with HD 120° Wide Angle Camera 1000 Mah Long Flight time Auto Hover Fold able RC Drone Quad-copter</p>
                         <button onClick={()=>buy(2)} className="products-buy-btn">Buy now</button>
                    </div>
                </div>
                <div className="product">
                    <img className="products-img" src={prod3} alt="ono image didnt load" />
                    <div className="product-content">
                         <h1 className="products-h1">ZADIC Foldable GPS FPV Drone</h1>
                         <p className="products-price">₹7000</p>
                         <p className="products-desc">ZADIC Foldable GPS FPV Drone with 1080P HD 4k Camera Live Video for Beginners, RC Quadcopter with GPS Auto Return, Follow, Gesture Control, Auto Hover & 5G Wifi Transmission_- BLACK</p>
                         <button onClick={()=>buy(3)} className="products-buy-btn">Buy now</button>
                    </div>
                </div>
                <div className="product">
                    <img className="products-img" src={prod4} alt="ono image didnt load" />
                    <div className="product-content">
                         <h1 className="products-h1">Amex Foldable GPS FPV Drone</h1>
                         <p className="products-price">₹9500</p>
                         <p className="products-desc">Amex Foldable GPS FPV Drone with 1080P HD 4k Camera Live Video for Beginners, RC Quadcopter with GPS Auto Return, Follow, Gesture Control, Auto Hover & 5G Wifi Transmission (Black)</p>
                         <button onClick={()=>buy(4)} className="products-buy-btn">Buy now</button>
                    </div>
                </div>
                <div className="product">
                    <img className="products-img" src={prod5} alt="ono image didnt load" />
                    <div className="product-content">
                         <h1 className="products-h1">VRION Remote Control Drone</h1>
                         <p className="products-price">₹7500</p>
                         <p className="products-desc">VRION Remote Control Drone Without Camera,aerocraft Drone with Remote Control - No Camera, RemoteControl Drone, 1 Key Return, Altitude Hold aerocraft witout Camera - Multicolour Drone</p>
                         <button onClick={()=>buy(5)} className="products-buy-btn">Buy now</button>
                    </div>
                </div>
            </div>
            <p style={{textAlign: "center"}}>© Drone buzz | Made with 💙 by Exun</p>
        </div>
    )
}

export default Products;