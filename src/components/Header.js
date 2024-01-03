// import { LOGO_URL } from "../utils/constants";
import logo from '../images/logo.png';
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';

const Header = () => {

    const [btnLog, setBtnLog] = useState("LogIn");

    const onlineStatus = useOnlineStatus();

    return (
        <div className="flex justify-between bg-black">
            <div className="logo-container">
                <img className="w-20 m-2 ml-3 rounded-lg" src={logo}></img>
            </div>
            <div className="navi">
                <ul className='flex mt-6 text-white place-items-center'>
                    <li className='mr-2 ml-2 pr-1 pl-2 hover:text-cyan-600 cursor-pointer'>
                        Connection Status {onlineStatus ? " : )" : " ; ("}
                    </li>
                    <li>
                        <Link to="/" className='mr-2 ml-2 pr-1 pl-2 hover:text-cyan-600 cursor-pointer'>Home</Link></li>
                    <li>
                        <Link to="/about" className='mr-2 ml-2 pr-1 pl-2 hover:text-cyan-600 cursor-pointer'>About</Link></li>
                    <li>
                        <Link to="/contact-us" className='mr-2 ml-2 pr-1 pl-2 hover:text-cyan-600 cursor-pointer'>Contact</Link></li>
                    <li>
                        <Link to="/groceries" className='mr-2 ml-2 pr-1 pl-2 hover:text-cyan-600 cursor-pointer'>Groceries</Link></li>
                    <li>
                        <Link to="/cart" className='mr-2 ml-2 pr-1 pl-2 hover:text-cyan-600 cursor-pointer'>Cart</Link>
                    </li>
                    <button className='mr-4 ml-2 pr-2 pl-2 pt-1 pb-1  rounded-md bg-gray-200 text-black' onClick={() => {
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