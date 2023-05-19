import React from 'react';
import logo from "../../../assets/bannerImg.jpg"

const Banner = () => {
    return (
        <div className="hero min-h-screen lg:h-52 my-8" style={{ backgroundImage: `url(${logo})` }}>
            {/* <img src="https://postimg.cc/NL40J1jr" alt="" /> */}
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl text-green-500 font-bold">Action Herors Toys MarketPlace</h1>
                    <p className="mb-5 my-8 text-teal-300">A toy is an object that's made for a child to play with. Your favorite Action heroes toy might have been a hulk, Captian america or it would be the DC. Some toys are specifically designed for play, like a small wooden train set or a baby's shape sorter.</p>
                </div>
            </div>
        </div>
    );
};

export default Banner;