import React from 'react'
import './header.css'
import imgLogo from "../../assets/imgLogo.svg"
import SearchBtn from "../../assets/SearchBtn.svg"
import bucketImage from "../../assets/bucketImage.svg"
import MypageImage from "../../assets/MypageImage.svg"


export default function Header() {
    return (
        <header>
            <div className='headerContainer'>
                <h1>
                    <img src={imgLogo} alt='HODU' />
                </h1>
                <form className='search'>
                    <input type='text' placeholder='상품을 검색해보세요!' className='search-input'></input>
                </form>
                <button type='submit' className='search-btn'>
                    <img src={SearchBtn} alt='search-button' />
                </button>
                <ul className='header-icon'>
                    <li>
                        <a href="#" class="bucket-button">
                            <img src={bucketImage} alt='bucket-image' />
                        </a>
                        <p>장바구니</p>
                    </li>
                    <li>
                        <a href="#" class="mypage-button">
                            <img src={MypageImage} alt='Mypage-image' />
                        </a>
                        <p>마이페이지</p>
                    </li>
                </ul>

            </div>
        </header>
    )
}