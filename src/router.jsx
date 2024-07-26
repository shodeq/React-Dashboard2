import DashboardMainLayout from "./components/layouts/dashboard/DashboardMainLayout";
import Dashboard from "./pages/dashboard/Dashboard";
import DashboardBlankPage from "./pages/dashboard/DashboardBlankPage";
import DashboardTables from "./pages/dashboard/DashboardTables";
import DashboardTabbed from "./pages/dashboard/DashboardTabbed";
import DashboardForm from "./pages/dashboard/DashboardForm";
import DashboardCalender from "./pages/dashboard/DashboardCalender";


import {
    createBrowserRouter,
    Route,
    createRoutesFromElements,
    Navigate
} from "react-router-dom";

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<DashboardMainLayout />}>
            <Route index element={<Navigate to="dashboard" />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="blank" element={<DashboardBlankPage />} />
            <Route path="tables" element={<DashboardTables />} />
            <Route path="forms" element={<DashboardForm />} />
            <Route path="tabbed" element={<DashboardTabbed/>} />
            <Route path="calender" element={<DashboardCalender />} />
        </Route>
    )
)
