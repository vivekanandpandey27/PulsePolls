import React from 'react';
import axios from 'axios';
import { useState } from 'react';

const REACT_BASE_URL = import.meta.env.VITE_REACT_APP_BACKEND_BASE_URL;


export const Poll = ({ data,refetch }) => {

  async function ClickHandler(id,index) {

    try{
      const VoteData = {
        Poll_ID : id,
        Vote_ID : data.options[index]._id,
      }

      const res = await axios.post(
              `${REACT_BASE_URL}/api/v1/polls/vote`,
              VoteData,
              {
                headers: { 'Content-Type': 'application/json' },
                withCredentials: true,
              }
            );
       
       refetch(state => ((state +1) % 2));     
    } catch(error) {
      console.log(error);
    }
  }



  const title = data.title;
  const choices = data.options;
  const imageUrl = data.imageUrl
  const [selectedOption, setSelectedOption] = useState(null);
  
  return (
    <div className=' bg-slate-900 border border-neutral-900 rounded-2xl w-80 p-2 backdrop-blur-sm shadow-lg transition-all  hover:shadow-slate-500 max-h-80'>
                {/* LOGO AND TITLE */}
                <div className='flex space-x-3 mb-5'>
                     <div className="w-[80px] h-[80px] flex-shrink-0 overflow-hidden rounded-full">
                         <img src = {imageUrl} className='w-full h-full object-cover'></img>
                     </div>
                     <div className='font-bold from-neutral-900'>
                          <div>{title}</div>
                     </div>
                </div>

      {/* OPTIONS */}
      <div className='space-y-2 max-h-48 overflow-y-auto scroll-smooth custom-scrollbar'>
    {choices.map((option, index) => (
        <div 
            key={index} 
            className={`border rounded-lg px-3 py-2 transition-colors 
                ${selectedOption === index 
                    ? 'bg-blue-600 border-blue-400' // Selected style
                    : 'bg-slate-950 border-stone-50 hover:bg-neutral-600' // Default style
                }`
            }
        >
            {/* INDIVIDUAL OPTIONS */}
            <div 
                className='flex justify-between items-center hover:shadow-2xl shadow-' 
                onClick={() => {
                    setSelectedOption(index); // Set the selected option
                    ClickHandler(data._id, index);
                }}
            >
                <span className='truncate pr-2 text-white font-bold'>{option.text}</span>
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