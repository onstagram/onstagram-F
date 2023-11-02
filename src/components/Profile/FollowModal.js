import React, { useState } from "react"
import "./Follow.css"

import XBtn from "../../assets/Fictogram/Etc/XBtn.png"

function FollowModal({ follow }) {
  const [member, setMember] = useState([
    {
      userId: "sound4519",
      userName: "이진호",
      email: "sound4519@gmail.com",
      profileImg:
        "https://image.dongascience.com/Photo/2020/03/5bddba7b6574b95d37b6079c199d7101.jpg",
    },
  ])

  const [followModal, setFollowModal] = useState()

  const followToggleModal = () => {
    setFollowModal(!followModal)
  }

  const followDelete = () => {
    alert("삭제되었습니다.")
    console.log("임시", follow, setMember)
  }

  // const

  return (
    <>
      <div onClick={followToggleModal} className="followBtn">
        <span>팔로우</span>
        <span>{follow === 0 ? 0 : follow}명</span>
      </div>
      {followModal && (
        <div class="followWrapper">
          <div className="followOverlay">
            <div className="followContent">
              <div className="followHeader">
                <div>&nbsp;&nbsp;&nbsp;&nbsp;</div>
                <span>팔로워</span>
                <button type="button">
                  <img src={XBtn} onClick={followToggleModal} alt="종료버튼" />
                </button>
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
                        <button onClick={followDelete} type="button">
                          삭제
                        </button>
                      </div>
                      <div className="resultUser">
                        <div className="resultUserInfo">
                          <img src={item.profileImg} alt="팔로우 유저 이미지" />
                          <div className="resultUserIdName">
                            <span>{item.userId}</span>
                            <span>{item.userName}</span>
                          </div>
                        </div>
                        <button onClick={followDelete} type="button">
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
                        <button onClick={followDelete} type="button">
                          삭제
                        </button>
                      </div>
                      <div className="resultUser">
                        <div className="resultUserInfo">
                          <img src={item.profileImg} alt="팔로우 유저 이미지" />
                          <div className="resultUserIdName">
                            <span>{item.userId}</span>
                            <span>{item.userName}</span>
                          </div>
                        </div>
                        <button onClick={followDelete} type="button">
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
                        <button onClick={followDelete} type="button">
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
                        <button onClick={followDelete} type="button">
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
    </>
  )
}

export default FollowModal
