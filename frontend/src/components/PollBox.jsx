import React, { useEffect, useState } from 'react';
import { Poll } from './Polls';
import axios from 'axios';
import { useSelector } from 'react-redux';

const REACT_BASE_URL = import.meta.env.VITE_REACT_APP_BACKEND_BASE_URL;



 async function fetchPollData(setData) {
   try {
     const res = await axios.get(
       `${REACT_BASE_URL}/api/v1/polls/allpost`,
       {
         headers: { 'Content-Type': 'application/json' },
         withCredentials: true,
       }
     );
     setData(res.data); 
     console.log("ALL POLL DATA : ", res.data);
   } catch (error) {
     console.error("Error fetching poll data:", error);
   }
 }

 export const PollBox = () => {
   
   const [data, changedata] = useState([]);
   const [reload,setreload] = useState(0);
   const currentCategory = useSelector((state)=> state.poll.selectedCategory);
   
   const filteredData = currentCategory === "all" ? data : data.filter(option => option.tags === currentCategory);
   console.log(filteredData);
 
   const final_filtered_Data = filteredData?.filter(option => {
   return new Date(option.expiresAt).getTime() > Date.now();
 });
 console.log("godna : ",final_filtered_Data);
 
 //   console.log("godna : ",filteredData.map(option => ({
 //   id: option._id,
 //   expiresAt: option.expiresAt
 // })));
 
 
   // console.log(final_filtered_Data);
 
   // console.log(currentCategory);
   // console.log("FD : ",filteredData);
   //console.log("cur : ", currentCategory);
  
   useEffect(() => {
     fetchPollData(changedata); 
   },[reload]);
 
 
   return (
     
     
 
     <div className='min-h-screen p-4 sm:p-6 lg:p-8'>
   <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 md:gap-6'>
     {final_filtered_Data && final_filtered_Data.map((option, index) => (
       <Poll key={index} data={option} refetch={setreload} showCreator = {true}/>
     ))}
   </div>
 </div>
   );
 };