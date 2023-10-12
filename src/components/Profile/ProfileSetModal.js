import React, { useState } from "react"

import Gear from "../../assets/Fictogram/Profile/gear.png"

function ProfileSetModal() {
  const [modal, setModal] = useState()

  const toggleModal = () => {
    setModal(!modal)
  }

  const guideModal = () => {
    alert("구현중인 기능입니다.")
    setModal(!modal)
  }

  return (
    <div>
      <div className="setImg" onClick={toggleModal}>
        <img src={Gear} alt="프로필 셋팅" />
      </div>
      {modal && (
        <div className="setWrapper">
          <div className="setOverlay">
            <div className="setContent">
              <div className="setContent-item" onClick={guideModal}>
                앱 및 웹사이트
              </div>
              <div className="setContent-item" onClick={guideModal}>
                QR 코드
              </div>
              <div className="setContent-item" onClick={guideModal}>
                알림
              </div>
              <div className="setContent-item" onClick={guideModal}>
                설정 및 개인정보
              </div>
              <div className="setContent-item" onClick={guideModal}>
                Meta Verified
              </div>
              <div className="setContent-item" onClick={guideModal}>
                관리 감독
              </div>
              <div className="setContent-item" onClick={guideModal}>
                로그아웃
              </div>
              <div className="setContent-item" onClick={toggleModal}>
                취소
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default ProfileSetModal
