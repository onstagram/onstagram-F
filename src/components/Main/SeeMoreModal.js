import React from "react"
import { useState } from "react"

import Menu from "../../assets/Fictogram/Nav/menu.png"
import Gear from "../../assets/Fictogram/Profile/gear.png"

function SeeMoreModal() {
  const [modal, setModal] = useState()

  const toggleModal = () => {
    setModal(!modal)
  }

  return (
    <div>
      <div onClick={toggleModal} className="seeMore-modal-btn">
        <img src={Menu} alt="더보기 픽토그램" />
        <span>더보기</span>
      </div>
      {modal && (
        <div className="seeMore-content">
          <div className="seeMore-content-items">
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
          <div className="seeMore-content-items2">
            <span>로그아웃</span>
          </div>
        </div>
      )}
    </div>
  )
}

export default SeeMoreModal
