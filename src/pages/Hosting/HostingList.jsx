import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CheckIcon, XIcon } from "@heroicons/react/outline"
import { DatabaseIcon, ServerIcon } from "@heroicons/react/solid"

const packages = [
    {
        package_id: 1,
        name: 'Anak Host',
        description: 'Fitur Hosting',
        icon: DatabaseIcon,
        fitur: {
            storage: '500 MB',
            bandwidth: false,
            domain: false,
            ssd: false,
            ssl: false
        },
        price: 'Rp 0.0/bulan'
    },
    {
        package_id: 2,
        name: 'Host Premium',
        description: 'Fitur Hosting',
        icon: ServerIcon,
        fitur: {
            storage: '500 MB',
            bandwidth: true,
            domain: true,
            ssd: true,
            ssl: true
        },
        price: 'Rp 0.0/bulan'
    },
    {
        package_id: 3,
        name: 'Host Exclusive',
        description: 'Fitur Hosting',
        icon: ServerIcon,
        fitur: {
            storage: '500 MB',
            bandwidth: true,
            domain: true,
            ssd: true,
            ssl: true
        },
        price: 'Rp 0.0/bulan'
    },
]

const HostingList = () => {
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

    return (
        <>
            <div className='text-center font-title text-title-section text-white font-bold xl:text-2xl py-3'>
                Paket Host
            </div>

            <div className='container mx-auto p-5'>
                <div className='flex flex-row'>
                    {packages.map((e) => {
                        return (
                            <div key={e.package_id} className='md:flex-1 rounded-lg m-5'>
                                <div className='flex flex-col bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden'>
                                    <div className='flex justify-center h-20'>
                                        <e.icon className="m-2 p-2 h-20 fill-[#3894A3]" />
                                    </div>
                                    <div className='p-4 h-3/4'>
                                        <div className='h-1/6'>
                                            <h2 className='font-bold text-center mt-2'>{e.name}</h2>
                                        </div>
                                        <div className='h-2/5'>
                                            <p
                                                className='text-center mt-1'
                                                style={{ fontSize: "14px" }}
                                            >
                                                {e.description}
                                            </p>
                                            <p className='text-center mt-1'
                                                style={{ fontSize: "14px" }}
                                            >
                                                {e.fitur.storage}
                                            </p>
                                            <p className='text-center mt-1'
                                                style={{ fontSize: "14px" }}
                                            >
                                                {e.fitur.bandwidth ? 'Unlimited Bandwidth' : ''}
                                            </p>
                                            <p className='text-center mt-1'
                                                style={{ fontSize: "14px" }}
                                            >
                                                {e.fitur.domain ? 'Free Domain' : ''}
                                            </p>
                                            <p className='text-center mt-1'
                                                style={{ fontSize: "14px" }}
                                            >
                                                {e.fitur.ssd ? 'Free SSD' : ''}
                                            </p>
                                            <p className='text-center mt-1'
                                                style={{ fontSize: "14px" }}
                                            >
                                                {e.fitur.ssl ? 'Free SSL' : ''}
                                            </p>
                                        </div>
                                        <div className='flex justify-center h-auto'>
                                            <Link
                                                // to={`destination/${e?.destination_id}`}
                                                className='my-5 mx-0 inline-block px-4 py-3 leading-none bg-[#36606e] hover:bg-[#142328] text-white rounded-full tracking-wide text-xs items-center'
                                            >
                                                Selengkapnya
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>

                <div className="grid grid-cols-4 grid-rows-7 rounded-lg bg-white gap-2 m-5">
                    {/* Paket */}
                    <div className="row-span-2">
                    </div>
                    {packages.map((e) => {
                        return (
                            <>
                                <div className="flex justify-center p-2">
                                    <Link to={`/packages/${e.package_id}`} className="bg-[#FFC210] inline-block m-2 px-5 py-2 rounded-full font-medium hover:bg-yellow-500 hover:text-white">
                                        {e.name}
                                    </Link>
                                </div>
                            </>
                        )
                    })}

                    { /*Harga*/}
                    {packages.map((e) => {
                        return (
                            <>
                                <div className="flex justify-center">
                                    {e.price}
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

                    {packages.map((e) => {
                        return (
                            <>
                                <div className="row-span-5 ml-5 mr-5 mt-3 mb-3 divide-y divide-slate-300">
                                    <div className="flex bg-[#C7DAD4]/50 justify-center p-3 text-gray-400">
                                        500 MB
                                    </div>
                                    {featureIcon(e.fitur.bandwidth)}
                                    {featureIcon(e.fitur.domain)}
                                    {featureIcon(e.fitur.ssd)}
                                    {featureIcon(e.fitur.ssl)}
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