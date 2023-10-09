import React from 'react'
import './Main.css'

import Home from '../../assets/Fictogram/Nav/home.png'
import Search from '../../assets/Fictogram/Nav/search.png'
import Compass from '../../assets/Fictogram/Nav/compass.png'
import Reels from '../../assets/Fictogram/Nav/reels.png'
import Message from '../../assets/Fictogram/Nav/message.png'
import Alram from '../../assets/Fictogram/Nav/heart.png'
import Post from '../../assets/Fictogram/Nav/post.png'
import ProfileImg from '../../assets/Fictogram/Nav/profile.png'
import Menu from '../../assets/Fictogram/Nav/menu.png'
import PostModal from '../Post/PostModal'

function MainNav() {
  const [modal, setModal] = useState(false)

  return (
    <div className="nav">
      <div className="navLogo">
        <p>Onstagram</p>
      </div>
      <div className="navMenu">
        <div className="menu-item">
          <img src={Home} />
          <p>홈</p>
        </div>
        <div className="menu-item">
          <img src={Search} />
          <p>검색</p>
        </div>
        <div className="menu-item">
          <img src={Compass} />
          <p>탐색탭</p>
        </div>
        <div className="menu-item">
          <img src={Reels} />
          <p>릴스</p>
        </div>
        <div className="menu-item">
          <img src={Message} />
          <p>메세지</p>
        </div>
        <div className="menu-item">
          <img src={Alram} />
          <p>알람</p>
        </div>
        <div className="menu-item" onClick={PostModal}>
          <img src={Post} />
          <p>만들기</p>
          {modal && { PostModal }}
        </div>
        <div className="menu-item" onClick={PostModal}>
          <img src={ProfileImg} />
          <p>프로필</p>
        </div>
      </div>
      <div className="navDetail">
        <img src={Menu} />
        <p>더보기</p>
      </div>
    </div>
  )
}

export default MainNav
