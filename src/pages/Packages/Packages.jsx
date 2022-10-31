import { useParams } from "react-router-dom"
import PackagesHost from "./PackagesHost"

const Packages = () => {
    const { packageId } = useParams();

    return (
        <>
            <div className="home antialised">
                <div className="container mx-auto p-5">
                    <PackagesHost packageId={packageId} />
                </div>
            </div>
        </>
    )
}

export default Packages