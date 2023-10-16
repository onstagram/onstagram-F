import React, { useState } from "react"

function BlockModal() {
  const [modal, setModal] = useState()

  const toggleModal = () => {
    setModal(!modal)
  }

  const guideModal = () => {
    alert("구현중인 기능입니다. ")
    setModal(!modal)
  }

  return (
    <div>
      <span onClick={toggleModal}>차단</span>
      {modal && (
        <div className="BlockWrapper">
          <div className="BlockOverlay">
            <div className="BlockContent">
              <div className="BlockHeader">
                <h3>Jun-young Park님을 차단하시겠어요?</h3>
                <span>
                  상대방은 Instagram에서 회원님의 프로필, 게시물 및 스토리를
                  찾을 수 없게 됩니다. Instagram은 회원님이 차단한 사실을
                  상대방에게 알리지 않습니다.
                </span>
              </div>
              <div className="BlockBtns ">
                <button
                  type="button"
                  className="BlockBtnRed"
                  onClick={guideModal}
                >
                  차단
                </button>
                <button
                  type="button"
                  className="BlockBtnCancel"
                  onClick={toggleModal}
                >
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

export default BlockModal
