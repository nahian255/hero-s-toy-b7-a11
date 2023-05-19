import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Details = () => {

    const details = useLoaderData()
    console.log(details);
    return (
        <div>
            <div className="card card-side bg-slate-300 my-16 mb-28 shadow-xl">
                <figure><img src={details?.imgUrl} alt="Movie" /></figure>
                <div className="card-body text-xl text-black italic">
                    <h2 className="card-title text-red-400 text-2xl text-center">{details?.name}</h2>
                    <h3> Seller name : {details?.sellerName}</h3>
                    <h3> Seller email : {details?.sellerEmail}</h3>
                    <h3> price : {details?.price}</h3>
                    <p> Available quantity : {details?.avilableQuantity}</p>
                    <p> Description : {details?.detail}</p>
                </div>
            </div>
        </div>
    );
};

export default Details;