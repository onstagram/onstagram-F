import React from "react"
import "./Main.css"
import { useNavigate } from "react-router-dom"

function MainSection() {
  const navigate = useNavigate()

  const goToLogin = () => {
    navigate("/login")
  }

  const goToSignUp = () => {
    navigate("/signup")
  }

  return (
    <div className="mainSection">
      <span onClick={goToLogin}>로그인페이지로 가기</span>
      <span onClick={goToSignUp}>회원가입 페이지로 가기</span>
      여기는 메인페이지야
    </div>
  )
}

export default MainSection
