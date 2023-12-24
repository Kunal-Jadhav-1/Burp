// import { LOGO_URL } from "../utils/constants";
import logo from '../images/logo.png';
import { useEffect, useState } from "react";

const Header = () => {
    
    const [btnLog,setBtnLog]=useState("LogIn");

    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={logo}></img>
            </div>
            <div className="navi">
                <ul>
                    <li>Name</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <button className='login' onClick={() => {
                        btnLog === "LogIn" ? setBtnLog("LogOut") : setBtnLog("LogIn");
                    }}>
                        {btnLog}
                    </button>
                </ul>
            </div>
        </div>
    );
};

export default Header;