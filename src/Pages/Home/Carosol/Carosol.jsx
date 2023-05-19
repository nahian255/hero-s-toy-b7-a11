import React from 'react';
import img1 from "../../../assets/img1.jpg"
import img2 from "../../../assets/img2.jpg"
import img3 from "../../../assets/img10 (2).jpg"
import img4 from "../../../assets/img10 (1).jpg"
import img5 from "../../../assets/img10 (3).jpg"
import img6 from "../../../assets/img10 (4).jpg"

const Carosol = () => {
    return (
        <div data-aos="fade-up" className='lg:mx-auto' >
            <h1 className='text-green-400 text-4xl mb-8'>Another part that you see the Toys</h1>
            <div className=" lg:mx-auto h-96 lg:w-1/2 carousel carousel-vertical rounded-box bg-slate-200">
                <div className="carousel-item h-full">
                    <img src={img1} />
                </div>
                <div className="carousel-item h-full">
                    <img src={img2} />
                </div>
                <div className="carousel-item h-full">
                    <img src={img3} />
                </div>
                <div className="carousel-item h-full">
                    <img src={img4} />
                </div>
                <div className="carousel-item h-full">
                    <img src={img5} />
                </div>
                <div className="carousel-item h-full">
                    <img src={img6} />
                </div>
                <div className="carousel-item h-full">
                    <img src={img3} />
                </div>
            </div>
        </div>
    );
};

export default Carosol;