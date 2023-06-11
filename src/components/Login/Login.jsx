import React, { useState } from "react";
import imgLogo from "../../assets/imgLogo.svg";
import "./login.css";


export default function Login() {
    const [id, setId] = useState('');
    const [pw, setPw] = useState('');

    const [idValid, setIdValid] = useState(false);
    const [pwValid, setPwValid] = useState(false);

    const handleId = (e) => {
        setId(e.target.value);
        const regex =
            /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        if (regex.test(e.target.value)) {
            setIdValid(true);
        } else {
            setIdValid(false);
        }
    }


    const handlePw = (e) => {
        setPw(e.target.value);
        const regex =
        /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,15}$/;
        if (regex.test(e.target.value)) {
            setPwValid(true);
        } else {
            setPwValid(false);
        }
    }

    return (
        <div className="loginPageContainer">
            <h1>
                <img className="loginPage-logo" src={imgLogo} alt='HODU' />
            </h1>
            <main className="loginContainer">
                <div className="formbtnContainer">
                    <button className="buyerForm-btn">구매회원 로그인</button>
                    <button disabled={true} className="sellerForm-btn">판매회원 로그인</button>
                </div>
                <div className="forminputContainer">
                    <input type='text' placeholder='아이디' value={id} onChange={handleId} className="id-input"></input>
                    <input type='password' placeholder='비밀번호' value={pw} onChange={handlePw} className="pw-input"></input>
                    {/* <div className="errormessageWrap">
                        {!idValid && id.length > 0 && (
                            <div>비밀번호를 입력해주세요.</div>
                        )}
                    </div> */}
                    <div className="errormessageWrap">
                        {!pwValid && pw.length > 0 && (
                            <div>영문, 숫자, 특수기호 포함 8자 이상 입력해주세요.</div>
                        )}
                    </div>
                    <button className="login-btn">로그인</button>
                </div>
            </main>
            <footer className="loginFooter">
                <a>회원가입</a>
                <p>|</p>
                <a>비밀번호 찾기</a>
            </footer>
        </div>
    )
}