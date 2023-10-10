import React from "react"
import "./Message.css"

import Gear from "../../assets/Fictogram/Profile/gear.png"
import Arrow from "../../assets/Fictogram/Post/arrow.png"
import Profile from "../../assets/Fictogram/Nav/profile.png"

import MainNav from "../Main/MainNav"

function Message() {
  return (
    <div class="mainWrapper">
      <MainNav />

      <div className="mainSection">
        <div className="chatMain">
          <div className="chatList">
            <div className="chatListHeader">
              <div className="chatUser">
                <span>sound4519</span>
                <img src={Arrow} alt="계정전환버튼" />
              </div>

              <div className="chatSend">
                <img src={Gear} alt="채팅보내기" />
              </div>
            </div>
            <div className="chatListTitle">
              <h3>메시지</h3>
              <span>요청</span>
            </div>
            <div className="chatListBody">
              <div className="chatUserInfo">
                <div className="chatUserImg">
                  <img src={Profile} alt="유저 프로필사진" />
                </div>
                <div className="chatInfo">
                  <span>이진호</span>
                  <div className="chatMemo">
                    <span>글쎄 말이야 글쎄 김씨가 말이야..</span>
                    <div>1주후</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="chatting">여기는 메인</div>
        </div>
      </div>
    </div>
  )
}

export default Message
