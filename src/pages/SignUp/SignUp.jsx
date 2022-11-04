import { Link } from "react-router-dom";

const SignUp = () => {
    return (
        <>
            <div className="max-h-full flex flex-row">
            <div className="relative flex flex-grow basis-2/3 overflow-hidden w-screen bg-cover">
                    <img className="h-screen w-full flex flex-grow object-cover" src="https://images.unsplash.com/photo-1639066648921-82d4500abf1a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8" alt="" />
                </div>
                <div className="w-full basis-1/3 bg-gradient-to-b from-[#2F414F] to-[#38A392] bg-cover">
                    <div className="g-0 lg:flex lg:flex-wrap">
                        <div>
                            <div className="md:p-12 md:mx-6">
                                <div className="text-center">
                                    <img className="mx-auto w-48" src="#" alt="logo" />
                                    <h4 className="mt-1 mb-12 pb-1 text-xl font-semibold text-sky-50">Welcome to MamiHost</h4>
                                </div>
                                <form className="justify-center">
                                    <p className="mb-4 text-sky-50">Create new account</p>
                                    <div className="mb-4">
                                        <label className="font-light text-emerald-50" for="email">Email</label>
                                        <input type="text" className="bg-white/30 form-control m-0 block w-full rounded border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-1.5 text-base font-normal text-gray-700 backdrop-blur-sm transition ease-in-out focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none" id="email" placeholder="Enter your email" />
                                    </div>
                                    <div className="mb-4">
                                        <label className="font-light text-emerald-50" for="email">Username</label>
                                        <input type="text" className="bg-white/30 form-control m-0 block w-full rounded border border-solid border-gray-300  bg-white bg-clip-padding px-3 py-1.5 text-base font-normal text-gray-700 backdrop-blur-sm transition ease-in-out focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none" id="username" placeholder="Enter your username" />
                                    </div>
                                    <div className="mb-4">
                                        <label className="font-light text-emerald-50" for="email">New Password</label>
                                        <input type="password" className="bg-white/30 form-control m-0 block w-full rounded border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-1.5 text-base font-normal text-gray-700 backdrop-blur-sm transition ease-in-out focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none" id="password" placeholder="Enter new password" />
                                    </div>
                                    <div className="mb-4">
                                        <label className="font-light text-emerald-50" for="password">Confirm Password</label>
                                        <input type="password" className="bg-white/30 form-control m-0 block w-full rounded border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-1.5 text-base font-normal text-gray-700 backdrop-blur-sm transition ease-in-out focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none" id="password" placeholder="Confirm new password" />
                                    </div>
                                    <div className="mb-4 pt-1 pb-1 text-center">
                                        <button className="mb-3 inline-block w-full rounded px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-sky-50 hover:text-black hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg" type="button" data-mdb-ripple="true" data-mdb-ripple-color="light">Sign Up</button>
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