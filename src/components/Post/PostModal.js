import React from "react"
import { useState } from "react"
import { useRef } from "react"
import "./Post.css"

import Post from "../../assets/Fictogram/Nav/post.png"
import PostImg from "../../assets/Fictogram/Post/post-img.png"
import Emoji from "../../assets/Fictogram/Post/emoji-gray.png"
import Location from "../../assets/Fictogram/Post/location.png"
import Arrow from "../../assets/Fictogram/Post/arrow.png"
import Profile from "../../assets/Fictogram/Nav/profile.png"
import { useDispatch } from "react-redux"
import { __addPostThunk } from "../../redux/module/uploadSlice"
import { __postsMain } from "../../redux/module/postsSlice"

function PostModal() {
  const dispatch = useDispatch()
  const imgRef = useRef()

  const [inputCount, setInputCount] = useState(`0`)

  const today = new Date()
  const formattedDate = `${today.getFullYear()}년 ${
    today.getMonth() + 1
  }월 ${today.getDate()}일`

  const [fileName, setFileName] = useState()
  const [caption, setCaption] = useState()
  const [imageSrc, setImageSrc] = useState()
  const [postImg, setPostImg] = useState()
  const [modal, setModal] = useState(false)
  const [nextModal, setNextModal] = useState()
  const [post, setPost] = useState([
    {
      postId: "1",
      userId: "sound4519",
      postImg:
        "https://image.dongascience.com/Photo/2020/03/5bddba7b6574b95d37b6079c199d7101.jpg",
      caption: "안녕하세요",
      postDate: formattedDate,
    },
  ])

  // const SaveImgFile = () => {
  //   const file = imgRef.current.files[0]
  //   if (file) {
  //     const formData = new FormData()
  //     formData.append("image", file)

  //     fetch("/post/register", {
  //       method: "POST",
  //       body: formData,
  //     })
  //       .then((response) => response.json())
  //       .then((data) => {
  //         setPostImg(data.imageUrl)
  //         setModal(!modal)
  //         setNextModal(!nextModal)
  //         setInputCount(!inputCount)
  //       })
  //       .catch((error) => {
  //         console.log("Error uploading image", error)
  //       })
  //   }
  // }
  const SaveImgFile = () => {
    const file = imgRef.current.files[0]
    const fileName = file.name
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
    const onInputHandler = (e) => {
      setInputCount(e.target.value.length)
    }
    // console.log(setPost + "이건 임시로 넣어둔거에요")
  }

  const toggleNextModal = () => {
    setModal(!modal)
    setNextModal(!nextModal)
  }

  const togglePostModal = () => {
    alert("게시가 완료되었습니다!")
    console.log(formattedDate)
  }

  const fileClick = () => {
    imgRef.current.click()
  }

  // const onSave = () => {
  //   const newPost = new FormData()
  //   newPost.append("userId", "sound4519")
  //   newPost.append("caption", caption)
  //   newPost.append("postDate", formattedDate)
  //   newPost.append("postImg", postImg, postImg.name)

  //   dispatch(__addPostThunk(newPost))
  //     .unwrap()
  //     .then((result) => {
  //       if (result) {
  //         alert("게시가 완료되었습니다 !")
  //         setPostImg({})
  //         setCaption("")
  //         setInputCount("0")
  //         setNextModal(!nextModal)
  //       }
  //     })
  // }
  const onSave = async (e) => {
    e.preventDefault()
    const newPost = new FormData()
    newPost.append("userId", "sound4519")
    newPost.append("caption", caption)
    newPost.append("postDate", formattedDate)
    newPost.append("postImg", postImg)

    await dispatch(__addPostThunk(newPost))
      .unwrap()
      .then((response) => {
        if (response) {
          alert("게시가 완료되었습니다 !")
          setPostImg("")
          setCaption("")
          setInputCount("0")
          setNextModal(!nextModal)
          dispatch(__postsMain)
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
        <img src={Post} alt="만들기 이미지" />
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
                    accept="image/jpg, image/jpeg"
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
                    src={imageSrc ? imageSrc : { Profile }}
                    alt="첨부이미지"
                    name="imgId"
                    onChange={handlePostImg}
                  />
                </div>
                <div className="text-wrapper">
                  <div className="post-userInfo">
                    <div className="post-info">
                      {post.map((item) => (
                        <>
                          <img src={item.postImg} alt="유저 프로필 이미지" />
                          <div>
                            <span>{item.userId}</span>
                          </div>
                        </>
                      ))}
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
