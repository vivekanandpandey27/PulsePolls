import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiUser, FiHome, FiTrendingUp, FiList, FiCheckCircle } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { Header_box } from './Header_box';
import { Categories } from './Categories';
import { PollBox } from './PollBox';
const HomePage = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 text-white">
            {/* Enhanced Header with Glass Morphism */}
            {/* <Header_box/> */}
            <br></br>
            <Categories/>
            <PollBox/>
        </div>
    );
};



export default HomePage;
