// Aici se folosește axios, instalat la începutul proiectului
import axios from 'axios';

// URL-ul backend-ului tău real
const API_URL = 'http://localhost:8080/api'; 

export const loginUser = async (credentials) => {
  console.log("Simulare Login către Backend...");
  // return axios.post(`${API_URL}/auth/login`, credentials);
};

export const fetchPosts = async () => {
  console.log("Simulare Fetch Posts de la Content Service...");
  // return axios.get(`${API_URL}/posts`);
};

export const sendNewPost = async (data) => {
  console.log("Simulare Postare nouă către Content Service...");
  // return axios.post(`${API_URL}/posts`, data);
};