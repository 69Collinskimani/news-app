// services/newsAPI.js
import axios from 'axios';

export const fetchArticles = async (query) => {
  try {
    const response = await axios.get(`https://api.thenewsapi.com/v1/news/all?apikey=YOUR_API_KEY&query=${query}`);
    return response.data.articles;
  } catch (error) {
    console.error('Error fetching articles:', error);
    throw error;
  }
};

