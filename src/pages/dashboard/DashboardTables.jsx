import { FaList } from "react-icons/fa";
import TablesOne from "../../components/elements/dashboard/TablesOne";
import TablesThree from "../../components/elements/dashboard/TablesThree";
import TablesTwo from "../../components/elements/dashboard/TablesTwo";
import Footer from "../../components/fragments/dashboard/Footer";


export default function DashboardTables() {
    return (
        <div className="w-full h-screen overflow-x-hidden border-t flex flex-col">
            <main className="w-full flex-grow p-6">
                <h1 className="text-3xl text-black pb-6">Tables</h1>

                <div className="w-full mt-6">
                    <p className="text-xl pb-3 flex items-center">
                        <FaList className="fas fa-list mr-3"/> Table Example 1
                    </p>
                    <TablesOne />
                </div>

                <div className="w-full mt-12">
                    <p className="text-xl pb-3 flex items-center">
                    <FaList className="fas fa-list mr-3"/> Table Example 2
                    </p>
                    <TablesTwo />
                </div>

                <div className="w-full mt-12">
                    <p className="text-xl pb-3 flex items-center">
                    <FaList className="fas fa-list mr-3"/> Table Example 3
                    </p>
                    <TablesThree />
                </div>
            </main>
            <Footer />
        </div>
    )
}

