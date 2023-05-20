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
                    <div className="avatar">
                        <div className="w-8 rounded">
                            <img src="https://www.shutterstock.com/image-vector/vintage-army-action-figure-logo-260nw-2187972853.jpg" alt="Tailwind-CSS-Avatar-component" />
                        </div>
                    </div>
                    <Link to="/" className='text-green-900 font-bold text-xl ml-2'>Hero's Toys</Link>
                </div>
                <div className="flex-none">
                    <Link className='lg:mx-2 text-blue-700' to="/" >Home</Link>
                    <Link className='lg:mx-2 text-black' to="/allToys" >All Toys</Link>
                    <Link className='lg:mx-2 text-black' to="/myToys" >My Toys</Link>
                    <Link className='lg:mx-2 text-black' to="/addToy" >Add A Toy</Link>
                    <Link className='mx-2 text-black' to='/blog' >Blogs</Link>
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