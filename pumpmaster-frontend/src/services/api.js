import axios from 'axios';

const API_URL = 'http://localhost:5284/api';

export const login = (username, password) => {
    return axios.post(`${API_URL}/auth/login`, { username, password });
};

export const getPumps = () => {
    return axios.get(`${API_URL}/pumps`);
};

export const updatePump = (id, data) => {
    return axios.put(`${API_URL}/pumps/${id}`, data);
};