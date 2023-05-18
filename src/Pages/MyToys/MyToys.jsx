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
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Category</th>
                            <th>Quantity</th>
                            <th>Description</th>
                            <th>Price</th>
                            <th>Edit</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            datas?.map((data, index) => (
                                <tr>
                                    <th>{index + 1}</th>
                                    <td>{data.name}</td>
                                    <td>{data.subCategory}</td>
                                    <td>{data.avilableQuantity}</td>
                                    <td>{data.detail}</td>
                                    <td>{data.price}</td>
                                    <td><button>edit</button></td>
                                    <td><button>x</button></td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>

            <div>
                {/* {
                    datas.map(data => <MyToysList
                        key={data._id}
                        data={data}
                    ></MyToysList>)
                } */}
            </div>
        </div>
    );
};

export default MyToys;