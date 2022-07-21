import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });

export const fetch_AllProducts = () => API.get("/getAllProducts");
