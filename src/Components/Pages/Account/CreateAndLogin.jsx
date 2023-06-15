import React, { useState } from 'react';
import { FaBeer, FaGoogle } from 'react-icons/fa';


const CreateAndLogin = () => {
    const [switchCreate, setSwithchCreate] = useState(false);
    return (
        <>{!switchCreate ?
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="flex flex-col w-full border-opacity-50">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" placeholder="email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="text" placeholder="password" className="input input-bordered" />
                                    <label className="label">
                                        <a href="#" onClick={() => setSwithchCreate(!switchCreate)} className="label-text-alt link link-hover">Don't you have account</a>
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Login</button>
                                </div>
                                <div className="divider">OR</div>
                                <div><div className='bg-yellow-600 flex justify-center py-6 text-white text-2xl w-3/12 mx-auto rounded-full px-5 cursor-pointer'><FaGoogle /></div></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> :
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Registration Now</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div>
                                <div className="flex flex-col w-full border-opacity-50">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Email</span>
                                        </label>
                                        <input type="text" placeholder="email" className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Password</span>
                                        </label>
                                        <input type="text" placeholder="password" className="input input-bordered" />
                                        <label className="label">
                                            <a href="#" onClick={() => setSwithchCreate(!switchCreate)} className="label-text-alt link link-hover">Do you have already an account ?</a>
                                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                        </label>
                                    </div>
                                    <div className="form-control mt-6">
                                        <button className="btn btn-primary">Login</button>
                                    </div>
                                    <div className="divider">OR</div>
                                    <div className="grid h-20 card bg-base-300 rounded-box place-items-center">content</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        }

        </>
    );
};

export default CreateAndLogin;