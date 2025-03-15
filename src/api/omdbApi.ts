import axios from "axios";

const API_KEY = import.meta.env.VITE_OMDB_API_KEY;
const BASE_URL = "http://www.omdbapi.com/";

export const fetchMovies = async (query: string) => {
  try {
    const response = await axios.get(`${BASE_URL}`, {
      params: {
        s: query,
        apikey: API_KEY,
      },
    });
    return response.data.Search || [];
  } catch (error) {
    console.error("Error fetching movies:", error);
    throw error;
  }
};
