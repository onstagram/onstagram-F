import React from 'react'
import { useState } from 'react'
import './Post.css'

function PostModal() {
  const [modal, setModal] = useState(false)

  const toggleModal = () => {
    setModal(!modal)
  }

  return (
    <div>
      <button onClick={toggleModal} className="btn-modal">
        Open
      </button>
      {modal && (
        <div className="modal">
          <div className="overlay">
            <div className="modal-content">안녕하세요</div>
            <button className="close-modal" onClick={toggleModal}>
              종료
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default PostModal
