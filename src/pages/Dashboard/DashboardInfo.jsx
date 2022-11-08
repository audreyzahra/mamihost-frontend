import moment from "moment"

const hosting = {
    "pod_name": "Database User1",
    "pod_ip": "0.0.0.0",
    "machine_status": "true",
    "start_date": "2022-11-07T15:08:15.614Z",
    "end_date": "2023-09-03T15:08:15.614Z"
}

const DashboardInfo = () => {
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
                            {hosting.pod_name}
                        </div>
                        <div className="font-medium border-b-2 py-1">
                            IP Address
                        </div>
                        <div className="border-b-2 py-1">
                            {hosting.pod_ip}
                        </div>
                        <div className="font-medium border-b-2 py-1">
                            Status
                        </div>
                        <div className="border-b-2 py-1">
                            {hosting.machine_status ? 'Running' : 'Not Running'}
                        </div>
                        <div className="font-medium border-b-2 py-1">
                            Start Date
                        </div>
                        <div className="border-b-2 py-1">
                            {moment(hosting.start_date).format('DD MMM YYYY HH:mm')}
                        </div>
                        <div className="font-medium border-b-2 py-1">
                            End Date
                        </div>
                        <div className="border-b-2 py-1">
                            {moment(hosting.end_date).format('DD MMM YYYY HH:mm')}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default DashboardInfo