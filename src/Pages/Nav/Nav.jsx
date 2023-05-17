import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { toyContex } from '../../provider/ToyProvider';

const Nav = () => {

    const { user } = useContext(toyContex)
    console.log(user);

    return (
        <div>
            <div className="navbar bg-slate-300">
                <div className="flex-1">
                    <Link to="/" className='text-black font-bold text-xl'>Toy gallery</Link>
                </div>
                <div className="flex-none">
                    <Link to="/" >Home</Link>
                    <Link className='mx-2' to='/login' >Login</Link>
                    <Link className='mx-2' to='/register' > Register</Link>
                    <Link className='mx-2' to='/blog' >Blogs</Link>

                    {/* profile img div */}
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Nav;