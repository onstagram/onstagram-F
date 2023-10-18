import axios from "axios"

export const axiosIns = axios.create({
  // baseURL: "https://vocal-khapse-c450f1.netlify.app",
  baseURL: "http://15.164.253.27:8888",
})

export default axiosIns
