import React, { useState } from "react"

function Write() {
  const [post, setPost] = useState([
    { id: 1, title: "내용1" },
    { id: 2, title: "내용2" },
    { id: 3, title: "내용3" },
    { id: 4, title: "내용4" },
    { id: 5, title: "내용5" },
    { id: 6, title: "내용6" },
  ])
  return (
    <div>
      <h1>리스트 페이지</h1>
    </div>
  )
}

export default Write
