import React, { useContext, useState } from 'react';
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toyContex } from '../../provider/ToyProvider';

const Login = () => {

    const { loginUser, googleLogin } = useContext(toyContex)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    // console.log(user);
    const location = useLocation();
    let navigate = useNavigate();
    let from = location.state?.comming?.pathname || "/";




    // Login function.....

    const loginBtn = (event) => {
        event.preventDefault();
        console.log(email, password);
        setError('')
        if ((email, password)) {
            loginUser(email, password)
                .then((result) => {
                    console.log(result.user);
                    navigate(from, { replace: true });
                })
                .catch((error) => {
                    setError('email and password not match')
                });
        }
    };

    // Sing-in with google...

    const handleGoogleLogin = () => {
        googleLogin()
            .then((result) => {
                const user = result.user;
                navigate(from, { replace: true });
            }).catch((error) => {
                const errorMessage = error.message;
            });
    };



    return (
        <div>
            <div >
                {/* from part */}

                <div className="hero min-h-screen bg-lime-50">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <div className="text-center lg:text-left w-1/2 bg-slate-200">
                            <h1 className="text-5xl font-bold">Login now!</h1>
                            <p className="py-6">Provident  In deleniti eaque aut repudiandae et a id nisi.</p>
                        </div>
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 ">
                            < form className="card-body">
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
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button
                                        onClick={loginBtn}
                                        className="btn btn-primary">Login</button>
                                </div>
                            </form>

                            < div className='ml-6'>
                                <button
                                    onClick={handleGoogleLogin}
                                    className="btn btn-square btn-outline text-2xl"> G
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;