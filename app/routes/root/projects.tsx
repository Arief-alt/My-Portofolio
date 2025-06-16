import React from 'react'
import {Link} from "react-router";

const Projects = () => {
    return (
        <main className="w-full pt-40 wrapper">
            <header className="text-center items-center flex flex-col gap-2 fade-in-up">
                <h1 className="font-bold text-4xl profesional-gradient-text">
                    My Projects
                </h1>
                <p className="me-gradient-text text-[22px]">
                    Here are some of the projects I've worked on. Each one represents a unique challenge and learning experience.
                </p>
            </header>

            <section className="pt-15 flex flex-col gap-2 fade-in-up">
                <h1 className="font-bold text-3xl introduction-gradient-text">
                    Featured Projects
                </h1>

                <section className="justify-center items-center md:justify-start flex">
                    <div className="mt-4 max-w-sm rounded-lg overflow-hidden bg-dark border border-gray-400 bg-dark shadow-[0_0_0_2px_#3b82f6]">
                        <div className="hover:scale-105 w-full h-48 bg-cover bg-center" style={{ backgroundImage: "url('/assets/images/travel-agency.png')" }}/>

                        <div className="flex flex-col gap-4 p-6">
                            <h3 className="text-2xl font-bold project-gradient-text">
                                Travel App
                            </h3>

                            <p className="me-gradient-text text-left">
                                A full-stack travel app built with React, TailwindCSS, and
                                Appwrite. Features include user authentication, payment
                                processing, and admin dashboard.
                            </p>

                            <div className="flex flex-wrap gap-2">
                                <span className="text-white cursor-pointer px-2 py-1 rounded-full leanguange-background sleek-white transition-all duration-200">React</span>
                                <span className="text-white cursor-pointer px-2 py-1 rounded-full leanguange-background sleek-white transition-all duration-200">TailwindCSS</span>
                                <span className="text-white cursor-pointer px-2 py-1 rounded-full leanguange-background sleek-white transition-all duration-200">Appwrite</span>
                                <span className="text-white cursor-pointer px-2 py-1 rounded-full leanguange-background sleek-white transition-all duration-200">Stripe</span>
                            </div>

                            <div className="flex gap-4">
                                <a
                                    href="https://travel-agency-nine-gamma.vercel.app/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex px-4 py-2 project-background rounded-md items-center gap-2 sleek-white"
                                >
                                    <img
                                        src="/assets/icons/link.png"
                                        alt="link"
                                        className="size-5"
                                    />

                                    <h1 className="text-md text-white">
                                        Live Demo
                                    </h1>
                                </a>
                                <a
                                    href="https://github.com/Arief-alt/Travel-Agency"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex px-4 py-2 border border-gray-500 rounded-md items-center gap-2 sleek-white"
                                >
                                   <img
                                        src="/assets/icons/github.png"
                                        alt="github"
                                        className="size-5"
                                   />

                                    <h1 className="text-md text-white">
                                        Code
                                    </h1>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </section>

            <section className="pt-15 gap-2 fade-in-up">
                <h1 className="font-bold text-3xl introduction-gradient-text">
                    Other Projects
                </h1>

                <section className="flex flex-col md:flex-row justify-center md:justify-start items-center gap-8">
                    <div className="mt-4 max-w-sm rounded-lg overflow-hidden bg-dark border border-gray-400 bg-dark shadow-[0_0_0_2px_#3b82f6]">
                        <div className="hover:scale-105 w-full h-48 bg-cover bg-center" style={{ backgroundImage: "url('/assets/images/weather-dashboard.png')" }}/>

                        <div className="flex flex-col gap-4 p-6">
                            <h3 className="text-2xl font-bold project-gradient-text">
                                Weather App
                            </h3>

                            <p className="me-gradient-text text-left">
                                A full-stack weather app built with React, TailwindCSS, and
                                OpenWeatherAPI.
                            </p>

                            <div className="flex flex-wrap gap-2">
                                <span className="text-white cursor-pointer px-2 py-1 rounded-full leanguange-background sleek-white transition-all duration-200">React</span>
                                <span className="text-white cursor-pointer px-2 py-1 rounded-full leanguange-background sleek-white transition-all duration-200">TailwindCSS</span>
                                <span className="text-white cursor-pointer px-2 py-1 rounded-full leanguange-background sleek-white transition-all duration-200">OpenWeatherAPI</span>
                            </div>

                            <div className="flex gap-4">
                                <a
                                    href="https://weather-app-zero-five.vercel.app/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex px-4 py-2 project-background rounded-md items-center gap-2 sleek-white"
                                >
                                    <img
                                        src="/assets/icons/link.png"
                                        alt="link"
                                        className="size-5"
                                    />

                                    <h1 className="text-md text-white">
                                        Live Demo
                                    </h1>
                                </a>
                                <a
                                    href="https://github.com/Arief-alt/Weather-App"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex px-4 py-2 border border-gray-500 rounded-md items-center gap-2 sleek-white"
                                >
                                    <img
                                        src="/assets/icons/github.png"
                                        alt="github"
                                        className="size-5"
                                    />

                                    <h1 className="text-md text-white">
                                        Code
                                    </h1>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="mt-4 max-w-sm rounded-lg overflow-hidden bg-dark border border-gray-400 bg-dark shadow-[0_0_0_2px_#3b82f6]">
                        <div className="hover:scale-105 w-full h-48 bg-cover bg-center" style={{ backgroundImage: "url('/assets/images/to-do-app.png')" }}/>

                        <div className="flex flex-col gap-4 p-6">
                            <h3 className="text-2xl font-bold project-gradient-text">
                                To-Do App
                            </h3>

                            <p className="me-gradient-text text-left">
                                A frontend to-do app built with React, TailwindCSS.
                            </p>

                            <div className="flex flex-wrap gap-2">
                                <span className="text-white cursor-pointer px-2 py-1 rounded-full leanguange-background sleek-white transition-all duration-200">React</span>
                                <span className="text-white cursor-pointer px-2 py-1 rounded-full leanguange-background sleek-white transition-all duration-200">TailwindCSS</span>
                            </div>

                            <div className="flex gap-4">
                                <a
                                    href="https://todo-app-zero-five.vercel.app/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex px-4 py-2 project-background rounded-md items-center gap-2 sleek-white"
                                >
                                    <img
                                        src="/assets/icons/link.png"
                                        alt="link"
                                        className="size-5"
                                    />

                                    <h1 className="text-md text-white">
                                        Live Demo
                                    </h1>
                                </a>
                                <a
                                    href="https://github.com/Arief-alt/Todo-App"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex px-4 py-2 border border-gray-500 rounded-md items-center gap-2 sleek-white"
                                >
                                    <img
                                        src="/assets/icons/github.png"
                                        alt="github"
                                        className="size-5"
                                    />

                                    <h1 className="text-md text-white">
                                        Code
                                    </h1>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </section>

            <section className="pt-15 gap-2 fade-in-up">
                <div className="text-center gap-2 items-center flex flex-col p-5 rounded-lg border border-gray-400 bg-dark shadow-[0_0_0_2px_#3b82f6]">
                    <h1 className="font-bold text-2xl introduction-gradient-text">
                        Interested in working together?
                    </h1>

                    <p className="me-gradient-text text-lg">
                        I'm always open to discussing new opportunities and interesting projects. Let's create something amazing together!
                    </p>

                    <Link
                        to="/contact"
                        className="flex px-4 py-2 project-background rounded-md items-center gap-2 sleek-white"
                    >
                        <img
                            src="/assets/icons/airplane.png"
                            alt="airplane"
                            className="size-5"
                        />

                        <h1 className="text-md text-white">
                            Ready to Collaborate?
                        </h1>
                    </Link>
                </div>
            </section>
        </main>
    )
}
export default Projects
