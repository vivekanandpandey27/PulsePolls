import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { setAuthUser } from '../redux/userSlice';
import toast from 'react-hot-toast';

const REACT_BASE_URL = import.meta.env.VITE_REACT_APP_BACKEND_BASE_URL;


const editProfile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const User = useSelector((state) => state.user.authUser);
  
  const [formData, setFormData] = useState({
    Username: User.userName,
    fullName: User.fullName,
    imageUrl : User.profilePhoto,
    gender: User.gender
  });

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    console.log(formData);
  };
  
  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const res = await axios.post(
      `${REACT_BASE_URL}/api/v1/user/Editprofile`,
      formData,
      {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
      }
      );

      const newAuth =  {
        userName : formData.Username,
        fullName : formData.fullName,
        id : User.id,
        profilePhoto : formData.imageUrl,
        gender : formData.gender
      }
      console.log(newAuth);

      dispatch(setAuthUser(newAuth));
      toast.success("Profile Updated Successfully !");
      console.log("Profile updated:", res.data);
      
     } catch (error) {
       console.log("Error sending new profile data:", error);
     }
  };


  return (
    <div className="min-h-screen bg-gradient-to-br from-black to-blue-900 p-4 text-white">
      <div className="max-w-md mx-auto mt-10 bg-gray-800 rounded-xl shadow-2xl overflow-hidden p-6">
        {/* Header with back button */}
        <div className="flex items-center mb-6">
          <button 
            onClick={() => navigate('/profile')}
            className="flex items-center text-blue-300 hover:text-white mr-4"
          >
            <FaArrowLeft className="mr-2" />
          </button>
          <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300">
            Edit Profile
          </h2>
        </div>

        {/* Profile Picture */}
        <div className="flex justify-center mb-6">
          <div className="w-24 h-24 rounded-full bg-purple-700 flex items-center justify-center overflow-hidden">
            <img 
              src={User.profilePhoto} 
              alt="Profile" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Edit Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Full Name</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Username */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Username</label>
            <input
              type="text"
              name="Username"
              value={formData.Username}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Image URL*/}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">imageUrl</label>
            <input
              type="text"
              name="imageUrl"
              value={formData.imageUrl}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Gender */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Gender</label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <button
              type="submit"
              className="w-full py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-lg transition-all hover:shadow-lg hover:shadow-blue-500/20"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default editProfile;