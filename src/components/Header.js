import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import logo from "../../images/logo.png"

const Header = () => {
    const [btnLog, setBtnLog] = useState("LogIn");
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
    const [userInfo, setUserInfo] = useState(null);

    const cartItems = useSelector((store) => store.cart);
    const navigate = useNavigate();

    // Load user data on mount
    useEffect(() => {
        const storedData = localStorage.getItem('user-info');
        if (storedData) {
            const userData = JSON.parse(storedData);
            setUserInfo(userData);
            setBtnLog("LogOut");
        }
    }, []);

    // Handle Login/Logout
    const handleAuth = () => {
        if (userInfo) {
            localStorage.removeItem('user-info');
            setUserInfo(null);
            setBtnLog("LogIn");
            window.location.reload();
        } else {
            navigate("/login");
        }
    };

    return (
        <div className="flex justify-between bg-primary items-center p-2 relative">
            {/* Logo */}
            <div className="logo-container">
                <img className="w-20 m-2 ml-3 rounded-lg cursor-pointer" src={logo} alt="Logo" />
            </div>

            {/* Navigation for larger screens */}
            <div className="hidden sm:block navi">
                <ul className='flex text-secondary font-semibold place-items-center space-x-4'>
                    <li><Link to="/" className='px-2 py-1 hover:text-cyan-600 cursor-pointer'>Home</Link></li>
                    <li><Link to="/about" className='px-2 py-1 hover:text-cyan-600 cursor-pointer'>About</Link></li>
                    <li><Link to="/contact-us" className='px-2 py-1 hover:text-cyan-600 cursor-pointer'>Contact</Link></li>
                    <li>
                        <Link to="/cart" className='px-2 py-1 hover:text-cyan-600 cursor-pointer'>
                            Cart <span className='bg-accent text-primary rounded-full px-2 py-1 text-[11px]'>{cartItems.length}</span>
                        </Link>
                    </li>
                </ul>
            </div>

            {/* Mobile Navigation */}
            <div className="sm:hidden relative">
                <button 
                    onClick={() => {
                        setIsMobileMenuOpen(!isMobileMenuOpen);
                        setIsProfileDropdownOpen(false); // Close profile dropdown
                    }} 
                    className="px-7 py-1 bg-secondary text-black font-sans italic rounded-md"
                >
                    ≡
                </button>
                {isMobileMenuOpen && (
                    <ul className="absolute left-0 top-full mt-2 font-semibold bg-secondary text-primary border rounded-lg shadow-lg w-40">
                        <li>
                            <Link 
                                to="/" 
                                className='block px-4 py-2 hover:bg-gray-100 cursor-pointer border border-b-primary' 
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link 
                                to="/about" 
                                className='block px-4 py-2 hover:bg-gray-100 cursor-pointer border border-b-primary' 
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                About
                            </Link>
                        </li>
                        <li>
                            <Link 
                                to="/contact-us" 
                                className='block px-4 py-2 hover:bg-gray-100 cursor-pointer border border-b-primary' 
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Contact
                            </Link>
                        </li>
                        <li>
                            <Link 
                                to="/cart" 
                                className='block px-4 py-2 hover:bg-gray-100 cursor-pointer' 
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Cart <span className='bg-accent text-primary rounded-full px-2 py-1 text-[11px]'>{cartItems.length}</span>
                            </Link>
                        </li>
                    </ul>
                )}
            </div>

            {/* User Profile & Auth Button */}
            <div className="relative">
                {userInfo ? (
                    <div className="relative">
                        <img
                            className="w-10 h-10 rounded-full cursor-pointer"
                            src={userInfo.image}
                            alt="User"
                            onClick={() => {
                                setIsProfileDropdownOpen(!isProfileDropdownOpen);
                                setIsMobileMenuOpen(false); // Close mobile menu
                            }}
                        />
                        {isProfileDropdownOpen && (
                            <div className="absolute right-0 mt-2 w-48 bg-secondary text-primary border rounded-lg shadow-lg p-3">
                                <div className="flex flex-col items-center pb-3 border-b border-gray-300">
                                    <img className="w-16 h-16 rounded-full" src={userInfo.image} alt="User" />
                                    <span className="text-lg font-semibold mt-2">{userInfo.name}</span>
                                </div>
                                <button
                                    className="w-full mt-3 px-4 py-2 bg-primary text-accent font-bold rounded-md hover:bg-opacity-80"
                                    onClick={handleAuth}
                                >
                                    LogOut
                                </button>
                            </div>
                        )}
                    </div>
                ) : (
                    <button
                        className='px-4 py-1 bg-primary text-accent border-4 border-accent font-sans font-bold italic rounded-3xl ml-4'
                        onClick={handleAuth}
                    >
                        {btnLog}
                    </button>
                )}
            </div>
        </div>
    );
};

export default Header;
