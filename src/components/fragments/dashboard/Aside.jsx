import { FaTachometerAlt, FaStickyNote, FaTable, FaAlignLeft, FaTabletAlt, FaCalendar, FaArrowCircleUp, FaPlus } from 'react-icons/fa';
import AsideLink from '../../elements/dashboard/AsideLink';


export default function Aside() {
    return (
        <aside className="relative bg-sidebar font-Poppins h-screen w-64 hidden sm:block shadow-xl aside-fixed">
            <div className="p-6">
                <AsideLink href="/dashboard" className="text-white text-3xl font-semibold uppercase hover:text-gray-300">Admin</AsideLink>
                <button className="w-full bg-white cta-btn font-semibold py-2 mt-5 rounded-br-lg rounded-bl-lg rounded-tr-lg shadow-lg hover:shadow-xl hover:bg-gray-300 flex items-center justify-center">
                    <FaPlus className="mr-3" /> New Report
                </button>
            </div>
            <nav className="text-white text-base font-semibold pt-3">
                <AsideLink href="/dashboard">
                    <FaTachometerAlt className="mr-3" />
                    Dashboard
                </AsideLink>
                <AsideLink href="/blank">
                    <FaStickyNote className="mr-3" />
                    Blank Page
                </AsideLink>
                <AsideLink href="/tables">
                    <FaTable className="mr-3" />
                    Tables
                </AsideLink>
                <AsideLink href="/forms">
                    <FaAlignLeft className="mr-3" />
                    Forms
                </AsideLink>
                <AsideLink href="/tabbed">
                    <FaTabletAlt className="mr-3" />
                    Tabbed Content
                </AsideLink>
                <AsideLink href="/calender">
                    <FaCalendar className="mr-3" />
                    Calendar
                </AsideLink>
            </nav>
            <AsideLink href="#" className="absolute bottom-0  w-full upgrade-btn text-white flex items-center justify-center">
                <FaArrowCircleUp className="mr-3" />
                Upgrade to Pro!
            </AsideLink>
        </aside>
    )
}