import React, { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "../../config";
import { Link } from "react-router-dom";
import { CheckIcon, XIcon, CheckCircleIcon, XCircleIcon } from "@heroicons/react/outline"
import { DatabaseIcon, ServerIcon } from "@heroicons/react/solid"


const HostingList = () => {
    const [hostingList, setHostingList] = useState([]);

    useEffect(() => {
        async function getHostingList() {
            const response = await axios.get(
                `${API_URL}/package/getAllPackage`);
            setHostingList(response.data.data);
        };
        getHostingList();
    }, []);

    const hostIcon = (element) => {
        return (
            <>
                {(element === 1) ?
                    <DatabaseIcon className="m-2 p-2 h-20 fill-[#3894A3]" /> 
                : (element === 2) ?
                 <ServerIcon className="m-2 p-2 h-20 fill-[#3894A3]" />
                : ''
                }
            </>
        )
    }

    const featureIcon = (element) => {
        return (
            <>
                {element ?
                    <div className="flex bg-[#C7DAD4]/50 justify-center p-3">
                        <CheckIcon className="h-7 stroke-[3px] stroke-[#34A853]" />
                    </div>
                    :
                    <div className="flex bg-[#C7DAD4]/50 justify-center p-3">
                        <XIcon className="h-7 stroke-[3px] stroke-[#FF3636]" />
                    </div>}
            </>
        )
    }

    const featureCircleIcon = (element) => {
        return (
            <>
                {element ?
                    <CheckCircleIcon className="h-5 stroke-[#34A853]" />
                    :
                    <XCircleIcon className="h-5 stroke-[#FF3636]" />}
            </>
        )
    }

    return (
        <>
            <div className='text-center font-title text-title-section text-white font-bold xl:text-2xl py-3'>
                Paket Host
            </div>

            <div className='container mx-auto p-5'>
                <div className='flex flex-row'>
                    {hostingList.map((e) => {
                        return (
                            <div key={e.package_id} className='md:flex-1 rounded-lg m-5'>
                                <div className='flex flex-col bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden'>
                                    <div className='flex justify-center h-20'>
                                        {hostIcon(e.package_id)}
                                    </div>
                                    <div className='p-4 h-3/4'>
                                        <div className='h-1/6'>
                                            <h2 className='font-bold text-center mt-2'>{e.package_name}</h2>
                                        </div>
                                        <p
                                            className='text-center mt-1'
                                            style={{ fontSize: "14px" }}
                                        >
                                            {e.package_description}
                                        </p>
                                    </div>
                                    <div key={e.features.features_id} className='h-1/4 w-1/2 mx-auto bg-[#F1F1EF] rounded-lg p-4'>
                                        <div className='flex justify-center gap-2 items-center mt-1'
                                            style={{ fontSize: "14px" }}
                                        >
                                            {featureCircleIcon(e.features.storage)}{e.features.storage} MB
                                        </div>
                                        <div className='flex justify-center gap-2 items-center mt-1'
                                            style={{ fontSize: "14px" }}
                                        >
                                            {featureCircleIcon(e.features.unlimited_bandwidth)}{e.features.unlimited_bandwidth ? 'Unlimited Bandwidth' : 'No Unlimited Bandwidth'}
                                        </div>
                                        <div className='flex justify-center gap-2 items-center mt-1'
                                            style={{ fontSize: "14px" }}
                                        >
                                            {featureCircleIcon(e.features.support_domain)}{e.features.support_domain ? 'Free Domain' : 'No Free Domain'}
                                        </div>
                                        <div className='flex justify-center gap-2 items-center mt-1'
                                            style={{ fontSize: "14px" }}
                                        >
                                            {featureCircleIcon(e.features.support_SSD)}{e.features.support_SSD ? 'Free SSD' : 'No Free SSD'}
                                        </div>
                                        <div className='flex justify-center gap-2 items-center mt-1'
                                            style={{ fontSize: "14px" }}
                                        >
                                            {featureCircleIcon(e.features.support_SSL)}{e.features.support_SSL ? 'Free SSL' : 'No Free SSL'}
                                        </div>
                                    </div>
                                    <div className='flex justify-center h-auto'>
                                        <Link
                                            to={`/packages/${e.package_id}`}
                                            className='my-5 mx-0 inline-block px-4 py-3 leading-none bg-[#36606e] hover:bg-[#142328] text-white rounded-full tracking-wide text-xs items-center'
                                        >
                                            Check Out
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>

                <div className="grid grid-cols-3 rounded-lg bg-white gap-2 m-5">
                    {/* Paket */}
                    <div className="row-span-2">
                    </div>
                    {hostingList.map((e) => {
                        return (
                            <>
                                <div key={e.package_id} className="flex justify-center p-2">
                                    <Link to={`/packages/${e.package_id}`} className="bg-[#FFC210] inline-block m-2 px-5 py-2 rounded-full font-medium hover:bg-yellow-500 hover:text-white">
                                        {e.package_name}
                                    </Link>
                                </div>
                            </>
                        )
                    })}

                    <div></div>

                    { /*Harga*/}
                    {hostingList.map((e) => {
                        return (
                            <>
                                <div key={e.package_id} className="flex justify-center">
                                    Rp {e.package_price}.0/bulan
                                </div>
                            </>
                        )
                    })}

                    {/* Title Fitur */}
                    <div className="flex col-span-4 bg-[#3894A3] font-semibold text-white rounded-lg py-5 px-8 ml-5 mr-5">
                        Fitur Utama
                    </div>

                    {/* Fitur */}
                    <div className="row-span-5 ml-5 mr-5 mt-3 mb-3 font-medium">
                        <div className="flex justify-center p-3">
                            Ruang Disk
                        </div>
                        <div className="flex justify-center p-3">
                            Unlimited Bandwidth
                        </div>
                        <div className="flex justify-center p-3">
                            Domain
                        </div>
                        <div className="flex justify-center p-3">
                            SSD
                        </div>
                        <div className="flex justify-center p-3">
                            SSL
                        </div>
                    </div>

                    {hostingList.map((e) => {
                        return (
                            <>
                                <div key={e.package_id} className="row-span-5 mx-5 my-3 divide-y divide-slate-300">
                                    <div className="flex bg-[#C7DAD4]/50 justify-center p-3 text-gray-400">
                                        {e.features.storage} MB
                                    </div>
                                    {featureIcon(e.features.bandwidth)}
                                    {featureIcon(e.features.support_domain)}
                                    {featureIcon(e.features.support_SSD)}
                                    {featureIcon(e.features.support_SSL)}
                                </div>
                            </>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default HostingList