import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-hot-toast';

export const CreatePoll = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ 
    title: "", 
    tags: "", 
    imageUrl: "" 
  });
  const [isLoading, setIsLoading] = useState(false);

  const REACT_BASE_URL = import.meta.env.VITE_REACT_APP_BACKEND_BASE_URL || 'http://localhost:8080';

  const changeHandler = (event) => {
    const { name, value } = event.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  async function onSubmitHandler(event) {
    event.preventDefault();
    setIsLoading(true);

    try {
      const res = await axios.post(
        `${REACT_BASE_URL}/api/v1/polls/post`,
        formData,
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true,
        }
      );

      toast.success("Poll created successfully!");
      console.log("Poll creation response:", res.data);
      setFormData({ title: "", tags: "", imageUrl: "" });
      navigate('/'); // Redirect after successful creation
    } catch (error) {
      console.error("Poll creation error:", error);
      toast.error(error?.response?.data?.message || "Failed to create poll");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0a12] via-[#1a1a2e] to-[#16213e] flex items-center justify-center px-4">
      <div className="backdrop-blur-md bg-[#ffffff08] border border-[#ffffff15] rounded-[70px] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.6)] p-12 w-full max-w-md transition-all duration-300 hover:shadow-[0_35px_60px_-15px_rgba(109,40,217,0.3)]">
        <div className="text-center mb-10">
          <div className="mx-auto w-20 h-20 rounded-full bg-gradient-to-br from-[#6366f1] to-[#8b5cf6] flex items-center justify-center mb-4 shadow-lg shadow-[#6366f130]">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#818cf8] to-[#c4b5fd] mb-2 p-2">
            Create New Poll
          </h2>
          <p className="text-[#ffffffaa] text-sm">Fill in the details for your poll</p>
        </div>

        <form onSubmit={onSubmitHandler} className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="title" className="block text-sm font-medium text-[#e0e0ff]">
              Poll Title
            </label>
            <div className="relative">
              <input
                id="title"
                name="title"
                type="text"
                onChange={changeHandler}
                value={formData.title}
                placeholder="Enter poll question"
                className="w-full px-5 py-3 rounded-xl bg-[#1e1b4b20] text-white placeholder-[#a5b4fc80] border border-[#3b3b6d] focus:outline-none focus:border-[#818cf8] focus:ring-2 focus:ring-[#6366f130] transition-all"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="tags" className="block text-sm font-medium text-[#e0e0ff]">
              Tags
            </label>
            <div className="relative">
              <input
                id="tags"
                name="tags"
                type="text"
                onChange={changeHandler}
                value={formData.tags}
                placeholder="Enter tags (comma separated)"
                className="w-full px-5 py-3 rounded-xl bg-[#1e1b4b20] text-white placeholder-[#a5b4fc80] border border-[#3b3b6d] focus:outline-none focus:border-[#818cf8] focus:ring-2 focus:ring-[#6366f130] transition-all"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="imageUrl" className="block text-sm font-medium text-[#e0e0ff]">
              Image URL
            </label>
            <div className="relative">
              <input
                id="imageUrl"
                name="imageUrl"
                type="text"
                onChange={changeHandler}
                value={formData.imageUrl}
                placeholder="Enter image URL"
                className="w-full px-5 py-3 rounded-xl bg-[#1e1b4b20] text-white placeholder-[#a5b4fc80] border border-[#3b3b6d] focus:outline-none focus:border-[#818cf8] focus:ring-2 focus:ring-[#6366f130] transition-all"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className={`w-full py-3.5 bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] text-white font-bold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-[#6366f130] transform hover:-translate-y-0.5 active:scale-95 ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
          >
            {isLoading ? 'Creating...' : 'Create Poll'}
          </button>
        </form>
      </div>
    </div>
  );
};