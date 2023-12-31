import React from "react"
import "./Setting.css"
import "./Language.css"

import Shild from "../../assets/Fictogram/Etc/shield.png"
import MainNav from "../Main/MainNav"
import EditFooter from "./EditFooter"
import User from "../../assets/Fictogram/Etc/user.png"
import { useNavigate } from "react-router-dom"
import LanguageItemList from "./LanguageItemList"

function LanguageSelect() {
  const navigate = useNavigate()

  const goToEdit = () => {
    navigate("/setting/edit")
  }

  const goToLanguage = () => {
    navigate("/setting/language")
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
            <div className="SelectList-item">
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
        <div className="LanguageWrapper">
          <div className="LanguageContent">
            <div className="LanguageHeader">
              <span>언어 기본 설정</span>
            </div>
            <div className="LanguageBody">
              <span>앱 언어</span>
              <p>
                Instagram에서 버튼, 제목 및 기타 텍스트가 기본 설정 언어로
                표시됩니다.
              </p>
              <input type="text" placeholder="검색" />
            </div>
            <div className="LanguageList">
              <LanguageItemList />
            </div>
          </div>
          <EditFooter />
        </div>
      </div>
    </div>
  )
}

export default LanguageSelect
