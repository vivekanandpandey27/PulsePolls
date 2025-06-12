import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Poll } from './Polls';

const REACT_BASE_URL = import.meta.env.VITE_REACT_APP_BACKEND_BASE_URL;

export const OthersPolls = ({ id }) => {
  console.log("ID AAYA HAI : ",id);
  const [allrandompoll, setAllRandomPoll] = useState([]);
  const [reload, setReload] = useState(0);

  const fetchPollData = async () => {
    try {
      const res = await axios.get(`${REACT_BASE_URL}/api/v1/polls/allpost`, {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
      });
      setAllRandomPoll(res.data);
      console.log("fetched from backed : ",res.data);
    } catch (error) {
      console.error("Error fetching poll data:", error);
    }
  };

  useEffect(() => {
    fetchPollData();
  }, []);

  useEffect(() => {
    fetchPollData();
  }, [reload]);

  const filteredPoll = allrandompoll.filter((poll) => poll?.creator?._id === id);

  console.log("finlt: ",filteredPoll);
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6'>
      {filteredPoll.map((option, index) => (
        <Poll
          showCreator = {false}
          key={option._id || index}
          data={option}
          refetch={setReload}
          color="slate-950"
          className="bg-"
        />
      ))}
    </div>
  );
};
