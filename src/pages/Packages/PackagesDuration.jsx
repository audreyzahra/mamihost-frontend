import { Link } from "react-router-dom"

const duration = [
    {
        duration_id: 1,
        name: '6 Bulan',
        price: 'Rp 0.0/bulan',
        total_price: 'Rp 0.0/bulan'
    },
    {
        duration_id: 2,
        name: '1 Tahun',
        price: 'Rp 0.0/bulan',
        total_price: 'Rp 0.0/bulan'
    },
    {
        duration_id: 3,
        name: '3 Tahun',
        price: 'Rp 0.0/bulan',
        total_price: 'Rp 0.0/bulan'
    },
]

const PackagesDuration = () => {
    return (
        <>
            <h1 className="text-white font-bold text-xl">2. Pilih Durasi Paket</h1>
            <div className="flex">
                <div className="flex w-2/3">
                    {duration.map((e) => {
                        return (
                            <div key={e.duration_id} className='md:flex-1 rounded-lg m-5'>
                                <Link className='flex flex-col bg-white shadow-md hover:shadow-xl focus:bg-[#C7DAD4] rounded-lg overflow-hidden'>
                                    <div className='h-1/3 bg-[#FFC210] p-3'>
                                        <h2 className='font-bold text-white text-center mt-2'>{e.name}</h2>
                                    </div>
                                    <div className="h-2/3 text-center p-3">
                                        <p className="font-medium p-2">{e.price}</p>
                                        <p className="text-xs text-gray-400 font-medium pt-2">Total</p>
                                        <p className="font-medium p-2 text-teal-700">{e.total_price}</p>
                                    </div>
                                </Link>
                            </div>
                        )
                    })
                    }
                </div>
            </div>
        </>
    )
}

export default PackagesDuration