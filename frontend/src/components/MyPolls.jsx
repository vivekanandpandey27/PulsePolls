import React from 'react';
import { Polls_mine } from './Polls_mine';
import { useSelector } from 'react-redux';
import { usePolls } from '../hooks/usePolls';

export const MyPolls = () => {
  const { data = [] } = usePolls();
  const authUser = useSelector((state) => state.user.authUser);

  const filtered_data = data.filter((option) => option.creator?._id === authUser?.id);

  return filtered_data.length === 0 ? (
    <div className='bg-violet-900 h-screen text-white flex justify-center items-start pt-10 text-4xl font-bold shadow-xl shadow-red-800 rounded-lg '>Create Poll first..!</div>
  ) : (
    <div className='min-h-screen p-4 sm:p-6 lg:p-8 bg-slate-950'>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6'>
        {filtered_data.map((option, index) => (
          <Polls_mine key={index} data={option} />
        ))}
      </div>
    </div>
  );
};

