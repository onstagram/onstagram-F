import React, { useState } from "react"
import "./Follow.css"

import XBtn from "../../assets/Fictogram/Etc/XBtn.png"
import { useNavigate } from "react-router-dom"
import HashTagFollowing from "./HashTagFollowing"

function FollowingModal() {
  const navigate = useNavigate()
  const [member, setMember] = useState([
    {
      userId: "sound4519",
      userName: "이진호",
      email: "sound4519@gmail.com",
      profileImg:
        "https://image.dongascience.com/Photo/2020/03/5bddba7b6574b95d37b6079c199d7101.jpg",
    },
  ])
  const [follow, setFollow] = useState([
    {
      followId: "1",
      followUserId: "sound4519",
      followingUserId: "sound5519",
      followDate: "2023년 4월 12일",
    },
    {
      followId: "2",
      followUserId: "sound4519",
      followingUserId: "sound5519",
      followDate: "2023년 4월 12일",
    },
    {
      followId: "3",
      followUserId: "sound4519",
      followingUserId: "sound5519",
      followDate: "2023년 4월 12일",
    },
    {
      followId: "4",
      followUserId: "sound4519",
      followingUserId: "sound5519",
      followDate: "2023년 4월 12일",
    },
  ])
  const [followingModal, setFollowingModal] = useState()

  const followingToggle = () => {
    setFollowingModal(!followingModal)
  }

  const followingDelete = () => {
    alert("팔로잉이 취소되었습니다. (구현중인 기능)")
  }

  const goToHashTag = () => {
    navigate("/user/hashTag_following")
  }

  return (
    <div>
      <div onClick={followingToggle}>
        <span>팔로워</span>
        <span>200</span>
      </div>
      {followingModal && (
        <div class="followWrapper">
          <div className="followOverlay">
            <div className="followContent">
              <div className="followHeader">
                <div>&nbsp;&nbsp;&nbsp;&nbsp;</div>
                <span>팔로잉</span>
                <button type="button">
                  <img src={XBtn} onClick={followingToggle} alt="종료버튼" />
                </button>
              </div>
              <div className="followHeader2">
                <div className="followHuman">
                  <span>사람</span>
                </div>
                <HashTagFollowing followingToggle={followingToggle} />
              </div>
              <div className="followBody">
                <div className="followSearch">
                  <input type="text" placeholder="검색" />
                </div>

                {member.map((item) => (
                  <div className="followSearchResult">
                    <div className="result">
                      <div className="resultUser">
                        <div className="resultUserInfo">
                          <img src={item.profileImg} alt="팔로우 유저 이미지" />
                          <div className="resultUserIdName">
                            <span>{item.userId}</span>
                            <span>{item.userName}</span>
                          </div>
                        </div>
                        <button onClick={followingDelete} type="button">
                          삭제
                        </button>
                      </div>{" "}
                      <div className="resultUser">
                        <div className="resultUserInfo">
                          <img src={item.profileImg} alt="팔로우 유저 이미지" />
                          <div className="resultUserIdName">
                            <span>{item.userId}</span>
                            <span>{item.userName}</span>
                          </div>
                        </div>
                        <button onClick={followingDelete} type="button">
                          삭제
                        </button>
                      </div>{" "}
                      <div className="resultUser">
                        <div className="resultUserInfo">
                          <img src={item.profileImg} alt="팔로우 유저 이미지" />
                          <div className="resultUserIdName">
                            <span>{item.userId}</span>
                            <span>{item.userName}</span>
                          </div>
                        </div>
                        <button onClick={followingDelete} type="button">
                          삭제
                        </button>
                      </div>{" "}
                      <div className="resultUser">
                        <div className="resultUserInfo">
                          <img src={item.profileImg} alt="팔로우 유저 이미지" />
                          <div className="resultUserIdName">
                            <span>{item.userId}</span>
                            <span>{item.userName}</span>
                          </div>
                        </div>
                        <button onClick={followingDelete} type="button">
                          삭제
                        </button>
                      </div>{" "}
                      <div className="resultUser">
                        <div className="resultUserInfo">
                          <img src={item.profileImg} alt="팔로우 유저 이미지" />
                          <div className="resultUserIdName">
                            <span>{item.userId}</span>
                            <span>{item.userName}</span>
                          </div>
                        </div>
                        <button onClick={followingDelete} type="button">
                          삭제
                        </button>
                      </div>{" "}
                      <div className="resultUser">
                        <div className="resultUserInfo">
                          <img src={item.profileImg} alt="팔로우 유저 이미지" />
                          <div className="resultUserIdName">
                            <span>{item.userId}</span>
                            <span>{item.userName}</span>
                          </div>
                        </div>
                        <button onClick={followingDelete} type="button">
                          삭제
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default FollowingModal
