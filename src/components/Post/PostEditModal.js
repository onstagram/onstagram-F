import React, { useState } from "react"

import GrayEmoji from "../../assets/Fictogram/Post/emoji-gray.png"
import Location from "../../assets/Fictogram/Post/location.png"
import Arrow from "../../assets/Fictogram/Post/arrow.png"
import ProfileImg from "../../assets/Fictogram/Nav/profile.png"
import { useDispatch } from "react-redux"
import { __EditPostMain } from "../../redux/module/postsSlice"

function PostEditModal({ post, showPost, member, reply, detailToggleModal }) {
  const dispatch = useDispatch()
  const [modal, setModal] = useState()
  const [inputCount, setInputCount] = useState("0")
  const [caption, setCaption] = useState()
  const [postId, setPostId] = useState({})

  const postIds = post.postId
  const captions = post.caption

  console.log(post[0].postId, captions + "나야")
  const onInputHandler = (e) => {
    setInputCount(e.target.value.length)
  }
  const onEdit = (e) => {
    e.preventDefault()

    for (let i = 0; i < post.length; i++) {
      let postId = post[i].postId
      let caption = post[i].caption
    }

    dispatch(__EditPostMain({ postId, caption })).then((response) => {
      if (response) {
        alert("게시물이 성공적으로 수정되었습니다 !")
        setPostId(response.postId)
        setCaption(response.caption)
        new setModal(!modal)
        detailToggleModal()
      } else {
        alert("게시물 수정에 실패했습니다.")
        new setModal(!modal)
        detailToggleModal()
      }
    })
  }

  // console.log(post)
  console.log(postId, caption + "나야")

  const toggleModal = () => {
    setModal(!modal)
  }

  // const completeModal = () => {
  //   alert("수정이 완료되었습니다 ! (구현중..)")

  //   new setModal(!modal)
  //   props.detailToggleModal()
  // }

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
                onClick={onEdit}
              >
                완료
              </button>
            </div>
            {post.map((item) => (
              <div className="postEditContent-wrapper">
                <div className="postImg">
                  <img src={item.postImg} alt="게시물 이미지" />
                </div>
                <div className="postEditContents">
                  <div className="postEditHeader">
                    <img src={member.userImg} alt="유저 이미지" />
                    <span>{member.email}</span>
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
