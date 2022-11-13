import { useParams } from "react-router-dom"
import DashboardInfoDetail from "./DashboardInfoDetail"

const DashboardInfo = () => {
    const { userId } = useParams()

    return (
        <>
            <div className="dashboard antialiased">
                <div className="container mx-auto p-8">
                    <DashboardInfoDetail userId={userId} />
                </div>
            </div>
        </>
    )
}
export default DashboardInfo