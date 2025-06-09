import React from "react";
import Description from '../components/Decription';
import ProductGallery from '../components/ProductGallery';
import "../styles/MainBlock.css";

const MainBlock = ({ addToCart }) => {
    return (
        <div className="main-block">
            <ProductGallery />
            <Description addToCart={addToCart} />
        </div>
    )
}

export default MainBlock;