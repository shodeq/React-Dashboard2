// src/pages/dashboard/DashboardTabbed.jsx
import TabbedNavigation from '../../components/elements/dashboard/TabbedNavigation';
import Footer from '../../components/fragments/dashboard/Footer';
import '../../index.css';
import { Outlet } from 'react-router-dom';

export default function DashboardTabbedContent() {
    return (
        <div className="w-full h-screen overflow-x-hidden border-t flex flex-col">
            <main className="w-full flex-grow p-6">
                <h1 className="text-3xl text-black pb-6">Tabbed Content</h1>
                <TabbedNavigation />
                <div className="bg-white p-6">
                    <Outlet />
                </div>
            </main>
            <Footer />
        </div>
    );
}
