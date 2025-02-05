import axios from "axios";

const API_URL = "http://localhost:5000";

export const getPage = async (slug) => {
  try {
    const response = await axios.get(`${API_URL}/pages/${slug}`);
    return response.data;
  } catch (error) {
    return { error: error.response?.data || "Page not found" };
  }
};
