import { React, useState } from "react"
import { useParams, Link } from "react-router-dom"
import { CheckIcon, ExclamationIcon } from "@heroicons/react/outline"
import { CheckCircleIcon, XCircleIcon, ShoppingCartIcon } from "@heroicons/react/solid"

const packages = [
    {
        package_id: 1,
        name: 'Anak Host',
        description: 'Fitur Hosting',
        fitur: {
            storage: '500 MB',
            bandwidth: false,
            domain: false,
            ssd: false,
            ssl: false
        }
    },
    {
        package_id: 2,
        name: 'Host Premium',
        description: 'Fitur Hosting',
        fitur: {
            storage: '500 MB',
            bandwidth: false,
            domain: false,
            ssd: false,
            ssl: false
        }
    },
    {
        package_id: 3,
        name: 'Host Exclusive',
        description: 'Fitur Hosting',
        fitur: {
            storage: '500 MB',
            bandwidth: false,
            domain: false,
            ssd: false,
            ssl: false
        }
    },
]

const duration = [
    {
        duration_id: 1,
        name: '6 Bulan',
        price: 'Rp 0.0/bulan',
        total_price: 'Rp 0.0/bulan'
    },
    {
        duration_id: 2,
        name: '1 Tahun',
        price: 'Rp 0.0/bulan',
        total_price: 'Rp 0.0/bulan'
    },
    {
        duration_id: 3,
        name: '3 Tahun',
        price: 'Rp 0.0/bulan',
        total_price: 'Rp 0.0/bulan'
    },
]

