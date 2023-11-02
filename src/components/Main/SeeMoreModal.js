import React from "react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

import Menu from "../../assets/Fictogram/Nav/menu.png"
import Gear from "../../assets/Fictogram/Profile/gear.png"
import jwtDecode from "jwt-decode"

function SeeMoreModal() {
  const [userId, setUserId] = useState()

  const Token = localStorage.getItem("TOKEN")

  if (Token && userId === undefined) {
    // 토큰이 존재하는 경우
    try {
      // 토큰을 해석하여 userId를 추출합니다.
      const decodedToken = jwtDecode(Token)
      const userId = decodedToken.userId
      setUserId(userId)
    } catch (error) {
      console.error("토큰 해석에 실패했습니다.", error)
    }
  } else if (!Token) {
    console.log("토큰이 로컬 스토리지에 존재하지 않습니다.")
  }
  const navigate = useNavigate()

  const [modal, setModal] = useState()

  const toggleModal = () => {
    setModal(!modal)
  }

  const goToSetting = () => {
    navigate(`/setting/edit/${userId}`)
  }

  const logout = () => {
    localStorage.removeItem("TOKEN")
    navigate("/login")
    console.log("하이")
  }

  return (
    <div>
      <div onClick={toggleModal} className="seeMore-modal-btn">
        <img src={Menu} alt="더보기 픽토그램" />
        <span>더보기</span>
      </div>
      {modal && (
        <div className="seeMore-content">
          <div className="seeMore-content-items" onClick={goToSetting}>
            <img src={Gear} alt="설정" />
            <span>설정</span>
          </div>
          <div className="seeMore-content-items">
            <img src={Gear} alt="내활동" />
            <span>내 활동</span>
          </div>
          <div className="seeMore-content-items">
            <img src={Gear} alt="저장됨" />
            <span>저장됨</span>
          </div>
          <div className="seeMore-content-items">
            <img src={Gear} alt="모드 전환" />
            <span>모드 전환</span>
          </div>
          <div className="seeMore-content-items">
            <img src={Gear} alt="문제 신고" />
            <span>문제 신고</span>
          </div>
          <div className="bold-bottom" />
          <div className="seeMore-content-items2">
            <span>계정 전환</span>
          </div>
          <div className="bottom" />
          <div className="seeMore-content-items2" onClick={logout}>
            <span>로그아웃</span>
          </div>
        </div>
      )}
    </div>
  )
}

export default SeeMoreModal
