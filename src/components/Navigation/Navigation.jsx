/* eslint-disable jsx-a11y/anchor-is-valid */
/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import {
  BookmarkAltIcon,
  CalendarIcon,
  ChartBarIcon,
  CursorClickIcon,
  MenuIcon,
  PhoneIcon,
  PlayIcon,
  RefreshIcon,
  ShieldCheckIcon,
  SupportIcon,
  ViewGridIcon,
  XIcon,
  CollectionIcon,
} from "@heroicons/react/outline";

import { ChevronDownIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";

const hosting = [
  {
    name: "Hosting 1",
    description: "MamiHost menyediakan Hosting Paket 1",
    href: "#hosting",
    icon: CollectionIcon,
  },
  {
    name: "Kelapa",
    description: "Kelapa mempunyai penduduk terbanyak",
    href: "#hosting",
    icon: CollectionIcon,
  },
  {
    name: "Sabira",
    description: "Sabiran merupakan pulau yang unik",
    href: "#hosting",
    icon: CollectionIcon,
  },
];

const fitur = [
  {
    name: "Hosting",
    to: "/hosting-list",
  },
  {
    name: "Database",
    to: "/database-list",
  }
];

const Login = () => {
  return (
    <div className='hidden md:flex items-center justify-end md:flex-1 lg:w-0'>
      <Link
        to='/login'
        className='bg-teal-600 px-7 py-2 whitespace-nowrap text-nav-1 font-medium text-white hover:text-gray-900 rounded-3xl'
      >
        Login
      </Link>
    </div>
  );
};

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Navigation = () => {
  return (
    <>
      <Popover className='bg-white sticky top-0 z-50'>
        <div className=' max-w-7xl mx-auto px-4 sm:px-6'>
          <div className='flex justify-between items-center border-b-2 border-gray-100 py-4 md:justify-start md:space-x-10'>
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

        <Transition
          as={Fragment}
          enter='duration-200 ease-out'
          enterFrom='opacity-0 scale-95'
          enterTo='opacity-100 scale-100'
          leave='duration-100 ease-in'
          leaveFrom='opacity-100 scale-100'
          leaveTo='opacity-0 scale-95'
        >
          <Popover.Panel
            focus
            className='absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden'
          >
            <div className='rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50'>
              <div className='pt-5 pb-6 px-5'>
                <div className='flex items-center justify-between'>
                  <div>
                    <img
                      className='h-8 w-auto'
                      src='https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg'
                      alt='Workflow'
                    />
                  </div>
                  <div className='-mr-2'>
                    <Popover.Button className='bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'>
                      <span className='sr-only'>Close menu</span>
                      <XIcon className='h-6 w-6' aria-hidden='true' />
                    </Popover.Button>
                  </div>
                </div>
                <div className='mt-6'>
                  <nav className='grid gap-y-6'>
                    {hosting.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className='-m-3 p-3 flex items-center rounded-md hover:bg-gray-50'
                      >
                        <item.icon
                          className='flex-shrink-0 h-4 w-4 text-indigo-600'
                          aria-hidden='true'
                        />
                        <span className='ml-3 text-nav-1 font-medium text-gray-900'>
                          {item.name}
                        </span>
                      </a>
                    ))}
                  </nav>
                </div>
              </div>
              <div className='py-6 px-5 space-y-6'>
                <div className='grid grid-cols-2 gap-y-4 gap-x-8'>
                  <a
                    href='#'
                    className='text-base font-medium text-gray-900 hover:text-gray-700'
                  >
                    Beranda
                  </a>

                  <a
                    href='#'
                    className='text-base font-medium text-gray-900 hover:text-gray-700'
                  >
                    Tentang Kami
                  </a>
                  {fitur.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className='text-base font-medium text-gray-900 hover:text-gray-700'
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </>
  );
};

export default Navigation;
