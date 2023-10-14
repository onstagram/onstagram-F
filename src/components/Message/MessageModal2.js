import React, { useState } from "react"

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
      <div onClick={toggleModal}>
        <button type="button" className="chattingMain-btn">
          메세지 보내기
        </button>
      </div>
      {modal && (
        <div className="chatModal-wrapper2">
          <div className="chatModal-overlay2">
            <div className="chatModal-content">
              <div className="chatModal-header2">
                <div>&nbsp; </div>
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
                <div className="searchUser2">
                  <div className="searchImg">
                    <img src={ProfileImg} alt="프로필 이미지" />
                  </div>
                  <div className="searchUser-info2">
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
