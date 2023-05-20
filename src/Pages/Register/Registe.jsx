import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { toyContex } from '../../provider/ToyProvider';

const Registe = () => {

    const { createUser } = useContext(toyContex)

    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const registerBtn = (e) => {
        e.preventDefault();
        setError('')
        // validation
        if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/.test(password)) {
            return setError('Password should be 6 characters')
        };
        if ((name, email, password)) {
            createUser(email, password)
                .then((result) => {
                    console.log(result.user);
                })
                .catch((err) => {
                    console.log(err.message);
                });
        };
    }

    return (
        <div>
            <h1>register</h1>
            <div className="hero min-h-screen bg-lime-50">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 ">
                        < form className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input
                                    onChange={(e) => setName(e.target.value)}
                                    type="name"
                                    placeholder="name"
                                    className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    onChange={(e) => setEmail(e.target.value)}
                                    type="email"
                                    placeholder="email"
                                    className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                    onChange={(e) => setPassword(e.target.value)}
                                    type="password"
                                    placeholder="password"
                                    className="input input-bordered" />
                                <p><small className='text-red-600'>{error}</small></p>

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Img URL</span>
                                </label>
                                <input
                                    // onChange={(e) => setPassword(e.target.value)}
                                    type="text"
                                    placeholder="img-url"
                                    className="input input-bordered" />
                                <label className="label">
                                    <p>Already register go to <Link to='/login' className='text-blue-300'>Login?</Link> </p>

                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button
                                    onClick={registerBtn}
                                    className="btn btn-primary">Register</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registe;