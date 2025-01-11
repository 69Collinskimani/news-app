import axios from "axios";

const API_KEY = "gSeBYYZ4HfiNpn0zrBJKVefE59auCdGZjC1REyfc"
const BASE_URL = "https://api.thenewsapi.com/v1/news/all";

export const fetchNews = async (params) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        api_token: API_KEY,
        ...params,
      },
    });
    return response.data.data;
  } catch (error) {
    console.error("Error fetching news:", error);
    throw error;
  }
};
