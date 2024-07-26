import { FaAlignLeft, FaArrowCircleUp, FaBars, FaCalendar, FaCogs, FaSignOutAlt, FaStickyNote, FaTable, FaTabletAlt, FaTachometerAlt, FaTimes, FaUser } from "react-icons/fa";
import HeaderLink from "../../elements/dashboard/HeaderLink";


export default function Header() {
    return (
        <>
            {/* <header className="w-full items-center bg-white py-2 px-6 hidden sm:flex">
                <div className="w-1/2"></div>
                <div className="relative w-1/2 flex justify-end">
                    <button className="relative z-10 w-12 h-12 rounded-full overflow-hidden border-4 border-gray-400 hover:border-gray-300 focus:border-gray-300 focus:outline-none">
                        <img src="https://source.unsplash.com/uJ8LNVCBjFQ/400x400" alt="User avatar" />
                    </button>
                    <button className="h-full w-full fixed inset-0 cursor-default"></button>
                    <div className="absolute w-32 bg-white rounded-lg shadow-lg py-2 mt-16 sm:hidden">
                        <a href="#" className="block px-4 py-2 account-link hover:text-white">Account</a>
                        <a href="#" className="block px-4 py-2 account-link hover:text-white">Support</a>
                        <a href="#" className="block px-4 py-2 account-link hover:text-white">Sign Out</a>
                    </div>
                </div>
            </header> */}
            <header className="w-full bg-sidebar py-5 px-6 sm:hidden">
                <div className="flex items-center justify-between">
                    <HeaderLink href="/dashboard" className="text-white text-3xl font-semibold uppercase hover:text-gray-300">Admin</HeaderLink>
                    <button className="text-white text-3xl focus:outline-none">
                        <FaBars />
                        <FaTimes />
                    </button>
                </div>

                <nav className="flex flex-col pt-4">
                    <HeaderLink href="/dashboard" className="flex items-center active-nav-link text-white py-2 pl-4 nav-item">
                        <FaTachometerAlt className="mr-3" />
                        Dashboard
                    </HeaderLink>
                    <HeaderLink href="/blankpage" className="flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-item">
                        <FaStickyNote className="mr-3" />
                        Blank Page
                    </HeaderLink>
                    <HeaderLink href="/tables" className="flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-item">
                        <FaTable className="mr-3" />
                        Tables
                    </HeaderLink>
                    <HeaderLink href="/forms" className="flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-item">
                        <FaAlignLeft className="mr-3" />
                        Forms
                    </HeaderLink>
                    <HeaderLink href="/tabbedcontent" className="flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-item">
                        <FaTabletAlt className="mr-3" />
                        Tabbed Content
                    </HeaderLink>
                    <HeaderLink href="/calendar" className="flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-item">
                        <FaCalendar className="mr-3" />
                        Calendar
                    </HeaderLink>
                    <HeaderLink href="#" className="flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-item">
                        <FaCogs className="mr-3" />
                        Support
                    </HeaderLink>
                    <HeaderLink href="#" className="flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-item">
                        <FaUser className="mr-3" />
                        My Account
                    </HeaderLink>
                    <HeaderLink href="#" className="flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-item">
                        <FaSignOutAlt className="mr-3" />
                        Sign Out
                    </HeaderLink>
                    <button className="w-full bg-white cta-btn font-semibold py-2 mt-3 rounded-lg shadow-lg hover:shadow-xl hover:bg-gray-300 flex items-center justify-center">
                        <FaArrowCircleUp className="fas fa-arrow-circle-up mr-3" /> Upgrade to Pro!
                    </button>
                </nav>
            </header >
        </>
    )
}