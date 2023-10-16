import React from 'react'
import MainNav from '../Main/MainNav'
import MainSection from '../Main/MainSection'
import '../../App.css'

function Quest() {
  return (
    <div className="mainWrapper">
      <MainNav />
      <div className="mainSection">
        여기는 탐색탭입니다. 인기게시물들이 차지 할거에요.
      </div>
    </div>
  )
}

export default Quest