const PackagesHost = ({ packageId }) => {
    // const [hosting, setHosting] = useState([])

    const TrueIcon = () => {
        return (
            <div>
                <CheckCircleIcon className="h-5 fill-teal-800" />
            </div>
        )
    }

    const FalseIcon = () => {
        return (
            <div>
                <XCircleIcon className="h-5 fill-teal-800" />
            </div>
        )
    }

    const [showModal, setShowModal] = useState(false);
    const [data, setData] = useState('');
    const [durations, setDuration] = useState('');

    const PickHost = (name) => {
        setData(name)
    }

    const PickDuration = (totalPrice) => {
        setDuration(totalPrice)
    }

    return (
        <>
            <h1 className="text-white font-bold text-xl">1. Pilih Paket Hosting</h1>
            <div className="flex">
                <div className='flex w-2/3'>
                    {packages.map((e) => {
                        return (
                            <div key={e.package_id} className='md:flex-1 rounded-lg m-5'>
                                <Link onClick={() => PickHost(e.name)} className='flex flex-col bg-white shadow-md hover:shadow-xl focus:bg-[#C7DAD4] rounded-lg overflow-hidden'>
                                    <div className='p-4 pb-24'>
                                        <div className='h-1/6'>
                                            <h2 className='font-bold text-[#2F414F] text-center mt-2'>{e.name}</h2>
                                        </div>
                                        <hr className="m-3" />
                                        <div className="flex justify-start items-center">
                                            {e.fitur.storage ? <TrueIcon /> : <FalseIcon />}
                                            <div className="pl-1">
                                                {e.fitur.storage}
                                            </div>
                                        </div>
                                        <div className="flex justify-start">
                                            {e.fitur.bandwidth ? <TrueIcon /> : <FalseIcon />}
                                            <p className="pl-1" >Unlimited Bandwidth</p>
                                        </div>
                                        <div className="flex justify-start">
                                            {e.fitur.domain ? <TrueIcon /> : <FalseIcon />}
                                            <p className="pl-1">Free Domain</p>
                                        </div>
                                        <div className="flex justify-start">
                                            {e.fitur.ssd ? <TrueIcon /> : <FalseIcon />}
                                            <p className="pl-1">Free SSD</p>
                                        </div>
                                        <div className="flex justify-start">
                                            {e.fitur.ssl ? <TrueIcon /> : <FalseIcon />}
                                            <p className="pl-1">Free SSL</p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        )
                    })}
                </div>
                <div className="flex w-1/3">
                    <div className='md:flex-1 rounded-lg m-5'>
                        <div className='flex flex-col gap-6'>
                            <div className="w-full h-3/6 bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden">
                                <div className="flex p-5">
                                    <div className="flex-1">
                                        <div className="w-5 h-5 bg-green-600 mx-auto rounded-full text-lg text-black flex items-center">
                                            <span className="text-black text-center w-full"><CheckIcon className="stroke-white" /></span>
                                        </div>
                                    </div>

                                    <div className="w-full align-center items-center align-middle content-center flex">
                                        <div className="w-full bg-gray-200 items-center align-middle align-center flex-1">
                                            <div className="bg-green-500 text-xs leading-none py-1 text-center text-grey-darkest" style={{ width: "0%" }}></div>
                                        </div>
                                    </div>

                                    <div className="flex-1">
                                        <div className="w-5 h-5 bg-white border-2 border-gray-300 mx-auto rounded-full text-lg text-white flex items-center">
                                            <span className="text-grey-darker text-center w-full">2</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex text-xs content-center text-center mx-auto">
                                    <div className="w-1/4">
                                        Pilih Paket
                                    </div>

                                    <div className="w-2/4">
                                    </div>

                                    <div className="w-1/4">
                                        Selesai
                                    </div>
                                </div>

                                <div className="flex text-sm font-medium content-center text-center mx-auto pl-2 pt-4">
                                    <div className="w-1/4">
                                        {data}
                                    </div>

                                    <div className="w-3/4">
                                    </div>
                                </div>

                                <hr className="m-3" />

                                <div className="flex text-sm font-medium content-center text-center mx-auto p-4">
                                    <div className="text-cyan-600 w-1/4">
                                        TOTAL
                                    </div>

                                    <div className="w-2/4">
                                    </div>

                                    <div className="w-1/4">
                                        {durations}
                                    </div>
                                </div>
                            </div>

                            {/* button checkout */}
                            <button type="button" onClick={() => setShowModal(true)} className="w-full h-3/6 bg-[#FFC210] shadow-md hover:shadow-xl rounded-full overflow-hidden justify-center p-4">
                                <div className="flex justify-center items-center">
                                    <ShoppingCartIcon className="h-5 fill-white" />
                                    <h6 className="text-white font-medium">Checkout</h6>
                                </div>
                            </button>

                            {showModal ? (
                                <>
                                    <div
                                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                                    >
                                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                                            {/*content*/}
                                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                                {/*header*/}
                                                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                                    <h3 className="text-3xl font-semibold">
                                                        Detail Order
                                                    </h3>
                                                    <button
                                                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                                        onClick={() => setShowModal(false)}
                                                    >
                                                        <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                                            ×
                                                        </span>
                                                    </button>
                                                </div>
                                                {/*body*/}
                                                <div className="relative p-6 flex-auto">
                                                    <p className="my-4 text-slate-500 text-lg leading-relaxed">
                                                        I always felt like I could do anything. That’s the main
                                                        thing people are controlled by! Thoughts- their perception
                                                        of themselves! They're slowed down by their perception of
                                                        themselves. If you're taught you can’t do anything, you
                                                        won’t do anything. I was taught I could do everything.
                                                    </p>
                                                </div>
                                                {/*footer*/}
                                                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                                                    <button
                                                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                        type="button"
                                                        onClick={() => setShowModal(false)}
                                                    >
                                                        Close
                                                    </button>
                                                    <button
                                                        className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                        type="button"
                                                        onClick={() => setShowModal(false)}
                                                    >
                                                        Save Changes
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                                </>
                            ) : null}
                        </div>
                    </div>
                </div>
            </div>

            {/* Durasi Paket */}
            <h1 className="text-white font-bold text-xl">2. Pilih Durasi Paket</h1>
            <div className="flex">
                <div className="flex w-2/3">
                    {duration.map((e) => {
                        return (
                            <div key={e.duration_id} className='md:flex-1 rounded-lg m-5'>
                                <Link onClick={() => PickDuration(e.total_price)} className='flex flex-col bg-white shadow-md hover:shadow-xl focus:bg-[#C7DAD4] rounded-lg overflow-hidden'>
                                    <div className='h-1/3 bg-[#FFC210] p-3'>
                                        <h2 className='font-bold text-white text-center mt-2'>{e.name}</h2>
                                    </div>
                                    <div className="h-2/3 text-center p-3">
                                        <p className="font-medium p-2">{e.price}</p>
                                        <p className="text-xs text-gray-400 font-medium pt-2">Total</p>
                                        <p className="font-medium p-2 text-teal-700">{e.total_price}</p>
                                    </div>
                                </Link>
                            </div>
                        )
                    })
                    }
                </div>
            </div>

            {/* Input Docker Image */}
            <h1 className="text-white font-bold text-xl">3. Masukkan Docker Image</h1>
            <div className="flex w-2/3">
                <div className="md:flex-1 rounded-lg m-5">
                    <div className="flex flex-col bg-white shadow-md rounded-lg overflow-hidden p-5">
                        <form action="">
                            <div className="h-2/3 p-3">
                                <input type="text" className="w-full border-2 rounded-full p-3" placeholder="Masukkan Docker Image" />
                            </div>
                            <div className="h-1/3 p-3">
                                <button type="button" className="rounded-full border-2 border-[#3894A3] text-[#3894A3] hover:bg-[#3894A3] hover:text-white p-3">Cek Docker Image</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PackagesHost