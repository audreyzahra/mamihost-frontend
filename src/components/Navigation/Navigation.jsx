/* eslint-disable jsx-a11y/anchor-is-valid */
/* This example requires Tailwind CSS v2.0+ */
import { Popover } from "@headlessui/react";

import { Link } from "react-router-dom";
import { useState } from "react";

const fitur = [
  {
    name: "Website",
    to: "/packages/2",
  },
  {
    name: "Database",
    to: "/packages/1",
  }
];

const Login = () => {
  const [token, setToken] = useState('');

  const getToken = localStorage.getItem('UserDetails');

  const handleLogout = () => {
    setToken(localStorage.removeItem('UserDetails'))
  }

  return (
    <>
      {getToken && token !== null ?
        <div className='hidden md:flex items-center justify-end md:flex-1 lg:w-0'>
          <Link
            onClick={handleLogout}
            to='/login'
            className='bg-teal-600 px-7 py-2 whitespace-nowrap text-nav-1 font-medium text-white hover:text-gray-900 rounded-3xl'
          >
            Logout
          </Link>
        </div>
        :
        <div className='hidden md:flex items-center justify-end md:flex-1 lg:w-0'>
          <Link
            to='/login'
            className='bg-teal-600 px-7 py-2 whitespace-nowrap text-nav-1 font-medium text-white hover:text-gray-900 rounded-3xl'
          >
            Login
          </Link>
        </div>
      }
    </>
  );
};

const Dashboard = () => {
  const getToken = JSON.parse(localStorage.getItem('UserDetails'))

  if (getToken !== null) {
    const email = getToken.user.email
    return (
      <>
        <Link
          to={`/dashboard/${email}`}
          className='px-2 py-1 rounded-md text-nav-1 font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-200'
        >
          Dashboard
        </Link>
      </>
    );
  }
  else {
    return (
      <>
        <Link
          to='/login'
          className='px-2 py-1 rounded-md text-nav-1 font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-200'
        >
          Dashboard
        </Link>
      </>
    );
  }
}

const Navigation = () => {
  return (
    <>
      <Popover className='bg-white sticky top-0 z-50'>
        <div className=' max-w-7xl mx-auto px-4 sm:px-6'>
          <div className='flex justify-between items-center border-b-2 border-gray-100 py-4 md:justify-start md:space-x-7'>
            <img src="https://mamihost-bucket.s3.ap-southeast-1.amazonaws.com/Logo/logo-title.png" alt="" className="h-8"/>
            <Link
              to='/'
              className='font-title text-teal-700 font-semibold md:flex-1'
              style={{ fontSize: "25px" }}
            >
              MamiHost
            </Link>

            <Popover.Group as='nav' className='hidden md:flex space-x-5'>
              <Link
                to='/'
                className='px-2 py-1 rounded-md text-nav-1 font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-200'
              >
                Beranda
              </Link>

              <Dashboard />

              {fitur.map((e) => {
                return (
                  <Link
                    key={e.name}
                    to={e.to}
                    className='px-2 py-1 rounded-md text-nav-1 font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-200'
                  >
                    {e.name}
                  </Link>
                );
              })}
            </Popover.Group>
            <Login />
          </div>
        </div>
      </Popover>
    </>
  );
};

export default Navigation;
