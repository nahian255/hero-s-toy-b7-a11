import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const AllToyes = () => {

    const [datas, setDatas] = useState()
    const [control, setControl] = useState(true)
    const [search, setSearch] = useState('')


    useEffect(() => {
        fetch('http://localhost:3000/alltoys')
            .then(res => res.json())
            .then(data => setDatas(data))
    }, [control])

    const handelSearch = () => {
        fetch(`http://localhost:3000/getToysBySearch/${search}`)
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

                                    <td><Link to={`/details/${data._id}`}><button>View details</button></Link></td>

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