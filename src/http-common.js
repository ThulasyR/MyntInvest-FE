// npm install axios test
import axios from "axios"; 
export default axios.create({
  baseURL: window.mt_backend_url+"/api",
  headers: { 
    "Content-type": "application/json"
  }
});