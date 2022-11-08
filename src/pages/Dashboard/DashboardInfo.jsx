import { Link } from "react-router-dom";

const info = [
    {
        id: 1,
        name: 'Information',
        server: '',
        expired: '01-01-1990',
    },
]
const DashboardInfo = () => {
    return (
        <>
            <div classNameName='md:flex-1 m-5'>
                <div classNameName="flex flex-col gap-3 w-4/5 rounded-lg bg-white drop-shadow-md mx-auto p-6 overflow-hidden">
                    <div classNameName="flex h-20 w-full gap-4">
                        <div classNameName="flex flex-col w-9/12 gap-2 justify-center">
                            <p>Detail Service</p>
                            <table className="min-w-full">
                                <thead className="border-b">
                                    <tr>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                            Properties
                                        </th>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                            Keterangan
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b">
                                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                            Mark
                                        </td>
                                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                            Otto
                                        </td>
                                    </tr>
                                    <tr className="bg-white border-b">
                                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                            Jacob
                                        </td>
                                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                            Thornton
                                        </td>
                                    </tr>
                                    <tr className="bg-white border-b">
                                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                            Larry
                                        </td>
                                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                            Wild
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default DashboardInfo