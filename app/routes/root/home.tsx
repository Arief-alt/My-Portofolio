import React, { useEffect, useRef } from 'react';
import {Link, NavLink} from "react-router";
import {UsePreventZoom} from "../../../components";

const Home= () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (containerRef.current) {
            containerRef.current.style.opacity = '1';
        }
    }, []);

    UsePreventZoom()

    return (
        <main
            className="flex items-center justify-center pt-20 lg:pt-80 wrapper"
            ref={containerRef}
            style={{ opacity: 0, transition: 'opacity 0.5s ease-out' }}
        >
            <div className="gap-10 flex-col lg:flex lg:flex-row lg:items-center fade-in-up">
                <header className="flex flex-col gap-2">
                    <p className="introduction-gradient-text text-2xl">
                        Hello, I'm
                    </p>

                    <h1 className="introduction-gradient-text font-bold text-4xl sm:text-5xl">
                        Arief Firmansyah
                    </h1>

                    <p className="profesional-gradient-text pt-2 text-2xl sm:text-3xl">
                        Full Stack Developer
                    </p>

                    <span className="me-gradient-text mt-4 text-[22px]">
                        I create beautiful, responsive web applications with modern technologies. Passionate about clean code, user experience, and bringing ideas to life through technology.
                    </span>

                    <div className="pt-6">
                        <Link
                            to="/projects"
                            className="cursor-pointer flex justify-center items-center px-4 py-2 w-[240px] rounded-lg project-background sleek-white hover:scale-105 transition-all duration-200"
                        >
                            <h1 className="text-lg text-white">View My Work</h1>
                        </Link>
                    </div>

                    <div className="flex gap-8 pt-6">
                        <a
                            href="https://github.com/Arief-alt"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="cursor-pointer px-3 py-2 rounded-lg hover:bg-gray-800/80 sleek-white transition-all duration-200"
                        >
                            <img
                                src="/assets/icons/github.png"
                                alt="github"
                                className="size-8"
                            />
                        </a>

                        <a
                            href="https://www.linkedin.com/in/arief-firmansyah-9451b62a2/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="cursor-pointer px-3 py-2 rounded-lg hover:bg-blue-600/80 sleek-white transition-all duration-200"
                        >
                            <img
                                src="/assets/icons/linkedin.png"
                                alt="linkedin"
                                className="size-9"
                            />
                        </a>

                        <Link
                            to="/contact"
                            className="cursor-pointer px-3 py-2 rounded-lg hover:bg-indigo-500/80 sleek-white transition-all duration-200"
                        >
                            <img
                                src="/assets/icons/contact.png"
                                alt="contact"
                                className="size-8"
                            />
                        </Link>
                    </div>
                </header>

                <div className="pt-20 lg:pt-0 w-full flex justify-center">
                    <img
                        src="/assets/images/my-photo.png"
                        alt="me"
                        className="size-80 rounded-full object-cover border-4 border-white/10
                 hover:scale-105 sleek-white
                 animate-[float_6s_ease-in-out_infinite]
                 transition-all duration-300"
                    />
                </div>
            </div>
        </main>
    )
}
export default Home
