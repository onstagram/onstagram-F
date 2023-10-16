import React, { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import axiosIns from '../../api/api';
import './Login.css';

const DivLogin2 = () => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    //로그인 버튼 클릭 이벤트
    const onSubmit = useCallback(
        async (e) => { 
      e.preventDefault();
      try {
        await axiosIns.post(`/login`, {
            email: email,
            password: password},
             {
                headers:{
                    'Content-Type':'application/json;charset=UTF-8',
                }
             })
        .then((res) => {
            console.log('res:', res)
            if (res.status === 200) {
              console.log(email, password); 
              dispatch({type:'LOGIN', payload:{email:{email}, password:{password}}});
              navigator('/')
             }
          })
      } catch (err) {
            console.error(err)
      }
     },[email, password])

     // 이메일 
    const onChangeEmail = useCallback((e) => {
        const email = e.target.value
        setEmail(email)
        console.log(email);
      }, [])

    // 비밀번호 
    const onChangePassword = useCallback((e) => {
        const password = e.target.value
        setPassword(password)
        console.log(password);
      }, [])
    
    return (
        <div>
        <form onSubmit={onSubmit}>
        <div className="DivLogin2">
        <div className="DivImg">
            이미지 삽입 예정
        </div>
        <div className="DivLoginBox">
            <div className="DivLoginBox2">
                <div className="DivOnstragramBox">
                    <span>Onstagram</span>
                </div>
                <div className="DivLoginInputBox">
                    <input type="text" name="email" onChange={onChangeEmail} placeholder="이메일 입력"/><br />
                    <input type="password" name="password"  onChange={onChangePassword} placeholder="비밀번호" />    
                </div>                
                <div className="DivLoginButtonBox">
                    <button type="submit">로그인</button>
                </div>
            </div>
            
            <div className="DivLoginH5Box">
                <h5>계정이 없으신가요? <Link to={'/signup'}>가입하기</Link></h5>
            </div>
        </div>
    </div>
        </form>
        </div>
    );
};

export default DivLogin2;