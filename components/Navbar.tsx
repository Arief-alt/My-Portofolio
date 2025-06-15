import React from 'react'

const Navbar = () => {
    return (
        <nav className="w-full p-6 fixed glassmorphism">
            <header className="w-full max-w-7xl mx-auto px-4 lg:px-8 justify-between flex">
                <h1 className="items-center text-2xl">
                    Portfolio
                </h1>

                <div className="items-center flex gap-12">
                    <a href="/" className="gap-2 items-center flex">
                        <img
                            src="/assets/icons/home.png"
                            alt="home"
                            className="size-5"
                        />

                        <h1 className="text-lg">
                            Home
                        </h1>
                    </a>
                    <a href="/About" className="gap-2 items-center flex">
                        <img
                            src="/assets/icons/about.png"
                            alt="home"
                            className="size-4.5"
                        />

                        <h1 className="text-lg">
                            About
                        </h1>
                    </a>
                    <a href="/Projects" className="gap-2 items-center flex">
                        <img
                            src="/assets/icons/projects.png"
                            alt="home"
                            className="size-4.5"
                        />

                        <h1 className="text-lg">
                            Projects
                        </h1>
                    </a>
                    <a href="/Contact" className="gap-2 items-center flex">
                        <img
                            src="/assets/icons/contact.png"
                            alt="home"
                            className="size-4.5"
                        />

                        <h1 className="text-lg">
                            Contact
                        </h1>
                    </a>
                </div>
            </header>


        </nav>
    )
}
export default Navbar
