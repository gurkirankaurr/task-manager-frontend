import axios from 'axios';
import { Task } from '../types';

const API_URL = 'http://localhost:5000/api';

export const getTasks = async (): Promise<Task[]> => {
  const response = await axios.get(`${API_URL}/tasks`);
  return response.data;
};

export const createTask = async (task: Partial<Task>): Promise<Task> => {
  const response = await axios.post(`${API_URL}/tasks`, task);
  return response.data;
};

export const updateTask = async (id: string, updates: Partial<Task>): Promise<Task> => {
  const response = await axios.put(`${API_URL}/tasks/${id}`, updates);
  return response.data;
};

export const deleteTask = async (id: string): Promise<void> => {
  await axios.delete(`${API_URL}/tasks/${id}`);
};

export const fetchStreamingData = async (): Promise<any> => {
  const response = await axios.get(`${API_URL}/streaming`);
  return response.data;
};
