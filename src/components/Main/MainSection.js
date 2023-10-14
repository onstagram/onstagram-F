import React from "react"
import "./Main.css"
import { useNavigate } from "react-router-dom"

function MainSection() {
  const navigate = useNavigate()

  const goToLogin = () => {
    navigate("/login")
  }

  return (
    <div className="mainSection">
      <span onClick={goToLogin}>로그인페이지로 가기</span>
      여기는 메인페이지야
    </div>
  )
}

export default MainSection
