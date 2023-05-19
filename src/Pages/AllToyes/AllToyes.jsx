import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const AllToyes = () => {

    const [datas, setDatas] = useState()
    const [control, setControl] = useState(true)

    useEffect(() => {
        fetch('http://localhost:3000/alltoys')
            .then(res => res.json())
            .then(data => setDatas(data))
    }, [control])

    return (
        <div>
            <h1>all toyes</h1>
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
                                    {/* <td><Link to={`/update/${data._id}`}><button>edit</button></Link></td>
                                    <td><button onClick={() => handelDelete(data._id)}>x</button></td> */}
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllToyes;