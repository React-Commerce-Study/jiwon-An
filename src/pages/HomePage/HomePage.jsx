import React from "react";
import { data } from '../../database/data'
import './homePage.css'
import ProductCard from '../../components/ProductCard/ProductCard'
import Header from "../../components/header/Header"

export default function HomePage() {
    console.log(data)
    return (
        <>
            <Header/>
            <main className="product">
                <ul className="product-list">
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