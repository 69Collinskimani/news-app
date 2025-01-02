import axios from 'axios';

const API_KEY = import.meta.env.VITE_NEWS_API_KEY;
const BASE_URL = 'https://api.thenewsapi.com/v1/news/all';

export const fetchArticles = async (query = '') => {
  try {
    const response = await axios.get(BASE_URL, {
      params: { api_token: API_KEY, search: query },
    });
    return response.data.data;
  } catch (error) {
    console.error('Error fetching articles:', error);
    throw error;
  }
};
