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

  const filtered_data = data.filter((option) => option.creator?._id === authUser?.id);
  console.log("FL DATA : ",filtered_data);

  useEffect(() => {
    fetchPollData(changedata); 
  },[]);

  return filtered_data.length === 0 ? (
    <div className='bg-violet-900 h-screen text-white flex justify-center items-start pt-10 text-4xl font-bold shadow-xl shadow-red-800 rounded-lg '>Create Poll first..!</div>
  ) : (
    <div className='min-h-screen p-4 sm:p-6 lg:p-8 bg-purple-900'>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6'>
        {filtered_data.map((option, index) => (
          <Polls_mine key={index} data={option} />
        ))}
      </div>
    </div>
  );
};

