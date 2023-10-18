import React, { useState } from "react"
import { useNavigate } from "react-router-dom"

import "./Profile.css"

import ProfilePost from "../../assets/Fictogram/Profile/profile-post.png"
import grayTag from "../../assets/Fictogram/Profile/grayTag.png"
import ProfileImg from "../../assets/Fictogram/Nav/profile.png"
import graySave from "../../assets/Fictogram/Profile/grayCollection.png"
import MainNav from "../Main/MainNav"
import ProfileSetModal from "./ProfileSetModal"
import PostViewModal from "../Post/PostViewModal"
import FollowModal from "./FollowModal"
import FollowingModal from "./FollowingModal"
import Collect from "../../assets/Fictogram/Profile/collect.png"
import { useSelector } from "react-redux"

function Profile() {
  const navigate = useNavigate()
  // const userId = useSelector((state) => state.member.userId)
  const today = new Date()
  const formattedDate = `${today.getFullYear()}년 ${
    today.getMonth() + 1
  }월 ${today.getDate()}일`

  const [posts, setPosts] = useState([
    {
      postId: "1",
      userId: "sound4519",
      userImg:
        "https://img1.daumcdn.net/thumb/R1280x0.fjpg/?fname=http://t1.daumcdn.net/brunch/service/user/32E9/image/BA2Qyx3O2oTyEOsXe2ZtE8cRqGk.JPG",
      caption: "환영합니다",
      postDate: formattedDate,
    },
    // {
    //   postId: "2",
    //   userId: "sound4519",
    //   userImg:
    //     "https://image.dongascience.com/Photo/2020/03/5bddba7b6574b95d37b6079c199d7102.jpg",
    //   caption: "환영합니다",
    //   postDate: formattedDate,
    // },
    // {
    //   postId: "3",
    //   userId: "sound4519",
    //   userImg:
    //     "https://image.dongascience.com/Photo/2020/03/5bddba7b6574b95d37b6079c199d7101.jpg",
    //   caption: "환영합니다",
    //   postDate: formattedDate,
    // },
    // {
    //   postId: "4",
    //   userId: "sound4519",
    //   userImg:
    //     "https://image.dongascience.com/Photo/2020/03/5bddba7b6574b95d37b6079c199d7101.jpg",
    //   caption: "환영합니다",
    //   postDate: formattedDate,
    // },
  ])

  const goToSaved = () => {
    navigate("/profile/saved")
    console.log(setPosts)
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
                  <span>안녕하세요 반갑습니다.</span>
                </div>
              </div>
            </div>
          </div>
          <div className="profilePostsBtns">
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
          <div className="profilePosts">
            <div className="profilePostSaved">
              {posts.length > 0 ? (
                <PostViewModal posts={posts} />
              ) : (
                <>
                  <img src={Collect} alt="저장됨 게시글 비었을때 아이콘" />
                  <h1>사진 공유</h1>
                  <span className="postSavedSpan">
                    사진을 공유하면 회원님의 프로필에 표시됩니다.
                  </span>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
