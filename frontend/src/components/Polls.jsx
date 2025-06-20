import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { SearchResultProfile } from './searchResultProfile';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const REACT_BASE_URL = import.meta.env.VITE_REACT_APP_BACKEND_BASE_URL;

export const Poll = ({ data, refetch ,color,showCreator}) => {


  const navigate = useNavigate();

 

  async function ClickHandler(id, index) {
    try {
      const VoteData = {
        Poll_ID: id,
        Vote_ID: data.options[index]._id,
      };

      const res = await axios.post(
        `${REACT_BASE_URL}/api/v1/polls/vote`,
        VoteData,
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true,
        }
      );
      
      refetch(state => ((state + 1) % 2));
    } catch (error) {
      console.log(error);
    }
  }

  const title = data.title;
  const choices = data.options;
  const imageUrl = data.imageUrl;
  const expiry = data.expiresAt;
  const isExpired = new Date(expiry).getTime() < Date.now()
  const creator = data.creator;


  const [selectedOption, setSelectedOption] = useState(null);

  const handleProfileClick = (people) => {
    navigate("/OthersProfile", { state: { userData: people } });
  }

  const showtoast = () => {
    toast.error("Poll is Expired !");
  }

  const BlueTick = () => (
    <svg className="inline ml-1" width="15" height="15" viewBox="0 0 24 24" fill="none">
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
    <div className = {` bg-${color} border border-gray-700 rounded-2xl w-full min-w-[10rem] 2xl:min-w-[30rem] p-4 backdrop-blur-sm shadow-lg transition-all hover:shadow-slate-500 flex flex-col h-full `}  >
      {/* Poll Admin */}
       <div  onClick={() => handleProfileClick(creator)}  className= { ` ${showCreator ?  null : "hidden" } px-4 py-3  cursor-pointer transition-colors duration-150 flex items-center  border border-gray-700 rounded-xl mb-3 bg-slate-900`}>
                      
                      <div className="w-8 h-8 scale-150 mr-1 rounded-full bg-blue-100 overflow-hidden  flex items-center justify-center text-blue-600 mr-3">
                        <img src = {creator.profilePhoto} className='scale-125'/>
                      </div>

                      <div>
                        <p className="font-medium text-white text-xl">{creator.fullName}<BlueTick /></p>
                        {creator.fullName && (<p className="text-xs text-white">{"@" + creator.userName} </p>)}
                      </div>

      </div>

      {/* LOGO AND TITLE */}
      <div className='flex space-x-3 mb-4'>
        <div className="w-16 h-16 sm:w-20 sm:h-20 flex-shrink-0 overflow-hidden rounded-full">
          <img src={imageUrl} alt="Poll" className='w-full h-full object-cover' />
        </div>
        <div className='font-bold text-white flex-1 min-w-0'>
          <div className='text-sm  line-clamp-6 xl:text-base'>{title}</div>
        </div>
        <div className={`flex border border-${isExpired ? "bg-white" : "bg-green-400"} h-9 w- rounded-md border-2 pr-1`}>
          {isExpired ? (<div className='px-2 scale-150 font-extrabold text-white'> .</div>) : (<img className='h-8' src = "https://lh3.googleusercontent.com/DF46zaVkqhFbpBdc6mXIk4jJlZW_pEQrv2fXHYJj1Yff9ev-Fc71BaxOjZeeBaCVLzk=w400"/>) } 
          <div className= {`pt-1 pr-1 text-${isExpired ? "white" : "green-400"}`}>{isExpired ? "Completed" : "Live"}</div>
        </div>
        
      </div>

      {/* OPTIONS */}
      <div className='space-y-2 flex-1 overflow-y-auto custom-scrollbar'>
        {choices.map((option, index) => (
          <div 
            key={index} 
            className={`border rounded-lg px-3 py-2 transition-colors cursor-pointer
              ${selectedOption === index 
                ? 'bg-blue-600 border-blue-400' 
                : 'bg-slate-950 border-stone-50 hover:bg-neutral-600'
              }`
            }
            onClick={ isExpired ? (showtoast) : (() => {
              setSelectedOption(index);
              ClickHandler(data._id, index);
            })}
          >
            <div className='flex justify-between items-center'>
              <span className='truncate pr-2 text-white font-medium text-sm sm:text-base'>
                {option.text}
              </span>
              <span className='font-bold bg-neutral-700 text-white rounded-full px-2 py-1 text-xs min-w-[24px] text-center'>
                {option.votes}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};