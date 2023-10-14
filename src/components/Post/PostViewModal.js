import React, { useState } from "react"

import Etc from "../../assets/Fictogram/Etc/etc.png"
import Heart from "../../assets/Fictogram/Post/heart.png"
import Comment from "../../assets/Fictogram/Post/comment.png"
import Collection from "../../assets/Fictogram/Post/bookmark.png"
import Share from "../../assets/Fictogram/Nav/message.png"

function PostViewModal(props) {
  const [modal, setModal] = useState()
  const post = props.posts

  const showPost = () => {
    setModal(!modal)
  }

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
                    <button className="postBtn">
                      <img src={Heart} alt="좋아요" />
                    </button>
                    <button className="postBtn">
                      <img src={Comment} alt="댓글" />
                    </button>
                    <button className="postBtn">
                      <img src={Share} alt="공유" />
                    </button>
                  </div>
                  <button className="postBtn">
                    <img src={Collection} alt="공유" />
                  </button>
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
