import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import toast from 'react-hot-toast';

const REACT_BASE_URL = import.meta.env.VITE_REACT_APP_BACKEND_BASE_URL;

export const useVotePoll = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (voteData) => {
      const res = await axios.post(`${REACT_BASE_URL}/api/v1/polls/vote`, voteData, {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
      });
      return res.data;
    },
    onSuccess: () => {
      // Invalidate the 'polls' query so it refetches the latest data automatically
      queryClient.invalidateQueries({ queryKey: ['polls'] });
    },
    onError: (error) => {
      console.error(error);
      toast.error('Failed to register vote.');
    }
  });
};

export const useDeletePoll = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (deleteData) => {
      const res = await axios.post(`${REACT_BASE_URL}/api/v1/polls/delete`, deleteData, {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
      });
      return res.data;
    },
    onSuccess: () => {
      toast.success('Poll Deleted Successfully !');
      queryClient.invalidateQueries({ queryKey: ['polls'] });
    },
    onError: () => {
      console.log('Error While Deleting Poll');
      toast.error('Failed to delete poll.');
    }
  });
};

export const useCreatePoll = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (pollData) => {
      const res = await axios.post(`${REACT_BASE_URL}/api/v1/polls/post`, pollData, {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
      });
      return res.data;
    },
    onSuccess: () => {
      toast.success('Poll created successfully!');
      queryClient.invalidateQueries({ queryKey: ['polls'] });
    },
    onError: (error) => {
      console.error('Poll creation error:', error);
      toast.error(error?.response?.data?.message || 'Failed to create poll');
    }
  });
};
