import axios from "axios"
import moment from "moment"
import { useState, useEffect } from "react"
import { API_URL } from "../../config"

const DashboardInfoDetail = ({ userId }) => {
    const [hosting, setHosting] = useState([])

    useEffect(() => {
        async function getHostingDetail () {
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
                            Information
                        </div>
                        <div className="font-medium border-b-2 py-1">
                            Pod Name
                        </div>
                        <div className="border-b-2 py-1">
                            {hosting?.pod_name}
                        </div>
                        <div className="font-medium border-b-2 py-1">
                            IP Address
                        </div>
                        <div className="border-b-2 py-1">
                            {hosting?.pod_ip}
                        </div>
                        <div className="font-medium border-b-2 py-1">
                            Link Git Repository
                        </div>
                        <div className="border-b-2 py-1">
                            {hosting?.git_repository ? hosting?.git_repository : 'None'}
                        </div>
                        <div className="font-medium border-b-2 py-1">
                            Status
                        </div>
                        <div className="border-b-2 py-1">
                            {hosting?.machine_status ? 'Running' : 'Not Running'}
                        </div>
                        <div className="font-medium border-b-2 py-1">
                            Service Image
                        </div>
                        <div className="border-b-2 py-1">
                            {hosting?.service_image}
                        </div>
                        {hosting?.service_type === 'DB' ?
                        <>
                        <div className="font-medium border-b-2 py-1">
                                Dialect
                            </div>
                            <div className="border-b-2 py-1">
                                {hosting?.db_dialect}
                            </div>
                        </>
                            :
                            null
                        }
                        <div className="font-medium border-b-2 py-1">
                            Duration
                        </div>
                        <div className="border-b-2 py-1">
                            {hosting?.duration + ' days'}
                        </div>
                        <div className="font-medium border-b-2 py-1">
                            Start Date
                        </div>
                        <div className="border-b-2 py-1">
                            {moment(hosting?.start_date).format('DD MMM YYYY HH:mm')}
                        </div>
                        <div className="font-medium border-b-2 py-1">
                            End Date
                        </div>
                        <div className="border-b-2 py-1">
                            {moment(hosting?.end_date).format('DD MMM YYYY HH:mm')}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default DashboardInfoDetail