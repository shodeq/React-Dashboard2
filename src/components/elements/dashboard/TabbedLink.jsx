/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"

const TabbedLink = ({ tabNumber, openTab, setOpenTab, children, to }) => {
    return (
        <li className="mr-1">
            <Link to={to} className={`bg-white inline-block py-2 px-4 font-semibold ${openTab === tabNumber ? 'border-l border-t border-r rounded-t text-blue-700 font-semibold' : 'text-blue-500 hover:text-blue-800'}`} onClick={() => setOpenTab(tabNumber)}>
                {children}
            </Link>
        </li>
    )
}

export default TabbedLink