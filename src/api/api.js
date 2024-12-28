import axios from "axios";
import { drupalUrl } from "../config";

const apiClient = axios.create({
  drupalUrl: drupalUrl,
  headers: {
    "Content-Type": "application/vnd.api+json",
  },
});

export const fetchContent = async (endpoint, params = {}) => {
  try {
    const response = await apiClient.get(endpoint, { params });
    return response.data;
  } catch (error) {
    console.error(`Error fetching content: ${error}`);
    throw error;
  }
};
