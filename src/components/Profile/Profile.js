import React from 'react'
import './Profile.css'
import MainNav from '../Main/MainNav'
import ProfilePost from '../../assets/Fictogram/Profile/profile-post.png'
import ProfileTag from '../../assets/Fictogram/Profile/grayTag.png'
import ProfileImg from '../../assets/Fictogram/Nav/profile.png'
import ProfileSaved from '../../assets/Fictogram/Profile/grayCollection.png'
import Gear from '../../assets/Fictogram/Profile/gear.png'

function Profile() {
  return (
    <div className="mainWrapper">
      <MainNav />
      <div className="mainSection">
        <div className="profileWrapper">
          <div className="infoWrapper">
            <div className="info">
              <div className="infoImg">
                <img src={ProfileImg} alt="프로필 이미지"/>
              </div>
              <div className="infoDetail">
                <div className="infoDetail1">
                  <span>sound4519</span>
                  <button>프로필 편집</button>
                  <button>보관된 스토리 보기</button>
                  <div className="setImg">
                    <img src={Gear} alt="셋팅 이미지"/>
                  </div>
                </div>
                <div className="infoDetail2">
                  <div>게시물</div>
                  <div>팔로우</div>
                  <div>팔로워</div>
                </div>
                <div className="infoDetail3">dd</div>
              </div>
            </div>

            <div>신규</div>
          </div>
          <div className="profilePosts">
            <div className="profilepostsBtns">
              <button type="button" className="profilePostsBtn">
                <img src={ProfilePost} alt="게시물 탭 이미지"/>
                <span>게시물</span>
              </button>
              <button type="button" className="profilePostsBtn1">
                <img src={ProfileSaved} alt="저장됨 탭 이미지"/>
                <span>저장됨</span>
              </button>
              <button type="button" className="profilePostsBtn1">
                <img src={ProfileTag} alt="태그됨 탭 이미지"/>
                <span>태그됨</span>
              </button>
            </div>
            <div>내용부분</div>
          </div>
          {/* <img src={ProfilePost} />
            <img src={Avatar} /> */}
        </div>
      </div>
    </div>
  )
}

export default Profile
