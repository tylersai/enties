import React from "react";
import "./PriceTag.css";

const PriceTag = () => {
    const goBuy = e => {
        e.stopPropagation();
    }
    return <button onClick={goBuy} className="price-tag bg bg2">$19.99</button>;
}

export default PriceTag;