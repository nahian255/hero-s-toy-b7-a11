import React, { useEffect, useState } from 'react';

const TabDetails = () => {

    const [tab, sebTab] = useState()
    console.log(tab);
    useEffect(() => {
        fetch('https://server-r3wt8cqsg-nahian255.vercel.app/alltoys')
            .then(res => res.json())
            .then(data => sebTab(data))
    }, [])
    return (
        <div>
            {
                tab?.map(t => {
                    console.log(t?.name);
                    <h1>{t?.name}</h1>
                    // <div className="card w-96 bg-base-100 shadow-xl image-full">
                    //     <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                    //     <div className="card-body">
                    //         <h2 className="card-title">Shoes!</h2>
                    //         <p>If a dog chews shoes whose shoes does he choose?</p>
                    //         <div className="card-actions justify-end">
                    //             <button className="btn btn-primary">Buy Now</button>
                    //         </div>
                    //     </div>
                    // </div>
                })
            }

        </div>
    );
};

export default TabDetails;