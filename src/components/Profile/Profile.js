import React, { useEffect, useRef, useState } from "react"
import { useNavigate } from "react-router-dom"

import "./Profile.css"
import h from "../../assets/Etc/헛.jpg"
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
import { useDispatch } from "react-redux"
import jwtDecode from "jwt-decode"
import { __getUserEditThunk } from "../../redux/module/userSlice"
import {
  __getPostRoadThunk,
  __getPostThunk,
} from "../../redux/module/uploadSlice"

function Profile() {
  const dispatch = useDispatch()
  const [userId, setUserId] = useState()
  const [post, setPost] = useState()
  const [email, setEmail] = useState()
  const [userImg, setUserImg] = useState()
  const [introduction, setIntroduction] = useState()
  const [follow, setFollow] = useState()
  const [following, setFollowing] = useState()
  const [member, setMember] = useState()
  const [postCount, setPostCount] = useState()
  const [postImg, setPostImg] = useState()
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

  const navigate = useNavigate()

  // const [userInfo, setUserInfo] = useState(null)

  useEffect(() => {
    dispatch(__getUserEditThunk(userId))
      .then((response) => {
        setEmail(response.payload.email)
        setUserImg(response.payload.userImg)
        setIntroduction(response.payload.introduction)
        setFollow(response.follow)
        setFollowing(response.following)
        setMember(response.payload)
      })
      .catch((error) => {})
  }, [dispatch, userId])

  useEffect(() => {
    dispatch(__getPostRoadThunk(userId)).then((response) => {
      const postDtoList = response.payload.data.postDtoList
      const postImages = postDtoList.map((postInfo) => postInfo.postImg)

      setPost(postDtoList)
      setPostImg(postImages)
    })
  }, [dispatch])

  console.log(post + "나야")

  console.log(follow + "팔로우고" + following + "팔로잉이야")

  const goToSaved = () => {
    navigate("/profile/saved")
    console.log(userId)
  }

  const goToTagged = () => {
    navigate("/profile/tagged")
  }

  const goToSaveStory = () => {
    navigate("/profile/savestory")
  }

  const goToProfileEdit = () => {
    navigate(`/setting/edit/${userId}`)
  }

  return (
    <div className="mainWrapper">
      <MainNav />
      <div className="mainSection">
        <div className="profileWrapper">
          <div className="infoWrapper">
            <div className="info">
              <div className="infoImg">
                <img src={userImg} alt="프로필 이미지" />
              </div>
              <div className="infoDetail">
                <div className="infoDetail1">
                  <span>{email}</span>
                  <button type="button" onClick={goToProfileEdit}>
                    프로필 편집
                  </button>
                  <button type="button" onClick={goToSaveStory}>
                    보관된 스토리 보기
                  </button>
                  <ProfileSetModal />
                </div>
                <div className="infoDetail2">
                  <div>
                    <span>게시물</span>
                    <span>{postCount}</span>
                  </div>
                  <FollowModal follow={follow} />
                  <FollowingModal following={following} />
                </div>
                <div className="infoDetail3">
                  <span>{introduction}</span>
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
              {post && post.length > 0 ? (
                <PostViewModal post={post} member={member} />
              ) : (
                <>
                  <img
                    src={Collect}
                    alt="저장됨 게시글 비었을때 아이콘"
                    className="profilePostSavedImg"
                  />
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
