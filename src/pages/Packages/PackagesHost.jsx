import { React, useState, useRef } from "react"
import axios from "axios"
import { Link } from "react-router-dom"
import { API_URL } from "../../config"
import { CheckIcon } from "@heroicons/react/outline"
import { CheckCircleIcon, XCircleIcon, ShoppingCartIcon } from "@heroicons/react/solid"
import { useEffect } from "react"


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
    const [hostDetail, setHostDetail] = useState([])

    useEffect(() => {
        async function getHostingDetail() {
            const response = await axios.get(
                `${API_URL}/package/getPackageById/${packageId}`);
            setHostDetail(response.data.data);
        };
        getHostingDetail();
    }, [packageId]);

    const [hostingList, setHostingList] = useState([]);

    useEffect(() => {
        async function getHostingList() {
            const response = await axios.get(
                `${API_URL}/package/getAllPackage`);
            setHostingList(response.data.data);
        };
        getHostingList();
    }, []);

    const [showModal, setShowModal] = useState(false);
    const [hosting, setHosting] = useState('');
    const [durations, setDurations] = useState('');
    const [price, setPrice] = useState('');
    const [dockerHub, setDockerHub] = useState('');
    const [dockerImage, setDockerImage] = useState('');
    const [dockerDB, setDockerDB] = useState('');

    const PickHost = (name) => {
        setHosting(name)
    }

    const PickPrice = (event, name, totalPrice) => {
        setDurations(name)
        setPrice(totalPrice)
    }

    const inputDockerImage = useRef(null);
    const inputDockerHub = useRef(null);
    const inputDockerDB = useRef(null);

    const inputFormDB = () => {
        setDockerHub(inputDockerHub.current.value)
        setDockerImage(inputDockerImage.current.value)
        setDockerDB(inputDockerDB.current.value == null ? null : inputDockerDB.current.value)
    }

    const inputFormWeb = () => {
        setDockerHub(inputDockerHub.current.value)
        setDockerImage(inputDockerImage.current.value)
    }

    const durationsConvert = (dur) => {
        let duration = 0;
        if (dur === '6 Bulan') {
            return (
                duration = 6 * 30
            )
        } else if (dur === '1 Tahun') {
            return (
                duration = 1 * 365
            )
        } else if (dur === '3 Tahun') {
            return (
                duration = 3 * 365
            )
        } else {
            return (null)
        }
    }

    const serviceType = hostDetail?.package_id === 1 ? 'DB' : 'WB'

    const handleCheckout = () => {
        const body = {
            "user_email": "dzul123@gmail.com",
            "duration": durationsConvert(durations),
            "service_type": serviceType,
            "service_image": dockerImage,
            "db_dialect": dockerDB
        }

        console.log(body)

        axios.post(`${API_URL}/service/createService`, {
            headers: {
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiZHp1bGZpa2FyMTIzIiwiaWF0IjoxNjY3ODg4ODE4fQ.WKKIWwHkJjizPPzfhZUn21VVbOrl1UkrbOu4YUU9NNo'
            },
            data: body
        })
            .then((response) => {
                const email = response.data.user.email
                console.log(response)
            }, (error) => {
                console.log(error);
            });
    }

    const featureIcon = (element) => {
        return (
            <>
                {element ?
                    <div>
                        <CheckCircleIcon className="h-5 fill-teal-800" />
                    </div>
                    :
                    <div>
                        <XCircleIcon className="h-5 fill-teal-800" />
                    </div>
                }
            </>
        )
    }

    return (
        <>
            <h1 className="text-white font-bold text-xl">1. Paket Hosting</h1>
            <div className="flex">
                <div className='flex w-2/3'>
                    {hostingList.map((e) => {
                        return (
                            <div key={e.package_id} className='md:flex-1 rounded-lg m-5'>
                                {e.package_id === hostDetail.package_id ?
                                    <Link onSelect={() => PickHost(e.package_name)} className='flex flex-col bg-[#C7DAD4] shadow-md hover:shadow-xl focus:bg-[#C7DAD4] rounded-lg overflow-hidden'>
                                        <div className='p-4 pb-24'>
                                            <div className='h-1/6'>
                                                <h2 className='font-bold text-[#2F414F] text-center mt-2'>{e.package_name}</h2>
                                            </div>
                                            <hr className="m-3" />
                                            <div className="flex justify-start items-center gap-2">
                                                {featureIcon(e.features.storage)}{e.features.storage} MB
                                            </div>
                                            <div className="flex justify-start items-center gap-2">
                                                {featureIcon(e.features.unlimited_bandwidth)}{e.features.unlimited_bandwidth ? 'Unlimited Bandwidth' : 'No Unlimited Bandwidth'}
                                            </div>
                                            <div className="flex justify-start items-center gap-2">
                                                {featureIcon(e.features.support_domain)}{e.features.support_domain ? 'Free Domain' : 'No Free Domain'}
                                            </div>
                                            <div className="flex justify-start items-center gap-2">
                                                {featureIcon(e.features.support_SSD)}{e.features.support_SSD ? 'Free SSD' : 'No Free SSD'}
                                            </div>
                                            <div className="flex justify-start items-center gap-2">
                                                {featureIcon(e.features.support_SSL)}{e.features.support_SSL ? 'Free SSL' : 'No Free SSL'}
                                            </div>
                                        </div>
                                    </Link>
                                    :
                                    <Link onSelect={() => PickHost(e.package_name)} className='flex flex-col bg-white shadow-md hover:shadow-xl focus:bg-[#C7DAD4] rounded-lg overflow-hidden'>
                                        <div className='p-4 pb-24'>
                                            <div className='h-1/6'>
                                                <h2 className='font-bold text-[#2F414F] text-center mt-2'>{e.package_name}</h2>
                                            </div>
                                            <hr className="m-3" />
                                            <div className="flex justify-start items-center gap-2">
                                                {featureIcon(e.features.storage)}{e.features.storage} MB
                                            </div>
                                            <div className="flex justify-start items-center gap-2">
                                                {featureIcon(e.features.unlimited_bandwidth)}{e.features.unlimited_bandwidth ? 'Unlimited Bandwidth' : 'No Unlimited Bandwidth'}
                                            </div>
                                            <div className="flex justify-start items-center gap-2">
                                                {featureIcon(e.features.support_domain)}{e.features.support_domain ? 'Free Domain' : 'No Free Domain'}
                                            </div>
                                            <div className="flex justify-start items-center gap-2">
                                                {featureIcon(e.features.support_SSD)}{e.features.support_SSD ? 'Free SSD' : 'No Free SSD'}
                                            </div>
                                            <div className="flex justify-start items-center gap-2">
                                                {featureIcon(e.features.support_SSL)}{e.features.support_SSL ? 'Free SSL' : 'No Free SSL'}
                                            </div>
                                        </div>
                                    </Link>}
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
                                        {hosting ? hosting : hostDetail.package_name}
                                    </div>

                                    <div className="w-2/4">
                                    </div>

                                    <div className="w-1/4">
                                        {durations ? durations : '6 Bulan'}
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
                                        {price ? price : 'Rp 0.0/bulan'}
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
                                        <div className="relative w-92 my-6 mx-auto max-w-3xl">
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
                                                    <div className="grid grid-cols-2 grid-rows-2 rounded-lg border divide-y p-4">
                                                        <div className="p-2 font-medium">Paket Host</div>
                                                        <div className="p-2">{hosting ? hosting : hostDetail.package_name}</div>
                                                        <div className="p-2 font-medium">Durasi Host</div>
                                                        <div className="p-2">{durations}</div>
                                                        <div className="p-2 font-medium">Link Repository GitHub</div>
                                                        <div className="p-2">{dockerHub}</div>
                                                        <div className="p-2 font-medium">Docker Image</div>
                                                        <div className="p-2">{dockerImage}</div>
                                                        <div className="p-2 font-medium">Software Database</div>
                                                        <div className="p-2">{dockerDB ? dockerDB : '-'}</div>
                                                        <div className="p-2 font-medium">Total</div>
                                                        <div className="p-2">{price}</div>
                                                    </div>
                                                </div>
                                                {/*footer*/}
                                                <div className="flex items-center justify-center p-6 border-t border-solid border-slate-200 rounded-b">
                                                    <button
                                                        className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                        type="button"
                                                        onClick={handleCheckout}
                                                    >
                                                        Checkout
                                                    </button>
                                                    <button
                                                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                        type="button"
                                                        onClick={() => setShowModal(false)}
                                                    >
                                                        Close
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
                                <Link onClick={event => PickPrice(event, e.name, e.total_price)} className='flex flex-col bg-white shadow-md hover:shadow-xl focus:bg-[#C7DAD4] rounded-lg overflow-hidden'>
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
            <h1 className="text-white font-bold text-xl">3. Masukkan Docker Hub & Image</h1>
            <div className="flex w-2/3">
                <div className="md:flex-1 rounded-lg m-5">
                    <div className="flex flex-col bg-white shadow-md rounded-lg overflow-hidden p-5">
                        <form action="">
                            <div className="h-2/3 p-2">
                                <label className="block p-3">
                                    <span>1. Link Repository GitHub <span className="text-gray-300">(Opsional)</span> </span>
                                    <input ref={inputDockerHub} id="docker_hub" name="docker_hub" type="text" className="w-full border-2 rounded-full p-3" placeholder="Masukkan Link Repository Hub" />
                                </label>
                                <label className="block p-3 gap-2">
                                    <span>2. Docker Image</span>
                                    <input ref={inputDockerImage} id="docker_image" name="docker_image" type="text" className="w-full border-2 rounded-full p-3" placeholder="Masukkan Docker Image" />
                                </label>
                                {hostDetail?.package_id === 1
                                    ?
                                    <label className="p-3">
                                        <span>3. Pilih Software Database</span>
                                        <select ref={inputDockerDB} id="countries" className="rounded bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                            <option>Pilih Software Database</option>
                                            <option value="mysql">MySQL</option>
                                            <option value="postgres">PostgreSQL</option>
                                        </select>
                                    </label>
                                    :
                                    ''
                                }
                            </div>
                            {hostDetail?.package_id === 1
                                ?
                                <div className="h-1/3 p-3">
                                    <button onClick={inputFormDB} type="button" className="rounded-full border-2 border-[#3894A3] text-[#3894A3] hover:bg-[#3894A3] hover:text-white p-3">Input Docker</button>
                                </div>
                                :
                                <div className="h-1/3 p-3">
                                    <button onClick={inputFormWeb} type="button" className="rounded-full border-2 border-[#3894A3] text-[#3894A3] hover:bg-[#3894A3] hover:text-white p-3">Input Docker</button>
                                </div>
                            }

                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PackagesHost