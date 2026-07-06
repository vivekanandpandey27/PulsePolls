import React from 'react';
import { useState } from 'react';
import { MdDelete } from "react-icons/md";
import toast from 'react-hot-toast';
import { useVotePoll, useDeletePoll } from '../hooks/usePollMutations';

export const Polls_mine = ({ data, refetch }) => {
  const { mutate: votePoll } = useVotePoll();
  const { mutate: deletePollMutation } = useDeletePoll();

  function ClickHandler(id, index) {
    votePoll({
      Poll_ID: id,
      Vote_ID: data.options[index]._id,
    });
  }

  function deletePoll(poll_id){
    deletePollMutation({ id: poll_id });
  }

  const title = data.title;
  const choices = data.options;
  const imageUrl = data.imageUrl;
  const [selectedOption, setSelectedOption] = useState(null);
  
  return (
    <div className='bg-slate-900 border border-neutral-900 rounded-2xl w-full p-4 backdrop-blur-sm shadow-lg transition-all hover:shadow-slate-500 flex flex-col h-full'>
      {/* LOGO AND TITLE */}
      <div className='flex space-x-3 mb-4'>
        <div className="w-16 h-16 sm:w-20 sm:h-20 flex-shrink-0 overflow-hidden rounded-full">
          <img src={imageUrl} alt="Poll" className='w-full h-full object-cover' />
        </div>
        <div className='font-bold text-white flex-1 min-w-0'>
          <div className='text-sm sm:text-base line-clamp-2'>{title}</div>
        </div>
        <div>
            <MdDelete onClick = {()=> {deletePoll(data._id)}} className='text-red-600 scale-150 rounded-full shadow shadow-2xl shadow-neutral-400 cursor-pointer'/>
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
            onClick={() => {
              setSelectedOption(index);
              ClickHandler(data._id, index);
            }}
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