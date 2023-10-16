import React, { useState } from "react"

function ChatDelModal() {
  const [modal, setModal] = useState()

  const toggleModal = () => {
    setModal(!modal)
  }
  return (
    <div>
      <span onClick={toggleModal}>채팅 삭제</span>
      {modal && (
        <div className="ChatDel-wrapper">
          <div className="ChatDel-overlay">
            <div className="ChatDel-content">
              <div className="ChatDel-header">
                <span>채팅을 영구적으로 삭제하시겠어요?</span>
              </div>
              <div className="ChatDel-btns">
                <button type="submit" className="ChatDel-red">
                  삭제
                </button>
                <button
                  type="button"
                  className="ChatDel-cancel"
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

export default ChatDelModal
