import React, { useEffect, useRef, useState } from "react"

import Heart from "../../assets/Fictogram/Post/heart.png"
import ProfileImg from "../../assets/Fictogram/Nav/profile.png"
import Comment from "../../assets/Fictogram/Post/comment.png"
import Collection from "../../assets/Fictogram/Post/bookmark.png"
import RedHeart from "../../assets/Fictogram/Post/Redheart.png"
import Share from "../../assets/Fictogram/Nav/message.png"
import Emoji from "../../assets/Fictogram/Post/emoji.png"
import whiteXBtn from "../../assets/Fictogram/Etc/whiteXBtn.png"
import ViewDetailModal from "./ViewDetailModal"
import Etc from "../../assets/Fictogram/Etc/etc.png"
import { useDispatch, useSelector, useStore } from "react-redux"
import {
  __getPostRoadThunk,
  __getPostThunk,
} from "../../redux/module/uploadSlice"
import jwtDecode from "jwt-decode"

function PostViewModal({ post, member }) {
  const dispatch = useDispatch()
  const [userId, setUserId] = useState()
  const [selectedPostId, setSelectedPostId] = useState(null)
  const [postImg, setPostImg] = useState()
  const [userImg, setUserImg] = useState()
  const Token = localStorage.getItem("TOKEN")

  if (Token && userId === undefined) {
    // 토큰이 존재하는 경우
    try {
      // 토큰을 해석하여 userId를 추출합니다.
      const decodedToken = jwtDecode(Token)
      const userId = decodedToken.userId
      setUserId(userId)
      console.log("userId:", userId)
    } catch (error) {
      console.error("토큰 해석에 실패했습니다.", error)
    }
  } else if (!Token) {
    console.log("토큰이 로컬 스토리지에 존재하지 않습니다.")
  }

  const [showModal, setShowModal] = useState()

  const [like, setLike] = useState([
    {
      like: "1",
      count: "10",
    },
  ])
  const [likeCount, setLikeCount] = useState("0")
  const [isLiked, setIsLiked] = useState(false)
  const [reply, setReply] = useState([
    {
      commentId: "sound5519",
      userId: "sound4519",
      postId: "1",
      content: "댓글입니다",
      userImg:
        "https://image.dongascience.com/Photo/2020/03/5bddba7b6574b95d37b6079c199d7101.jpg",
    },
  ])

  const [userInfo, setUserInfo] = useState()

  useEffect(() => {
    dispatch(__getPostRoadThunk(userId)).then((response) => {
      const postDtoList = response.payload.data.postDtoList
      const postImgList = postDtoList.map((item) => item.postImg)
      setPostImg(postImgList)
      setUserInfo(response)
    })
  }, [dispatch, userId])

  console.log(postImg + "하이")
  console.log(userInfo + "헤이")
  // console.log(post + 이거임?);

  const showPost = () => {
    setShowModal(!showModal)
    console.log("임시", setLike)
  }

  const showPosts = (postId) => {
    setShowModal(!showModal)
    setSelectedPostId(postId)
  }

  const toggleLike = () => {
    if (isLiked) {
      setIsLiked(false)
      setLikeCount(likeCount + 1)
      console.log(likeCount)
    } else {
      setIsLiked(true)
      setLikeCount(likeCount - 1)
      console.log(likeCount)
    }
  }

  // () => showPosts(userId) 임시

  return (
    <>
      <div className="showPosts">
        <div className="showPostImgs">
          {post.map((item) => (
            <div className="showPostImgsItems">
              <div className="showPostImgsItem">
                <img
                  id={item.postId}
                  className="showPostImg"
                  src={item.postImg}
                  alt="게시글 이미지"
                  onClick={showPosts}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      {showModal && (
        <div className="postWrapper">
          <div className="postOverlay">
            <div className="postContent">
              {/* {post.map((item) => ( */}
              <div className="postContentItems">
                <div className="postContentItem">
                  <img
                    id={post.postId}
                    className="postContentImg"
                    src={postImg}
                    alt="게시글 이미지"
                  />
                </div>
              </div>
              {/* ))} */}
              <div className="postBody">
                <div className="postBody-user">
                  <div className="postBody-userinfo">
                    <div className="postBody-userImg">
                      <img
                        className="postBody-userinfoImg "
                        src={member.userImg}
                        alt="유저 이미지"
                      />
                    </div>
                    <span>{member.email}</span>
                    <ViewDetailModal
                      post={post}
                      showPost={showPost}
                      reply={reply}
                      member={member}
                    />
                  </div>
                </div>
                <div className="postBody-text">
                  {/* {post.map((item) => ( */}
                  <div>
                    <div className="caption">
                      <p>{post.caption}</p>
                    </div>
                    <div className="postDate">
                      <span>{post.postDate}</span>
                    </div>
                  </div>
                  {/* ))} */}
                </div>

                <div className="postCommentsList">
                  {/* {reply &&
                    reply.map((item) => (
                      <div className="postComments">
                        <div className="postComment">
                          <img src={item.userImg} alt="유저 이미지" />
                          <div className="commentIdName">
                            <span>{item.commentId}</span>
                            <span>{item.content}</span>
                          </div>
                        </div>
                        <div className="postComment">
                          <img src={item.userImg} alt="유저 이미지" />
                          <div className="commentIdName">
                            <span>{item.commentId}</span>
                            <span>{item.content}</span>
                          </div>
                        </div>
                        <div className="postComment">
                          <img src={item.userImg} alt="유저 이미지" />
                          <div className="commentIdName">
                            <span>{item.commentId}</span>
                            <span>{item.content}</span>
                          </div>
                        </div>
                        <div className="postComment">
                          <img src={item.userImg} alt="유저 이미지" />
                          <div className="commentIdName">
                            <span>{item.commentId}</span>
                            <span>{item.content}</span>
                          </div>
                        </div>{" "}
                        <div className="postComment">
                          <img src={item.userImg} alt="유저 이미지" />
                          <div className="commentIdName">
                            <span>{item.commentId}</span>
                            <span>{item.content}</span>
                          </div>
                        </div>{" "}
                        <div className="postComment">
                          <img src={item.userImg} alt="유저 이미지" />
                          <div className="commentIdName">
                            <span>{item.commentId}</span>
                            <span>{item.content}</span>
                          </div>
                        </div>{" "}
                        <div className="postComment">
                          <img src={item.userImg} alt="유저 이미지" />
                          <div className="commentIdName">
                            <span>{item.commentId}</span>
                            <span>{item.content}</span>
                          </div>
                        </div>{" "}
                        <div className="postComment">
                          <img src={item.userImg} alt="유저 이미지" />
                          <div className="commentIdName">
                            <span>{item.commentId}</span>
                            <span>{item.content}</span>
                          </div>
                        </div>{" "}
                        <div className="postComment">
                          <img src={item.userImg} alt="유저 이미지" />
                          <div className="commentIdName">
                            <span>{item.commentId}</span>
                            <span>{item.content}</span>
                          </div>
                        </div>
                      </div>
                    ))} */}
                </div>
                <div className="postFooter">
                  <div className="postFictos">
                    <button className="postBtn" onClick={toggleLike}>
                      <img src={isLiked ? RedHeart : Heart} alt="좋아요" />
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
                <div className="postCount">
                  {like &&
                    like.map((item) => (
                      <span>이 게시글을 {item.count}명이 좋아합니다.</span>
                    ))}
                </div>
                <div className="postCommentInputs">
                  <div className="postEmoji">
                    <img src={Emoji} alt="이모티콘" />
                  </div>
                  <textarea
                    className="postTextarea"
                    placeholder="댓글을 입력하세요 ..."
                  />
                  <div className="postCommentBtn">
                    <button type="submit">게시</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="postCloseBtn">
            <button onClick={() => setShowModal(!showModal)}>
              <img src={whiteXBtn} alt="종료버튼" />
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default PostViewModal
