import React, { useState } from 'react';
import { FiThumbsUp, FiThumbsDown, FiBarChart2, FiShare2, FiBookmark, FiMoreHorizontal } from 'react-icons/fi';
import { motion } from 'framer-motion';

const PollCard = ({ question, category, timeRemaining, totalVotes }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [voted, setVoted] = useState(false);
  const [yesPercentage, noPercentage] = voted 
    ? [Math.floor(Math.random() * 100), 100 - Math.floor(Math.random() * 100)] 
    : [50, 50];

  const handleVote = (option) => {
    if (!voted) {
      setSelectedOption(option);
      setVoted(true);
      // Here you would typically send the vote to your backend
    }
  };

  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700 hover:border-purple-500 transition-all 
                hover:shadow-lg hover:shadow-purple-500/10 overflow-hidden"
    >
      <div className="flex flex-col h-full">
        {/* Poll Header */}
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full bg-purple-900/70 flex items-center justify-center mr-3">
              <span className="text-sm">🏛️</span> {/* Category icon */}
            </div>
            <div>
              <span className="text-xs font-semibold text-purple-300">{category}</span>
              <h3 className="text-lg font-medium line-clamp-2">{question}</h3>
            </div>
          </div>
          <button className="text-gray-400 hover:text-white">
            <FiMoreHorizontal />
          </button>
        </div>

        {/* Poll Options */}
        <div className="space-y-3 mb-5">
          {/* Yes Option */}
          <motion.button
            whileTap={{ scale: voted ? 1 : 0.98 }}
            onClick={() => handleVote('yes')}
            disabled={voted}
            className={`w-full p-3 rounded-lg flex items-center justify-between transition-all
                      ${selectedOption === 'yes' ? 'bg-green-900/40 border border-green-700/50' : 
                        voted ? 'bg-gray-700/30' : 'bg-gray-700/50 hover:bg-gray-700/70'}`}
          >
            <div className="flex items-center">
              <div className={`p-2 rounded-lg mr-3 ${voted ? 'bg-green-900/30' : 'bg-gray-600/50'}`}>
                <FiThumbsUp className={`${selectedOption === 'yes' ? 'text-green-400' : 'text-gray-300'}`} />
              </div>
              <span className="font-medium">Yes</span>
            </div>
            {voted && (
              <span className="text-sm font-medium text-green-400">
                {yesPercentage}%
              </span>
            )}
          </motion.button>

          {/* No Option */}
          <motion.button
            whileTap={{ scale: voted ? 1 : 0.98 }}
            onClick={() => handleVote('no')}
            disabled={voted}
            className={`w-full p-3 rounded-lg flex items-center justify-between transition-all
                      ${selectedOption === 'no' ? 'bg-red-900/40 border border-red-700/50' : 
                        voted ? 'bg-gray-700/30' : 'bg-gray-700/50 hover:bg-gray-700/70'}`}
          >
            <div className="flex items-center">
              <div className={`p-2 rounded-lg mr-3 ${voted ? 'bg-red-900/30' : 'bg-gray-600/50'}`}>
                <FiThumbsDown className={`${selectedOption === 'no' ? 'text-red-400' : 'text-gray-300'}`} />
              </div>
              <span className="font-medium">No</span>
            </div>
            {voted && (
              <span className="text-sm font-medium text-red-400">
                {noPercentage}%
              </span>
            )}
          </motion.button>
        </div>

        {/* Progress Bars (visible after voting) */}
        {voted && (
          <div className="space-y-2 mb-4">
            <div className="flex justify-between text-xs text-gray-400">
              <span>Yes</span>
              <span>{yesPercentage}%</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: `${yesPercentage}%` }}
                transition={{ duration: 0.8 }}
                className="bg-gradient-to-r from-green-400 to-green-500 h-2 rounded-full"
              ></motion.div>
            </div>
            
            <div className="flex justify-between text-xs text-gray-400 mt-2">
              <span>No</span>
              <span>{noPercentage}%</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: `${noPercentage}%` }}
                transition={{ duration: 0.8 }}
                className="bg-gradient-to-r from-red-400 to-red-500 h-2 rounded-full"
              ></motion.div>
            </div>
          </div>
        )}

        {/* Poll Footer */}
        <div className="mt-auto pt-4 border-t border-gray-700 flex justify-between items-center">
          <div className="text-xs text-gray-400">
            <span>{timeRemaining} remaining</span>
            <span className="mx-2">•</span>
            <span>{totalVotes} votes</span>
          </div>
          
          <div className="flex space-x-3">
            <button className="text-gray-400 hover:text-purple-300 transition-colors">
              <FiBarChart2 />
            </button>
            <button className="text-gray-400 hover:text-blue-300 transition-colors">
              <FiShare2 />
            </button>
            <button className="text-gray-400 hover:text-yellow-300 transition-colors">
              <FiBookmark />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// Example usage in your HomePage:
const PollsSection = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <PollCard 
        question="Should AI development be regulated by governments?" 
        category="Technology" 
        timeRemaining="2 days" 
        totalVotes="1,245" 
      />
      <PollCard 
        question="Is remote work as productive as office work?" 
        category="Business" 
        timeRemaining="5 days" 
        totalVotes="892" 
      />
      <PollCard 
        question="Do you support the new education policy?" 
        category="Education" 
        timeRemaining="1 day" 
        totalVotes="543" 
      />
    </section>
  );
};

export default PollCard;