import { Link, useLocation } from 'react-router';

const NavLink = ({ href, children, reloadPage }: NavLink) => { // Include reloadPage in destructuring
    const location = useLocation();
    const isActive = location.pathname === href;

    const linkContent = (
        <span className="gap-2 justify-center items-center flex relative z-10">
            {children}
        </span>
    );

    const overlay = (
        <span
            className={`
                absolute inset-0 bg-gradient-to-br from-[#A2C4FA] via-[#4F83D5] to-[#053583]
                rounded-lg transition-all duration-500 ease-out
                ${isActive ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}
                group-hover:opacity-100 group-hover:scale-x-100
                origin-left
            `}
        />
    );

    if (reloadPage) {
        return (
            <a
                href={href}
                className={`
                    gap-2 items-center flex py-2 px-3 rounded-lg relative overflow-hidden group
                    ${isActive ? 'text-white' : 'text-gray-300 hover:text-white'}
                `}
            >
                {linkContent}
                {overlay}
            </a>
        );
    }

    return (
        <Link
            to={href}
            className={`
                gap-2 items-center flex py-2 px-3 rounded-lg relative overflow-hidden group
                ${isActive ? 'text-white' : 'text-gray-300 hover:text-white'}
            `}
        >
            {linkContent}
            {overlay}
        </Link>
    );
};

export default NavLink;