import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiUser, FiHome, FiTrendingUp, FiList, FiCheckCircle } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { Header_box } from './Header_box';
import { useSelector, useDispatch } from 'react-redux';
import { setSelectedCtegory } from '../redux/PollSlice';

// Categories data with icons
    const categories = [
        {name: 'all', icon: '🗽'},
        { name: 'cricket', icon: '🏏' },
        { name: 'football', icon: '⚽' },
        { name: 'politics', icon: '🏛️' },
        { name: 'news', icon: '📰' },
        { name: 'technology', icon: '💻' },
        { name: 'science', icon: '🔬' },
        { name: 'entertainment', icon: '🎬' },
        { name: 'education', icon: '📚' },
        { name: 'space', icon: '🚀' },
        { name: 'gaming', icon: '🎮' },
    ];

    

export const Categories = () => {
  const [activeCategory, setActiveCategory] = useState(null);  
  const dispatch = useDispatch();

  async function setCategory(NewCategory) 
  {
        console.log(NewCategory)
        setActiveCategory(NewCategory);
        console.log("ahhah",NewCategory)
        dispatch(setSelectedCtegory(NewCategory));
  } 

  return (
    <div className='p-3'>
        {/* Categories Section with animated cards */}
                <motion.section 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="mb-12"
                >
                    <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">
                        Explore Categories
                    </h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                        {categories.map((category, index) => (
                            <motion.button
                                key={index}
                                whileHover={{ y: -5, scale: 1.03 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => setCategory(category.name)}
                                className={`p-4 rounded-xl transition-all flex flex-col items-center 
                                    ${activeCategory === category.name 
                                        ? 'bg-purple-600 shadow-lg shadow-purple-500/20' 
                                        : 'bg-gray-800/50 hover:bg-gray-800/70'}`}
                            >
                                <span className="text-2xl mb-2">{category.icon}</span>
                                <span className="text-sm font-medium">{category.name}</span>
                            </motion.button>
                        ))}
                    </div>
                </motion.section>
    </div>
  )
}
