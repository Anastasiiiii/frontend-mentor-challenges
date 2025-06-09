import React, { useState } from "react";
import { ReactComponent as CartIcon } from "../images/icon-cart.svg";
import "../styles/Formulas.css";
import "../styles/Description.css";

const Description = ({ addToCart }) => {
    const [count, setCount] = useState(0);

    const increase = () => {
        setCount(count + 1);
    };

    const decrease = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };

    const handleAdd = () => {
        addToCart(count);
        setCount(0);
    }

    return (
        <div className="description">
            <h5 className="description__logo">sneaker company</h5>
            <h1 className="description__header">Fall Limited Edition Sneakers</h1>
            <p className="description__paragraph">
                These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.
            </p>

            <div className="description__all-prices">
                <div className="description__price">
                    <h2 className="description__main-price">$125.00</h2>
                    <p className="description__sale">50%</p>
                </div>
                <p className="description__prev-price">$250.00</p>
            </div>

            <div className="description__add-to-cart">
                <div className="description__counter">
                    <button onClick={decrease}>-</button>
                    <span>{count}</span>
                    <button onClick={increase}>+</button>
                </div>

                <button className="description__cart-button" onClick={handleAdd}>
                    <span className="cart-button__content">
                        <CartIcon className="cart-button__svg" />
                        Add to cart
                    </span>
                </button>
            </div>
        </div>
    );
};

export default Description;
