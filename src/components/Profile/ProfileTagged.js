import React from "react"
import "./Profile.css"
import { useNavigate } from "react-router-dom"

import MainNav from "../Main/MainNav"
import grayPost from "../../assets/Fictogram/Profile/grayPost.png"
import ProfileTag from "../../assets/Fictogram/Profile/avatar.png"
import ProfileImg from "../../assets/Fictogram/Nav/profile.png"
import ProfileSave from "../../assets/Fictogram/Profile/grayCollection.png"
import Collect from "../../assets/Fictogram/Profile/collect.png"
import ProfileSetModal from "./ProfileSetModal"
import FollowModal from "./FollowModal"
import FollowingModal from "./FollowingModal"

function ProfileTagged() {
  const navigate = useNavigate()

  const goToProfile = () => {
    navigate("/profile")
  }

  const goToSaved = () => {
    navigate("/profile/saved")
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
          </div>{" "}
          <div className="profilePostsBtns">
            <button
              type="button"
              className="profilePostsBtn1"
              onClick={goToProfile}
            >
              <img src={grayPost} alt="게시물 이미지" />
              <span>게시물</span>
            </button>
            <button
              type="button"
              className="profilePostsBtn1"
              onClick={goToSaved}
            >
              <img src={ProfileSave} alt="게시물 저장됨" />
              <span>저장됨</span>
            </button>
            <button type="button" className="profilePostsBtn">
              <img src={ProfileTag} alt="게시물 태그됨" />
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
              <h1>내가 나온 사진</h1>
              <span>
                사람들이 회원님을 사진에 태그하면 태그된 사진이 여기에
                표시됩니다
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileTagged
