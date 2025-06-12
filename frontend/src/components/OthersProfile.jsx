import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { OthersPolls } from './OthersPolls';

const OthersProfile = () => {
  // Temporary data with sample posts

  
  const navigate = useNavigate();

  const location = useLocation();
  const receivedData = location.state.userData;

  useEffect(() => {console.log("data_changed")},[receivedData.userName])

  console.log("Inside Samar fn : ", receivedData);

  const [profileData, setProfileData] = useState({
    profilePic: receivedData.profilePhoto,
    fullName: receivedData.fullName,
    username: receivedData.userName,
    bio: receivedData.bio,
    posts: 0,
    
  });

  console.log("BOSSS_______>", receivedData);
  

  

  // Function to format follower count
  

  // Blue Tick SVG Component
  const BlueTick = () => (
    <svg className="inline ml-1" width="18" height="18" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="12" fill="#1DA1F2"/>
      <path 
        d="M7 12L10.5 15.5L17 9" 
        stroke="white" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </svg>
  );

  // Golden Tick SVG Component
 

  return (
    <div className="bg-black text-white min-h-screen pb-16">
      {/* Profile Header */}
      <div className="p-4 pl-20 pt-10">
        <div className="flex items-start">

          <button onClick={() => navigate('/')} className="flex items-center text-blue-300 hover:text-white">
              <FaArrowLeft className="" />
          </button>


          {/* Larger Profile Picture with ring */}
          <div className="w-32 h-32 rounded-full bg-gray-700 mr-5 overflow-hidden border-4 border-gray-600">
            <img 
              src={profileData.profilePic} 
              alt="Profile" 
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.onerror = null; 
                e.target.src = "https://via.placeholder.com/150";
              }}
            />
          </div>
          
          {/* Profile Info */}
          <div className="flex-1">
            <div className="flex justify-between items-center mb-3">
              <div>
                <h1 className="font-bold text-2xl">
                  {profileData.fullName}
                  
                    <BlueTick />
                  
                </h1>
                <p className="text-gray-400">@{profileData.username}</p>
              </div>
              
              {/* Better Follow Button */}
              
            </div>
            
            {/* Bio with better spacing */}
            <p className="text-base mb-4">{profileData.bio}</p>
            
            {/* Stats with better layout */}
            <div className="flex justify-between max-w-xs">
              <div className="text-center">
                <p className="font-bold text-lg">{profileData.posts}</p>
                <p className="text-gray-400 text-xs">Posts</p>
              </div>
             
              
            </div>
          </div>
        </div>
      </div>
      
      {/* Posts Section */}
      <div className="border-t border-gray-800 pt-3 px-4">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-1.5 h-6 bg-white rounded-full"></div>
          <h2 className="font-semibold text-lg">POLLS</h2>
        </div>

        <div>
          <OthersPolls id = {receivedData._id}/>
        </div>
        
      </div>
      
    </div>
  );
};

export default OthersProfile;