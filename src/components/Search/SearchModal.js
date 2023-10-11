import React, { useState } from "react"
import "./Search.css"

import Profile from "../../assets/Fictogram/Nav/profile.png"
import Search from "../../assets/Fictogram/Nav/search.png"

function SearchModal() {
  const [modal, setModal] = useState()

  const toggleModal = () => {
    setModal(!modal)
  }

  return (
    <div>
      <div onClick={toggleModal} className="search-btn-modal">
        <img src={Search} alt="검색 이미지" onClick={toggleModal} />
        <span>검색</span>
      </div>
      {modal && (
        <div className="searchModal-content">
          <div className="searchModal-header">
            <span>검색</span>
          </div>
          <div className="searchModal-body">
            <div className="searchInput">
              <input placeholder="검색" />
            </div>
            <div className="searchBody">
              <div className="searchBody-header">
                <span>최근 검색 항목</span>
                <button>모두 지우기</button>
              </div>
              <div className="searchBody-result">
                <div className="search-result">
                  <div className="userImg">
                    <img src={Profile} alt="프로필 이미지" />
                  </div>
                  <div className="userInfo">
                    <span>sound4519</span>
                    <span>이진호</span>
                  </div>
                  <img src={Profile} />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default SearchModal
