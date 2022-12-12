import Hero from "../Hero/Hero"
import HostingList from "../Hosting/HostingList"

const Home = () => {
    return (
        <>
            <div className="home antialiased">
                <Hero />
                <div className="flex flex-col py-5 text-white">
                    <div className="flex flex-col gap-2 justify-center items-center">
                        <h1 className="text-3xl font-bold">MamiHost</h1>
                        <p>Layanan Hosting Terpercaya dan Termurah se-Indonesia</p>
                    </div>
                </div>
                <HostingList />
            </div>
        </>
    )
}

export default Home