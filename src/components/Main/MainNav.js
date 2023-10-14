import React from 'react'
import './Main.css'
import { useNavigate } from 'react-router-dom'

import Home from '../../assets/Fictogram/Nav/home.png'
import Search from '../../assets/Fictogram/Nav/search.png'
import Compass from '../../assets/Fictogram/Nav/compass.png'
import Reels from '../../assets/Fictogram/Nav/reels.png'
import Message from '../../assets/Fictogram/Nav/message.png'
import Alram from '../../assets/Fictogram/Nav/heart.png'
import ProfileImg from '../../assets/Fictogram/Nav/profile.png'
import Menu from '../../assets/Fictogram/Nav/menu.png'
import SelectModal from '../Post/PostModal'

function MainNav() {
  const navigate = useNavigate()

  const goToHome = () => {
    navigate('/')
  }

  const goToQuest = () => {
    navigate('/quest')
  }

  const goToProfile = () => {
    navigate('/profile')
  }

  const goToReels = () => {
    navigate('/reels')
  }

  const goToMessage = () => {
    navigate('/message')
  }

  return (
    <div className="nav">
      <div className="navLogo" onClick={goToHome}>
        <p>Onstagram</p>
      </div>
      <div className="navMenu">
        <div className="menu-item" onClick={goToHome}>
          <img src={Home} alt="홈 이미지"/>
          <p>홈</p>
        </div>
        <div className="menu-item">
          <img src={Search} alt="검색 이미지"/>
          <p>검색</p>
        </div>
        <div className="menu-item" onClick={goToQuest}>
          <img src={Compass} alt="탐색 이미지"/>
          <p>탐색탭</p>
        </div>
        <div className="menu-item" onClick={goToReels}>
          <img src={Reels} alt="릴스 이미지"/>
          <p>릴스</p>
        </div>
        <div className="menu-item" onClick={goToMessage}>
          <img src={Message} alt="메세지 이미지"/>
          <p>메세지</p>
        </div>
        <div className="menu-item">
          <img src={Alram} alt="알람 이미지"/>
          <p>알람</p>
        </div>
        <div className="menu-item">
          <SelectModal />
        </div>
        <div className="menu-item" onClick={goToProfile}>
          <img src={ProfileImg} alt="프로필 이미지"/>
          <p>프로필</p>
        </div>
      </div>
      <div className="navDetail">
        <img src={Menu} alt="더보기 이미지"/>
        <p>더보기</p>
      </div>
    </div>
  )
}

export default MainNav
