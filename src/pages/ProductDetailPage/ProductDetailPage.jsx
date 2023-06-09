import React from "react";
import { useNavigate } from "react-router-dom";
import { data } from '../../database/data'
import './productDetailPage.css'
import ProductCard from '../../components/ProductCard/ProductCard'
import Header from "../../components/header/Header"
import ProductDetail from "../../components/ProductDetail/ProductDetail";

export default function ProductDetailPage() {

    return (
        <>
            <Header/>
            <ProductDetail 
            productName={'버그를 Java라 버그잡는 개리씨 키링 개발자키링 금속키링'}
            price={12500}/>
        </>


    );
}