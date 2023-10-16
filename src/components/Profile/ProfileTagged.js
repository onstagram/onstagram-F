import React from "react"
import "./Profile.css"
import MainNav from "../Main/MainNav"
import grayPost from "../../assets/Fictogram/Profile/grayPost.png"
import ProfileTag from "../../assets/Fictogram/Profile/avatar.png"
import ProfileImg from "../../assets/Fictogram/Nav/profile.png"
import ProfileSave from "../../assets/Fictogram/Profile/grayCollection.png"
import Gear from "../../assets/Fictogram/Profile/gear.png"
import { useNavigate } from "react-router-dom"

function ProfileTagged() {
  const navigate = useNavigate()

  const goToProfile = () => {
    navigate("/profile")
  }

  const goToSaved = () => {
    navigate("/profile/saved")
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
                  <button>프로필 편집</button>
                  <button>보관된 스토리 보기</button>
                  <div className="setImg">
                    <img src={Gear} alt="프로필 셋팅" />
                  </div>
                </div>
                <div className="infoDetail2">
                  <a>
                    게시물
                    <span>100</span>
                  </a>
                  <a>
                    팔로우
                    <span>200</span>
                  </a>
                  <a>
                    팔로워
                    <span>200</span>
                  </a>
                </div>
                <div className="infoDetail3">
                  <span>
                    저장됨저장됨저장됨저장됨저장됨저장됨저장됨저장됨저장됨저장됨저장됨저장됨저장됨저장됨저장됨저장됨저장됨저장됨저장됨저장됨저장됨저장됨저장됨저장됨저장됨저장됨저장됨저장됨저장됨저장됨저장됨저장됨저장됨저장됨저장됨저장됨저장됨저장됨저장됨저장됨저장됨저장됨저장됨저장됨저장됨저장됨저장됨저장됨저장됨저장됨저장됨저장됨저장됨저장됨저장됨저장됨저장됨저장됨저장됨저장됨저장됨저장됨저장됨저장됨저장됨저장됨저장됨저장됨저장됨저장됨저장됨저장됨저장됨
                    저장됨저장됨 저장됨
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="profilePosts">
            <div className="profilepostsBtns">
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
            <div>태그~</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileTagged
