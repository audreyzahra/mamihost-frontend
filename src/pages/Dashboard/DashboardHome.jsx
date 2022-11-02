import { Link } from "react-router-dom"
import { CloudIcon } from "@heroicons/react/solid"

const service = [
    {
        id: 1,
        name: 'Hosting',
        server: 'MamiHost',
        expired: '01-01-1990',
    },
    {
        id: 2,
        name: 'Database',
        server: 'MamiHost.db',
        expired: '01-01-1990',
    },
]

const DashboardHome = () => {
    return (
        <>
            {service.map((e) => {
                return (
                    <>
                        <div key={e.id} className='md:flex-1 m-5'>
                            <div className="flex flex-col gap-3 w-4/5 rounded-lg bg-white drop-shadow-md mx-auto p-6 overflow-hidden">
                                <h1 className="font-semibold">{e.name}</h1>
                                <hr className="border-gray-300" />

                                <div className="flex h-20 w-full gap-4">
                                    <div className="flex w-1/12 justify-center items-center">
                                        <CloudIcon className="h-14 fill-[#2F414F]" />
                                    </div>
                                    <div className="flex flex-col w-9/12 gap-2 justify-center">
                                        <h1 className="font-medium">{e.server}</h1>
                                        <h1 className="text-gray-400">Expires on {e.expired}</h1>
                                    </div>
                                    <Link className="flex w-2/12 justify-center items-center bg-blue">
                                        <div className="bg-[#2F414F] text-white text-sm rounded-lg py-3 px-5">
                                            Manage
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </>
                )
            })}
        </>
    )
}

export default DashboardHome