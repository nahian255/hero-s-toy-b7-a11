import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { toyContex } from '../../provider/ToyProvider';

const Nav = () => {

    const { user, logOut } = useContext(toyContex)
    // console.log(user);

    // LogOut function....
    const handleLogout = () => {
        logOut()
            .then()
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div>
            <div className="navbar bg-slate-300">
                <div className="flex-1">
                    <Link to="/" className='text-black font-bold text-xl'>Toy gallery</Link>
                </div>
                <div className="flex-none">
                    <Link to="/" >Home</Link>
                    <Link className='lg:mx-2 text-green-400' to="/allToys" >All Toys</Link>
                    <Link className='lg:mx-2' to="/myToys" >My Toys</Link>
                    <Link className='lg:mx-2 text-rose-300' to="/addToy" >Add A Toy</Link>
                    <Link className='mx-2' to='/blog' >Blogs</Link>
                    <Link className='mx-2' to='/register' > Register</Link>

                    {
                        user ?
                            <>
                                <button className='mx-2' onClick={handleLogout}>Logout</button>
                                {/* profile img div */}
                                <div className="avatar">
                                    <div className="w-11 rounded-full">
                                        <img src={user.photoURL} />

                                    </div>
                                </div>
                            </>
                            :
                            <>
                                <Link className='mx-2' to='/login' >Login</Link>
                            </>
                    }


                </div>
            </div>
        </div>
    );
};

export default Nav;