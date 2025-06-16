import { NavLink } from 'components';
import React from 'react';

const Navbar = () => {
    return (
        <nav className="w-full p-6 fixed glassmorphism">
            <header className="wrapper justify-between flex">
                <h1 className="font-bold items-center text-3xl portfolio-gradient-text">
                    Portfolio
                </h1>

                <div className="items-center gap-12 flex">
                    <NavLink href="/">
                        <img
                            src="/assets/icons/home.png"
                            alt="home"
                            className="size-5"
                        />
                        <h1 className="text-lg">Home</h1>
                    </NavLink>

                    <NavLink href="/about">
                        <img
                            src="/assets/icons/about.png"
                            alt="about"
                            className="size-4.5"
                        />
                        <h1 className="text-lg">About</h1>
                    </NavLink>

                    <NavLink href="/projects">
                        <img
                            src="/assets/icons/projects.png"
                            alt="projects"
                            className="size-4.5"
                        />
                        <h1 className="text-lg">Projects</h1>
                    </NavLink>

                    <NavLink href="/contact">
                        <img
                            src="/assets/icons/contact.png"
                            alt="contact"
                            className="size-4.5"
                        />
                        <h1 className="text-lg">Contact</h1>
                    </NavLink>
                </div>
            </header>


        </nav>
    )
}
export default Navbar
