import React from 'react';
import img1 from "../../../assets/img1.jpg"
import img2 from "../../../assets/img8.jpg"
import img3 from "../../../assets/img7.jpg"
import img4 from "../../../assets/img4.jpg"
import img5 from "../../../assets/img5.jpg"

const Gallery = () => {
    return (
        <div className=''>
            <h1 className='text-4xl my-8 text-green-600'>Action figure toys Gallery</h1>
            <p className='my-4 text-black text-xl'>Pick Your favourait one</p>
            <div className="carousel carousel-end rounded-box">
                <div className="carousel-item">
                    <img src={img1} alt="Drink" />
                </div>
                <div className="carousel-item">
                    <img src={img2} alt="Drink" />
                </div>
                <div className="carousel-item">
                    <img src={img3} alt="Drink" />
                </div>
                <div className="carousel-item">
                    <img src={img1} alt="Drink" />
                </div>
                <div className="carousel-item">
                    <img src={img2} alt="Drink" />
                </div>
                <div className="carousel-item">
                    <img src={img1} alt="Drink" />
                </div>
                <div className="carousel-item">
                    <img src={img1} alt="Drink" />
                </div>
            </div>
        </div>
    );
};

export default Gallery;