
import { Outlet } from "react-router-dom";
import Aside from "../../fragments/dashboard/Aside";
import Header from "../../fragments/dashboard/Header";


export default function DashboardMainLayout() {
    return (
        <div className="flex min-h-vh bg-gray-100 font-family-karla">
            <Aside />

            <div className="w-full flex flex-col h-screen overflow-y-hidden content">
                <Header />
                <Outlet />
                {/* <Dashboard /> */}
            </div>
        </div>
    )
}
