import { Link, useLocation } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const AsideLink = ({ children }) => {
    return (
        <nav className="flex w-full flex-col pt-4">
            {children}
        </nav>
    )
}

const Admin = ({ href, text }) => {
    return (
        <Link to={href} className="text-white text-3xl font-semibold uppercase hover:text-gray-300">
            {text}
        </Link>
    )
}

const Menu = ({ href, icon: Icon, text }) => {
    const location = useLocation();
    const isActive = location.pathname === href;

    return (
        <Link to={href} className={`flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item ${isActive ? 'active-nav-link' : ''}`}>
            <Icon className="mr-3" />
            {text}
        </Link>
    )
}

AsideLink.Admin = Admin
AsideLink.Menu = Menu

export default AsideLink