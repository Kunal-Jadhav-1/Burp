// import { LOGO_URL } from "../utils/constants";
import logo from '../images/logo.png';
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';

const Header = () => {

    const [btnLog, setBtnLog] = useState("LogIn");

    const onlineStatus = useOnlineStatus();

    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={logo}></img>
            </div>
            <div className="navi">
                <ul>
                    <li className='link'>
                        Online Status {onlineStatus ? ": )" : "; ("}
                    </li>
                    <li>
                        <Link to="/" className='link'>Home</Link></li>
                    <li>
                        <Link to="/about" className='link'>About Us</Link></li>
                    <li>
                        <Link to="/contact-us" className='link'>Contact Us</Link></li>
                    <li>
                        <Link to="/groceries" className='link'>Groceries</Link></li>
                    <li>
                        <Link to="/cart" className='link'>Cart</Link>
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