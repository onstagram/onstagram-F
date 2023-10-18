import React from "react"
import { useEffect } from "react"
import { useNavigate } from "react-router"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"

import { getCookieToken, removeCookieToken } from "../../../storage/Cookie"
import { DELETE_TOKEN } from "../../../store/Auth"
import { logoutUser } from "../../../api/Users"

const DivLogout2 = () => {
  const { accessToken } = useSelector((state) => state.token)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const refreshToken = getCookieToken()

  async function logout() {
    const data = await logoutUser({ refresh_token: refreshToken }, accessToken)

    if (data.status) {
      dispatch(DELETE_TOKEN())
      removeCookieToken()
      return navigate("/login")
    } else {
      window.location.reload()
    }
  }

  useEffect(() => {
    logout()
  }, [])

  return (
    <div>
      <Link to="/login" />
    </div>
  )
}

export default DivLogout2
