import React from "react";
import { ReactComponent as DeleteIcon } from "../images/icon-delete.svg";
import "../styles/CartModal.css";

const CartModal = ({ items, onRemove, onCheckout }) => {
  return (
    <div className="cart-modal">
      <h4 className="cart-modal__header">Cart</h4>
      {items.length === 0 ? (
        <p className="cart-modal__empty-message">Your cart is empty</p>
      ) : (
        <div className="cart-modal__content">
          {items.map((item, index) => (
            <div className="cart-modal__item" key={index}>
              <img
                src={item.image}
                alt="thumb"
                className="cart-modal__thumbnail"
              />
              <div className="cart-modal__item-info">
                <p className="cart-modal__item-title">{item.title}</p>
                <p className="cart-modal__item-price">
                  ${item.price.toFixed(2)} x {item.count}{" "}
                  <strong>${(item.price * item.count).toFixed(2)}</strong>
                </p>
              </div>
              <button className="cart-modal__delete-btn" onClick={() => onRemove(item.id)}>
                <DeleteIcon />
              </button>
            </div>
          ))}
          <button className="cart-modal__checkout" onClick={onCheckout}>Checkout</button>
        </div>
      )}
    </div>
  );
};

export default CartModal;
