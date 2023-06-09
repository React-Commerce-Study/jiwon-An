import React from "react";
import imgLogo from "../../assets/imgLogo.svg";
import "./login.css";

export default function Login() {
    return (
        <div className="loginPageContainer">
            <h1>
                <img className="loginPage-logo" src={imgLogo} alt='HODU' />
            </h1>
            <main className="loginContainer">
                <div className="formbtnContainer">
                    <button className="buyerForm-btn">구매회원 로그인</button>
                    <button className="sellerForm-btn">판매회원 로그인</button>
                </div>

                <input type='text' placeholder='아이디' className="id-input"></input>
                <input type='text' placeholder='비밀번호' className="pw-input"></input>
                <button className="login-btn">로그인</button>
            </main>
            <footer>
                <a>회원가입</a>
                <p>|</p>
                <a>비밀번호 찾기</a>
            </footer>
        </div>
    )
}