
import React, { useCallback, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import axiosIns from "../../api/api"
import "./SignUp.css"

const DivSignUp = () => {
  const dispatch = useDispatch()
  const navigator = useNavigate()

  //이메일, 비밀번호, 비밀번호 확인, 닉네임, 전화번호
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [passwordCheck, setPasswordCheck] = useState("")
  const [userName, setUserName] = useState("")
  const [userPhone, setUserPhone] = useState("")

  // let email=useSelector(state=>state.email);
  // let password=useSelector(state=>state.password);
  // let passwordCheck=useSelector(state=>state.passwordCheck);
  // let userName=useSelector(state=>state.userName);
  // let userPhone=useSelector(state=>state.userPhone);

  //오류메시지 상태저장
  const [emailMessage, setEmailMessage] = useState("")
  const [passwordMessage, setPasswordMessage] = useState("")
  const [passwordCheckMessage, setPasswordCheckMessage] = useState("")
  const [userNameMessage, setUserNameMessage] = useState("")
  const [userPhoneMessage, setUserPhoneMessage] = useState("")

  // 유효성 검사
  const [isEmail, setIsEmail] = useState(false)
  const [isPassword, setIsPassword] = useState(false)
  const [isPasswordCheck, setIsPasswordCheck] = useState(false)
  const [isUserName, setIsUserName] = useState(false)
  const [isUserPhone, setIsUserPhone] = useState(false)
  const [isDup, setIsDup] = useState(true)

  //회원가입 버튼 클릭 이벤트
  const onSubmit = useCallback(
    async (e) => {
      e.preventDefault()
      try {
        await axiosIns
          .post(
            `/signup`,
            {
              email: email,
              password: password,
              passwordCheck: passwordCheck,
              userName: userName,
              userPhone: userPhone,
            },
            {
              headers: {
                "Content-Type": "application/json;charset=UTF-8",
              },
            }
          )
          .then((res) => {
            console.log("res:", res)
            if (res.status === 200) {
              console.log(email, password, passwordCheck, userName, userPhone)
              dispatch({
                type: "SIGNUP",
                payload: {
                  email: { email },
                  password: { password },
                  passwordCheck: { passwordCheck },
                  userName: { userName },
                  userPhone: { userPhone },
                },
              })

              alert("회원가입 성공했습니다")
              navigator("/login")
            }
          })
      } catch (err) {
        console.error(err)
        const isValidInput =
          email.length >= 1 &&
          password.length >= 1 &&
          passwordCheck.length >= 1 &&
          userName.length >= 1 &&
          userPhone.length >= 1
        if (!isValidInput) {
          alert("모든 값을 입력해야 합니다")
        }
      }
    },
    [email, password, passwordCheck, userName, userPhone]
  )

  // 이메일
  const onChangeEmail = useCallback((e) => {
    const emailRegex =
      /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/
    const email = e.target.value
    setEmail(email)

    if (!emailRegex.test(email)) {
      setEmailMessage("이메일 형식이 틀렸습니다")
      setIsEmail(false)
    } else {
      setEmailMessage("이메일 형식이 맞았습니다")
      setIsEmail(true)
    }
  }, [])

  // 비밀번호
  const onChangePassword = useCallback((e) => {
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/
    const password = e.target.value
    setPassword(password)

    if (!passwordRegex.test(password)) {
      setPasswordMessage("비밀번호 형식이 틀렸습니다")
      setIsPassword(false)
    } else {
      setPasswordMessage("비밀번호 형식이 맞았습니다")
      setIsPassword(true)
    }
  }, [])

  // 비밀번호 확인
  const onChangePasswordCheck = useCallback(
    (e) => {
      const passwordCheck = e.target.value
      setPasswordCheck(passwordCheck)

      if (password === passwordCheck) {
        setPasswordCheckMessage("비밀번호가 일치합니다")
        setIsPasswordCheck(true)
      } else {
        setPasswordCheckMessage("비밀번호가 일치하지 않습니다")
        setIsPasswordCheck(false)
      }
    },
    [password]
  )

  // 닉네임
  const onChangeUserName = useCallback((e) => {
    setUserName(e.target.value)
    if (e.target.value.length < 2 || e.target.value.length > 5) {
      setUserNameMessage("닉네임 형식이 맞았습니다")
      setIsUserName(false)
    } else {
      setUserNameMessage("닉네임 형식이 틀렸습니다")
      setIsUserName(true)
    }
  }, [])

  // 전화번호
  const onChangeUserPhone = useCallback((e) => {
    const userPhone = e.target.value
    const userPhoneRegex = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/
    setUserPhone(userPhone)
    if (userPhoneRegex.test(userPhone)) {
      setUserPhoneMessage("전화번호 형식이 맞았습니다")
      setIsUserPhone(false)
    } else {
      setUserPhoneMessage("전화번호 형식이 틀렸습니다")
      setIsUserPhone(true)
    }
  }, [])

  //이메일 중복검사
  const handleDup = useCallback(() => {
    const isValidDupInput = email.length >= 1
    if (isValidDupInput < 1) {
      alert("이메일을 입력해야 합니다")
    } else if (isEmail === false) {
      alert("이메일 형식이 틀렸습니다")
    } else {
      if (email === "aa@naver.com") {
        alert("중복된 이메일입니다")
        setIsDup(true)
      } else {
        alert("중복되지 않은 이메일입니다")
        setIsDup(false)
      }
    }
  }, [email])

  //로그인 페이지로 이동
  const handleLogin = () => {
    navigator("/login")
  }

  return (
    <div className="DivSignUp">
      <form onSubmit={onSubmit}>
        <div className="DivSignUpOnstagramBox">
          <div className="DivOnstagramBox">
            <span>Onstagram</span>
          </div>
          <div>
            <span>친구들의 사진과 동영상을 보려면 가입하세요</span>
          </div>
        </div>
        <div calssName="DivSignUpInputBox">
          <div className="DivSignUpInput">
            <label className="DivSignUpEmailInputOnChange">
              <input
                type="text"
                name="email"
                placeholder="이메일"
                onChange={onChangeEmail}
              />
              <button type="button" className="BtnDup" onClick={handleDup}>
                중복확인
              </button>
            </label>
            <label className="DivSignUpSpan">
              <span>{emailMessage}</span>
            </label>
          </div>

          <div className="DivSignUpInput2">
            <label className="DivSignUpInputOnChange">
              <input
                type="password"
                name="password"
                placeholder="비밀번호"
                onChange={onChangePassword}
              />
            </label>
            <label className="DivSignUpSpan">
              <span>{passwordMessage}</span>
            </label>
          </div>

          <div className="DivSignUpInput2">
            <label className="DivSignUpInputOnChange">
              <input
                type="password"
                name="passwordCheck"
                placeholder="비밀번호 확인"
                onChange={onChangePasswordCheck}
              />
            </label>
            <label className="DivSignUpSpan">
              <span>{passwordCheckMessage}</span>
            </label>
          </div>

          <div className="DivSignUpInput2">
            <label className="DivSignUpInputOnChange">
              <input
                type="text"
                name="userName"
                placeholder="닉네임"
                onChange={onChangeUserName}
              />
            </label>
            <label className="DivSignUpSpan">
              <span>{userNameMessage}</span>
            </label>
          </div>

          <div className="DivSignUpInput2">
            <label className="DivSignUpInputOnChange">
              <input
                type="text"
                name="userPhone"
                placeholder="전화번호"
                onChange={onChangeUserPhone}
              />
            </label>
            <label className="DivSignUpSpan">
              <span>{userPhoneMessage}</span>
            </label>
          </div>

          <div className="DivSignUpInput">
            <label className="DivSignUpButtonOnChange">
              <button type="submit" className="BtnSignUp">
                회원가입
              </button>
              <button type="button" className="BtnLogin" onClick={handleLogin}>
                계정이 있으신가요? 로그인
              </button>
            </label>
          </div>
        </div>
      </form>
    </div>
  )
}

export default DivSignUp