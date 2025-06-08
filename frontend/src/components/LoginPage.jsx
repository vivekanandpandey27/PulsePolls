import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { setAuthUser } from '../redux/userSlice';


const LoginPage = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [FormData, SetformData] = useState({ userName: "", password: "" });
  const [PasswordVisibility, setPasswordVisibility] = useState(false);

  const REACT_BASE_URL = import.meta.env.VITE_REACT_APP_BACKEND_BASE_URL;

  const changeHandler = (event) => {
    const { name, type, value, checked } = event.target;
    SetformData((prevFormData) => ({
      ...prevFormData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const changePasswordVisibility = () => {
    setPasswordVisibility(!PasswordVisibility);
  };

  async function onSubmitHandler(event) {
   event.preventDefault();

    try {
        const res = await axios.post(
        `${REACT_BASE_URL}/api/v1/user/login`,
        FormData,
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true,
        }
      );

      console.log("Login Response:", res.data);
      dispatch(setAuthUser(res.data));
      navigate('/');
      //localStorage.setItem("authUser", JSON.stringify(res.data));
      toast.success(res.data.message);
      //navigate('/');
      SetformData({ userName: "", password: "" });
    } catch (error) {
      toast.error(error?.response?.data?.message || "Login Failed");
      console.log(error);
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0a12] via-[#1a1a2e] to-[#16213e] flex items-center justify-center px-4">
      <div className="backdrop-blur-md bg-[#ffffff08] border border-[#ffffff15] rounded-[70px] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.6)] p-12 w-full max-w-md transition-all duration-300 hover:shadow-[0_35px_60px_-15px_rgba(109,40,217,0.3)]">
        <div className="text-center mb-10">
          <div className="mx-auto w-20 h-20 rounded-full bg-gradient-to-br from-[#6366f1] to-[#8b5cf6] flex items-center justify-center mb-4 shadow-lg shadow-[#6366f130]">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#818cf8] to-[#c4b5fd] mb-2 p-2">
            LogIn
          </h2>
          <p className="text-[#ffffffaa] text-sm">Sign in to your account</p>
        </div>

        <form onSubmit={onSubmitHandler} className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="userName" className="block text-sm font-medium text-[#e0e0ff]">
              Username
            </label>
            <div className="relative">
              <input
                id="userName"
                name="userName"
                type="text"
                onChange={changeHandler}
                value={FormData.userName}
                placeholder="username"
                className="w-full px-5 py-3 rounded-xl bg-[#1e1b4b20] text-white placeholder-[#a5b4fc80] border border-[#3b3b6d] focus:outline-none focus:border-[#818cf8] focus:ring-2 focus:ring-[#6366f130] transition-all"
              />
              <svg className="absolute right-3 top-3.5 h-5 w-5 text-[#a5b4fc80]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="password" className="block text-sm font-medium text-[#e0e0ff]">
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                name="password"
                type={PasswordVisibility ? "text" : "password"}
                onChange={changeHandler}
                value={FormData.password}
                placeholder="••••••••"
                className="w-full px-5 py-3 rounded-xl bg-[#1e1b4b20] text-white placeholder-[#a5b4fc80] border border-[#3b3b6d] focus:outline-none focus:border-[#818cf8] focus:ring-2 focus:ring-[#6366f130] transition-all"
              />
              <button 
                type="button" 
                onClick={changePasswordVisibility}
                className="absolute right-3 top-3.5 text-[#a5b4fc80] hover:text-[#c7d2fe] transition-colors"
              >
                {PasswordVisibility  ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-[#818cf8] focus:ring-[#818cf8] border-[#3b3b6d] rounded bg-[#1e1b4b20]"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-[#a5b4fc]">
                Remember me
              </label>
            </div>
            <Link to="/forgot-password" className="text-sm text-[#a5b4fc] hover:text-[#c7d2fe] hover:underline transition-colors">
              Forgot password?
            </Link>
          </div>

          <button
            type="submit"
            className="w-full py-3.5 bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] text-white font-bold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-[#6366f130] transform hover:-translate-y-0.5 active:scale-95"
          >
            Sign In
          </button>

          <div className="text-center text-sm text-[#a5b4fc]">
            New user?{' '}
            <Link to="/signup" className="font-medium text-white hover:underline">
              Create account
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;