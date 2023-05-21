import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../../hook/useTitle';

const AllToyes = () => {

    const [datas, setDatas] = useState()
    const [control, setControl] = useState(true)
    const [search, setSearch] = useState('')
    useTitle('All Toys')


    useEffect(() => {
        fetch('https://b7a11-toy-marketplace-server-side-nahian255-theta.vercel.app/alltoys')
            .then(res => res.json())
            .then(data => setDatas(data))
    }, [control])

    const handelSearch = () => {
        fetch(`https://b7a11-toy-marketplace-server-side-nahian255-theta.vercel.app/getToysBySearch/${search}`)
            .then(res => res.json())
            .then(data => setDatas(data))
    }

    return (
        <div>
            <h1 className='text-green-400 text-4xl m-4'>All Toys</h1>
            <div>
                <h1 className='text-xl text-red-500 mb-4'>Search by name</h1>
                <input onChange={(e) => setSearch(e.target.value)} type="text" placeholder="Type here" className="input input-bordered input-warning w-full max-w-xs" />
                <button onClick={handelSearch} className="btn btn-outline btn-secondary ml-4">Button</button>

            </div>
            <div className="overflow-x-auto mt-8">
                <table className="table w-9">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>img</th>
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
                                    <th>
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={data?.imgUrl} />
                                            </div>
                                        </div>
                                    </th>
                                    <td>{data.name}</td>
                                    <td>{data.subCategory}</td>
                                    <td>{data.avilableQuantity}</td>
                                    <td>{data.detail}</td>
                                    <td>{data.price}</td>

                                    <td><Link to={`/details/${data._id}`}>
                                        <button className="btn btn-success">View Details</button>

                                    </Link></td>

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
