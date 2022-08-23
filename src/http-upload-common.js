// npm install axios
import axios from "axios";  
export default axios.create({
  baseURL: window.mt_backend_url+"/api",
  headers: {
    "Content-Type": "multipart/form-data",
  }
});