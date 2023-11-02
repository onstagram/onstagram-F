import React, { useEffect, useState } from "react"
import "./PostDetail.css"
import { useDispatch } from "react-redux"
import { __deletePostMain } from "../../redux/module/postsSlice"

function ViewDeleteModal(props) {
  const dispatch = useDispatch()
  const [modal, setModal] = useState()

  const toggleModal = () => {
    setModal(!modal)
  }

  const checkbtn = () => {
    console.log(post + " 맞냐? ")
  }

  const { post } = props

  const postId = post.postId

  const onClickDeletePost = (postId) => {
    console.log(postId)
    dispatch(__deletePostMain({ postId: postId }))
    setModal(!modal)
    props.detailToggleModal()
  }

  return (
    <div>
      <p onClick={toggleModal}>삭제</p>

      {modal && (
        <div className="deletePostWrapper">
          <div className="deletePostOverlay">
            <div className="deletePostContent">
              <div className="deletePostHeader">
                <p>게시물을 삭제할까요?</p>
                <span>이 게시물을 삭제하시겠어요?</span>
              </div>
              <div className="deletePostBody">
                <button
                  className="deletePostBody-btn deletePostBody-btnRed"
                  onClick={onClickDeletePost}
                >
                  삭제
                </button>
                <button
                  className="deletePostBody-btn deletePostBody-btnRadius"
                  // onClick={toggleModal}
                  onClick={checkbtn}
                >
                  취소
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default ViewDeleteModal
