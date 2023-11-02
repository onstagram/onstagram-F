import React, { useState } from "react"

import Etc from "../../assets/Fictogram/Etc/etc.png"
import ViewDeleteModal from "./ViewDeleteModal"
import PostEditModal from "./PostEditModal"

function ViewDetailModal({ post, showPost, member, reply }) {
  const [detailModal, setdetailModal] = useState()

  const detailToggleModal = () => {
    setdetailModal(!detailModal)
  }

  const onAlert = () => {
    alert("구현중인 기능입니다.")
    setdetailModal(!detailModal)
  }

  return (
    <div>
      <div onClick={detailToggleModal}>
        <img src={Etc} alt="기타 선택" />
      </div>
      {detailModal && (
        <div className="detailWrapper">
          <div className="detailOverlay">
            <div className="detailContent">
              <div className="detailContentList">
                <div className="contentList-item contentList-itemRed">
                  <ViewDeleteModal
                    post={post}
                    member={member}
                    detailToggleModal={detailToggleModal}
                  />
                </div>
                <div className="contentList-item">
                  <PostEditModal
                    post={post}
                    showPost={showPost}
                    member={member}
                    reply={reply}
                    detailToggleModal={detailToggleModal}
                  />
                </div>
                <div className="contentList-item" onClick={onAlert}>
                  <p>좋아요 수 숨기기</p>
                </div>
                <div className="contentList-item" onClick={onAlert}>
                  <p>댓글 기능 해제</p>
                </div>
                <div className="contentList-item" onClick={onAlert}>
                  <p>게시물로 이동</p>
                </div>
                <div className="contentList-item" onClick={onAlert}>
                  <p>이 계정 정보</p>
                </div>
                <div className="contentList-item">
                  <p onClick={detailToggleModal}>취소</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default ViewDetailModal
