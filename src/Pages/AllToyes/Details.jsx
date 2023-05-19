import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Details = () => {

    const details = useLoaderData()
    console.log(details);
    return (
        <div>
            <div className="card card-side bg-green-200 my-8 shadow-xl">
                <figure><img src="/images/stock/photo-1635805737707-575885ab0820.jpg" alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{details.name}</h2>
                    <p> Description : {details.detail}</p>
                    <h3> SellerName : {details.sellerName}</h3>
                </div>
            </div>
        </div>
    );
};

export default Details;