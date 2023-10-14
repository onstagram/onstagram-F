import React from "react"
import { useNavigate } from "react-router-dom"
import "./Profile.css"
import MainNav from "../Main/MainNav"
import ProfilePost from "../../assets/Fictogram/Profile/profile-post.png"
import ProfileImg from "../../assets/Fictogram/Nav/profile.png"
import graySave from "../../assets/Fictogram/Profile/grayCollection.png"
import Collect from "../../assets/Fictogram/Profile/collect.png"
import UserSetModal from "./UserSetModal"

function UserProfile() {
  const navigate = useNavigate()

  const goToProfile = () => {
    navigate("/user")
  }

  const goToSaved = () => {
    navigate("/user/saved")
  }

  // const goToSaveStory = () => {
  //   navigate("/profile/savestory")
  // }

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
                  <button type="button">메세지 보내기</button>
                  {/* <button type="button" onClick={goToSaveStory}>
                    보관된 스토리 보기
                  </button> */}
                  <UserSetModal />
                </div>
                <div className="infoDetail2">
                  <a href="https://www.google.com">
                    게시물
                    <span>100</span>
                  </a>
                  <a href="https://www.google.com">
                    팔로우
                    <span>200</span>
                  </a>
                  <a href="https://www.google.com">
                    팔로워
                    <span>200</span>
                  </a>
                </div>
                <div className="infoDetail3">
                  <span>안녕하세요 반갑습니다.</span>
                </div>
              </div>
            </div>
          </div>
          <div className="profilePostsBtns">
            <button
              type="button"
              className="profilePostsBtn"
              onClick={goToProfile}
            >
              <img src={ProfilePost} alt="게시물 이미지" />
              <span>게시물</span>
            </button>
            <button
              type="button"
              className="profilePostsBtn1"
              onClick={goToSaved}
            >
              <img src={graySave} alt="게시물 저장됨" />
              <span>저장됨</span>
            </button>
          </div>
          <div className="profilePosts">
            <div className="profilePostSaved">
              <img src={Collect} alt="저장됨 게시글 비었을때 아이콘" />
              <h1>사진 공유</h1>
              <span>사진을 공유하면 회원님의 프로필에 표시됩니다.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserProfile
