import React, { useState } from "react";
import "../styles/Formulas.css";
import "../styles/ProductGallery.css";

import { ReactComponent as CloseIcon } from "../images/icon-close.svg";
import { ReactComponent as NextIcon } from "../images/icon-next.svg";
import { ReactComponent as PrevIcon } from "../images/icon-previous.svg";


import product1 from "../images/image-product-1.jpg";
import product2 from "../images/image-product-2.jpg";
import product3 from "../images/image-product-3.jpg";
import product4 from "../images/image-product-4.jpg";

import thumb1 from "../images/image-product-1-thumbnail.jpg";
import thumb2 from "../images/image-product-2-thumbnail.jpg";
import thumb3 from "../images/image-product-3-thumbnail.jpg";
import thumb4 from "../images/image-product-4-thumbnail.jpg";

const imageSet = [
    { full: product1, thumb: thumb1 },
    { full: product2, thumb: thumb2 },
    { full: product3, thumb: thumb3 },
    { full: product4, thumb: thumb4 }
]

const ProductGallery = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const nextImage = () => setActiveIndex((prev) => (prev + 1) % imageSet.length);
    const prevImage = () => setActiveIndex((prev) => (prev - 1 + imageSet.length) % imageSet.length);

    return (
        <>
            <div className="gallery">
                <div className="gallery__main" onClick={() => setIsModalOpen(true)}>
                    <img src={imageSet[activeIndex].full} alt="Selected product" className="gallery__main-image" />
                </div>

                {window.innerWidth <= 768 && (
                    <>
                        <PrevIcon onClick={prevImage} className="gallery__prev" />
                        <NextIcon onClick={nextImage} className="gallery__next" />
                    </>
                )}

                <div className="gallery__thumbnails">
                    {imageSet.map((img, index) => (
                        <img
                            key={index}
                            src={img.thumb}
                            alt={`Thumbnail ${index + 1}`}
                            className={`gallery__thumbnail ${index === activeIndex ? "gallery__thumbnail--active" : ""
                                }`}
                            onClick={() => setActiveIndex(index)}
                        />
                    ))}
                </div>
            </div>

            {/* Modal overlay */}
            {isModalOpen && (
                <div className="modal">
                    <div className="modal__content">
                        <CloseIcon className="modal__close" alt="close" onClick={() => setIsModalOpen(false)} />

                        <PrevIcon onClick={prevImage} className="modal__prev" aria-label="previous image" />

                        <img
                            src={imageSet[activeIndex].full}
                            alt="Modal product"
                            className="modal__image"
                        />

                        <NextIcon onClick={nextImage} className="modal__next" alt="next image" />

                        <div className="modal__thumbnails">
                            {imageSet.map((img, index) => (
                                <img
                                    key={index}
                                    src={img.thumb}
                                    className={`modal__thumbnail ${index === activeIndex ? "modal__thumbnail--active" : ""
                                        }`}

                                    onClick={() => setActiveIndex(index)}
                                    alt=""
                                />
                            ))}
                        </div>

                    </div>
                </div>
            )}
        </>
    )
}

export default ProductGallery;