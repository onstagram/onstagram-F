import React from "react"
import "./Message.css"
import "./Chatting.css"

import Profile from "../../assets/Fictogram/Nav/profile.png"
import Emoji from "../../assets/Fictogram/Post/emoji.png"
import Mike from "../../assets/Fictogram/Etc/mic.png"
import Photo from "../../assets/Fictogram/Etc/image.png"
import Heart from "../../assets/Fictogram/Nav/heart.png"
import Call from "../../assets/Fictogram/Etc/call.png"
import Video from "../../assets/Fictogram/Etc/video.png"
import DownArrow from "../../assets/Fictogram/Etc/DownArrow.png"

import MainNav from "../Main/MainNav"
import MessageModal from "./MessageModal"
import ChatDetailModal from "./ChatDetailModal"

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
                <img src={DownArrow} alt="계정전환버튼" />
              </div>

              <MessageModal />
            </div>
            <div className="chatListTitle">
              <h3>메시지</h3>
              <span>요청</span>
            </div>
            <div className="chatListBody">
              <div className="chatUserInfo-ing">
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
            <div className="chattingSection">
              <div className="chatting-header">
                <div className="chatting-header-userInfo">
                  <img src={Profile} alt="유저 이미지" />
                  <span>sun_up</span>
                </div>
                <div className="chatting-header-btns">
                  <button type="button">
                    <img src={Call} alt="전화 아이콘" />
                  </button>
                  <button type="button">
                    <img src={Video} alt="영상통화 아이콘" />
                  </button>
                  <ChatDetailModal />
                </div>
              </div>
              <div className="chatting-body">
                <span>채팅내용이요</span>
              </div>
              <div className="chatting-inputBox">
                <div className="chatting-inputBoxes">
                  <div className="chatting-emoji">
                    <img src={Emoji} alt="이모티콘" />
                  </div>
                  <input type="text" placeholder="메세지 입력..." />
                  <div className="chatting-attach">
                    <img src={Mike} alt="마이크" />
                    <img src={Photo} alt="사진" />
                    <img src={Heart} alt="하트 보내기" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Message
