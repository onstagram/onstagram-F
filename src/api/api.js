import axios from "axios"

export const axiosIns = axios.create({
  baseURL: "https://vocal-khapse-c450f1.netlify.app",
})

export default axiosIns
