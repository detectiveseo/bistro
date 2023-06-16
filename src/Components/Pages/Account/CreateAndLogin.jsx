import React, { useContext, useEffect, useRef, useState } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../Proveiders/AuthProviders';



const CreateAndLogin = () => {
    const [switchCreate, setSwithchCreate] = useState(false);
    const [isDisabled, setIsDisabled] = useState(true)

    const { setUser, singUpWithGmail, singUpUsingEmailAndPassFiled } = useContext(AuthContext);
    const navigate = useNavigate();


    // singUp with google popUp 
    const singUpWithGmailHandle = () => {
        singUpWithGmail()
            .then(res => {
                setUser(res.user),
                    navigate("/")
            })
    }

    // singUp with email and password 
    const handleSingUp = (event) => {
        event.preventDefault()
        console.log(event.target.name)
    }

    const capthavalue = useRef();

    const handleCaptha = () => {
        const cathaValueFromUser = capthavalue.current.value;
        if (validateCaptcha(cathaValueFromUser)) {
            setIsDisabled(false)
        }
        else {

            setIsDisabled(true)
        }
    }


    useEffect(() => {
        loadCaptchaEnginge(6)
    }, [])
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

                                    <div className='flex justify-center items-center my-3 py-3 bg-slate-300'>

                                        <LoadCanvasTemplateNoReload />

                                    </div>
                                    <label className="label">
                                        <span className="label-text">Captha</span>
                                    </label>

                                    <input type="text" ref={capthavalue} placeholder="Type captha" className="input input-bordered" />
                                    <button onClick={handleCaptha} className='outline btn btn-xs w-2/12'>Valid</button>

                                    <label className="label">
                                        <span onClick={() => setSwithchCreate(!switchCreate)} className="label-text-alt link link-hover">Don't you have account</span>
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary"
                                        disabled={isDisabled}>Login</button>
                                </div>
                                <div className="divider">OR</div>
                                <div><div
                                    onClick={singUpWithGmailHandle}
                                    className='bg-yellow-600 flex justify-center py-6 text-white text-2xl w-3/12 mx-auto rounded-full px-5 cursor-pointer'><FaGoogle /></div></div>
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
                                    <form
                                        onSubmit={handleSingUp}
                                        className="form-control">
                                        <label className='label'>
                                            <span className='lable-text'>Name</span>
                                        </label>
                                        <input type="text" placeholder='Your name' name='name' id='user_name' className='input input-bordered' />

                                        <label className='label'>
                                            <span className='lable-text'>Number</span>
                                        </label>
                                        <input type="tel" placeholder='Phone number' name='number' id='user_number' className='input input-bordered' />

                                        <label className='label'>
                                            <span className='lable-text'>Dath Of Birth</span>
                                        </label>
                                        <input type="date" placeholder='Phone number' name='dath_of_birth' id='user_number' className='input input-bordered' />

                                        <label className='label'>
                                            <span className='lable-text'>profile picture</span>
                                        </label>
                                        <input type="file" placeholder='Phone number' name='dath_of_birth' id='user_number' className='input input-bordered' />

                                        <label className='label'>
                                            <span className='lable-text'>Dath Of Birth</span>
                                        </label>
                                        <select className='input input-bordered'>
                                            <option value="Male">Male</option>
                                            <option value="female">Female</option>
                                            <option value="custom">Custom</option>
                                        </select>

                                        <label className="label">
                                            <span className="label-text">Email</span>
                                        </label>
                                        <input type="text" placeholder="email" className="input input-bordered" />


                                        <label className="label">
                                            <span className="label-text">Password</span>
                                        </label>
                                        <input type="text" placeholder="password" className="input input-bordered" />
                                        <label className="label">
                                            <span onClick={() => setSwithchCreate(!switchCreate)} className="label-text-alt link link-hover">Do you have already an account ?</span>
                                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                        </label>

                                        <input type="submit" className="btn btn-primary" value="Registration" />
                                    </form>

                                    <div className="divider">OR</div>
                                    <div><div
                                        onClick={singUpWithGmailHandle}
                                        className='bg-yellow-600 flex justify-center py-6 text-white text-2xl w-3/12 mx-auto rounded-full px-5 cursor-pointer'><FaGoogle /></div></div>
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