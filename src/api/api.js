import axios from "axios"

export const axiosIns = axios.create({
  baseURL: "http://15.164.253.27:8888",
})

export default axiosIns
