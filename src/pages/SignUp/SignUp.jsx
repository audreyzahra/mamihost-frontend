import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { API_URL } from "../../config";

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [new_password, setNewPassword] = useState('');
    const [confirm_password, setConfirmPassword] = useState('');

    const navigate = useNavigate()

    const handleSignUp = () => {
        axios.post(`${API_URL}/user/register`, {
            email: email,
            username: username,
            password: confirm_password
        })
        .then((response) => {
            if (response.status === 200) {
                navigate('/login')
            }
        }, (error) => {
            console.log(error);
        });
    }

    return (
        <>
            <div className="max-h-full flex flex-row">
            <div className="relative flex flex-col basis-2/3 overflow-hidden w-screen bg-cover">
                    <img className="flex flex-col w-full max-h-screen object-cover bg-cover" src="https://images.unsplash.com/photo-1639066648921-82d4500abf1a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8" alt="" />
                </div>
                <div className="w-full max-h-screen basis-1/3 bg-gradient-to-b from-[#2F414F] to-[#38A392] bg-cover">
                    <div className="lg:flex lg:flex-wrap g-0">
                        <div>
                            <div className="p-12 mx-12">
                                <div className="text-center">
                                    <img className="mx-auto w-48" src="#" alt="logo" />
                                    <h4 className="mt-1 mb-4 pb-1 text-xl font-semibold text-sky-50">Welcome to MamiHost</h4>
                                </div>
                                <form>
                                    <p className="mb-4 text-sky-50">Create new account</p>
                                    <div className="mb-4">
                                        <label className="font-light text-emerald-50" htmlFor="email">Email</label>
                                        <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" className="backdrop-blur-sm bg-white/30 form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="email" placeholder="Enter your email" />
                                    </div>
                                    <div className="mb-4">
                                        <label className="font-light text-emerald-50" htmlFor="email">Username</label>
                                        <input value={username} onChange={(e) => setUsername(e.target.value)} type="text" className="bg-white/30 form-control block w-full m-0 rounded border border-solid border-gray-300  bg-white bg-clip-padding px-3 py-1.5 text-base font-normal text-gray-700 backdrop-blur-sm transition ease-in-out focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none" id="username" placeholder="Enter your username" />
                                    </div>
                                    <div className="mb-4">
                                        <label className="font-light text-emerald-50" htmlFor="email">New Password</label>
                                        <input value={new_password} onChange={(e) => setNewPassword(e.target.value)} type="password" className="bg-white/30 form-control m-0 block w-full rounded border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-1.5 text-base font-normal text-gray-700 backdrop-blur-sm transition ease-in-out focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none" id="new_password" placeholder="Enter new password" />
                                    </div>
                                    <div className="mb-4">
                                        <label className="font-light text-emerald-50" htmlFor="password">Confirm Password</label>
                                        <input value={confirm_password} onChange={(e) => setConfirmPassword(e.target.value)} type="password" className="bg-white/30 form-control m-0 block w-full rounded border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-1.5 text-base font-normal text-gray-700 backdrop-blur-sm transition ease-in-out focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none" id="confirm_password" placeholder="Confirm new password" />
                                    </div>
                                    <div className="mb-4 pt-1 pb-1 text-center">
                                        <button onClick={handleSignUp} className="mb-3 inline-block w-full rounded px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-sky-50 hover:text-black hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg" type="button" data-mdb-ripple="true" data-mdb-ripple-color="light">Sign Up</button>
                                        <a className="text-sky-50" href="#!">Forgot password?</a>
                                    </div>
                                    <div className="mb-4 pt-1 pb-1 text-center">
                                        <div className="flex justify-between text-center">
                                            <p className="mb-0 mr-2 text-sky-50">Have an account?</p>
                                            <button type="button" className="inline-block rounded border-2 border-sky-50 px-6 py-2 text-xs font-medium uppercase leading-tight text-sky-50 transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0" data-mdb-ripple="true" data-mdb-ripple-color="light">
                                                <Link
                                                    to='/login'
                                                >
                                                    Login
                                                </Link>
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignUp