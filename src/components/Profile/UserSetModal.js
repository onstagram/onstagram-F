import React, { useState } from "react"

import Etc from "../../assets/Fictogram/Etc/etc.png"

function UserSetModal() {
  const [modal, setModal] = useState()

  const toggleModal = () => {
    setModal(!modal)
  }

  return (
    <div>
      <div className="userSetImg" onClick={toggleModal}>
        <img src={Etc} alt="다른 유저 셋팅" />
      </div>
      {modal && (
        <div className="setWrapper">
          <div className="setOverlay">
            <div className="userSetContent">
              <div className="userSetBtns">
                <button type="button" className="userSetBtn userSetRed">
                  차단
                </button>
                <button type="button" className="userSetBtn userSetRed">
                  제한
                </button>
                <button type="button" className="userSetBtn userSetRed">
                  신고
                </button>
                <button type="button">이 계정 정보</button>
                <button type="button" onClick={toggleModal}>
                  취소
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default UserSetModal
