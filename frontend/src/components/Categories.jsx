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
        { name: 'sports', icon: '🏏' },
        { name: 'health', icon: '🚑' },
        { name: 'politics', icon: '🏛️' },
        { name: 'news', icon: '📰' },
        { name: 'technology', icon: '💻' },
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
        setActiveCategory(NewCategory);
        dispatch(setSelectedCtegory(NewCategory));
  } 

  return (
    <div className='p-3'>
        {/* Categories Section*/}
                <section className="mb-12">

                    <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-100 to-purple-300 bg-clip-text text-transparent">
                        Explore Categories
                    </h2>

                    {/* CARDS WITH CATEGORIES */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">

                        {categories.map((category, index) => (
                            <button
                                key={index}
                                onClick={() => setCategory(category.name)}
                                className={`p-4 rounded-xl transition-all flex flex-col items-center hover:scale-105 ${activeCategory === category.name 
                                                ? 'bg-blue-700 shadow-lg shadow-white/10 border border-gray-800' 
                                                : 'bg-gray-800 hover:bg-gray-800 border border-transparent'}`}
                            >

                                <span className="text-2xl mb-2">{category.icon}</span>
                                <span className="text-sm font-medium">{category.name}</span>
                            </button>
                        ))}
                    </div>
                </section>
    </div>
  )
}
