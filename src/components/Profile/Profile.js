import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import "./Profile.css"
import MainNav from "../Main/MainNav"
import ProfilePost from "../../assets/Fictogram/Profile/profile-post.png"
import grayTag from "../../assets/Fictogram/Profile/grayTag.png"
import ProfileImg from "../../assets/Fictogram/Nav/profile.png"
import graySave from "../../assets/Fictogram/Profile/grayCollection.png"
import Gear from "../../assets/Fictogram/Profile/gear.png"

function Profile() {
  const [modal, setModal] = useState(false)
  const navigate = useNavigate()

  const toggleModal = () => {
    setModal(!modal)
  }

  const goToSaved = () => {
    navigate("/profile/saved")
  }

  const goToTagged = () => {
    navigate("/profile/tagged")
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
                  <button type="button">보관된 스토리 보기</button>
                  <div className="setImg" onClick={toggleModal}>
                    <img src={Gear} alt="프로필 셋팅" />
                  </div>
                  {modal && (
                    <div className="setWrapper">
                      <div className="setOverlay">
                        <div className="setContent">
                          <div className="setContent-item">앱 및 웹사이트</div>
                          <div className="setContent-item">QR 코드</div>
                          <div className="setContent-item">알림</div>
                          <div className="setContent-item">
                            설정 및 개인정보
                          </div>
                          <div className="setContent-item">Meta Verified</div>
                          <div className="setContent-item">관리 감독</div>
                          <div className="setContent-item">로그 아웃</div>
                          <div
                            className="setContent-item"
                            onClick={toggleModal}
                          >
                            취소
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
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
              <button type="button" className="profilePostsBtn">
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
              <button
                type="button"
                className="profilePostsBtn1"
                onClick={goToTagged}
              >
                <img src={grayTag} alt="게시물 태그됨" />
                <span>태그됨</span>
              </button>
            </div>
            <div>내용부분</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
