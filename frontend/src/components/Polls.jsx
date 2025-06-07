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
  
  return (
    <div className=' bg-purple-700 border border-neutral-900 rounded-2xl w-80 p-2 backdrop-blur-sm shadow-lg transition-all  hover:shadow-slate-500 max-h-60'>
                {/* LOGO AND TITLE */}
                <div className='flex space-x-3'>
                     <div>
                         <img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEzXk-Es5uSaQxsJbB5PnWfS_3mGLJLpHO-g&s" className='h-20 rounded-xl'></img>
                     </div>
                     <div className='font-bold from-neutral-900'>
                          <div>{title}</div>
                     </div>
                </div>

      {/* OPTIONS */}
      <div className='space-y-2'>
        {choices.map((option, index) => (
          <div key={index} className='bg-neutral-500 border border-stone-500 rounded-lg px-3 py-2 hover:bg-neutral-600 transition-colors'>

            {/* INDIVIDUAL OPTIONS  */}
            <div className='flex justify-between items-center' onClick= {()=> {ClickHandler(data._id,index)}}>
              <span className='truncate pr-2'>{option.text}</span>
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