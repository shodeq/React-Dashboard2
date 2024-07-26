import { Link, useLocation } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export default function HeaderLink({ href, children, className }) {
    const location = useLocation();
    const isActive = location.pathname === href;
    return (
        <Link
            to={href}
            className={`flex items-center text-white py-2 pl-4 nav-item ${className} ${isActive ? 'active-nav-link' : ''}`}
        >
            {children}
        </Link>
    )
}