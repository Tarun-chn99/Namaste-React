import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserInfo from "../utils/UserInfo"
import { useSelector } from "react-redux";

const Header = () => {

    const [btnName,setBtnName] = useState("Login");
    const onlineStatus = useOnlineStatus();
    const {userName} = useContext(UserInfo);
    const cartItems = useSelector((store)=>store.cart.items);

    const login = (e) => {
        if(btnName === "Login")
        setBtnName("LogOut");
        else
        setBtnName("Login")
    }

    return(
        <div className="header flex space-between align-center">
            <div className="logo-container">
                <Link to='/' className="logo-link"><img className='logo' src={LOGO_URL} alt="" width="100%"/></Link>
            </div>
            <div className="navigation-links">
                <ul className="flex">
                    <li className="flex"><b>Status : </b> {onlineStatus === true ? <span className="online margin-lr-half"></span> : <span className="offline margin-lr-half"></span>}</li>
                    <li><Link to="/">Search</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link>Help</Link></li>
                    <li><Link>Sign In</Link></li>
                    <li><Link><b>Cart : {cartItems.length}</b></Link></li>
                    <button className="login-btn" onClick={login}>{btnName}</button>  
                    <li><b>{userName}</b></li>                  
                </ul>
            </div>
    </div>
    );
}

export default Header;


