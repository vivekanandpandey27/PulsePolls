import React, { useEffect, useState } from 'react';
import { Poll } from './Polls';
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
    <div className='min-h-screen grid grid-cols-4 p-10 gap-3 bg-purple-900 text-white'>
      {data && data.filter((option) => option.creator === authUser?.id).map((option, index) => (
      <Poll key={index} data={option} />
    ))}

    </div>
  );
};
