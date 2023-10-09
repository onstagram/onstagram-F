import React from 'react'
import '../App.css'

import MainNav from '../components/Main/MainNav'
import MainSection from '../components/Main/MainSection'

function MainPage() {
  return (
    <div className="mainWrapper">
      <MainNav />
      <MainSection />
    </div>
  )
}

export default MainPage
