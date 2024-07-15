import axios from 'axios';

const API_URL = 'http://localhost:8080';

const encodeBase64 = (email: string, password: string) => {
  return btoa(`${email}:${password}`);
};

export const login = async (email: string, password: string) => {
  try {
    const encodedCredentials = encodeBase64(email, password);
    const response = await axios.post(`${API_URL}/login`, {}, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Basic ${encodedCredentials}`
      }
    });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      throw new Error(error.response.data.message || 'Login failed');
    }
    throw error;
  }
};

const getAuthHeaders = () => {
  const token = localStorage.getItem('token');
  return { Authorization: `Bearer ${token}` };
};

export const getUsers = async () => {
  const response = await axios.get(`${API_URL}/users`, {
    headers: getAuthHeaders()
  });
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
      'Content-Type': 'application/json',
      ...getAuthHeaders()
    }
  });
  return response.data;
};

export const deleteUser = async (id: string) => {
  const response = await axios.delete(`${API_URL}/user/${id}`, {
    headers: getAuthHeaders()
  });
  return response.data;
};
