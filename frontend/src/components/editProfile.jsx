import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const editProfile = () => {
  const navigate = useNavigate();
  
  // Static data for UI demonstration
  const [formData, setFormData] = useState({
    oldUsername: "SamMish_45",
    fullName: "Samar Mishra",
    newUserName: "Viv_33",
    gender: "Male"
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Profile changes would be saved here (disabled for UI demo)');
    // In real implementation, this would call your backend API
    // navigate('/profile');
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
              src="https://lh3.googleusercontent.com/a/ACg8ocL9zn6Yzu4z3hdDx_nZaUg54vWVu4S0fUm-h_dIHPTCst1FV30HEA=s360-c-no" 
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
              name="newUserName"
              value={formData.newUserName}
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