import React from 'react';
import { Poll } from './Polls';
import { usePolls } from '../hooks/usePolls';

export const OthersPolls = ({ id }) => {
  const { data: allrandompoll = [], refetch } = usePolls();

  const filteredPoll = allrandompoll.filter((poll) => poll?.creator?._id === id);
  console.log(allrandompoll);

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 md:gap-6'>
      {filteredPoll.map((option, index) => (
        <Poll
          showCreator = {false}
          key={option._id || index}
          data={option}
          refetch={refetch}
          color="slate-950"
        />
      ))}
    </div>
  );
};
