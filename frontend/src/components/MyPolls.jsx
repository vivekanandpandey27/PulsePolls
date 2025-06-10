import React, { useEffect, useState } from 'react';
import { Polls_mine } from './Polls_mine';
import axios from 'axios';
import { useSelector , useDispatch } from 'react-redux';


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
    console.log("Response:", res.data);
  } catch (error) {
    console.error("Error fetching poll data:", error);
  }
}

export const MyPolls = () => {
  const [data, changedata] = useState([]);

  const authUser = useSelector((state) => state.user.authUser);
  //const authUser = useSelector((state) => state.user.authUser);
  console.log(authUser.id)

  useEffect(() => {
    fetchPollData(changedata); 
  },[]);

  return (

    
     <div className='min-h-screen p-4 sm:p-6 lg:p-8 bg-purple-900'>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6'>
             {data && data.filter((option) => option.creator === authUser?.id).map((option, index) => (
      <Polls_mine key={index} data={option} />
             ))}
         </div>
      </div>

  );
};


