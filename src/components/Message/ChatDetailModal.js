import React, { useState } from "react"

import Info from "../../assets/Fictogram/Etc/info.png"
import ProfileImg from "../../assets/Fictogram/Nav/profile.png"
import XBtn from "../../assets/Fictogram/Etc/XBtn.png"
import DeclarationModal from "./DeclarationModal"
import BlockModal from "./BlockModal"
import ChatDelModal from "./ChatDelModal"

function ChatDetailModal() {
  const [modal, setModal] = useState()

  const toggleModal = () => {
    setModal(!modal)
  }

  return (
    <div>
      <button type="button" className="" onClick={toggleModal}>
        <img src={Info} alt="상세 정보 아이콘" />
      </button>
      {modal && (
        <div className="DetailWrapper">
          <div className="DetailHeader">
            <div className="DetailTitle">
              <h3>상세정보</h3>
              <button type="button" onClick={toggleModal}>
                <img src={XBtn} alt="종료 버튼" />
              </button>
            </div>
            <div className="DetailAlram">
              <span>메세지 알림 해제</span>
              <input type="checkbox" />
            </div>
          </div>
          <div className="DetailBody">
            <div className="DetailBody-header">
              <h4>멤버</h4>
            </div>
            <div className="DetailUser">
              <div className="DetailUser-info">
                <img src={ProfileImg} alt="유저 이미지" />
                <div className="DetailUser-content">
                  <span>아이디</span>
                  <span>유저 이름</span>
                </div>
              </div>
            </div>
          </div>
          <div className="DetailFooter">
            <div className="DetailFooter-btn">
              <DeclarationModal />
              <BlockModal />
              <ChatDelModal />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default ChatDetailModal
