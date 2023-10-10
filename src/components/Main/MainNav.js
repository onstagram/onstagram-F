import React from "react"
import "./Main.css"
import { useNavigate } from "react-router-dom"

import Home from "../../assets/Fictogram/Nav/home.png"

import Compass from "../../assets/Fictogram/Nav/compass.png"
import Reels from "../../assets/Fictogram/Nav/reels.png"
import Message from "../../assets/Fictogram/Nav/message.png"
import Alram from "../../assets/Fictogram/Nav/heart.png"
import ProfileImg from "../../assets/Fictogram/Nav/profile.png"
import PostModal from "../Post/PostModal"
import SearchModal from "../Search/SearchModal"
import SeeMoreModal from "./SeeMoreModal"

function MainNav() {
  const navigate = useNavigate()

  const goToHome = () => {
    navigate("/")
  }

  const goToQuest = () => {
    navigate("/quest")
  }

  const goToProfile = () => {
    navigate("/profile")
  }

  const goToReels = () => {
    navigate("/reels")
  }

  const goToMessage = () => {
    navigate("/message")
  }

  return (
    <div className="nav">
      <div className="navLogo" onClick={goToHome}>
        <p>Onstagram</p>
      </div>
      <div className="navMenu">
        <div className="menu-item" onClick={goToHome}>
          <img src={Home} alt="홈화면 픽토그램" />
          <span>홈</span>
        </div>
        <div className="menu-item">
          <SearchModal />
        </div>
        <div className="menu-item" onClick={goToQuest}>
          <img src={Compass} alt="탐색탭 픽토그램" />
          <span>탐색탭</span>
        </div>
        <div className="menu-item" onClick={goToReels}>
          <img src={Reels} alt="릴스 픽토그램" />
          <span>릴스</span>
        </div>
        <div className="menu-item" onClick={goToMessage}>
          <img src={Message} alt="메세지 픽토그램" />
          <span>메세지</span>
        </div>
        <div className="menu-item">
          <img src={Alram} alt="알람모델 픽토그램" />
          <span>알람</span>
        </div>
        <div className="menu-item">
          <PostModal />
        </div>
        <div className="menu-item" onClick={goToProfile}>
          <img src={ProfileImg} alt="프로필 픽토그램" />
          <span>프로필</span>
        </div>
      </div>
      <div className="navDetail">
        <SeeMoreModal />
      </div>
    </div>
  )
}

export default MainNav
