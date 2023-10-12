import React from "react"
import "./Profile.css"
import MainNav from "../Main/MainNav"
import DownArrow from "../../assets/Fictogram/Etc/DownArrow.png"
import dd from "../../assets/Fictogram/Profile/collect.png"
import { useNavigate } from "react-router-dom"

function SaveStory() {
  const navigate = useNavigate()

  const goToBack = () => {
    navigate(-1)
  }
  return (
    <div className="mainWrapper">
      <MainNav />
      <div className="mainSection">
        <div className="storyWrapper">
          <div className="storyBefore">
            <img src={DownArrow} alt="이전 버튼" onClick={goToBack} />
            <span>보관</span>
          </div>
          <div className="storytitle">
            <img src={dd} alt="스토리 아이콘" />
            <span>스토리</span>
          </div>
          <div className="storyBody">
            <img src={dd} alt="아이콘" />
            <h1>스토리에 추가</h1>
            <span>
              추억을 돌아볼 수 있도록 스토리가 사라진 후 보관함에 저장되도록
              설정해보세요. 보관된 스토리는 회원님만 볼 수 있습니다.
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SaveStory
