import { NavLink } from 'react-router-dom';

const TabbedNavigation = () => {
    return (
        <div>
            <ul className="flex border-b">
                <li>
                    <NavLink
                        to="/tabbedcontent/tab1"
                        className={({ isActive }) => `border-l border-t border-r rounded-t py-2 px-4 inline-block font-semibold ${isActive ? 'text-red-500 bg-gray-100' : 'text-gray-500 hover:bg-gray-200'}`}
                    >
                        Tab 1
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/tabbedcontent/tab2"
                        className={({ isActive }) => `border-l border-t border-r rounded-t py-2 px-4 inline-block font-semibold ${isActive ? 'text-green-500 bg-gray-100' : 'text-gray-500 hover:bg-gray-200'}`}
                    >
                        Tab 2
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/tabbedcontent/tab3"
                        className={({ isActive }) => `border-l border-t border-r rounded-t py-2 px-4 inline-block font-semibold ${isActive ? 'text-blue-500 bg-gray-100' : 'text-gray-500 hover:bg-gray-200'}`}
                    >
                        Tab 3
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/tabbedcontent/tab4"
                        className={({ isActive }) => `border-l border-t border-r rounded-t py-2 px-4 inline-block font-semibold ${isActive ? 'text-yellow-500 bg-gray-100' : 'text-gray-500 hover:bg-gray-200'}`}
                    >
                        Tab 4
                    </NavLink>
                </li>
            </ul>
        </div>
    );
};

export default TabbedNavigation;
