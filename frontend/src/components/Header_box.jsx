import React, { useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { FiUser, FiHome, FiList, FiCheckCircle, FiMenu, FiX } from 'react-icons/fi';
import { IoIosCreate } from "react-icons/io";
import { IoMdLogIn } from "react-icons/io";
import { MdOutlineCreateNewFolder } from "react-icons/md";
import NavButton from './NavButton';
import { useSelector } from 'react-redux';
import { IoSearch } from "react-icons/io5";
import axios from 'axios';
import { SearchResultProfile } from './SearchResultProfile';



export const Header_box = () => {
    
    const navigate = useNavigate();
    const [activeCategory, setActiveCategory] = useState(null);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const isAuth = useSelector((state) => state.user.authUser);
    const[searchtext,setsearchtext] = useState("");
    const [showDropdown, setShowDropdown] = useState(false);
    const [searchResults, setsearchResult] = useState(null);
    const [loading, setloading] = useState(false);


    const REACT_BASE_URL = import.meta.env.VITE_REACT_APP_BACKEND_BASE_URL;


    // Navigation functions
    const myProfile = () => navigate('/profile');
    const goToHome = () => navigate('/');
    const goToMyPolls = () => navigate('/myPolls');
    const goToCompleted = () => navigate('/Completed_Poll');
    const gotoCreatePoll = () => navigate('/CreatePoll');
    const gotoLogin = () => navigate("/login");
    const gotoSignUP = () => navigate('/signup');
   

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    const SearchSubmitHandler = async () => {
        const data = {
            query : searchtext,
        }

        try{
            setloading(true);

            const res = await axios.post(
            `${REACT_BASE_URL}/api/v1/user/getOtherUser`,
            data,
            {
              headers: { 'Content-Type': 'application/json' },
              withCredentials: true,
            }
           );
           setloading(false);
           //console.log("res : ",res);
           setsearchResult(res.data);
           console.log(searchResults);
           setShowDropdown(true);

        } catch(error) {
            console.log(error);
        }   
    }

    return (
        <header className="sticky top-0 z-50 bg-black backdrop-blur-lg border-b border-white/20 " >
            <div className="container mx-auto  py-3 flex justify-between items-center ">

                {/* Logo and Menu in Phone size*/}
                <div className="flex items-center space-x-4 md:space-x-8">
                    
                    {/* Mobile Menu for smaller screen*/}
                    <button 
                        className="md:hidden p-2 rounded-md text-purple-200 hover:text-white focus:outline-none"
                        onClick={toggleMobileMenu}
                    >
                        {mobileMenuOpen ? <FiX className="text-2xl" /> : <FiMenu className="text-2xl" />}
                    </button>

                    <h1 
                        className="text-xl sm:text-4xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-blue-500 bg-clip-text text-transparent cursor-pointer hover:scale-105 transition-transform"
                        onClick={goToHome}
                    >
                        Pulse Poll
                    </h1>
                </div>

                {/* SEARCH BAR FOR SEARCHING OTHER USER'S PROFILE*/}
                <div className='flex flex-col relative'>
                    <div className='flex  border border-[#3b3b6d] rounded-xl pr-3'>
                       <input
                       id="searchBar"
                       name="searchBar"
                       type= 'text'
                       value = {searchtext}
                       onChange= {(event)=> {setsearchtext(event.target.value)}}
                       onClick={() => {setShowDropdown(false)}}
                       placeholder="Search Profile..."
                       className="lg:w-60 md:w-40 sm:w-40 w-20 px-5 py-3 rounded-xl bg-[#1e1b4b20] text-white placeholder-[#a5b4fc80] border border-[#3b3b6d] focus:outline-none focus:border-[#818cf8] focus:ring-2 focus:ring-[#6366f130] transition-all"
                       />

                   <IoSearch className='ml-4 my-auto cursor-pointer  scale-150 text-white' onClick={SearchSubmitHandler}/>
                   </div>


                  {/* Enhanced Window Box for showing Search Results */}
                  {loading ? (<div className='absolute mt-14 w-72 bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden z-50 flex items-center text-lg font-bold text-blue-700 '> <img className='h-9 pr-3' src = 'https://upload.wikimedia.org/wikipedia/commons/c/c7/Loading_2.gif' /> Loading....</div>) : (null)}
                  {showDropdown && ( <SearchResultProfile searchResults = {searchResults}/>)}
                </div>
                
                
                

                {/* Desktop Navigation will not show on mobile */}

                <nav className="hidden md:flex space-x-2">
                    <NavButton 
                        
                        onClick={goToHome} 
                        icon={<FiHome className="mr-2 " />} 
                        text="Home"
                    />
                   
                    {!isAuth && (
                        <NavButton 
                            onClick={gotoSignUP} 
                            icon={<MdOutlineCreateNewFolder className="mr-2" />} 
                            text="Create Account"
                        />
                    )}
                    {isAuth && (
                        <NavButton 
                            onClick={goToCompleted} 
                            icon={<FiCheckCircle className="mr-2" />} 
                            text="Completed"
                        />
                    )}
                    {isAuth && (
                        <NavButton 
                            onClick={gotoCreatePoll} 
                            icon={<IoIosCreate className="mr-2" />} 
                            text="Create Poll"
                        />
                    )}
                    {isAuth && (
                        <NavButton 
                            onClick={goToMyPolls} 
                            icon={<FiList className="mr-2" />} 
                            text="My Polls"
                        />
                    )}
                </nav>
                
                {/* Profile/Auth buttons */}
                <div className="flex items-center space-x-2 cursor-pointer justify-center">
                    {isAuth == null ? (
                        <div className="hidden sm:block">
                            <NavButton 
                                onClick={gotoLogin} 
                                icon={<IoMdLogIn className="mr-2" />} 
                                text="Login"
                            />
                        </div>
                    ) : (
                        <img src = {isAuth.profilePhoto} onClick={myProfile} className=' sm:w-11  h-9 w-9 sm:h-11 rounded-full border border-green-400 border-2 mr-3'/>
                       
                    )}
                </div>
            </div>

            {/* Mobile Menu only appears when hamburger is clicked */}
            {mobileMenuOpen && (
                <div className="md:hidden bg-slate-900 backdrop-blur-sm border-t border-purple-800/30">

                    <div className="container mx-auto px-4 py-3 flex flex-col space-y-3">

                        <NavButton 
                            onClick={() => { goToHome(); setMobileMenuOpen(false); }}
                            icon={<FiHome className="mr-2" />} 
                            text="Home"
                            fullWidth
                        />

                        {!isAuth && (
                            <div>
                                <NavButton 
                                    onClick={() => { gotoLogin(); setMobileMenuOpen(false); }}
                                    icon={<IoMdLogIn className="mr-2" />} 
                                    text="Login"
                                    fullWidth
                                />
                                <NavButton 
                                    onClick={() => { gotoSignUP(); setMobileMenuOpen(false); }}
                                    icon={<MdOutlineCreateNewFolder className="mr-2" />} 
                                    text="Create Account"
                                    fullWidth
                                />
                            </div>
                        )}
                        {isAuth && (
                            <>
                                <NavButton 
                                    onClick={() => { gotoCreatePoll(); setMobileMenuOpen(false); }}
                                    icon={<IoIosCreate className="mr-2" />} 
                                    text="Create Poll"
                                    fullWidth
                                />
                                <NavButton 
                                    onClick={() => { goToMyPolls(); setMobileMenuOpen(false); }}
                                    icon={<FiList className="mr-2" />} 
                                    text="My Polls"
                                    fullWidth
                                />
                                <NavButton 
                                    onClick={() => { goToCompleted(); setMobileMenuOpen(false); }}
                                    icon={<FiCheckCircle className="mr-2" />} 
                                    text="Completed"
                                    fullWidth
                                />
                                
                                <NavButton 
                                    onClick={() => { myProfile(); setMobileMenuOpen(false); }}
                                    icon={<FiUser className="mr-2" />} 
                                    text="My Profile"
                                    fullWidth
                                />
                            </>
                        )}
                    </div>
                </div>
            )}
        </header>
    );
};