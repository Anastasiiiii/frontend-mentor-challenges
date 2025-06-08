import React from "react";
import Description from '../components/Decription';
import ProductGallery from '../components/ProductGallery';
import "../styles/MainBlock.css";

const MainBlock = () => {
    return (
        <div className="main-block">
            <ProductGallery />
            <Description />
        </div>
    )
}

export default MainBlock;