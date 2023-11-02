import React, { useEffect, useState } from "react"
import "./Main.css"
import { useNavigate } from "react-router-dom"
import SearchModal from "../Search/SearchModal"
import Home from "../../assets/Fictogram/Nav/home.png"
import Compass from "../../assets/Fictogram/Nav/compass.png"
import Reels from "../../assets/Fictogram/Nav/reels.png"
import Message from "../../assets/Fictogram/Nav/message.png"
import ProfileImg from "../../assets/Fictogram/Nav/profile.png"
import Menu from "../../assets/Fictogram/Nav/menu.png"
import SelectModal from "../Post/PostModal"
import Alarm from "../Alarm/Alarm"
import SeeMoreModal from "./SeeMoreModal"
import Logo1 from "../../assets/Etc/logo1.jpg"
import Logo2 from "../../assets/Etc/logo2.png"
import jwtDecode from "jwt-decode"
import { useDispatch } from "react-redux"
import { __getUserEditThunk } from "../../redux/module/userSlice"
import h from "../../assets/Etc/헛.jpg"
function MainNav() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [userId, setUserId] = useState()
  const [userImg, setUserImg] = useState()
  const Token = localStorage.getItem("TOKEN")

  if (Token && userId === undefined) {
    // 토큰이 존재하는 경우
    try {
      // 토큰을 해석하여 userId를 추출합니다.
      const decodedToken = jwtDecode(Token)
      const userId = decodedToken.userId
      setUserId(userId)
    } catch (error) {
      console.error("토큰 해석에 실패했습니다.", error)
    }
  } else if (!Token) {
    console.log("토큰이 로컬 스토리지에 존재하지 않습니다.")
  }

  useEffect(() => {
    dispatch(__getUserEditThunk(userId))
      .then((response) => {
        setUserImg(response.payload.userImg)
      })

      .catch((error) => {})
  }, [dispatch, userId])
  console.log(userImg)

  const goToHome = () => {
    navigate("/")
  }

  const goToQuest = () => {
    navigate("/quest")
  }

  const goToProfile = () => {
    navigate(`/mypage/${userId}`)
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
        <img className="logoImg" src={Logo2} />
      </div>
      <div className="navMenu">
        <div className="menu-item" onClick={goToHome}>
          <img className="menu-item-img" src={Home} />
          <p>홈</p>
        </div>
        <div className="menu-item">
          <SearchModal />
        </div>
        <div className="menu-item" onClick={goToQuest}>
          <img className="menu-item-img" src={Compass} />
          <p>탐색탭</p>
        </div>
        <div className="menu-item" onClick={goToReels}>
          <img className="menu-item-img" src={Reels} />
          <p>릴스</p>
        </div>
        <div className="menu-item" onClick={goToMessage}>
          <img className="menu-item-img" src={Message} />
          <p>메세지</p>
        </div>
        <div className="menu-item">
          <Alarm />
        </div>
        <div className="menu-item">
          <SelectModal />
        </div>
        <div className="menu-item" onClick={goToProfile}>
          <img className="menu-item-img" src={userImg} />
          <p>프로필</p>
        </div>
      </div>
      <div className="navDetail">
        <SeeMoreModal />
      </div>
    </div>
  )
}

export default MainNav
