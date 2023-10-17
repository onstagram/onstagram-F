import React, { useState } from "react"
import Heart from '../../assets/Fictogram/Nav/heart2.png'
import "./Alarm.css"

function AlarmModal() {
  const [modal, setModal] = useState()

  return (
    <div>
      {modal && (
        <div className="alarmDiv2">
        <div className="alarmListBody">
          <div className="alarmUserInfo2">   
            <div className="alarmInfo">
              <div className="alarmImg"><img src={Heart} /></div>
              <div className="alarmText1">게시물 활동</div>
              <div className="alarmText2">다른 사람이 회원님의 게시물을 좋아하거나 댓글을 남기면 여기에 표시됩니다.</div>
            </div>
          </div>
        </div>             
      </div>
      )}
    </div>
  )
}

export default AlarmModal
