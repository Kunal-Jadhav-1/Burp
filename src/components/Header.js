// import { LOGO_URL } from "../utils/constants";
import logo from '../images/logo.png';
import { useState, useContext } from "react";
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import UserContext from '../utils/userContext'
import {useSelector} from 'react-redux';

const Header = () => {

    const [btnLog, setBtnLog] = useState("LogIn");

    const onlineStatus = useOnlineStatus();

    const userData = useContext(UserContext);
    //console.log(userData)
    const { loggedInUser } = userData
    //console.log(loggedInUser)

    //Subscribing to the store using selector 
    const cartItems = useSelector((store) => store.cart.items);
    //console.log(cartItems)

    return (
        <div className="flex justify-between bg-black">
            <div className="logo-container">
                <img className="w-20 m-2 ml-3 rounded-lg cursor-pointer" src={logo}></img>
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
                        <Link to="/cart" className='mr-2 ml-2 p-1 hover:bg-cyan-900 hover:rounded-2xl cursor-pointer'>🛒 ({cartItems.length}) </Link>
                    </li>
                    <li className='mr-2 ml-2 pr-1 pl-2 hover:text-cyan-600 cursor-pointer font-thin'>
                        {loggedInUser}
                    </li>
                    <button className='mr-4 ml-2 pr-2 pl-2 pt-1 pb-1  rounded-md bg-gray-200 text-black font-sans italic' onClick={() => {
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