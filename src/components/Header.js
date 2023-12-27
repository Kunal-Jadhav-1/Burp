// import { LOGO_URL } from "../utils/constants";
import logo from '../images/logo.png';
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

const Header = () => {

    const [btnLog, setBtnLog] = useState("LogIn");



    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={logo}></img>
            </div>
            <div className="navi">
                <ul>
                    <li>
                        <Link to="/">Home</Link></li>
                    <li>
                        <Link to="/about">About Us</Link></li>
                    <li>
                        <Link to="/contact-us">Contact Us</Link></li>
                    <li>
                        <Link to="/cart">Cart</Link>
                    </li>
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