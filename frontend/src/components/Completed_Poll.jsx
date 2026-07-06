import React from 'react';
import { Poll } from './Polls';
import { useSelector } from 'react-redux';
import { usePolls } from '../hooks/usePolls';

export const Completed_Poll = () => {
  const { data = [], refetch } = usePolls();
  const currentCategory = useSelector((state)=> state.poll.selectedCategory);
  
  const filteredData = currentCategory === "all" ? data : data.filter(option => option.tags === currentCategory);
  console.log(filteredData);
    
  const final_filtered_Data = filteredData?.filter(option => {
    return new Date(option.expiresAt).getTime() < Date.now();
  });

  return (
     final_filtered_Data.length === 0 ? 
     (<div className='bg-slate-950 h-screen text-white flex justify-center items-start pt-10 text-4xl font-bold shadow-xl shadow-red-800 rounded-lg '>No Poll Completed Yet..!</div>) 
     : (<div className='min-h-screen p-4 sm:p-6 lg:p-8 bg-slate-950'>

    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 md:gap-6'>

     {final_filtered_Data && final_filtered_Data.map((option, index) => (
       <Poll key={index} data={option} refetch={refetch} />
     ))}

   </div>
 </div>)
     
 
     
   );
 };