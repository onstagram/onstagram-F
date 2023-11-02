import React, { useState } from "react"
import "./Search.css"

import Profile from "../../assets/Fictogram/Nav/profile.png"
import Search from "../../assets/Fictogram/Nav/search.png"
import XBtn from "../../assets/Fictogram/Etc/XBtn.png"

function SearchModal() {
  const [modal, setModal] = useState()
  const [searchText, setSearchText] = useState("")
  const [searchResults, setSearchResults] = useState([])
  const [member, setMember] = useState([
    {
      userId: "sssss",
      userName: "이승진",
      email: "sssss@gmail.com",
      profileImg:
        "https://image.dongascience.com/Photo/2020/03/5bddba7b6574b95d37b6079c199d7101.jpg",
    },
    {
      userId: "sasdasd",
      userName: "정성민",
      email: "smdd@gmail.com",
      profileImg:
        "https://image.dongascience.com/Photo/2020/03/5bddba7b6574b95d37b6079c199d7101.jpg",
    },
    {
      userId: "sdkfdd",
      userName: "이진호",
      email: "sdfsdf@gmail.com",
      profileImg:
        "https://image.dongascience.com/Photo/2020/03/5bddba7b6574b95d37b6079c199d7101.jpg",
    },
  ])

  const toggleModal = () => {
    setModal(!modal)
  }

  const handleSearch = (text) => {
    setSearchText(text)

    if (text.trim() == "") {
      setSearchResults([])
    } else {
      const results = member.filter(
        (item) =>
          item.email.toLowerCase().includes(text.toLowerCase()) ||
          item.userName.toLowerCase().includes(text.toLowerCase())
      )
      setSearchResults(results)
    }
  }

  return (
    <div>
      <div onClick={toggleModal} className="search-btn-modal">
        <img className="menu-item-img" src={Search} alt="검색 이미지" />
        <p>검색</p>
      </div>
      {modal && (
        <div className="searchModal-content">
          <div className="searchModal-header">
            <span>검색</span>
          </div>
          <div className="searchModal-body">
            <div className="searchInput">
              <input
                placeholder="검색"
                value={searchText}
                onChange={(e) => handleSearch(e.target.value)}
              />
            </div>
            <div className="searchBody">
              <div className="searchBody-header">
                <span>최근 검색 항목</span>
                <button>모두 지우기</button>
              </div>
              {searchResults.map((item) => (
                <div className="searchBody-result" key={item.email}>
                  <div className="search-result">
                    <div className="userImg">
                      <img src={item.profileImg} alt="프로필 이미지" />
                    </div>
                    <div className="userInfo">
                      <span>{item.email}</span>
                      <span>{item.userName}</span>
                    </div>
                    <div className="search-delete">
                      <img src={XBtn} alt="삭제 버튼 " />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default SearchModal
