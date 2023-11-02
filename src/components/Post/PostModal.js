import React, { useEffect } from "react"
import { useState } from "react"
import { useRef } from "react"
import "./Post.css"

import Post from "../../assets/Fictogram/Nav/post.png"
import PostImg from "../../assets/Fictogram/Post/post-img.png"
import Emoji from "../../assets/Fictogram/Post/emoji-gray.png"
import Location from "../../assets/Fictogram/Post/location.png"
import Arrow from "../../assets/Fictogram/Post/arrow.png"
import ProfileImg from "../../assets/Fictogram/Nav/profile.png"
import { useDispatch } from "react-redux"
import { __addPostThunk } from "../../redux/module/uploadSlice"
import { __postsMain } from "../../redux/module/postsSlice"
import jwtDecode from "jwt-decode"
import { __getUserEditThunk } from "../../redux/module/userSlice"

function PostModal() {
  const dispatch = useDispatch()
  const imgRef = useRef()
  const [userId, setUserId] = useState()
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
  const [inputCount, setInputCount] = useState(`0`)

  // const today = new Date()
  // const formattedDate = `${today.getFullYear()}년 ${
  //   today.getMonth() + 1

  // }월 ${today.getDate()}일`

  const [caption, setCaption] = useState()
  const [imageSrc, setImageSrc] = useState()
  const [postImg, setPostImg] = useState()
  const [modal, setModal] = useState(false)
  const [nextModal, setNextModal] = useState()
  const [post, setPost] = useState()

  const [userInfo, setUserInfo] = useState(null)
  const [userImg, setUserImg] = useState()
  const [email, setEmail] = useState()

  useEffect(() => {
    dispatch(__getUserEditThunk(userId))
      .then((response) => {
        setUserInfo(response.payload)
        setUserImg(response.payload.userImg)
        setEmail(response.payload.email)
      })

      .catch((error) => {
        console.log(error)
      })
  }, [dispatch, userId])

  const SaveImgFile = () => {
    const file = imgRef.current.files[0]
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onloadend = () => {
      setImageSrc(reader.result)
      setPostImg(file)
      setModal(!modal)
      setNextModal(!nextModal)
      setInputCount(!inputCount)
    }
  }
  const toggleModal = () => {
    setModal(!modal)
  }

  const toggleNextModal = () => {
    setModal(!modal)
    setNextModal(!nextModal)
  }

  const fileClick = () => {
    imgRef.current.click()
  }

  const onSave = (e) => {
    e.preventDefault()
    const newPost = new FormData()
    // newPost.append("userId", userId)
    newPost.append("caption", caption)
    newPost.append("file", postImg)

    for (const pair of newPost.entries()) {
      console.log(pair[0] + ": " + pair[1])
    }

    dispatch(__addPostThunk(newPost))
      .unwrap()
      .then((response) => {
        if (response) {
          alert("게시가 완료되었습니다 !")
          setPostImg("")
          setCaption("")
          setInputCount("0")
          setNextModal(!nextModal)
        }
      })
  }

  const handlePostImg = (e) => {
    setPostImg(e.target.img)
  }

  const handleCaption = (e) => {
    setCaption(e.target.value)
  }

  return (
    <div>
      <div onClick={toggleModal} className="btn-modal">
        <img className="menu-item-img" src={Post} alt="만들기 이미지" />
        <p>만들기</p>
      </div>
      {modal && (
        <div className="modal">
          <div className="overlay">
            <div className="modal-content">
              <div className="modal-header">
                <button className="close-modal" onClick={toggleModal}>
                  취소
                </button>
                <h3>새 게시물 만들기</h3>
                <button className="next-modal" onClick={toggleNextModal}>
                  다음
                </button>
              </div>
              <div className="modal-body">
                <div className="modal-imgSelect">
                  <img src={PostImg} alt="사진&영상" />
                  <span>사진과 영상을 여기에 끌어다 놓으세요</span>
                  <input
                    type="file"
                    style={{ display: "none" }}
                    ref={imgRef}
                    onChange={SaveImgFile}
                  />
                  <button className="file-btn" onClick={fileClick}>
                    컴퓨터에서 선택
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {nextModal && (
        <div className="modal">
          <div className="overlay">
            <div className="post-content">
              <div className="modal-header">
                <button className="close-modal" onClick={toggleNextModal}>
                  이전으로
                </button>
                <h3>새 게시물 만들기</h3>
                <button className="next-modal" onClick={onSave}>
                  공유하기
                </button>
              </div>
              <div className="post-body">
                <div className="img-wrapper">
                  <img
                    src={imageSrc}
                    alt="첨부이미지"
                    name="imgId"
                    className="mainImgFile"
                    onChange={handlePostImg}
                  />
                </div>
                <div className="text-wrapper">
                  <div className="post-userInfo">
                    <div className="post-info">
                      <img src={userImg} alt="유저 프로필 이미지" />
                      <div className="post-email">
                        <span>{email}</span>
                      </div>
                    </div>
                  </div>
                  <div contenteditable className="post-main">
                    <textarea
                      placeholder="문구를 입력하세요..."
                      name="caption"
                      maxLength={2200}
                      onChange={handleCaption}
                    />
                  </div>
                  <div className="post-etc">
                    <div>
                      <button type="button" className="emoji-btn">
                        <img src={Emoji} alt="이모티콘" />
                      </button>
                    </div>
                    <div className="post-textLength">{inputCount}/ 2200</div>
                  </div>
                  <div className="post-location">
                    <input
                      type="text"
                      placeholder="위치 정보를 입력해주세요."
                    />
                    <img src={Location} alt="지역 이미지" />
                  </div>
                  <div className="post-access">
                    <span>접근성</span>
                    <img src={Arrow} alt="세부메뉴" />
                  </div>
                  <div className="post-advanced">
                    <span>고급설정</span>
                    <img src={Arrow} alt="세부메뉴" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default PostModal
