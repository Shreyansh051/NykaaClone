import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:8080" });

export const fetch_AllProducts = () => API.get("/getAllProducts");
export const Add_to_cart = (id) => API.post(`/AddToBag/${id}`)
export const get_all_cart = () => API.get("/getAllCart");
export const set_quantity = (id,quant) => API.patch(`/setQuantity/${id}`,{ quant});
export const delete_item = (id) => API.delete(`/cart/${id}`);
