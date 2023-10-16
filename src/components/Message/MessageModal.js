import React, { useState } from "react"

import Gear from "../../assets/Fictogram/Profile/gear.png"
import ProfileImg from "../../assets/Fictogram/Nav/profile.png"
import Cancel from "../../assets/Fictogram/Etc/XBtn.png"

function Message() {
  const [modal, setModal] = useState()

  const toggleModal = () => {
    setModal(!modal)
  }

  const ChatOpenModal = () => {
    setModal(!modal)
    alert("채팅방 생성!")
  }

  return (
    <div>
      <div className="chatSend" onClick={toggleModal}>
        <img src={Gear} alt="채팅보내기" />
      </div>
      {modal && (
        <div className="chatModal-wrapper">
          <div className="chatModal-overlay">
            <div className="chatModal-content">
              <div className="chatModal-header">
                <div></div>
                <span>새로운 메세지</span>
                <button onClick={toggleModal}>
                  <img src={Cancel} alt="취소버튼" />
                </button>
              </div>

              <div className="chatModal-search">
                <span>받는 사람 :</span>
                <input type="text" />
              </div>
              <div className="chatModal-searchList">
                <div className="searchUser">
                  <div className="searchImg">
                    <img src={ProfileImg} alt="프로필 이미지" />
                  </div>
                  <div className="searchUser-info">
                    <span>이지너</span>
                    <span>sound4519</span>
                  </div>
                  <input type="checkbox" />
                </div>
              </div>
              <div className="chatModal-btn">
                <button type="submit" onClick={ChatOpenModal}>
                  채팅
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Message
