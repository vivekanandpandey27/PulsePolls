import { useState } from 'react';
import { FaUser, FaEdit, FaSignOutAlt, FaUserEdit } from 'react-icons/fa';
import { FaArrowLeft } from 'react-icons/fa';
import toast from 'react-hot-toast';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setAuthUser } from '../redux/userSlice';


const myProfile = () => {
  const [showEditPhoto, setShowEditPhoto] = useState(false);
  const REACT_BASE_URL = import.meta.env.VITE_REACT_APP_BACKEND_BASE_URL;
  const nav = useNavigate();
  const dispatch = useDispatch();

  async function logOut()
  {
      try{  
        const res = await axios.get(
        `${REACT_BASE_URL}/api/v1/user/logout`,
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true,
        }
      );
      dispatch(setAuthUser(null));
      toast.success("LogOut Successfully !")
      nav("/")
      s
      } catch(error) {
          console.log(error);
      }
  }

  // These would come from your backend API
  const userData = {
    name: "Samar Mishra",      // Will be replaced with API data
    username: "@SamMish_45",  // Will be replaced with API data
    gender: "Male", // Will be replaced with API data
    profilePic: 'samar.png'      // Will be replaced with API data
  };
  const navigate = useNavigate();
   const editProfile = ()=> navigate("/editProfile");
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-black to-blue-900 p-4 text-white">
      <div className="max-w-md mx-auto mt-10 bg-gray-800 rounded-xl shadow-2xl overflow-hidden p-6">
        <button 
                    onClick={() => navigate('/')}
                    className="flex items-center text-blue-300 hover:text-white mr-4"
                  >
                    <FaArrowLeft className="mr-2" />
                  </button>
        {/* Profile Picture Section */}
        <div className="relative flex justify-center mb-6">
          <div 
            className="w-32 h-32 rounded-full bg-purple-700 flex items-center justify-center cursor-pointer hover:bg-purple-600 transition-all"
            // onClick={() => setShowEditPhoto(!showEditPhoto)}
          >
            
                
              <img 
                src= 'https://lh3.googleusercontent.com/a/ACg8ocL9zn6Yzu4z3hdDx_nZaUg54vWVu4S0fUm-h_dIHPTCst1FV30HEA=s360-c-no'
                alt="Profile" 
                className="w-full h-full rounded-full object-cover"
              />
            
          </div>
          
          {/* {showEditPhoto && (
            <div className="absolute top-36 bg-gray-900 p-3 rounded-lg shadow-lg border border-purple-500">
              <button className="flex items-center text-sm text-blue-300 hover:text-white">
                <FaUserEdit className="mr-2" />
                Edit Photo
              </button>
            </div>
          )} */}
        </div>
        
        {/* User Info Section */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-white mb-1">{userData.name}</h1>
          <p className="text-blue-300 mb-2">{userData.username}</p>
          <p className="text-purple-300">{userData.gender}</p>
        </div>
        
        {/* Action Buttons */}
        <div className="flex justify-between border-t border-gray-700 pt-4">
          <button onClick={editProfile} className="flex items-center justify-center bg-blue-800 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-all">
            <FaEdit className="mr-2" />
            Edit Profile
          </button>
          <button onClick={logOut} className="flex items-center justify-center bg-red-900 hover:bg-red-800 text-white py-2 px-4 rounded-lg transition-all">
            <FaSignOutAlt className="mr-2" />
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default myProfile;