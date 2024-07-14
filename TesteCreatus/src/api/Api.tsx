import axios from 'axios';

const API_URL = 'http://localhost:8080';

export const login = async (email: string, password: string) => {
  const response = await axios.post(`${API_URL}/login`, { email, password }, {
    headers: {
      'Content-Type': 'application/json'
    }
  });
  return response.data;
};

export const getUsers = async () => {
  const response = await axios.get(`${API_URL}/users`);
  return response.data;
};

export const getUserById = async (id: string) => {
  const response = await axios.get(`${API_URL}/user/${id}`);
  return response.data;
};

export const createUser = async (user: any) => {
  const response = await axios.post(`${API_URL}/user`, user, {
    headers: {
      'Content-Type': 'application/json'
    }
  });
  return response.data;
};

export const updateUser = async (id: string, user: any) => {
  const response = await axios.put(`${API_URL}/user/${id}`, user, {
    headers: {
      'Content-Type': 'application/json'
    }
  });
  return response.data;
};

export const deleteUser = async (id: string) => {
  const response = await axios.delete(`${API_URL}/user/${id}`);
  return response.data;
};
