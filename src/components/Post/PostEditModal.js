import React, { useState } from "react"

import GrayEmoji from "../../assets/Fictogram/Post/emoji-gray.png"
import Location from "../../assets/Fictogram/Post/location.png"
import Arrow from "../../assets/Fictogram/Post/arrow.png"

function PostEditModal(props) {
  const [modal, setModal] = useState()
  const [inputCount, setInputCount] = useState(0)

  const onInputHandler = (e) => {
    setInputCount(e.target.value.length)
  }

  const post = props.viewPost

  const toggleModal = () => {
    setModal(!modal)
  }

  const completeModal = () => {
    alert("수정이 완료되었습니다 ! (구현중..)")
    // setModal(!modal)
    setModal(!modal)
    props.detailToggleModal()
  }

  return (
    <div>
      <div>
        <p onClick={toggleModal}>수정</p>
      </div>
      {modal && (
        <div className="postEditWrapper">
          <div className="postEditContent">
            <div className="postEditContent-header">
              <button type="button" onClick={toggleModal}>
                취소
              </button>
              <h3>정보수정</h3>
              <button
                className="postEdit-complete"
                type="submit"
                onClick={completeModal}
              >
                완료
              </button>
            </div>
            {post.map((item) => (
              <div className="postEditContent-wrapper">
                <div className="postImg">
                  <img src={item.userImg} alt="게시물 이미지" />
                </div>
                <div className="postEditContents">
                  <div className="postEditHeader">
                    <img src={item.userImg} alt="유저 이미지" />
                    <span>{item.userId}</span>
                  </div>
                  <div className="postEditBody">
                    <div className="postEditCaption">
                      <textarea onChange={onInputHandler} maxLength="2200">
                        {item.caption}
                      </textarea>
                    </div>
                    <div className="postEditEmoji">
                      <img src={GrayEmoji} alt="이모티콘" />

                      <p>{inputCount} / 2200</p>
                    </div>
                    <div className="postEdit-location">
                      <input type="text" placeholder="위치추가" />
                      <img src={Location} alt="위치" />
                    </div>
                    <div className="postEdit-accessed">
                      <span>접근성</span>
                      <img src={Arrow} alt="하위 메뉴 선택" />
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <div></div>
          </div>
        </div>
      )}
    </div>
  )
}

export default PostEditModal
