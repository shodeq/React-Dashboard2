import { FaAlignLeft, FaArrowCircleUp, FaBars, FaCalendar, FaCogs, FaSignOutAlt, FaStickyNote, FaTable, FaTabletAlt, FaTachometerAlt, FaTimes, FaUser } from "react-icons/fa";
import HeaderLink from "../../elements/dashboard/HeaderLink";

export default function Header() {
    return (
        <>
            <header className="w-full bg-sidebar py-5 px-6 sm:hidden">
                <div className="flex items-center justify-between">
                    <HeaderLink.Admin href="/dashboard" className="text-white text-3xl font-semibold uppercase hover:text-gray-300" text="Admin" />
                    <button className="text-white text-3xl focus:outline-none">
                        <FaBars />
                        <FaTimes />
                    </button>
                </div>

                <HeaderLink>
                    <HeaderLink.Menu href="/dashboard" icon={FaTachometerAlt} text="Dashboard" />
                    <HeaderLink.Menu href="/blankpage" icon={FaStickyNote} text="Blank Page" />
                    <HeaderLink.Menu href="/tables" icon={FaTable} text="Tables" />
                    <HeaderLink.Menu href="/forms" icon={FaAlignLeft} text="Forms" />
                    <HeaderLink.Menu href="/tabbedcontent" icon={FaTabletAlt} text="Tabbed Content" />
                    <HeaderLink.Menu href="/calendar" icon={FaCalendar} text="Calendar" />
                    <HeaderLink.Menu href="#" icon={FaCogs} text="Support" />
                    <HeaderLink.Menu href="#" icon={FaUser} text="My Account" />
                    <HeaderLink.Menu href="#" icon={FaSignOutAlt} text="Sign Out" />
                </HeaderLink>
                
                <button className="w-full bg-white cta-btn font-semibold py-2 mt-3 rounded-lg shadow-lg hover:shadow-xl hover:bg-gray-300 flex items-center justify-center">
                    <FaArrowCircleUp className="mr-3" /> Upgrade to Pro!
                </button>
            </header>
        </>
    );
}
