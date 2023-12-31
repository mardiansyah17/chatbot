import axios from "axios";
import {API_URL} from "@/app/lib/constant";

const api = axios.create({
    baseURL: `${API_URL}`,

})

export default api;