import React, { useEffect, useRef, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import "./Setting.css"

import h from "../../assets/Etc/헛.jpg"
import MainNav from "../Main/MainNav"
import Shild from "../../assets/Fictogram/Etc/shield.png"
import User from "../../assets/Fictogram/Etc/user.png"
import EditFooter from "./EditFooter"
import { useDispatch, useSelector } from "react-redux"
import {
  __getUserEditThunk,
  __userEditThunk,
} from "../../redux/module/userSlice"
import ProfileImg from "../../assets/Fictogram/Nav/profile.png"
import jwtDecode from "jwt-decode"

function ProfileEdit() {
  const [userId, setUserId] = useState()

  const Token = localStorage.getItem("TOKEN")

  if (Token && userId === undefined) {
    // 토큰이 존재하는 경우
    try {
      // 토큰을 해석하여 userId를 추출합니다.
      const decodedToken = jwtDecode(Token)
      const userId = decodedToken.userId
      setUserId(userId)
      console.log("userId:", userId)
    } catch (error) {
      console.error("토큰 해석에 실패했습니다.", error)
    }
  } else if (!Token) {
    console.log("토큰이 로컬 스토리지에 존재하지 않습니다.")
  }

  const location = useLocation()
  const imgRef = useRef()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [inputCount, setInputCount] = useState("0")

  const onInputHandler = (e) => {
    setInputCount(e.target.value.length)
    console.log(e.target.value.length)
  }
  const [email, setEmail] = useState()
  const [imageSrc, setImageSrc] = useState()
  const [userImg, setUserImg] = useState()
  const [password, setPassword] = useState()
  const [introduction, setIntroduction] = useState()

  // const { userImg, email } = useSelector((state) => state.MemberInfo)
  // use effect 가 동작하기 전에 , 여기서 불러오기 떄문에, useEffect 동작이 마무리 되지 않고
  //  에러를 띄웠을 가능성이 높음.
  // console.log(userImg, email)

  const onEditSave = (e) => {
    e.preventDefault()
    const editPost = new FormData()
    editPost.append("userId", userId)
    editPost.append("file", userImg)
    editPost.append("introduction", introduction)
    editPost.append("password", password)

    dispatch(__userEditThunk(editPost))
      .unwrap()
      .then((response) => {
        if (response) {
          alert("수정이 완료되었습니다 !")
          window.location.reload()
        } else if (e) {
          console.log(e, userId, userImg, introduction)
        }
      })
  }
  const editProfileImg = (e) => {
    const file = imgRef.current.files[0]
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onloadend = () => {
      setImageSrc(reader.result)
      setUserImg(file)
    }
  }

  const [userInfo, setUserInfo] = useState(null)

  useEffect(() => {
    dispatch(__getUserEditThunk(userId))
      .then((response) => {
        setUserInfo(response.payload)
        setUserImg(response.payload.userImg)
        setEmail(response.payload.email)
      })

      .catch((error) => {})
  }, [dispatch, userId])

  const handlePassword = (e) => {
    setPassword(e.target.value)
    console.log(password, introduction, userInfo)
  }

  const handlePostImg = (e) => {
    setImageSrc(imgRef.current.file)
  }

  const handleIntroduction = (e) => {
    setIntroduction(e.target.value)
  }

  const fileClick = () => {
    imgRef.current.click()
  }

  const goToEdit = () => {
    navigate(`/setting/edit/${userId}`)
  }

  const goToLanguage = () => {
    navigate("/setting/language")
  }

  const goToAppAndWeb = () => {
    navigate("/setting/appweb")
  }
  return (
    <div className="mainWrapper">
      <MainNav />
      <div className="mainSection1">
        <div className="SelectList">
          <div className="SelectList-header">
            <div className="SelectList-headerA">
              <div className="SelectList-Logo">
                <img src={Shild} alt="로고" />
                <span>설정</span>
              </div>
              <div className="SelectList-title">
                <span className="SelectTitle">계정 센터</span>
                <span className="SelectTitle-text">
                  Onstagram 테크놀로지에서 연결된 환경 및 계정 설정을
                  관리해보세요.
                </span>
              </div>

              <div className="Select-text">
                <img src={User} alt="유저" />
                <span>개인정보</span>
              </div>
              <div className="Select-text">
                <img src={Shild} alt="보안" />
                <span>비밀번호 및 보안</span>
              </div>
              <div className="Select-text">
                <img src={Shild} alt="Tv" />
                <span>광고 기본 설정</span>
              </div>
              <span className="SelectPlus">계정 센터에서 더 보기</span>
            </div>
          </div>
          <div className="SelectList-body">
            <div className="SelectList-body-title">설정</div>
            <div
              className="SelectList-item SelectList-item-select"
              onClick={goToEdit}
            >
              <span>프로필 편집</span>
            </div>
            <div className="SelectList-item" onClick={goToLanguage}>
              <span>언어 기본 설정</span>
            </div>
            <div className="SelectList-item" onClick={goToAppAndWeb}>
              <span>앱 및 웹사이트</span>
            </div>
            <div className="SelectList-item">
              <span>이메일 알림</span>
            </div>
            <div className="SelectList-item">
              <span>푸시 알림</span>
            </div>
            <div className="SelectList-item">
              <span>내가 볼 수 있는 내용</span>
            </div>
            <div className="SelectList-item">
              <span>내 콘텐츠를 볼 수 있는 사람</span>
            </div>
            <div className="SelectList-item">
              <span>다른 사람이 나와 소통할 수 있는 방법</span>
            </div>
            <div className="SelectList-item">
              <span>관리 감독</span>
            </div>
            <div className="SelectList-item">
              <span>도움말</span>
            </div>
            <div className="SelectList-item">
              <span>구독</span>
            </div>

            <div className="SelectList-item change">
              <span>프로페셔널 계정으로 전환</span>
            </div>
          </div>
        </div>
        <div className="SelectProfile-edit">
          <div className="ProfileEdit-body">
            <div className="ProfileEdit-title">
              <p>프로필 편집</p>
            </div>
            <div className="ProfileEdit-bodys">
              <div className="ProfileEdit-imgId edit-margin">
                <img
                  id="userImg"
                  name="userImg"
                  src={userImg !== null ? userImg : imageSrc}
                  alt="프로필 이미지"
                  onChange={handlePostImg}
                />
                <div className="ProfileEdit-info">
                  <span>{email}</span>
                  <input
                    type="file"
                    style={{ display: "none" }}
                    ref={imgRef}
                    onChange={editProfileImg}
                    accept="image/jpg"
                  />
                  <button type="submit" onClick={fileClick}>
                    프로필 사진 바꾸기
                  </button>
                </div>
              </div>
              <div className="profileEdit-pw ">
                <div className="edit-pw-title">
                  <span>비밀번호</span>
                </div>
                <div className="edit-pw">
                  <input
                    type="password"
                    placeholder="변경하실 비밀번호를 입력하세요."
                    maxLength="20"
                    onChange={handlePassword}
                  />
                </div>
              </div>

              <div className="ProfileEdit-web edit-margin">
                <div className="web-title">
                  <span>웹사이트</span>
                </div>

                <div className="web-detail">
                  <input type="text" disabled placeholder="웹사이트" />
                  <p>
                    링크 수정은 모바일에서만 가능합니다. Instagram 앱으로
                    이동하여 프로필의 소개에서 웹사이트를 변경하여 수정하세요.
                  </p>
                </div>
              </div>
              <div className="ProfileEdit-intro edit-margin">
                <div className="intro-title">
                  <span>소개</span>
                </div>
                <div className="intro-detail">
                  <textarea
                    maxLength="150"
                    onChange={(e) => {
                      handleIntroduction(e)
                      onInputHandler(e)
                    }}
                    // onChange={onInputHandler}
                  />
                  <span>{inputCount} / 150</span>
                </div>
              </div>
              <div className="ProfileEdit-two edit-margin">
                <div className="two-title">
                  <span>성별</span>
                </div>
                <div className="two-detail">
                  <input type="text" placeholder="밝히고 싶지 않음" disabled />
                  <div></div>
                </div>
              </div>
              <div className="ProfileEdit-recommend edit-margin">
                <div className="recommend-title">
                  <span>프로필에 추천표시</span>
                </div>
                <div className="recommend-detail">
                  <input type="checkbox" />
                  <span>
                    사람들이 회원님의 프로필에서 비슷한 계정 추천을 볼 수
                    있는지와 회원님의 계정이 다른 프로필에서 추천될 수 있는지를
                    선택하세요.
                  </span>
                </div>
              </div>
              <div className="edit-submit">
                <button type="button" onClick={onEditSave}>
                  제출
                </button>
              </div>
            </div>
          </div>
          <EditFooter />
        </div>
      </div>
    </div>
  )
}

export default ProfileEdit
