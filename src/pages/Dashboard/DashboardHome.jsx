import axios from "axios"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { CloudIcon, DatabaseIcon } from "@heroicons/react/solid"
import { API_URL } from "../../config"
import useRefreshToken from "../../hooks/useRefreshToken"
import moment from "moment/moment"

// const service = [
//     {
//         id: 1,
//         name: 'Hosting',
//         server: 'MamiHost',
//         expired: '01-01-1990',
//     },
//     {
//         id: 2,
//         name: 'Database',
//         server: 'MamiHost.db',
//         expired: '01-01-1990',
//     },
// ]

const DashboardHome = ({ email }) => {
    const [dashboard, setDashboard] = useState([]);

    // const refresh = useRefreshToken()

    // console.log(refresh)

    useEffect(() => {
        async function getDashboardList() {
            const response = await axios.get(
                `${API_URL}/service/hostedService/${email}`, {
                headers: {
                    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiZHp1bGZpa2FyMTIzIiwiaWF0IjoxNjY3ODg4ODE4fQ.WKKIWwHkJjizPPzfhZUn21VVbOrl1UkrbOu4YUU9NNo'
                }
            }

            )
            setDashboard(response.data.data)
        }
        getDashboardList()
    }, [email]);

    return (
        <>
            {dashboard.map((e) => {
                return (
                    <>
                        <div key={e.service_id} className='md:flex-1 m-5'>
                            <div className="flex flex-col gap-3 w-4/5 rounded-lg bg-white drop-shadow-md mx-auto p-6 overflow-hidden">
                                <h1 className="font-semibold">{e.service_type === 'DB' ? 'Database Hosting' : 'Web Hosting'}</h1>
                                <hr className="border-gray-300" />

                                <div className="flex h-20 w-full gap-4">
                                    <div className="flex w-1/12 justify-center items-center">
                                        {e.service_type === 'DB'
                                            ?
                                            <DatabaseIcon className="h-14 fill-[#2F414F]" />
                                            :
                                            <CloudIcon className="h-14 fill-[#2F414F]" />
                                        }
                                    </div>
                                    <div className="flex flex-col w-9/12 gap-2 justify-center">
                                        <h1 className="font-medium">{e.pod_name}</h1>
                                        <h1 className="text-gray-400">Expires on {moment(e.service_ended).format('DD MMM YYYY HH:mm')}</h1>
                                    </div>
                                    <Link to={`/dashboardInfo/${e.pod_name}`} className="flex w-2/12 justify-center items-center bg-blue">
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