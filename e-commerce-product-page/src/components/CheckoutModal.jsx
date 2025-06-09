import React from "react";
import "../styles/CheckoutModal.css";

const CheckoutModal = ({ onClose }) => {
  return (
    <div className="checkout-modal__overlay">
      <div className="checkout-modal">
        <h2 className="checkout-modal__title">Thank you for your purchase!</h2>
        <p className="checkout-modal__text">Your order has been placed successfully.</p>
        <button className="checkout-modal__close-btn" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default CheckoutModal;
