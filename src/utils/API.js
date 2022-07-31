import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://adchitects-cms.herokuapp.com",
    headers: {"Authorization": 'Basic ' + btoa(`${process.env.REACT_APP_API_USERNAME}:${process.env.REACT_APP_API_PASSWORD}`)}
})


export default axiosInstance;