import React, { useState } from "react";
import "../styles/Formulas.css";
import "../styles/Menu.css";
import logoImg from "../images/logo.svg";
import cartIcon from "../images/icon-cart.svg";
import avatarImg from "../images/image-avatar.png";
import burgerIcon from "../images/icon-menu.svg";
import closeIcon from "../images/icon-close.svg";

const Menu = () => {
    const [isMobileOpen, setIsMobileOpen] = useState(false);

    return (
        <>
            <div className="menu">
                <img
                    src={burgerIcon}
                    className="menu__burger"
                    onClick={() => setIsMobileOpen(true)}
                    alt="Open navigation menu"
                    role="button"
                    tabIndex="0"
                />

                <img src={logoImg} className="menu__logo" alt="logo" />

                <ul className="menu__links">
                    <li className="menu__item"><a className="menu__link" href="#" >Collections</a></li>
                    <li className="menu__item"><a className="menu__link" href="#" >Men</a></li>
                    <li className="menu__item"><a className="menu__link" href="#" >Women</a></li>
                    <li className="menu__item"><a className="menu__link" href="#" >About</a></li>
                    <li className="menu__item"><a className="menu__link" href="#" >Contact</a></li>
                </ul>

                <div className="menu__user-side">
                    <img src={cartIcon} className="menu__cart" alt="cart" />
                    <img src={avatarImg} className="menu__avatar" alt="avatar" />
                </div>
            </div>

            {/* Mobile side menu */}
            <aside className={`menu__mobile ${isMobileOpen ? 'menu__mobile--open' : ''}`}>
                <img
                    src={closeIcon}
                    className="menu__close"
                    onClick={() => setIsMobileOpen(false)}
                    alt="Close navigation menu"
                    role="button"
                    tabIndex="0"
                />

                <ul className="menu__mobile-links">
                    <li><a href="#">Collections</a></li>
                    <li><a href="#">Men</a></li>
                    <li><a href="#">Women</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>

            </aside>
        </>
    )
}

export default Menu;