import { NavLink } from "components";
import React, { useState } from "react";

const MobileNavbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <div className="w-full px-1 py-6 fixed glassmorphism lg:hidden">
            <header className="wrapper justify-between flex">
                <h1 className="font-bold items-center text-3xl portfolio-gradient-text">
                    Portfolio
                </h1>

                <button
                    className="items-center lg:hidden rounded-md focus:outline-none"
                    onClick={toggleMenu}
                >
                    <img
                        src={isMenuOpen ? "/assets/icons/close.png" : "/assets/icons/menu.png"}
                        alt="menu"
                        className="size-6"
                    />
                </button>
            </header>

            <div className={`lg:hidden mt-2 w-full transition-all duration-300 ease-in-out 
                 ${isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[-20px] pointer-events-none"}`}
                 style={{
                     maxHeight: isMenuOpen ? "500px" : "0px",
                     overflow: "hidden",
                     transitionProperty: "opacity, transform, max-height"
                 }}
            >
                <div className="flex flex-col items-center gap-6 py-4 bg-white/10 backdrop-blur-lg rounded-lg">
                    <NavLinks mobile closeMenu={closeMenu} />
                </div>
            </div>
        </div>
    );
};

const NavLinks = ({ mobile = false, closeMenu }: NavLinksProps) => {
    const linkClass = mobile ? "px-6 w-full flex-col" : "";

    const handleLinkClick = () => {
        if (mobile && closeMenu) {
            closeMenu();
        }
    };

    return (
        <>
            <div className={linkClass} onClick={handleLinkClick}>
                <NavLink href="/">
                    <img
                        src="/assets/icons/home.png"
                        alt="home"
                        className="size-5"
                    />
                    <h1 className="text-lg">Home</h1>
                </NavLink>
            </div>
            <div className={linkClass} onClick={handleLinkClick}>
                <NavLink href="/about">
                    <img
                         src="/assets/icons/about.png"
                         alt="about"
                         className="size-4.5"
                    />
                    <h1 className="text-lg">About</h1>
                </NavLink>
            </div>
            <div className={linkClass} onClick={handleLinkClick}>
                <NavLink href="/projects">
                    <img
                        src="/assets/icons/projects.png"
                        alt="projects"
                        className="size-4.5"
                    />
                    <h1 className="text-lg">Projects</h1>
                </NavLink>
            </div>
            <div className={linkClass} onClick={handleLinkClick}>
                <NavLink href="/contact">
                    <img
                        src="/assets/icons/contact.png"
                        alt="contact"
                        className="size-4.5"
                    />
                    <h1 className="text-lg">Contact</h1>
                </NavLink>
            </div>
        </>
    );
};

export default MobileNavbar;