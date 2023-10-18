import React, { useCallback, useEffect, useRef, useState } from "react"
import Heart from "../../assets/Fictogram/Post/heart.png"
import Comment from "../../assets/Fictogram/Post/comment.png"
import Collection from "../../assets/Fictogram/Post/bookmark.png"
import Share from "../../assets/Fictogram/Nav/message.png"
import Emoji from "../../assets/Fictogram/Post/emoji.png"
import whiteXBtn from "../../assets/Fictogram/Etc/whiteXBtn.png"
import ViewDetailModal from "./ViewDetailModal"
import Etc from "../../assets/Fictogram/Etc/etc.png"
import { useDispatch, useSelector } from "react-redux"
import { __getPostThunk } from "../../redux/module/uploadSlice"

function PostViewModal(props) {
  const dispatch = useDispatch()
  const today = new Date()
  const formattedDate = `${today.getFullYear()}년 ${
    today.getMonth() + 1
  }월 ${today.getDate()}일`
  // const userId = props.userId

  const [member, setMember] = useState([
    {
      userId: "sound5519",
      userName: "이진호",
      email: "sound5519@gmail.com",
      userPhone: "010-0000-0000",
    },
  ])

  const [showModal, setShowModal] = useState()

  const [like, setLike] = useState([
    {
      likeId: "1",
      userId: "sound4519",
      postId: "1",
      likeDate: formattedDate,
      count: "10",
    },
  ])
  
  const [reply, setReply] = useState([
    {
      commentId: "sound5519",
      userId: "sound4519",
      postId: "1",
      content: "댓글입니다",
      commentDate: formattedDate,
      userImg:
        "https://image.dongascience.com/Photo/2020/03/5bddba7b6574b95d37b6079c199d7101.jpg",
    },
  ])

  const [postImg, setPostImg] = useState([
    {
      imgId: "1",
      uploadImgs: [
        "https://image.dongascience.com/Photo/2020/03/5bddba7b6574b95d37b6079c199d7101.jpg",
        "https://image.dongascience.com/Photo/2020/03/5bddba7b6574b95d37b6079c199d7101.jpg",
        "https://image.dongascience.com/Photo/2020/03/5bddba7b6574b95d37b6079c199d7101.jpg",
        "https://image.dongascience.com/Photo/2020/03/5bddba7b6574b95d37b6079c199d7101.jpg",
        "https://image.dongascience.com/Photo/2020/03/5bddba7b6574b95d37b6079c199d7101.jpg",
      ],
      postId: "1",
    },
  ])
  const post = props.posts
    
  const handleChange=(e)=>{
    setReply([
      {
        commentId: "sound5519",
        userId: "sound4519",
        postId: "1",
        content: e.target.value,
        commentDate: formattedDate,
        userImg:
          "https://image.dongascience.com/Photo/2020/03/5bddba7b6574b95d37b6079c199d7101.jpg",
      },
    ])
  }
  const showPost=useCallback((e)=>{
    console.log("임시", setLike, setPostImg, postImg)
    if(showModal===true){
      setShowModal(false)
    }else{
      setShowModal(true)
    }
  });

  const showPosts = (userId) => {
    setShowModal(!showModal)
    dispatch(__getPostThunk)
  }

  // () => showPosts(userId) 임시

  return (
      <form>
      <div className="showPosts" onClick={showPost}>
        {post.map((item) => (
          <div className="showPostImgs">
            <div className="showPostImgsItems">
              <div className="showPostImgsItem">
                <img
                  className="showPostImg"
                  src={item.userImg}
                  alt="게시글 이미지"
                />
              </div>{" "}
              <div className="showPostImgsItem">
                <img
                  className="showPostImg"
                  src={item.userImg}
                  alt="게시글 이미지"
                />
              </div>{" "}
              <div className="showPostImgsItem">
                <img
                  className="showPostImg"
                  src={item.userImg}
                  alt="게시글 이미지"
                />
              </div>{" "}
              <div className="showPostImgsItem">
                <img
                  className="showPostImg"
                  src={item.userImg}
                  alt="게시글 이미지"
                />
              </div>{" "}
              <div className="showPostImgsItem">
                <img
                  className="showPostImg"
                  src={item.userImg}
                  alt="게시글 이미지"
                />
              </div>{" "}
              <div className="showPostImgsItem">
                <img
                  className="showPostImg"
                  src={item.userImg}
                  alt="게시글 이미지"
                />
              </div>
            </div>
          </div>
        ))}
        {/* <div className="showPostImgs">
          <img className="showPostImg" src={Profile} alt="게시글 이미지" />
          <img className="showPostImg" src={Profile} alt="게시글 이미지" />
          <img className="showPostImg" src={Profile} alt="게시글 이미지" />
        </div> */}
      </div>
      {showModal && (
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
                        <img
                          className="postBody-userinfoImg "
                          src={item.userImg}
                          alt="유저 이미지"
                        />
                      </div>
                      <span>{item.userId}</span>
                      <ViewDetailModal post={post} showPost={showPost} />
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

                <div className="postCommentsList">
                  {reply.map((item,index) => (
                    <div key={index} className="postComments">
                      <div className="postComment">
                        <img name="userImg" className="postCommentUserImg" src={item.userImg} alt="유저 이미지" />
                        <div className="commentIdName">
                          <span name="commentId" className="postCommentId">{item.commentId}</span>
                          <span name="content" className="postCommentContent">{item.content}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
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
                <div className="postCount">
                  {like.map((item) => (
                    <span>이 게시글을 {item.count}명이 좋아합니다.</span>
                  ))}
                </div>
                <div className="postCommentInputs">
                  <div className="postEmoji">
                    <img src={Emoji} alt="이모티콘" />
                  </div>
                  <textarea
                    className="postTextarea"
                    name="replyContentInput"
                    placeholder="댓글을 입력하세요 ..."
                    onChange={handleChange}
                  />
                  <div className="postCommentBtn">
                    <button type="submit" onClick={showPost}>게시</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="postCloseBtn">
            <button onClick={() => setShowModal(false)}>
              <img src={whiteXBtn} alt="종료버튼" />
            </button>
          </div>
        </div>
      )}
      </form>
  )
}

export default PostViewModal
