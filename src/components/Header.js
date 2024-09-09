import logo from '../images/logo.png';
import { useState, useContext } from "react";
import { Link } from 'react-router-dom';
import UserContext from '../utils/userContext';
import { useSelector } from 'react-redux';

const Header = () => {
    const [btnLog, setBtnLog] = useState("LogIn");
    const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State for dropdown

    const userData = useContext(UserContext);
    const { loggedInUser } = userData;

    const cartItems = useSelector((store) => store.cart);

    return (
        <div className="flex justify-between bg-primary items-center p-2">
            <div className="logo-container">
                <img className="w-20 m-2 ml-3 rounded-lg cursor-pointer" src={logo} alt="Logo" />
            </div>

            <div className="hidden sm:block navi">
                <ul className='flex text-secondary place-items-center space-x-4'>
                    <li>
                        <Link to="/" className='px-2 py-1 hover:text-cyan-600 cursor-pointer'>Home</Link>
                    </li>
                    <li>
                        <Link to="/about" className='px-2 py-1 hover:text-cyan-600 cursor-pointer'>About</Link>
                    </li>
                    <li>
                        <Link to="/contact-us" className='px-2 py-1 hover:text-cyan-600 cursor-pointer'>Contact</Link>
                    </li>
                    <li>
                        <Link to="/cart" className='px-2 py-1 hover:text-cyan-600 cursor-pointer'>
                            Cart <span className='bg-accent text-primary rounded-full px-2 py-1 text-[11px]'>{cartItems.length}</span>
                        </Link>
                    </li>
                </ul>
            </div>

            <div className="sm:hidden relative">
                <button 
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="px-3 py-1 bg-gray-200 text-black font-sans italic rounded-md"
                >
                    ≡
                </button>
                {isDropdownOpen && (
                    <ul className="absolute left-0 top-full mt-2 bg-white border rounded-lg shadow-lg w-40">
                        <li>
                            <Link to="/" className='block px-4 py-2 hover:bg-gray-100 cursor-pointer'>Home</Link>
                        </li>
                        <li>
                            <Link to="/about" className='block px-4 py-2 hover:bg-gray-100 cursor-pointer'>About</Link>
                        </li>
                        <li>
                            <Link to="/contact-us" className='block px-4 py-2 hover:bg-gray-100 cursor-pointer'>Contact</Link>
                        </li>
                        <li>
                            <Link to="/cart" className='block px-4 py-2 hover:bg-gray-100 cursor-pointer'>
                                Cart <span className='bg-accent text-primary rounded-full px-2 py-1 text-[11px]'>{cartItems.length}</span>
                            </Link>
                        </li>
                    </ul>
                )}
            </div>

            <button className='px-4 py-1 bg-gray-200 text-black font-sans italic rounded-md ml-4' onClick={() => {
                setBtnLog(btnLog === "LogIn" ? "LogOut" : "LogIn");
            }}>
                {btnLog}
            </button>
        </div>
    );
};

export default Header;
