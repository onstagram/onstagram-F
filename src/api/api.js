import axios from "axios"

function getToken() {
  return localStorage.getItem("TOKEN")
}
export const axiosIns = axios.create({
  baseURL: "http://15.164.253.27:8888",
})

// Axios 인터셉터를 사용하여 Axios 요청의 전송 또는 응답을 수정하거나 설정하기 위한 미들웨어 함수를 정의
axiosIns.interceptors.request.use((config) => {
  const token = getToken()
  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`
  }
  return config
})

export default axiosIns
