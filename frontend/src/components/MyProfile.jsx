import { useState } from 'react';
import { FaUser, FaEdit, FaSignOutAlt, FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useLogout } from '../hooks/useUserMutations';


const MyProfile = () => {

  const [showEditPhoto, setShowEditPhoto] = useState(false);
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.authUser);
  const { mutate: logout } = useLogout();

  function logOut() {
    logout(undefined, {
      onSuccess: () => {
        navigate("/");
      }
    });
  }

  const editProfile = () => navigate("/editProfile");

  const BlueTick = () => (
    <svg className="inline ml-1" width="19" height="19" viewBox="0 0 24 24" fill="none">
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

  return (
    <div className="min-h-screen bg-black text-white p-0 relative">
     
      <div className=" bg-black/80 backdrop-blur-sm p-4 ml-2 absolute">
        <button 
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-blue-50 hover:text-blue-300 scale-125"
        >
          <FaArrowLeft className="text-lg" />
          <span>Back</span>
        </button>
      </div>



      <div className="flex flex-col items-center justify-center py-8 px-4">

        {/* Profile Picture */}
        <div className="relative mb-8 group">
          <div className="w-40 h-40 md:w-52 md:h-52 rounded-full bg-gradient-to-br from-purple-600 to-blue-500 p-1">
            <img 
              src={user.profilePhoto} 
              alt="Profile"
              className="w-full h-full rounded-full object-cover border-4 border-gray-900"
            />
          </div>
        </div>

        {/* User Information */}
        <div className="text-center max-w-2xl w-full">
          <h1 className="text-3xl font-bold mb-2">{user.fullName}<BlueTick /></h1>
          <p className="text-blue-400 text-lg mb-4 bg-gray-900 rounded-lg mx-auto w-48">@{user.userName }</p>
          
          {user?.bio && (
            <p className="text-gray-300 mb-6 px-4 md:px-8">
              {user.bio}
            </p>
          )}

          <div className="inline-flex items-center bg-gray-800 rounded-full px-4 py-2 mb-8">
            <FaUser className="mr-2 text-purple-400" />
            <span>{user?.gender || 'Gender'}</span>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={editProfile}
              className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white py-3 px-6 rounded-lg transition-all"
            >
              <FaEdit />
              Edit Profile
            </button>
            <button 
              onClick={logOut}
              className="flex items-center justify-center gap-2 bg-red-700 hover:bg-gray-700 text-white py-3 px-6 rounded-lg transition-all"
            >
              <FaSignOutAlt />
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyProfile;