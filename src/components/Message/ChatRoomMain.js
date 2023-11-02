import React from "react"

function ChatRoomMain({ userData, handleUsername, registerUser }) {
  return (
    <>
      <div className="register">
        <h3>환영합니다 ! 다른 사용자와 함께 채팅을 시작해보세요</h3>
        <input
          id="user-name"
          placeholder="사용하실 이름을 입력해주세요. (최대 12자)"
          name="userName"
          value={userData.username}
          onChange={handleUsername}
          margin="normal"
          maxLength={12}
        />
        <button type="button" onClick={registerUser}>
          접속하기
        </button>
      </div>
    </>
  )
}

export default ChatRoomMain
