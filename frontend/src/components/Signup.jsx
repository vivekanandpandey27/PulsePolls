import React from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';

export const Signup = () => {


    const [FormData,SetformData] = useState({fullName : "",userName : "",password : "",confirmPassword : "",gender:"Male" });
    const [PasswordVisibility, setPasswordVisibility] = useState(false);
    const navigate=useNavigate();
   
  const REACT_BASE_URL = import.meta.env.VITE_REACT_APP_BACKEND_BASE_URL;

function changeHandler(event)
    {
      const {name,type,value,isChecked} = event.target;

      SetformData(prevFormData=>{
        return {
          ...prevFormData,
          [name] : (type==="checkbox") ? isChecked : value,
        }
      })
    }
    const changePasswordVisibility = () => {
    setPasswordVisibility(!PasswordVisibility);
  };


async function onSubmitHandler(event){
    
    event.preventDefault();
    const normalizedGender = FormData.gender.toLowerCase();
    
    const formDataToSend = {
      ...FormData,
      gender: normalizedGender,
    };
try{
      const res= await axios.post(`${REACT_BASE_URL}/api/v1/user/register`,formDataToSend,{
      headers:{
        'Content-Type':'application/json'
      },
      withCredentials:true
    });
    if(res.data.success){
      navigate('/login');
      toast.success(res.data.message);
      SetformData({fullName : "",userName : "",password : "",confirmPassword : "",gender:"" });
    }
    }
    catch(error){
    toast.error(error.response.data.message);
    console.log(error);
  }
}
return (
<div className="min-h-screen  overflow-hidden bg-gradient-to-br from-[#0a0a12] via-[#1a1a2e] to-[#16213e] flex items-center justify-center px-4">
  <div className="backdrop-blur-md bg-[#ffffff08] border border-[#ffffff15] rounded-[70px] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.6)] p-12 w-full max-w-md transition-all duration-300 hover:shadow-[0_35px_60px_-15px_rgba(109,40,217,0.3)]">
    <div className="text-center mb-10">
      <div className="mx-auto w-20 h-20 rounded-full bg-gradient-to-br from-[#6366f1] to-[#8b5cf6] flex items-center justify-center mb-4 shadow-lg shadow-[#6366f130]">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
        </svg>
      </div>
      <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#818cf8] to-[#c4b5fd] mb-2 p-2">
        Sign Up
      </h2>
      <p className="text-[#ffffffaa] text-sm">Create your account</p>
    </div>

    <form className="space-y-6">
      <div className="space-y-2">
        <label htmlFor="fullName" className="block text-sm font-medium text-[#e0e0ff]">
          Full Name
        </label>
        <div className="relative">
          <input
            id="fullName"
            name="fullName"
            type="text"
            onChange={changeHandler}
            value={FormData.fullName}
            placeholder="Enter full name"
            className="w-full px-5 py-3 rounded-xl bg-[#1e1b4b20] text-white placeholder-[#a5b4fc80] border border-[#3b3b6d] focus:outline-none focus:border-[#818cf8] focus:ring-2 focus:ring-[#6366f130] transition-all"
          />
          <svg className="absolute right-3 top-3.5 h-5 w-5 text-[#a5b4fc80]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        </div>
      </div>

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
            placeholder="Enter username"
            className="w-full px-5 py-3 rounded-xl bg-[#1e1b4b20] text-white placeholder-[#a5b4fc80] border border-[#3b3b6d] focus:outline-none focus:border-[#818cf8] focus:ring-2 focus:ring-[#6366f130] transition-all"
          />
          <svg className="absolute right-3 top-3.5 h-5 w-5 text-[#a5b4fc80]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
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
            {PasswordVisibility ? (
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

      <div className="space-y-2">
        <label htmlFor="confirmPassword" className="block text-sm font-medium text-[#e0e0ff]">
          Confirm Password
        </label>
        <div className="relative">
          <input
            id="confirmPassword"
            name="confirmPassword"
            type={PasswordVisibility ? "text" : "password"}
            onChange={changeHandler}
            value={FormData.confirmPassword}
            placeholder="••••••••"
            className="w-full px-5 py-3 rounded-xl bg-[#1e1b4b20] text-white placeholder-[#a5b4fc80] border border-[#3b3b6d] focus:outline-none focus:border-[#818cf8] focus:ring-2 focus:ring-[#6366f130] transition-all"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="gender" className="block text-sm font-medium text-[#e0e0ff]">
          Gender
        </label>
        <select
          id="gender"
          name="gender"
          onChange={changeHandler}
          value={FormData.gender}
          className="w-full px-5 py-3 rounded-xl bg-[#1e1b4b20] text-white border border-[#3b3b6d] focus:outline-none focus:border-[#818cf8] focus:ring-2 focus:ring-[#6366f130] transition-all"
        >
          <option value="Male" className="bg-[#1e1b4b]">Male</option>
          <option value="Female" className="bg-[#1e1b4b]">Female</option>
        </select>
      </div>

      <button
        type="submit"
        onClick={onSubmitHandler}
        className="w-full py-3.5 bg-gradient-to-r from-[#5952e1] to-[#5022f5] text-white font-bold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-[#6366f130] transform hover:-translate-y-0.5 active:scale-95"
      >
        Sign Up
      </button>

      <div className="text-center text-sm text-[#a5b4fc]">
        Already have an account?{' '}
        <Link to="/login" className="font-medium text-white hover:underline">
          Log in
        </Link>
      </div>
    </form>
  </div>
</div>
  )
}

export default Signup;