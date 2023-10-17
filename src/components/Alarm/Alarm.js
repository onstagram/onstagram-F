
import React, { useState } from "react"
import "./Alarm.css"
import MainNav from "../Main/MainNav"
import Character from '../../assets/Fictogram/Etc/character.png' 
import Profile from "../../assets/Fictogram/Nav/profile.png"
import { useNavigate } from "react-router-dom"
import AlarmModal from "./AlarmModal"

function Alarm() {
  const navigate = useNavigate()

  const goToMainPage = () => {
    navigate("/")
  }
  
  return (
    <div class="mainWrapper">
      <MainNav />
      <div className="mainSection">
        <div className="alarmMain">
          <div className="alarmList">
            <div className="alarmListHeader">
              <div className="alarmUser">
                <span>알림</span>
              </div>
            </div>
            <AlarmModal />
            <div className="alarmDiv">
              <div className="alarmDivSub">
                <div className="alarmListTitle">
                  <h3>이번 주</h3>
                </div>
                <div className="alarmListBody">
                  <div className="alarmUserInfo" onClick={goToMainPage}>
                    <div className="alarmUserImg">
                      <img src={Profile} alt="유저 프로필사진" />
                    </div>
                    <div className="alarmInfo">
                      <span>
                        <span className="alarmInfoUserName">dddd</span>님이 회원님의 스토리를 좋아합니다.
                        <span className="alarmInfoTime">어제</span>
                      </span>
                    </div>
                    <div className="alarmStoryImg">
                      <img src={Character} alt="스토리 사진"/>
                    </div>
                  </div> 
                  <div className="alarmUserInfo">
                    <div className="alarmUserImg">
                      <img src={Profile} alt="유저 프로필사진" />
                    </div>
                    <div className="alarmInfo">
                      <span>회원님이 알 수도 있는 
                        <span className="alarmInfoUserName">sound4519</span>님이 Instagram을 사용중입니다.
                        <span className="alarmInfoTime">1일</span>
                      </span>
                    </div>
                    <div className="alarmBtnFollow">
                      <button className="BtnFollow" type="button">팔로우</button>
                    </div>
                  </div>
                </div>
              </div>             
            </div>
         </div>
          <div className="alarm2Wrapper">
            <div className="alarm2Main">
              <h2>알림만드는중</h2>
              <span>알림만드는중</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Alarm
