import { useMutation, useQueryClient, useQuery } from '@tanstack/react-query';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { setAuthUser } from '../redux/userSlice';

const REACT_BASE_URL = import.meta.env.VITE_REACT_APP_BACKEND_BASE_URL;

export const useLogin = () => {
  const dispatch = useDispatch();
  return useMutation({
    mutationFn: async (credentials) => {
      const res = await axios.post(`${REACT_BASE_URL}/api/v1/user/login`, credentials, {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
      });
      return res.data;
    },
    onSuccess: (data) => {
      dispatch(setAuthUser(data.user));
    },
    onError: (error) => {
      console.log(error);
      toast.error(error.response?.data?.message || 'Login failed');
    }
  });
};

export const useRegister = () => {
  return useMutation({
    mutationFn: async (userData) => {
      const res = await axios.post(`${REACT_BASE_URL}/api/v1/user/register`, userData, {
        headers: { 'Content-Type': 'multipart/form-data' },
        withCredentials: true,
      });
      return res.data;
    },
    onSuccess: (data) => {
      toast.success(data.message);
    },
    onError: (error) => {
      console.log(error);
      toast.error(error.response?.data?.message || 'Registration failed');
    }
  });
};

export const useEditProfile = () => {
  return useMutation({
    mutationFn: async (profileData) => {
      const res = await axios.post(`${REACT_BASE_URL}/api/v1/user/Editprofile`, profileData, {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
      });
      return res.data;
    },
    onSuccess: (data) => {
      toast.success('Profile updated successfully');
    },
    onError: (error) => {
      console.log(error);
      toast.error(error.response?.data?.message || 'Failed to update profile');
    }
  });
};

export const useLogout = () => {
  const dispatch = useDispatch();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async () => {
      const res = await axios.get(`${REACT_BASE_URL}/api/v1/user/logout`, {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
      });
      return res.data;
    },
    onSuccess: () => {
      dispatch(setAuthUser(null));
      queryClient.clear();
      toast.success('LogOut Successfully !');
    },
    onError: (error) => {
      console.log(error);
      toast.error('Logout failed');
    }
  });
};
