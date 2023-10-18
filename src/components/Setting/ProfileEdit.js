import React, { useRef } from "react"
import { useNavigate } from "react-router-dom"
import "./Setting.css"

import MainNav from "../Main/MainNav"
import Shild from "../../assets/Fictogram/Etc/shield.png"
import User from "../../assets/Fictogram/Etc/user.png"
import Profile from "../../assets/Fictogram/Nav/profile.png"
import EditFooter from "./EditFooter"

function ProfileEdit() {
  const selectFile = useRef("")
  const navigate = useNavigate()

  const fileClick = () => {
    selectFile.current.click()
  }

  const goToEdit = () => {
    navigate("/setting/edit")
  }

  const goToLanguage = () => {
    navigate("/setting/language")
  }

  const goToAppAndWeb = () => {
    navigate("/setting/appweb")
  }

  return (
    <div className="mainWrapper">
      <MainNav />
      <div className="mainSection1">
        <div className="SelectList">
          <div className="SelectList-header">
            <div className="SelectList-headerA">
              <div className="SelectList-Logo">
                <img src={Shild} alt="로고" />
                <span>설정</span>
              </div>
              <div className="SelectList-title">
                <span className="SelectTitle">계정 센터</span>
                <span className="SelectTitle-text">
                  Onstagram 테크놀로지에서 연결된 환경 및 계정 설정을
                  관리해보세요.
                </span>
              </div>

              <div className="Select-text">
                <img src={User} alt="유저" />
                <span>개인정보</span>
              </div>
              <div className="Select-text">
                <img src={Shild} alt="보안" />
                <span>비밀번호 및 보안</span>
              </div>
              <div className="Select-text">
                <img src={Shild} alt="Tv" />
                <span>광고 기본 설정</span>
              </div>
              <span className="SelectPlus">계정 센터에서 더 보기</span>
            </div>
          </div>
          <div className="SelectList-body">
            <div className="SelectList-body-title">설정</div>
            <div
              className="SelectList-item SelectList-item-select"
              onClick={goToEdit}
            >
              <span>프로필 편집</span>
            </div>
            <div className="SelectList-item" onClick={goToLanguage}>
              <span>언어 기본 설정</span>
            </div>
            <div className="SelectList-item" onClick={goToAppAndWeb}>
              <span>앱 및 웹사이트</span>
            </div>
            <div className="SelectList-item">
              <span>이메일 알림</span>
            </div>
            <div className="SelectList-item">
              <span>푸시 알림</span>
            </div>
            <div className="SelectList-item">
              <span>내가 볼 수 있는 내용</span>
            </div>
            <div className="SelectList-item">
              <span>내 콘텐츠를 볼 수 있는 사람</span>
            </div>
            <div className="SelectList-item">
              <span>다른 사람이 나와 소통할 수 있는 방법</span>
            </div>
            <div className="SelectList-item">
              <span>관리 감독</span>
            </div>
            <div className="SelectList-item">
              <span>도움말</span>
            </div>
            <div className="SelectList-item">
              <span>구독</span>
            </div>

            <div className="SelectList-item change">
              <span>프로페셔널 계정으로 전환</span>
            </div>
          </div>
        </div>
        <div className="SelectProfile-edit">
          <div className="ProfileEdit-body">
            <div className="ProfileEdit-title">
              <p>프로필 편집</p>
            </div>
            <form method="post">
              <div className="ProfileEdit-bodys">
                <div className="ProfileEdit-imgId edit-margin">
                  <img id="userImg" src={Profile} alt="프로필 이미지" />
                  <div className="ProfileEdit-info">
                    <span>sound4519</span>
                    <input
                      type="file"
                      style={{ display: "none" }}
                      ref={selectFile}
                    />
                    <button type="submit" onClick={fileClick}>
                      프로필 사진 바꾸기
                    </button>
                  </div>
                </div>
                <div className="ProfileEdit-web edit-margin">
                  <div className="web-title">
                    <span>웹사이트</span>
                  </div>

                  <div className="web-detail">
                    <input type="text" disabled placeholder="웹사이트" />
                    <p>
                      링크 수정은 모바일에서만 가능합니다. Instagram 앱으로
                      이동하여 프로필의 소개에서 웹사이트를 변경하여 수정하세요.
                    </p>
                  </div>
                </div>
                <div className="ProfileEdit-intro edit-margin">
                  <div className="intro-title">
                    <span>소개</span>
                  </div>
                  <div className="intro-detail">
                    <textarea />
                    <span>0 / 150</span>
                  </div>
                </div>
                <div className="ProfileEdit-two edit-margin">
                  <div className="two-title">
                    <span>성별</span>
                  </div>
                  <div className="two-detail">
                    <input
                      type="text"
                      placeholder="밝히고 싶지 않음"
                      disabled
                    />
                    <div></div>
                  </div>
                </div>
                <div className="ProfileEdit-recommend edit-margin">
                  <div className="recommend-title">
                    <span>프로필에 추천표시</span>
                  </div>
                  <div className="recommend-detail">
                    <input type="checkbox" />
                    <span>
                      사람들이 회원님의 프로필에서 비슷한 계정 추천을 볼 수
                      있는지와 회원님의 계정이 다른 프로필에서 추천될 수
                      있는지를 선택하세요.
                    </span>
                  </div>
                </div>
                <div className="edit-submit">
                  <button type="submit">제출</button>
                </div>
              </div>
            </form>
          </div>
          <EditFooter />
        </div>
      </div>
    </div>
  )
}

export default ProfileEdit
