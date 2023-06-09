import React from "react";
import { useNavigate } from "react-router-dom";
import { data } from '../../database/data'
import './homePage.css'
import ProductCard from '../../components/ProductCard/ProductCard'
import Header from "../../components/header/Header"
import Carousel from "../../components/carousel/Carousel";

export default function HomePage() {
    const movePage = useNavigate();
    function gohome(){
        movePage('/productdetailpage');
    }
    return (
        <>
            <Header/>
            <Carousel/>
            <main className="product">
                <ul onClick={gohome} className="product-list">
                    {data.map(item =>
                        <ProductCard
                            key={item.id}
                            productName={item.productName}
                            price={item.price}
                            thumbnailImg={item.thumbnailImg}
                        />
                    )}
                </ul>
                <a className="link-btn cart-link" href="#"></a>
            </main>
        </>

    )
}