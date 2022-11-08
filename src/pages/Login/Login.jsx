import { useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../../config";

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const handleLogin = () => {
        axios.post(`${API_URL}/login/userLogin`, {
            username: username,
            password: password
        })
        .then((response) => {
            const email = response.data.user.email
            console.log(response)
            if (response.status === 200) {
                navigate(`/dashboard/${email}`)
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
                            <div className="md:p-12 md:mx-6">
                                <div className="text-center">
                                    <img className="mx-auto w-48" src="#" alt="logo" />
                                    <h4 className="text-xl text-sky-50 font-semibold mt-1 mb-12 pb-1">Welcome to MamiHost</h4>
                                </div>
                                <form>
                                    <p className="text-sky-50 mb-4">Please login to your account</p>
                                    <div className="mb-4">
                                        <label className="text-emerald-50 font-light" htmlFor="email">Email or Username</label>
                                        <input value={username} onChange={(e) => setUsername(e.target.value)} type="text" className="backdrop-blur-sm bg-white/30 form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="username" placeholder="Email or Username" />
                                    </div>
                                    <div className="mb-4">
                                        <label className="text-emerald-50 font-light" htmlFor="email">Password</label>
                                        <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" className="backdrop-blur-sm bg-white/30 form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="password" placeholder="Password" />
                                    </div>
                                    <div>
                                        <input type="checkbox" name="remember" id="remember" />
                                        <label className="text-sm text-white" htmlFor="remember">Remember me</label>
                                    </div>
                                    <div className="text-center pt-1 mb-12 pb-1">
                                        <button onClick={handleLogin} className="inline-block px-6 py-2.5 text-white font-medium text-xs hover:text-black leading-tight uppercase rounded shadow-md hover:bg-sky-50 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3" type="button" data-mdb-ripple="true" data-mdb-ripple-color="light">
                                            Log in
                                        </button>
                                        <a className="text-sky-50" href="#!">Forgot password?</a>
                                    </div>
                                    <div className="flex items-center justify-between pb-6">
                                        <p className="text-sky-50 mb-0 mr-2">Don't have an account?</p>
                                        <button type="button" className="inline-block px-6 py-2 border-2 border-sky-50 text-sky-50 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="light">
                                            <Link
                                                to='/signup'
                                            >
                                                Sign Up
                                            </Link>
                                        </button>
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

export default Login