import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import "./Profile.css"

import MainNav from "../Main/MainNav"
import grayPost from "../../assets/Fictogram/Profile/grayPost.png"
import grayTag from "../../assets/Fictogram/Profile/grayTag.png"
import ProfileImg from "../../assets/Fictogram/Nav/profile.png"
import ProfileSave from "../../assets/Fictogram/Profile/collection.png"
import Collect from "../../assets/Fictogram/Profile/collect.png"
import ProfileSetModal from "./ProfileSetModal"
import FollowModal from "./FollowModal"
import FollowingModal from "./FollowingModal"
import jwtDecode from "jwt-decode"

function ProfileSaved() {
  const navigate = useNavigate()
  const [userId, setUserId] = useState()
  const Token = localStorage.getItem("TOKEN")

  if (Token && userId === undefined) {
    // 토큰이 존재하는 경우
    try {
      // 토큰을 해석하여 userId를 추출합니다.
      const decodedToken = jwtDecode(Token)
      const userId = decodedToken.userId
      setUserId(userId)
      console.log("userId:", userId)
    } catch (error) {
      console.error("토큰 해석에 실패했습니다.", error)
    }
  } else if (!Token) {
    console.log("토큰이 로컬 스토리지에 존재하지 않습니다.")
  }

  const goToProfile = () => {
    navigate(`/mypage/${userId}`)
  }

  const goToTagged = () => {
    navigate("/profile/tagged")
  }
  const goToSaveStory = () => {
    navigate("/profile/savestory")
  }
  return (
    <div className="mainWrapper">
      <MainNav />
      <div className="mainSection">
        <div className="profileWrapper">
          <div className="infoWrapper">
            <div className="info">
              <div className="infoImg">
                <img src={ProfileImg} alt="프로필 이미지" />
              </div>
              <div className="infoDetail">
                <div className="infoDetail1">
                  <span>sound4519</span>
                  <button type="button">프로필 편집</button>
                  <button type="button" onClick={goToSaveStory}>
                    보관된 스토리 보기
                  </button>
                  <ProfileSetModal />
                </div>
                <div className="infoDetail2">
                  <div>
                    <span>게시물</span>
                    <span>100</span>
                  </div>
                  <FollowModal />
                  <FollowingModal />
                </div>
                <div className="infoDetail3">
                  <span>이곳은 자기소개를 남기는 부분입니다.</span>
                </div>
              </div>
            </div>
          </div>
          <div className="profilePostsBtns">
            <button
              type="button"
              className="profilePostsBtn1"
              onClick={goToProfile}
            >
              <img src={grayPost} alt="게시물 이미지" />
              <span>게시물</span>
            </button>
            <button type="button" className="profilePostsBtn">
              <img src={ProfileSave} alt="게시물 저장됨" />
              <span>저장됨</span>
            </button>
            <button
              type="button"
              className="profilePostsBtn1"
              onClick={goToTagged}
            >
              <img src={grayTag} alt="게시물 태그됨" />
              <span>태그됨</span>
            </button>
          </div>
          <div className="profilePosts">
            <div className="profilePostSaved">
              <img
                className="profilePostSavedImg"
                src={Collect}
                alt="저장됨 게시글 비었을때 아이콘"
              />
              <h1>저장</h1>
              <span className="postSavedSpan  ">
                다시 보고 싶은 사진과 동영상을 저장하세요. 콘텐츠를 저장해도
                다른 사람에게 알림이 전송되지 않으며, 저장된 콘텐츠는 회원님만
                볼 수 있습니다.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileSaved
