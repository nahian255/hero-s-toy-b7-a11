import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { toyContex } from '../../provider/ToyProvider';

const MyToys = () => {

    const { user } = useContext(toyContex)

    const [datas, setDatas] = useState()
    const [control, setControl] = useState(true)
    const [search, setSearch] = useState('')

    useEffect(() => {
        fetch(`http://localhost:3000/mytoys/email/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setDatas(data);
            })
    }, [user, control])

    // dellete button...
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

    const handelSearch = () => {
        fetch(`http://localhost:3000/getToysBySearch/${search}`)
            .then(res => res.json())
            .then(data => setDatas(data))
    }

    return (
        <div>
            <h1 className='text-green-400 text-4xl m-4'> My Toys</h1>
            <div>
                <h1 className='text-xl text-red-500 mb-4'>Search by price</h1>
                <input onChange={(e) => setSearch(e.target.value)} type="text" placeholder="Type here" className="input input-bordered input-warning w-full max-w-xs" />
                <button onClick={handelSearch} className="btn btn-outline btn-secondary mb-4 ml-4">Button</button>

            </div>
            <div className="overflow-x-auto mt-2">
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
        </div>
    );
};

export default MyToys;