import React from "react";
import './productName.css'

export default function productName({productName}) {
    return (
        <strong className="product-name sl-ellipsis">{productName}</strong>
    )
}