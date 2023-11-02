import React, { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import "./Main.css"

import Dog from "../../assets/Etc/Dog.jpg"
import Etc from "../../assets/Fictogram/Etc/etc.png"
import Heart from "../../assets/Fictogram/Post/heart.png"
import Comment from "../../assets/Fictogram/Post/comment.png"
import Collect from "../../assets/Fictogram/Profile/collection.png"
import Emoji from "../../assets/Fictogram/Post/emoji.png"
import grayHeart from "../../assets/Fictogram/Post/heart.png"
import RedHeart from "../../assets/Fictogram/Post/Redheart.png"
import { __postsMain } from "../../redux/module/postsSlice"

function MainSection() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [postLiked, setPostLiked] = useState(false)
  const [isLiked, setIsLiked] = useState(false)
  const [likeCount, setLikeCount] = useState("0")
  const [userImg, setUserImg] = useState(null)
  const [email, setEmail] = useState(null)

  const goToLogin = () => {
    navigate("/login")
  }

  const goToSignUp = () => {
    navigate("/signup")
  }

  const postToggleLike = () => {
    if (postLiked) {
      setPostLiked(false)
      setLikeCount(likeCount + 1)
      console.log(likeCount)
    } else {
      setPostLiked(true)
      setLikeCount(likeCount - 1)
      console.log(likeCount)
    }
  }

  const toggleLike = () => {
    if (isLiked) {
      setIsLiked(false)
      setLikeCount(likeCount + 1)
      console.log(likeCount)
    } else {
      setIsLiked(true)
      setLikeCount(likeCount - 1)
      console.log(likeCount)
    }
  }

  const [postImg, setPostImg] = useState()
  const [memberDto, setMemberDto] = useState()
  const [postDto, setPostDto] = useState()
  const [commentList, setCommentList] = useState()

  useEffect(() => {
    dispatch(__postsMain())
      .then((response) => {
        setMemberDto(response.data.memberDto)
        setPostDto(response.data.postDto)
        setCommentList(response.data.commentList)
        setPostImg(response.data.postDto.postImg)
      })
      .catch((e) => {
        console.log(e)
      })
  }, [dispatch])

  const checkDto = () => {
    console.log(memberDto + "멤버 디티오")
    console.log(postDto + "포스트 디티오")
    console.log(commentList + "코멘트 디티오")
  }

  return (
    <div className="mainSection">
      <div className="mainStoryHeader">
        <div className="mainStoryHeader-item">
          <img className="storyImg" src={Dog} alt="강아지" onClick={checkDto} />
          <span>내 스토리</span>
        </div>
        <div className="mainStoryHeader-item">
          <img className="storyImg" src={Dog} alt="강아지" />
          <span>sound4519</span>
        </div>
        <div className="mainStoryHeader-item">
          <img className="storyImg" src={Dog} alt="강아지" />
          <span>sound4519</span>
        </div>
        <div className="mainStoryHeader-item">
          <img className="storyImg" src={Dog} alt="강아지" />
          <span>sound4519</span>
        </div>
        <div className="mainStoryHeader-item">
          <img className="storyImg" src={Dog} alt="강아지" />
          <span>sound4519</span>
        </div>
        <div className="mainStoryHeader-item">
          <img className="storyImg" src={Dog} alt="강아지" />
          <span>sound4519</span>
        </div>
      </div>
      <div className="mainStoryBody">
        <div className="mainStoryContent">
          <div className="mainPostContent">
            <div className="mainPostUserInfo">
              <div className="mainPost-detailUserInfo">
                <img
                  className="mainPostUserImage"
                  src={Dog}
                  alt="유저 이미지"
                />
                <span className="mainPostUserSpan">sound6519@gmail.com</span>
              </div>
              <button type="button" className="mainPostUserInfoBtn">
                <img src={Etc} alt="세부 버튼" />
              </button>
            </div>
            <div className="mainPostUserBody-img">
              <img src={Dog} alt="불러온 사진" />
            </div>
            <div className="mainPostUserFooter">
              <div className="mainPostFooterBtns">
                <div className="mainPostFooterBtn">
                  <button onClick={postToggleLike}>
                    <img
                      className="mainPostHeart"
                      src={postLiked ? RedHeart : Heart}
                      alt="좋아요"
                    />
                  </button>

                  <img
                    className="mainPostComm"
                    src={Comment}
                    alt="댓글 남기기"
                  />
                  <div className="mainPostFooterBtn-left">
                    <img
                      className="mainPostSave"
                      src={Collect}
                      alt="저장하기"
                    />
                  </div>
                </div>
              </div>
              <div className="mainPostFooterHeart">
                <span>이 게시물을 00명이 좋아합니다.</span>
              </div>
              <div className="mainPostFooterCommentList">
                <div className="mainPostFooterComment">
                  <img src={Dog} alt="댓글 단 유저 이미지" />
                  <span>sound6519@gmail.com</span>
                  <span className="commentSpan">너무좋아요</span>
                  <button onClick={toggleLike}>
                    <img src={isLiked ? RedHeart : Heart} alt="작은 하트" />
                  </button>
                </div>
              </div>
              <div className="mainPostFooterCommentInput">
                <input type="text" placeholder="댓글 달기 ..." />
                <div className="mainPostFooterCommentBtn">
                  <button type="button">
                    <span>게시</span>
                  </button>
                </div>
                <img src={Emoji} alt="이모지" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainSection
