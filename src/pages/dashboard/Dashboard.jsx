import { MdFormatListBulleted } from "react-icons/md";
import Charts from "../../components/fragments/dashboard/Charts";
import Table from "../../components/fragments/dashboard/Table";
import Footer from "../../components/fragments/dashboard/Footer";


export default function Dashboard() {
    return (
        <>
            <div className="w-full overflow-x-hidden border-t flex flex-col">
                <main className="w-full flex-grow p-6">
                    <h1 className="text-3xl text-black pb-6">Dashboard</h1>

                    <div className="flex flex-wrap mt-6">
                        <Charts />
                    </div>

                    <div className="w-full mt-12">
                        <p className="text-xl pb-3 flex items-center">
                            <MdFormatListBulleted className="mr-2" /> Latest Reports
                        </p>
                        <div className="bg-white overflow-auto">
                            <Table />
                        </div>
                    </div>
                </main>

                <Footer />
            </div>
        </>
    )
}