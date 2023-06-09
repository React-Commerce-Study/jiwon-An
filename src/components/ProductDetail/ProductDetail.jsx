import React from "react";
import ProductImage from '../ProductImage/ProductImage'
import ProductName from '../ProductName/ProductName'
import ProductPrice from '../ProductPrice/ProductPrice'
import minBtn from "../../assets/icon-minus-line.svg"
import plusBtn from "../../assets/icon-plus-line.svg"
import './productDetail.css'

export default function ProductDetail({ productName, price, thumbnailImg }) {
    return (
        <div className="product-item-detail">
            <div className="detail-img">
                <img src="http://test.api.weniv.co.kr/asset/img/1/thumbnailImg.jpg"></img>
            </div>
            <div className="product-item-info">
                <p className="product-name"><ProductName productName={productName} />
                </p>
                <p className="produduct-price"><ProductPrice ProductPrice={price} />
                </p>
                <p>택배배송 / 무료배송</p>
                <div className="line"></div>
                <div className="product-amount">
                    <img
                        className="min-btn"
                        src={minBtn}
                        alt="minus"
                    />
                    <div className="product-count">
                        <span>1</span>
                    </div>
                    <img
                        className="plus-btn"
                        src={plusBtn}
                        alt="plus"
                    />
                </div>
                <div className="line"></div>
            </div>

            <div className="product-sum-container">
                <div>
                    <span className="product-sum">총 상품 금액</span>
                </div>
                <span className="product-total">
                    총 수량 <span className="product-total-count">1개</span>
                </span>
                <span className="product-total-price">
                    17,500
                    <span className="product-total-won">원</span>
                </span>
            </div>

            <div className="product-shopping-btn">
                <button className="buy-btn">바로 구매</button>
                <button className="wish-btn">장바구니</button>
            </div>
        </div>
    )
}

// 상품 상세 명세 확인해서 받아오기 
// css 서치