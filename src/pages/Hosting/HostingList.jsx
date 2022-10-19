import { Link } from "react-router-dom";
import { Tab } from "@headlessui/react"
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination, Navigation } from "swiper";

const packages = [
    {
        package_id: '1',
        picture: 'https://www.giffywalls.com/pub/media/catalog/product/s/u/sunset_mountains_landscape_with_gradient_colors_1.jpg',
        description: 'Fitur Hosting'
    },
    {
        package_id: '2',
        picture: 'https://www.giffywalls.com/pub/media/catalog/product/s/u/sunset_mountains_landscape_with_gradient_colors_1.jpg',
        description: 'Fitur Hosting'
    },
    {
        package_id: '3',
        picture: 'https://www.giffywalls.com/pub/media/catalog/product/s/u/sunset_mountains_landscape_with_gradient_colors_1.jpg',
        description: 'Fitur Hosting'
    },
]

const HostingList = () => {
    return (
        <>
            <div className='text-center font-title text-title-section text-white font-bold xl:text-2xl py-3'>
                Paket Host
            </div>

            <div className='container mx-auto p-5'>
                <div className='flex flex-wrap'>
                    {packages.map((e) => {
                        return (
                            <div className='md:flex-1 rounded-lg m-5'>
                                <div className='flex flex-col bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden'>
                                    <div className='flex h-52'>
                                        <img
                                            className='inset-0 object-cover object-center hover:scale-105 hover:duration-300'
                                            src='https://www.giffywalls.com/pub/media/catalog/product/s/u/sunset_mountains_landscape_with_gradient_colors_1.jpg'
                                            alt='Paket Hosting'
                                        ></img>
                                    </div>
                                    <div className='p-4 h-3/4'>
                                        <div className='h-1/6'>
                                            <h2 className='font-bold text-center mt-2'>Hosting</h2>
                                        </div>
                                        <div className='h-2/5'>
                                            <p
                                                className='text-center mt-1'
                                                style={{ fontSize: "14px" }}
                                            >
                                                Deskripsi ...
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
            </div>
        </>
    )
}

export default HostingList