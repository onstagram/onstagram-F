import React, { useCallback, useEffect, useMemo, useState } from "react"
import Heart from "../../assets/Fictogram/Post/heart.png"
import Comment from "../../assets/Fictogram/Post/comment.png"
import Collection from "../../assets/Fictogram/Post/bookmark.png"
import Share from "../../assets/Fictogram/Nav/message.png"
import Emoji from "../../assets/Fictogram/Post/emoji.png"
import whiteXBtn from "../../assets/Fictogram/Etc/whiteXBtn.png"
import ViewDetailModal from "./ViewDetailModal"
import Etc from "../../assets/Fictogram/Etc/etc.png"
import axiosIns from "../../api/api"
import { useDispatch, useSelector } from "react-redux"
import { __getPostThunk } from "../../redux/module/uploadSlice"
import "./Post.css"


function PostViewModal(props) {
  const dispatch = useDispatch()
  const today = new Date()
  const formattedDate = `${today.getFullYear()}년 ${
    today.getMonth() + 1
  }월 ${today.getDate()}일`
  // const userId = props.userId
  const [reply, setReply] = useState([
    {
      commentId: '1',
      userId: '1',
      postId: '',
      content: '',
      commentDate: formattedDate,
      userImg:
        "https://image.dongascience.com/Photo/2020/03/5bddba7b6574b95d37b6079c199d7101.jpg",
    }, 
  ])


  const [member, setMember] = useState([
    {
      userId: "sound5519",
      userName: "이진호",
      email: "sound5519@gmail.com",
      userPhone: "010-0000-0000",
    },
  ])

  const [showModal, setShowModal] = useState(true)

  const [like, setLike] = useState([
    {
      likeId: "1",
      userId: "sound4519",
      postId: "1",
      likeDate: formattedDate,
      count: "10",
    },
  ]);

  const onChangeContent=(e)=>{
    const newContent=e.target.value;
    
      const updatedReply=reply.map((item,index)=>{
        if(index===0){
          return{...item, content:newContent};
        }
        return item;
      });
    
    setReply(updatedReply)
    }

  const post = props.posts


  const getPost =async(commentId, userId, postId, content)=>{ 
    const getReply={
      commentId:'1',
      userId:'1',
      postId:'1',
      content:reply[0].content,
    };

    setReply([...reply, getReply]);
    
    await axiosIns.get(`/comment`, {
    headers:{
        'Content-Type':'application/json;charset=UTF-8',
    }
  })
 .then((response) => {
    setShowModal(true)
  })  
  }

  const showPosts = () => {
    setShowModal(true)
    getPost();
    dispatch(__getPostThunk)
  }

  // () => showPosts(userId) 임시
  
      const postPost = async(content)=>{
        try{  
          const newReply={
            userId:'1',
            postId:'1',
            content:reply[0].content,
          };

          setReply([...reply, newReply]);

          await axiosIns.post(`/comment/add`,newReply,{ 
          headers:{
                'Content-Type':'application/json;charset=UTF-8',
            }
          })
         .then((response) => {  
              setShowModal(true)
              console.log('댓글 성공후 받는 값 -->' + response.data.data.content)
          });
    }catch(err){
      console.error(err)
      console.log('response222')
    }
  };

  const delPost = async(commentId)=>{
   try{  
      const delReply={
        commentId:'15',        
      };
      console.log('commentId111: '+commentId);
      setReply([...reply, delReply]);
      await axiosIns.delete(`/comment/delete/`+commentId,{
          headers:{
              'Content-Type':'application/json;charset=UTF-8',
          }
       })
       .then((response) => {
          console.log('response:', response.status)
          setShowModal(true)
          setReply([...reply,{
            // commentId: response.data.data.commentId,
            // userId: '1',
            // postId: '1',
            // content: response.data.data.content,
            // commentDate: response.data.data.commentDate,
            // userImg: response.data.data.userImg,
          }])
        });
  }catch(error){
    console.error(error)
  }
  };

  return (
      <div className="showPosts">
        {post.map((item) => (
          <div className="showPostImgs">
            <div className="showPostImgsItems">
              <div className="showPostImgsItem" onClick={showPosts}>
                <img
                  className="showPostImg"
                  src={item.userImg}
                  alt="게시글 이미지"
                />
              </div>{" "}
            </div>
          </div>
        ))}
        {/* <div className="showPostImgs">
          <img className="showPostImg" src={Profile} alt="게시글 이미지" />
          <img className="showPostImg" src={Profile} alt="게시글 이미지" />
          <img className="showPostImg" src={Profile} alt="게시글 이미지" />
        </div> */}
      {showModal && (
        <div className="postWrapper">
          <div className="postOverlay">
            <div className="postContent">
              <div className="postContentItems">
                {post.map((item) => (
                  <div className="postContentItem">
                    <img
                      className="postContentImg"
                      name="userImg"
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
                          name="userImg"
                          src={item.userImg}
                          alt="유저 이미지"
                        />
                      </div>
                      <span>{item.userId}</span>
                      <ViewDetailModal post={post} onClick={()=>{setShowModal(true)}} />
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
                    <div className="postCommentsDiv">
                      <div className="postComment">
                        <div className="postCommentDiv">
                        <img name="userImg" className="postCommentUserImg" src={item.userImg} alt="유저 이미지" />
                        <div className="commentIdName">
                        <div name="userId"></div>
                        <div name="postId"></div>
                        <div name="commentDate"></div>
                          <span name="commentId" className="postCommentId">{item.commentId}</span>
                          <span name="content" className="postCommentContent">{item.content}</span>
                        </div>
                        </div>
                        <div className="commentDelBtn" >
                          <button type="button" onClick={delPost}>삭제</button>
                        </div>
                        </div>
                      </div>
                    </div>))}
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
                    name="content"
                    placeholder="댓글을 입력하세요 ..."
                    onChange={onChangeContent}
                  />
                  <div className="postCommentBtn">
                    <button type="button" onClick={postPost}>게시</button>
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
      </div>
  )
}

export default PostViewModal; 