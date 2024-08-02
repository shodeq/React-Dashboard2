import { FaTachometerAlt, FaStickyNote, FaTable, FaAlignLeft, FaTabletAlt, FaCalendar, FaArrowCircleUp, FaPlus } from 'react-icons/fa';
import AsideLink from '../../elements/dashboard/AsideLink';

export default function Aside() {
    return (
        <aside className="relative bg-sidebar font-Poppins h-screen w-64 hidden sm:block shadow-xl aside-fixed">
            <div className="p-6">
                <AsideLink>
                    <AsideLink.Admin href="/dashboard" className="text-white text-3xl font-semibold uppercase hover:text-gray-300" text="Admin" />
                </AsideLink>
                <button className="w-full bg-white cta-btn font-semibold py-2 mt-5 rounded-br-lg rounded-bl-lg rounded-tr-lg shadow-lg hover:shadow-xl hover:bg-gray-300 flex items-center justify-center">
                    <FaPlus className="mr-3" /> New Report
                </button>
            </div>
            <AsideLink>
                <AsideLink.Menu href="/dashboard" icon={FaTachometerAlt} text="Dashboard" />
                <AsideLink.Menu href="/blankpage" icon={FaStickyNote} text="Blank Page" />
                <AsideLink.Menu href="/tables" icon={FaTable} text="Tables" />
                <AsideLink.Menu href="/forms" icon={FaAlignLeft} text="Forms" />
                <AsideLink.Menu href="/tabbedcontent" icon={FaTabletAlt} text="Tabbed Content" />
                <AsideLink.Menu href="/calendar" icon={FaCalendar} text="Calendar" />
            </AsideLink>
            <AsideLink.Admin href="#" className="absolute bottom-0 w-full upgrade-btn text-white flex items-center justify-center">
                <FaArrowCircleUp className="mr-3" />
                Upgrade to Pro!
            </AsideLink.Admin>
        </aside>
    );
}
