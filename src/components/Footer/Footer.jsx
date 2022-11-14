import React from "react";
import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <footer className="bg-white dark:bg-gray-900">
            <div className="grid grid-cols-2 gap-8 py-8 px-6 md:grid-cols-4">
                <div>
                    <h2 className="mb-6 text-sm font-semibold text-gray-500 uppercase dark:text-gray-400">About MamiHost</h2>
                    <p className="text-gray-500 text-sm md:justify-between">MamiHost adalah penyedia layanan Web Hosting Provider berbasis Kontainer Docker Kubernetes sebagai solusi penyedia hosting Website maupun Database Anda.</p>
                </div>
                <div>
                    <h2 className="mb-6 text-sm font-semibold text-gray-500 uppercase dark:text-gray-400">Hosting</h2>
                    <ul className="text-gray-500 text-sm dark:text-gray-400">
                        <li className="mb-4">
                            <Link to='/packages/1' className="hover:underline">Database Hosting</Link>
                        </li>
                        <li className="mb-4">
                            <Link to='/packages/2' className="hover:underline">Web Hosting</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="py-6 px-4 bg-gray-100 dark:bg-gray-700 md:flex md:items-center md:justify-between">
                <span className="text-sm text-gray-500 dark:text-gray-300 sm:text-center">© 2022 <Link to="/">MamiHost™</Link>. All Rights Reserved.
                </span>
            </div>
        </footer>
    )
}

export default Footer;


