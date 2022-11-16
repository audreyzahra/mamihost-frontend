import axios from "axios"
import { useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import { CloudIcon, DatabaseIcon } from "@heroicons/react/solid"
import { API_URL } from "../../config"
import moment from "moment/moment"

const DashboardHome = ({ email }) => {
    const [dashboard, setDashboard] = useState([]);

    const navigate = useNavigate()

    useEffect(() => {
        async function getDashboardList() {
            const token = JSON.parse(localStorage.getItem('UserDetails'))
            if (token) {
                const response = await axios.get(
                    `${API_URL}/service/hostedService/${email}`, {
                    headers: {
                        'Authorization': `Bearer ${token.accessToken}`
                    }
                })
                setDashboard(response.data.message === 'success' ? response.data.data : undefined)
            }
            else {
                navigate('/login')
            }
        }
        getDashboardList()
    });

    return (
        <>
            {dashboard !== undefined ?
                dashboard.map((e) => {
                    return (
                        <div key={e?.service_id} className='md:flex-1 m-5'>
                            <div className="flex flex-col gap-3 w-4/5 rounded-lg bg-white drop-shadow-md mx-auto p-6 overflow-hidden">
                                <h1 className="font-semibold">{e?.service_type === 'DB' ? 'Database Hosting' : 'Web Hosting'}</h1>
                                <hr className="border-gray-300" />

                                <div className="flex h-20 w-full gap-4">
                                    <div className="flex w-1/12 justify-center items-center">
                                        {e?.service_type === 'DB'
                                            ?
                                            <DatabaseIcon className="h-14 fill-[#2F414F]" />
                                            :
                                            <CloudIcon className="h-14 fill-[#2F414F]" />
                                        }
                                    </div>
                                    <div className="flex flex-col w-9/12 gap-2 justify-center">
                                        <h1 className="font-medium">{e?.pod_name}</h1>
                                        <h1 className="text-gray-400">Expires on {moment(e?.service_ended).format('DD MMM YYYY HH:mm')}</h1>
                                    </div>
                                    <Link to={`/dashboardInfo/${e?.pod_name}`} className="flex w-2/12 justify-center items-center bg-blue">
                                        <div className="bg-[#2F414F] text-white text-sm rounded-lg py-3 px-5">
                                            Manage
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )
                })

                :
                <div className='md:flex-1 m-5'>
                    <p>Anda belum melakukan Hosting apapun</p>
                </div>
            }
        </>
    )
}

export default DashboardHome