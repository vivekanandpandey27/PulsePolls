import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiUser, FiHome, FiTrendingUp, FiList, FiCheckCircle } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { Header_box } from './Header_box';
import { Categories } from './Categories';
import { PollBox } from './PollBox';
const HomePage = () => {
    return (
        // <div className="min-h-screen bg-gradient-to-br from-gray-950 via-slate-950 to-blue-900 text-white">
<div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-950 to-slate-950 text-cyan-100">
            {/* Enhanced Header with Glass Morphism */}
            {/* <Header_box/> */}
            <br></br>
            <Categories/>
            <PollBox/>
        </div>
    );
};



export default HomePage;
