import React from 'react';
import { Poll } from './Polls';
import { useSelector } from 'react-redux';
import { usePolls } from '../hooks/usePolls';

export const PollBox = () => {
  const { data = [], refetch } = usePolls();
  const currentCategory = useSelector((state)=> state.poll.selectedCategory);
  
  const filteredData = currentCategory === "all" ? data : data.filter(option => option.tags === currentCategory);
  console.log(filteredData);

  const final_filtered_Data = filteredData?.filter(option => {
    return new Date(option.expiresAt).getTime() > Date.now();
  });

  return (
 
     <div className='min-h-screen p-4 sm:p-6 lg:p-8'>
   <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 gap-4 md:gap-6'>
     {final_filtered_Data && final_filtered_Data.map((option, index) => (
       <Poll key={index} data={option} refetch={refetch} showCreator = {true}/>
     ))}
   </div>
 </div>
   );
 };