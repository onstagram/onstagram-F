import React, { useState } from "react"
import "./Follow.css"

import XBtn from "../../assets/Fictogram/Etc/XBtn.png"

function HashTagFollowing(props) {
  const [hashTagModal, setHashTagModal] = useState()

  const hashTagToggle = () => {
    setHashTagModal(!hashTagModal)
  }

  const FollowHashTagToggle = () => {
    setHashTagModal(!hashTagModal)
    props.followingToggle()
  }

  return (
    <div>
      <div onClick={hashTagToggle} className="followTag">
        <span>해시태그</span>
      </div>
      {hashTagModal && (
        <div class="HashTagWrapper">
          <div className="HashTagOverlay">
            <div className="HashTagContent">
              <div className="HashTagHeader">
                <div>&nbsp;&nbsp;&nbsp;&nbsp;</div>
                <span className="HashTagHeader-title">팔로잉</span>
                <button type="button">
                  <img
                    src={XBtn}
                    onClick={FollowHashTagToggle}
                    alt="종료버튼"
                  />
                </button>
              </div>
              <div className="followHeader2">
                <div className="followHuman" onClick={hashTagToggle}>
                  <span>사람</span>
                </div>
                <div className="followTag">
                  <span>해시태그</span>
                </div>
              </div>
              <div className="HashfollowBody">
                <div>
                  <h2>팔로우 하는 해시태그</h2>
                  <p>해시태그를 팔로우하면 여기에 표시됩니다.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default HashTagFollowing
