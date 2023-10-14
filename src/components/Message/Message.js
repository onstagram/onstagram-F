import React, { useState } from "react"
import "./Message.css"

import Gear from "../../assets/Fictogram/Profile/gear.png"
import DownArrow from "../../assets/Fictogram/Etc/DownArrow.png"
import Profile from "../../assets/Fictogram/Nav/profile.png"

import MainNav from "../Main/MainNav"
import MessageModal from "./MessageModal"
import MessageModal2 from "./MessageModal2"
import { useNavigate } from "react-router-dom"

function Message() {
  const navigate = useNavigate()

  const goToChatting = () => {
    navigate("/message/chat")
  }

  return (
    <div class="mainWrapper">
      <MainNav />

      <div className="mainSection">
        <div className="chatMain">
          <div className="chatList">
            <div className="chatListHeader">
              <div className="chatUser">
                <span>sound4519</span>
                <img src={DownArrow} alt="계정전환버튼" />
              </div>

              <MessageModal />
            </div>
            <div className="chatListTitle">
              <h3>메시지</h3>
              <span>요청</span>
            </div>
            <div className="chatListBody">
              <div className="chatUserInfo" onClick={goToChatting}>
                <div className="chatUserImg">
                  <img src={Profile} alt="유저 프로필사진" />
                </div>
                <div className="chatInfo">
                  <span>이진호</span>
                  <div className="chatMemo">
                    <span>글쎄 말이야 글쎄 김씨가 말이야 내가 이걸 어떻게</span>
                    <span>1주후</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="chattingWrapper">
            <div className="chattingMain">
              <img src={Gear} alt="메세지 이미지" />
              <h2>내 메세지</h2>
              <span>친구나 그룹에 비공개 사진과 메시지를 보내보세요</span>
              <MessageModal2 />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Message
