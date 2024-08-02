import { Link, useLocation } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const HeaderLink = ({ children }) => {
    return (
        <nav className="flex flex-col pt-4">
            {children}
        </nav>
    );
};

// eslint-disable-next-line react/prop-types
const Admin = ({ href, text }) => {
    return (
        <Link to={href} className="text-white text-3xl font-semibold uppercase hover:text-gray-300">
            {text}
        </Link>
    );
};

// eslint-disable-next-line react/prop-types
const Menu = ({ href, icon: Icon, text }) => {
    const location = useLocation();
    const isActive = location.pathname === href;

    return (
        <Link to={href} className={`flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-item ${isActive ? 'active-nav-link' : ''}`}>
            <Icon className="mr-3" />
            {text}
        </Link>
    );
};

HeaderLink.Admin = Admin;
HeaderLink.Menu = Menu;

export default HeaderLink;