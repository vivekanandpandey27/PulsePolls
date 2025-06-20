import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-hot-toast';

 const CreatePoll = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({ 
    title: "", 
    tags: "", 
    imageUrl: "",
    options: [{ text: "", votes: 0 }],
    expiresAt: null
  });


  const expiryOptions = [
  { label: '5 min', value: 5 * 60 * 1000 },
  { label: '10 min', value: 10 * 60 * 1000 },
  { label: '1 hour', value: 1 * 60 * 60 * 1000 },
  { label: '5 hours', value: 5 * 60 * 60 * 1000 },
  { label: '10 hours', value: 10 * 60 * 60 * 1000 },
  { label: '1 day', value: 1 * 24 * 60 * 60 * 1000 },
  { label: '3 days', value: 3 * 24 * 60 * 60 * 1000 },
  { label: '1 week', value: 7 * 24 * 60 * 60 * 1000 },
  { label: '1 month', value: 30 * 24 * 60 * 60 * 1000 },   
  { label: '6 months', value: 6 * 30 * 24 * 60 * 60 * 1000 },
  { label: '12 months', value: 12 * 30 * 24 * 60 * 60 * 1000 } , 
  { label: '4 year', value: 4* 12 * 30 * 24 * 60 * 60 * 1000 } 
];


  const [isLoading, setIsLoading] = useState(false);
  const REACT_BASE_URL = import.meta.env.VITE_REACT_APP_BACKEND_BASE_URL || 'http://localhost:8080';

  const changeHandler = (event) => {
    const { name, value } = event.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleOptionChange = (index, event) => {
    const newOptions = [...formData.options];
    newOptions[index].text = event.target.value;
    setFormData(prev => ({
      ...prev,
      options: newOptions
    }));
  };

  const addOption = () => {
    setFormData(prev => ({
      ...prev,
      options: [...prev.options, { text: "", votes: 0 }]
    }));
  };

  const removeOption = (index) => {

    if (formData.options.length <= 1) {
      toast.error("Poll must have at least one option");
      return;
    }
    
    const newOptions = [...formData.options];
    newOptions.splice(index, 1);

    setFormData(prev => ({
      ...prev,
      options: newOptions
    }));
  };

  async function onSubmitHandler(event) {
    event.preventDefault();
    setIsLoading(true);

    
    const filteredOptions = formData.options.filter(option => option.text.trim() !== "");
    
    if (filteredOptions.length < 2) 
      {
      toast.error("Poll must have at least 2 options");
      setIsLoading(false);
      return;
    }

    try {
      const res = await axios.post(
        `${REACT_BASE_URL}/api/v1/polls/post`,
        {
    ...formData,
    expiresAt: formData.expiresAt ? Date.now() + formData.expiresAt : null,
    options: filteredOptions
  },
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true,
        }
      );

      toast.success("Poll created successfully!");
      console.log("Poll creation response:", res.data);
      setFormData({ 
        title: "", 
        tags: "", 
        imageUrl: "",
        options: [{ text: "", votes: 0 }]
      });
      navigate('/');
    } catch (error) {
      console.error("Poll creation error:", error);
      toast.error(error?.response?.data?.message || "Failed to create poll");
    } finally {
      setIsLoading(false);
    }
  }

  return (
   <div className="min-h-screen bg-gradient-to-br from-[#0a0a12] via-[#1a1a2e] to-[#16213e] flex items-center justify-center p-4 sm:p-6">
  <div className="backdrop-blur-md bg-[#ffffff08] border border-[#ffffff15] rounded-3xl sm:rounded-[70px] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.6)] p-6 sm:p-8 md:p-12 w-full max-w-md transition-all duration-300 hover:shadow-[0_35px_60px_-15px_rgba(109,40,217,0.3)]">
   
    {/*Header of Create Poll Form*/}
    <div className="text-center mb-6 sm:mb-10">
      <div className="mx-auto w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-[#6366f1] to-[#8b5cf6] flex items-center justify-center mb-3 sm:mb-4 shadow-lg shadow-[#6366f130]">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 sm:h-10 sm:w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      </div>
      <h2 className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#818cf8] to-[#c4b5fd] mb-1 sm:mb-2 p-1 sm:p-2">
        Create New Poll
      </h2>
      <p className="text-[#ffffffaa] text-xs sm:text-sm">Fill in the details for your poll</p>
    </div>

    <form onSubmit={onSubmitHandler} className="space-y-4 sm:space-y-6">
      <div className="space-y-2">
        <label htmlFor="title" className="block text-xs sm:text-sm font-medium text-[#e0e0ff]">
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
            className="w-full px-4 py-2 sm:px-5 sm:py-3 rounded-lg sm:rounded-xl bg-[#1e1b4b20] text-white placeholder-[#a5b4fc80] border border-[#3b3b6d] focus:outline-none focus:border-[#818cf8] focus:ring-2 focus:ring-[#6366f130] transition-all text-sm sm:text-base"
            required
          />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="imageUrl" className="block text-xs sm:text-sm font-medium text-[#e0e0ff]">
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
            className="w-full px-4 py-2 sm:px-5 sm:py-3 rounded-lg sm:rounded-xl bg-[#1e1b4b20] text-white placeholder-[#a5b4fc80] border border-[#3b3b6d] focus:outline-none focus:border-[#818cf8] focus:ring-2 focus:ring-[#6366f130] transition-all text-sm sm:text-base"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label className="block text-xs sm:text-sm font-medium text-[#e0e0ff]">
          Poll Options
        </label>
        <div className="space-y-2 sm:space-y-3">
          {formData.options.map((option, index) => (
            <div key={index} className="flex items-center gap-2">
              <input
                type="text"
                value={option.text}
                onChange={(e) => handleOptionChange(index, e)}
                placeholder={`Option ${index + 1}`}
                className="flex-1 px-4 py-2 sm:px-5 sm:py-3 rounded-lg sm:rounded-xl bg-[#1e1b4b20] text-white placeholder-[#a5b4fc80] border border-[#3b3b6d] focus:outline-none focus:border-[#818cf8] focus:ring-2 focus:ring-[#6366f130] transition-all text-sm sm:text-base"
                required
              />
              <button
                type="button"
                onClick={() => removeOption(index)}
                className="p-1.5 sm:p-2 text-red-400 hover:text-red-300 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={addOption}
            className="flex items-center justify-center w-full py-2 text-indigo-300 hover:text-indigo-200 transition-colors text-sm sm:text-base"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            Add Option
          </button>
        </div>
      </div>

      <div className="space-y-2">
        <label className="block text-xs sm:text-sm font-medium text-[#e0e0ff]">
          Tags
        </label>
        
        <div className="flex flex-wrap gap-2">
          {['Technology', 'Politics', 'sports', 'Health', 'News', 'Space', 'Entertainment', 'Education', 'Gaming'].map((tag) => (
            <button
              key={tag}
              type="button"
              onClick={() => {
                setFormData(prev => ({
                  ...prev,
                  tags: tag.toLowerCase(), 
                }));
              }}
              className={`px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
                formData.tags === tag.toLowerCase() 
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/30' 
                  : 'bg-[#1e1b4b20] text-[#e0e0ff] hover:bg-[#2e2b5b50] border border-[#3b3b6d]'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

<div className="space-y-2">
  <label className="block text-sm font-medium text-[#e0e0ff]">
    Expiry Time
  </label>
  <div className="flex flex-wrap gap-2">
    {expiryOptions.map((option) => {
      const optionValue = option.value;
      return (
        <button
          key={optionValue}
          type="button"
          onClick={() => {
            setFormData(prev => ({
              ...prev,
              expiresAt: optionValue // Store the duration directly
            }));
          }}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
            formData.expiresAt === optionValue
              ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/50'
              : 'bg-[#1e1b4b20] text-[#e0e0ff] hover:bg-[#2e2b5b50] border border-[#3b3b6d]'
          } active:scale-95`}
        >
          {option.label}
        </button>
      );
    })}
  </div>
</div>

      <button
        type="submit"
        disabled={isLoading}
        className={`w-full py-3 sm:py-3.5 bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] text-white font-bold rounded-lg sm:rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-[#6366f130] transform hover:-translate-y-0.5 active:scale-95 text-sm sm:text-base ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
      >
        {isLoading ? 'Creating...' : 'Create Poll'}
      </button>
    </form>
  </div>
</div>
  );
};

export default  CreatePoll;