import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const MyToys = () => {

    const [datas, setDatas] = useState()
    // const [users, setUsers] = useState(datas)
    const [control, setControl] = useState(true)
    // console.log(users);

    useEffect(() => {
        fetch('http://localhost:3000/mytoys')
            .then(res => res.json())
            .then(data => setDatas(data))
    }, [control])

    const handelDelete = id => {
        fetch(`http://localhost:3000/mytoys/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount > 0) {
                    alert('Are you sure want to delete')
                    setControl(!control)

                    // const remmingUser = users.filter(user => user._id !== id)
                    // setUsers(remmingUser)
                }
            })
    }

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
                                    <td><Link to={`/update/${data._id}`}><button>edit</button></Link></td>
                                    <td><button onClick={() => handelDelete(data._id)}>x</button></td>
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