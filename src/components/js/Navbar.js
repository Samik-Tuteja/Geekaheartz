import '../css/navbar.css'
import {Link} from 'react-router-dom'


function Navbar({user}){      
    return(
        <div>
            <div className="navbar">
            <div className="navbar-left">
            <Link to="/">
                    Drone Buzz
                </Link>
            </div>
            <div className="navbar-right">
            <Link to="/">
                    Home
                </Link>
                {user.guest===true?<Link to="/login">Login</Link>:""} 
                {user.guest===true?<Link to="/signup">Signup</Link>:""} 
                {user.verified===true?<Link to="/products">Products</Link>:""} 
                {user.verified===false&&user.guest===false?<Link to="/verify-email">Verify email to buy products</Link>: ""}
                {user.guest===false?<a><b>Hello, {user.username}</b></a>:""}
            </div>
            </div>
        </div>
    )
}

export default Navbar;