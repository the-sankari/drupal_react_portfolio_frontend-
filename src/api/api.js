import axios from "axios";
import { drupalUrl } from "../config";

const apiClient = axios.create({
  drupalUrl: drupalUrl,
  headers: {
    "Content-Type": "application/vnd.api+json",
  },
});



