import React, { useCallback, useState } from 'react'
import { useNavigate } from 'react-router-dom'
<<<<<<< HEAD
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import './SignUp.css'

const DivSignUp = () => {  
    const dispatch = useDispatch();
=======
import axios from 'axios'
import './SignUp.css'

const DivSignUp = () => { 
>>>>>>> 212248efec262594dfa0e85a1978a52d4a626f50
    const navigator = useNavigate();

    //이메일, 비밀번호, 비밀번호 확인, 닉네임, 전화번호 
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordCheck, setPasswordCheck] = useState('')
    const [userName, setUserName] = useState('')
    const [userPhone, setUserPhone] = useState('')
<<<<<<< HEAD
    const [isDup, setIsDup]=useState(false);
    // let email=useSelector(state=>state.email);
    // let password=useSelector(state=>state.password);
    // let passwordCheck=useSelector(state=>state.passwordCheck);
    // let userName=useSelector(state=>state.userName);
    // let userPhone=useSelector(state=>state.userPhone);
=======
>>>>>>> 212248efec262594dfa0e85a1978a52d4a626f50

    //오류메시지 상태저장
    const [emailMessage, setEmailMessage] = useState('')
    const [passwordMessage, setPasswordMessage] = useState('')
    const [passwordCheckMessage, setPasswordCheckMessage] = useState('')
    const [userNameMessage, setUserNameMessage] = useState('')
    const [userPhoneMessage, setUserPhoneMessage] = useState('')

    // 유효성 검사
    const [isEmail, setIsEmail] = useState(false)
    const [isPassword, setIsPassword] = useState(false)
    const [isPasswordCheck, setIsPasswordCheck] = useState(false)
    const [isUserName, setIsUserName] = useState(false)
    const [isUserPhone, setIsUserPhone] = useState(false)
   
    //회원가입 버튼 클릭 이벤트
    const onSubmit = useCallback(
        async (e) => { 
          e.preventDefault();
          try {
<<<<<<< HEAD
            await axios.post(`localhost:8080/api/signup`, {
=======
            await axios.post("https://localhost:3095/api/users", {
>>>>>>> 212248efec262594dfa0e85a1978a52d4a626f50
                email: email,
                password: password,
                passwordCheck: passwordCheck,
                userName: userName,
                userPhone: userPhone,
              })
<<<<<<< HEAD
            .then((res) => {
                console.log('res:', res)
                if (res.status === 200) {
                  console.log(email, password, passwordCheck, userName, userPhone); 
                  dispatch({type:'SIGNUP', payload:{email:{email},password:{password},passwordCheck:{passwordCheck},userName:{userName},userPhone:{userPhone}}})
                  setIsDup(res.data.isDup);
                  navigator('/login')
                 }
=======
              .then((res) => {
                console.log('response:', res)
                if (res.status === 200) {
                  res.json("OK");
                  navigator(`/login`)
                }
>>>>>>> 212248efec262594dfa0e85a1978a52d4a626f50
              })
          } catch (err) {
                console.error(err)
                const isValidInput = email.length>=1&&password.length>=1&&passwordCheck.length>=1&&userName.length>=1&&userPhone.length>=1;
                if(!isValidInput){
                    alert('모든 값을 입력해야 합니다')
                }
<<<<<<< HEAD
          }
         },[email, password, passwordCheck, userName, userPhone])
=======
          } finally {
            console.log(email, password, passwordCheck, userName, userPhone);
          }
        },
        [email, password, passwordCheck, userName, userPhone])
    
>>>>>>> 212248efec262594dfa0e85a1978a52d4a626f50
    
      // 이메일 
      const onChangeEmail = useCallback((e) => {
        const emailRegex =
          /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/
        const email = e.target.value
        setEmail(email)
    
        if (!emailRegex.test(email)) {
          setEmailMessage('이메일 형식이 틀렸습니다')
          setIsEmail(false)
        } else {
          setEmailMessage('이메일 형식이 맞았습니다')
          setIsEmail(true)
        }
      }, [])
    
      // 비밀번호
      const onChangePassword = useCallback((e) => {
        const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/
        const password = e.target.value
        setPassword(password)
    
        if (!passwordRegex.test(password)) {
          setPasswordMessage('비밀번호 형식이 틀렸습니다')
          setIsPassword(false)
        } else {
          setPasswordMessage('비밀번호 형식이 맞았습니다')
          setIsPassword(true)
        }
      }, [])
    
      // 비밀번호 확인
      const onChangePasswordCheck = useCallback(
        (e) => {
          const passwordCheck = e.target.value
          setPasswordCheck(passwordCheck)
    
          if (password === passwordCheck) {
            setPasswordCheckMessage('비밀번호가 일치합니다')
            setIsPasswordCheck(true)
          } else {
            setPasswordCheckMessage('비밀번호가 일치하지 않습니다')
            setIsPasswordCheck(false)
          }
        },
        [password]
      )
      
      // 닉네임
      const onChangeUserName = useCallback((e) => {
        setUserName(e.target.value)
        if (e.target.value.length < 2 || e.target.value.length > 5) {
          setUserNameMessage('닉네임 형식이 맞았습니다')
          setIsUserName(false)
        } else {
          setUserNameMessage('닉네임 형식이 틀렸습니다')
          setIsUserName(true)
        }
      }, [])

       // 전화번호
<<<<<<< HEAD
        const onChangeUserPhone = useCallback((e) => {
=======
       const onChangeUserPhone = useCallback((e) => {
>>>>>>> 212248efec262594dfa0e85a1978a52d4a626f50
        const userPhone=e.target.value;
        const userPhoneRegex = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/
        setUserPhone(userPhone)
        if (userPhoneRegex.test(userPhone)) {
          setUserPhoneMessage('전화번호 형식이 맞았습니다')
          setIsUserPhone(false)
        } else {
          setUserPhoneMessage('전화번호 형식이 틀렸습니다')
          setIsUserPhone(true)
        }
      }, [])

      //이메일 중복검사
<<<<<<< HEAD
      const handleDup=()=>{
      const isValidDupInput = email.length>=1;
        if(!isValidDupInput){
          alert('이메일을 입력해야 합니다')
        }
        else{
          {isDup ? alert('중복된 이메일입니다') : alert('중복되지 않은 이메일입니다')}
        }
=======
      const handleDup=(e)=>{
        alert('aa')
>>>>>>> 212248efec262594dfa0e85a1978a52d4a626f50
      };

      //로그인 페이지로 이동
      const handleLogin=()=>{
        navigator("/login");
      };
     
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
                    <input type="text" name="email" placeholder="이메일" onChange={onChangeEmail}/> 
<<<<<<< HEAD
                    <button type="button" className="BtnDup" onClick={handleDup}>중복확인</button>
=======
                    <button className="BtnDup" onClick={handleDup}>중복확인</button>
>>>>>>> 212248efec262594dfa0e85a1978a52d4a626f50
                  </label>
                  <label className="DivSignUpSpan">
                    <span>{emailMessage}</span>
                  </label>
                </div>
                
                <div className="DivSignUpInput2">
                  <label className="DivSignUpInputOnChange">
                    <input type="password" name="password" placeholder="비밀번호" onChange={onChangePassword}/> 
                  </label>
                  <label className="DivSignUpSpan">
                    <span>{passwordMessage}</span>
                  </label>
                </div>
                
                <div className="DivSignUpInput2">
                  <label className="DivSignUpInputOnChange">
                    <input type="password" name="passwordCheck" placeholder="비밀번호 확인" onChange={onChangePasswordCheck}/>  
                  </label>
                  <label className="DivSignUpSpan">
                   <span>{passwordCheckMessage}</span>  
                  </label> 
                  </div>  

                <div className="DivSignUpInput2">
                  <label className="DivSignUpInputOnChange">
<<<<<<< HEAD
                    <input type="text" name="userName" placeholder="닉네임" onChange={onChangeUserName}/>    
=======
                    <input type="text" name="userName" placeholder="이름" onChange={onChangeUserName}/>    
>>>>>>> 212248efec262594dfa0e85a1978a52d4a626f50
                </label>
                <label className="DivSignUpSpan">
                  <span>{userNameMessage}</span> 
                </label> 
                </div>               
                
                <div className="DivSignUpInput2">
                  <label className="DivSignUpInputOnChange">
                    <input type="text" name="userPhone" placeholder="전화번호" onChange={onChangeUserPhone}/>      
                  </label>
                <label className="DivSignUpSpan">
                   <span>{userPhoneMessage}</span>
                  </label>              
                </div>

                <div className="DivSignUpInput">
                <label className="DivSignUpButtonOnChange">
                    <button type="submit" className="BtnSignUp">회원가입</button>
                    <button type="button" className="BtnLogin" onClick={handleLogin} >계정이 있으신가요? 로그인</button>
                </label>
              </div>
          </div>
          </form>
        </div>
    );
};

export default DivSignUp;