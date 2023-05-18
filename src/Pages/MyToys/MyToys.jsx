import React, { useEffect, useState } from 'react';

const MyToys = () => {

    const [datas, setDatas] = useState()

    console.log(datas);

    useEffect(() => {
        fetch('http://localhost:3000/mytoys')
            .then(res => res.json())
            .then(data => setDatas(data))
    }, [])
    return (
        <div>
            <h1> My toyss</h1>
            {
                // datas.map(data => console.log(data))
            }
        </div>
    );
};

export default MyToys;