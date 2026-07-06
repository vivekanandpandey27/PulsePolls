import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const REACT_BASE_URL = import.meta.env.VITE_REACT_APP_BACKEND_BASE_URL;

// The fetcher function
const fetchPolls = async () => {
  const res = await axios.get(`${REACT_BASE_URL}/api/v1/polls/allpost`, {
    headers: { 'Content-Type': 'application/json' },
    withCredentials: true,
  });
  return res.data;
};

// The custom hook
export const usePolls = () => {
  return useQuery({
    queryKey: ['polls'],
    queryFn: fetchPolls,
    // Optional: configuring staleTime or gcTime could be done here
    // staleTime: 1000 * 60 * 5, // Data is fresh for 5 minutes
  });
};
