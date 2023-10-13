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

function PostModal() {
  const [modal, setModal] = useState(false)
  const [nextModal, setNextModal] = useState()

  const toggleModal = () => {
    setModal(!modal)
  }

  const toggleNextModal = () => {
    setModal(!modal)
    setNextModal(!nextModal)
  }

  const togglePostModal = () => {
    alert("게시가 완료되었습니다!")
    setNextModal(!nextModal)
  }

  const fileClick = () => {
    selectFile.current.click()
  }

  const selectFile = useRef("")

  return (
    <div>
      <div onClick={toggleModal} className="btn-modal">
        <img src={Post} alt="만들기 이미지" />
        <span>만들기</span>
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
                    ref={selectFile}
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
                <button className="next-modal" onClick={togglePostModal}>
                  공유하기
                </button>
              </div>
              <div className="post-body">
                <div className="img-wrapper">
                  <img src={PostImg} alt="첨부이미지" />
                </div>
                <div className="text-wrapper">
                  <div className="post-userInfo">
                    <div className="post-info">
                      <img src={Profile} alt="유저 프로필 이미지" />
                      <div>여기는 유저 정보</div>
                    </div>
                  </div>
                  <div contenteditable className="post-main">
                    <textarea placeholder="문구를 입력하세요..." />
                  </div>
                  <div className="post-etc">
                    <div>
                      <button type="button" className="emoji-btn">
                        <img src={Emoji} alt="이모티콘" />
                      </button>
                    </div>
                    <div className="post-textLength">2200 / 2200</div>
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
