import React from 'react'
import './Main.css'
import PostModal from '../Post/PostModal'

function MainSection() {
  return (
    <div className="mainSection">
      온스타그램에 오신것을 환영합니다.
      <PostModal />
    </div>
  )
}

export default MainSection
