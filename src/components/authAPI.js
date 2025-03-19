import axios from "axios";

const loginAPI = axios.create({
    baseURL : "https://burp-server.onrender.com/auth"
})

export const googleAuth = (code) => loginAPI.get(`/google?code=${code}`);

//https://burp-server.onrender.com
// http://localhost:5000/auth