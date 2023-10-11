import React, { useState } from 'react';
import './SignUp.css'
import { useNavigate } from 'react-router-dom';

const DivSignUp = () => {
    const navigator=useNavigate()
    const [flag, setFlag] =useState(false);
    const [dup, setDup]=useState(false);
    const handleSignUp=()=>{
        setFlag(!flag);
        alert("트루값입니다!");                                   
        navigator(`/login`);
    }
    const handleDup=()=>{
        setDup(!dup);
        alert('트루값입니다!');
    }
    const handleLogin=()=>{
        navigator(`/login`);
    }
    return (
        <div className="DivSignUp">
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
                    <input type="text" placeholder="이메일" /> 
                    <button className="BtnDup" onClick={handleDup}>중복확인</button>
                </div>
                <div className="DivSignUpInput2">
                    <input type="password" placeholder="비밀번호" /> 
                </div>
                <div className="DivSignUpInput2">
                    <input type="password" placeholder="비밀번호 확인" />                     
                </div>
                <div className="DivSignUpInput2">
                    <input type="text" placeholder="이름" />                     
                </div>
                <div className="DivSignUpInput2">
                    <input type="text" placeholder="전화번호" />                    
                </div>
                <div className="DivSignUpInput">
                    <button className="BtnSignUp" onClick={handleSignUp}>회원가입</button>
                    <button className="BtnLogin" onClick={handleLogin}>계정이 있으신가요? 로그인</button>
                </div>
            </div>
        </div>
    );
};

export default DivSignUp;