import { useParams, useLocation } from "react-router-dom"
import DashboardHome from "./DashboardHome"

const Dashboard = () => {
    const { email } = useParams();
    // const data = useLocation();

    return (
        <>
            <div className="dashboard antialiased">
                <div className="container mx-auto p-8">
                    <DashboardHome email={email} />
                </div>
            </div>
        </>
    )
}

export default Dashboard