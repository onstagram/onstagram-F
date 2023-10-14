import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css'

const DivLogin2 = () => {
    const [flag, setFlag] =useState(false);
    const handleLogin=()=>{
        setFlag(!flag);
        alert("트루값입니다!");
    }
    return (
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
                    <input type="text" placeholder="이메일 입력"/><br />
                    <input type="password" placeholder="비밀번호" />    
                </div>                
                <div className="DivLoginButtonBox">
                    <button onClick={handleLogin}>로그인</button>
                </div>
            </div>
            
            <div className="DivLoginH5Box">
                <h5>계정이 없으신가요? <Link to={"/SignPage"}>가입하기</Link></h5>
            </div>
        </div>
    </div>
    );
};

export default DivLogin2;