import React from 'react';

const Carosol = () => {
    return (
        <div >
            <h1>carosol</h1>
            <div className="h-96 carousel carousel-vertical rounded-box bg-slate-200">
                <div className="carousel-item h-full">
                    <img src="/images/stock/photo-1559703248-dcaaec9fab78.jpg" />
                </div>
                <div className="carousel-item h-full">
                    <img src="/images/stock/photo-1565098772267-60af42b81ef2.jpg" />
                </div>
                <div className="carousel-item h-full">
                    <img src="/images/stock/photo-1572635148818-ef6fd45eb394.jpg" />
                </div>
                <div className="carousel-item h-full">
                    <img src="/images/stock/photo-1494253109108-2e30c049369b.jpg" />
                </div>
                <div className="carousel-item h-full">
                    <img src="/images/stock/photo-1550258987-190a2d41a8ba.jpg" />
                </div>
                <div className="carousel-item h-full">
                    <img src="/images/stock/photo-1559181567-c3190ca9959b.jpg" />
                </div>
                <div className="carousel-item h-full">
                    <img src="/images/stock/photo-1601004890684-d8cbf643f5f2.jpg" />
                </div>
            </div>
        </div>
    );
};

export default Carosol;