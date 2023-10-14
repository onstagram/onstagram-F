import React, { useState } from "react"

import Profile from "../../assets/Fictogram/Nav/profile.png"
import Etc from "../../assets/Fictogram/Etc/etc.png"
import Heart from "../../assets/Fictogram/Post/heart.png"
import Comment from "../../assets/Fictogram/Post/comment.png"
import Share from "../../assets/Fictogram/Post/bookmark.png"

function PostViewModal(props) {
  const [modal, setModal] = useState()
  const post = props.posts

  const showPost = () => {
    setModal(!modal)
  }

  const skillList = () => {}

  return (
    <>
      <div className="showPosts" onClick={showPost}>
        {post.map((item) => (
          <div className="showPostImgs">
            <img
              className="showPostImg"
              src={item.userImg}
              alt="게시글 이미지"
            />
            <img
              className="showPostImg"
              src={item.userImg}
              alt="게시글 이미지"
            />
            <img
              className="showPostImg"
              src={item.userImg}
              alt="게시글 이미지"
            />
          </div>
        ))}
        {/* <div className="showPostImgs">
          <img className="showPostImg" src={Profile} alt="게시글 이미지" />
          <img className="showPostImg" src={Profile} alt="게시글 이미지" />
          <img className="showPostImg" src={Profile} alt="게시글 이미지" />
        </div> */}
      </div>
      {modal && (
        <div className="postWrapper">
          <div className="postOverlay">
            <div className="postContent">
              <div className="postContentItems">
                {post.map((item) => (
                  <div className="postContentItem">
                    <img
                      className="postContentImg"
                      src={item.userImg}
                      alt="유저이미지"
                    />
                  </div>
                ))}
              </div>
              <div className="postBody">
                <div className="postBody-user">
                  {post.map((item) => (
                    <div className="postBody-userinfo">
                      <div className="postBody-userImg">
                        <img src={item.userImg} alt="유저 이미지" />
                      </div>
                      <span>{item.userId}</span>
                      <img src={Etc} alt="기타 선택" />
                    </div>
                  ))}
                </div>
                <div className="postBody-text">
                  {post.map((item) => (
                    <div>
                      <div className="caption">
                        <p>{item.caption}</p>
                      </div>
                      <div className="postDate">
                        <span>{item.postDate}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="postComments">댓글</div>
                <div className="postFooter">
                  <div className="postFictos">
                    <img className="postFictoheart" src={Heart} alt="좋아요" />
                    <img className="postFictoGram" src={Comment} alt="댓글" />
                  </div>
                  <div>
                    <img className="postFictoGram" src={Share} alt="공유" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default PostViewModal
