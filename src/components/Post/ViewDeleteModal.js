import React, { useState } from "react"
import "./PostDetail.css"

function ViewDeleteModal(props) {
  const [modal, setModal] = useState()

  const toggleModal = () => {
    setModal(!modal)
  }

  const DeletePost = () => {
    alert("게시물이 삭제되었습니다.")
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
                  onClick={DeletePost}
                >
                  삭제
                </button>
                <button
                  className="deletePostBody-btn deletePostBody-btnRadius"
                  onClick={toggleModal}
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
