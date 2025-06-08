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
    console.log("Response:", res.data);
  } catch (error) {
    console.error("Error fetching poll data:", error);
  }
}

export const PollBox = () => {
  const [data, changedata] = useState([]);
  const [reload,setreload] = useState(0);
  const currentCategory = useSelector((state)=> state.poll.selectedCategory);
  
  const filteredData = currentCategory === "all" ? data : data.filter(option => option.tags === currentCategory);
  // console.log(currentCategory);
  // console.log("FD : ",filteredData);
  //console.log("cur : ", currentCategory);
 
  useEffect(() => {
    fetchPollData(changedata); 
  },[reload]);


  return (
    
    

    <div className='min-h-screen grid grid-cols-4 p-10 gap-3 '>
      {filteredData && filteredData.map((option, index) => (
          <Poll key={index} data={option} refetch={setreload} />
      ))}

    </div>
  );
};
