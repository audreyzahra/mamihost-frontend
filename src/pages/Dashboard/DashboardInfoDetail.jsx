import axios from "axios"
import moment from "moment"
import { useState, useEffect } from "react"
import { API_URL } from "../../config"

const DashboardInfoDetail = ({ userId }) => {
    const [hosting, setHosting] = useState([])

    useEffect(() => {
        async function getHostingDetail() {
            const token = JSON.parse(localStorage.getItem('UserDetails'))
            const response = await axios.get(`${API_URL}/service/hostedPods/${userId}`, {
                headers: {
                    'Authorization': `Bearer ${token.accessToken}`
                }
            })
            setHosting(response.data.data)
        }
        getHostingDetail()
    }, [userId])

    return (
        <>
            <div className="dashboard antialiased">
                <div className="container mx-auto p-8">
                    <div className="grid grid-cols-2 md:mx-auto w-4/5 rounded-lg bg-white gap-4 py-5 px-8 m-5">
                        <div className="col-span-2 font-semibold text-teal-500 border-b-2 py-3">
                            <p>Information</p>
                        </div>
                        <div className="font-medium border-b-2 py-1">
                            <p>Pod Name</p>
                        </div>
                        <div className="border-b-2 py-1">
                            <p>{hosting?.pod_name}</p>
                        </div>
                        <div className="font-medium border-b-2 py-1">
                            <p>IP Address</p>
                        </div>
                        <div className="border-b-2 py-1">
                            <p>{hosting?.pod_ip}</p>
                        </div>
                        <div className="font-medium border-b-2 py-1">
                            <p>Link Git Repository</p>
                        </div>
                        <div className="border-b-2 py-1">
                            <p>{hosting?.git_repository ? hosting?.git_repository : 'None'}</p>
                        </div>
                        <div className="font-medium border-b-2 py-1">
                            <p>Status</p>
                        </div>
                        {hosting?.machine_status ?
                            <div className="flex border-b-2 py-1">
                                <p className="bg-green-200 text-emerald-900 rounded-full py-1 px-2">Running</p>
                            </div>
                            :
                            <div className="flex border-b-2 py-1">
                                <p className="bg-red-300 text-rose-900 rounded-full py-1 px-2">Not Running</p>
                            </div>
                        }
                        <div className="font-medium border-b-2 py-1">
                            <p>Service Image</p>
                        </div>
                        <div className="border-b-2 py-1">
                            <p>{hosting?.service_image}</p>
                        </div>
                        {hosting?.service_type === 'DB' ?
                            <>
                                <div className="font-medium border-b-2 py-1">
                                    <p>Dialect</p>
                                </div>
                                <div className="flex border-b-2 py-1">
                                    <p className="bg-green-200 text-emerald-900 rounded-full py-1 px-2">{hosting?.db_dialect}</p>
                                </div>
                            </>
                            :
                            null
                        }
                        <div className="font-medium border-b-2 py-1">
                            <p>Duration</p>
                        </div>
                        <div className="border-b-2 py-1">
                            <p>{hosting?.duration + ' days'}</p>
                        </div>
                        <div className="font-medium border-b-2 py-1">
                            <p>Start Date</p>
                        </div>
                        <div className="border-b-2 py-1">
                            <p>{moment(hosting?.start_date).format('DD MMM YYYY HH:mm')}</p>
                        </div>
                        <div className="font-medium border-b-2 py-1">
                            <p>End Date</p>
                        </div>
                        <div className="border-b-2 py-1">
                            <p>{moment(hosting?.end_date).format('DD MMM YYYY HH:mm')}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default DashboardInfoDetail