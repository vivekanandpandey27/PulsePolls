import React from 'react'
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FiUser, FiHome, FiTrendingUp, FiList, FiCheckCircle } from 'react-icons/fi';
import  { useState } from 'react';
import NavButton from './NavButton';

export const Header_box = () => {


    const navigate = useNavigate();
    const [activeCategory, setActiveCategory] = useState(null);
  // Navigation functions
    const myProfile = () => navigate('/profile');
    const goToHome = () => navigate('/');
    const goToTrending = () => navigate('/trending');
    const goToMyPolls = () => navigate('/myPolls');
    const goToCompleted = () => navigate('/completed');

  return (
    <header className="sticky top-0 z-20 bg-purple-950 backdrop-blur-lg border-b border-purple-900/30">
                <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                    {/* Logo with animation */}
                    <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="flex items-center space-x-8"
                    >
                        <h1 
                            className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-blue-500 bg-clip-text text-transparent cursor-pointer hover:scale-105 transition-transform"
                            onClick={goToHome}
                        >
                            Pulse Poll
                        </h1>
                        
                        {/* Navigation Menu with icons */}
                        <nav className="hidden md:flex space-x-2">
                            <NavButton 
                                onClick={goToHome} 
                                icon={<FiHome className="mr-2" />} 
                                text="Home"
                            />
                            <NavButton 
                                onClick={goToCompleted} 
                                icon={<FiCheckCircle className="mr-2" />} 
                                text="Completed"
                            />
                            <NavButton 
                                onClick={goToTrending} 
                                icon={<FiTrendingUp className="mr-2" />} 
                                text="Trending"
                            />
                            <NavButton 
                                onClick={goToMyPolls} 
                                icon={<FiList className="mr-2" />} 
                                text="My Polls"
                            />
                           
                        </nav>
                    </motion.div>
                    
                    {/* Profile Icon with animation */}
                    <motion.button 
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={myProfile}
                        className="p-2 rounded-full bg-purple-900/50 hover:bg-purple-800 transition-all border border-purple-700/30"
                        aria-label="Profile"
                    >
                        <FiUser className="text-xl" />
                    </motion.button>
                </div>
            </header>
  )
}
