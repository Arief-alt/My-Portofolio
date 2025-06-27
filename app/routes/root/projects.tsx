import React from 'react'
import {Link} from "react-router";
import {ProjectCard, UsePreventZoom} from "../../../components";

const Projects = () => {
    UsePreventZoom()

    return (
        <main className="w-full pt-20 wrapper">
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

                <section className="justify-center items-center xl:justify-start flex">
                    <ProjectCard
                        title="Travel App"
                        description="A full-stack travel app built with React, TailwindCSS, and Appwrite. Features include user authentication, payment processing, and admin dashboard."
                        imageUrl="/assets/images/travel-agency.png"
                        techStack={["React", "TailwindCSS", "Appwrite", "Stripe"]}
                        liveDemoUrl="https://travel-agency-nine-gamma.vercel.app/"
                        codeUrl="https://github.com/Arief-alt/Travel-Agency"
                    />
                </section>
            </section>


            <section className="pt-15 gap-2 fade-in-up">
                <h1 className="font-bold text-3xl introduction-gradient-text">
                    Other Projects
                </h1>

                <section className="grid md:grid-cols-2 xl:grid-cols-3 justify-center justify-items-center items-stretch gap-8">
                    <ProjectCard
                        title="Ghibli Studio"
                        description="I created a web application called Ghibli Studio using Next.js, Tailwind CSS, TypeScript, and TanStack Query. It displays a list of Studio Ghibli films in a clean card layout, fetched from a public API."
                        imageUrl="/assets/images/ghibli-studio.png"
                        techStack={["React", "TailwindCSS", "Next.js", "TanStack"]}
                        liveDemoUrl="https://technical-test-arief-firmansyah.vercel.app/"
                    />

                    <ProjectCard
                        title="Weather App"
                        description="A full-stack weather app built with React, TailwindCSS, and OpenWeatherAPI."
                        imageUrl="/assets/images/weather-dashboard.png"
                        techStack={["React", "TailwindCSS", "OpenWeatherAPI"]}
                        liveDemoUrl="https://weather-app-zero-five.vercel.app/"
                        codeUrl="https://github.com/Arief-alt/Weather-App"
                    />

                    <ProjectCard
                        title="To-Do App"
                        description="A frontend to-do app built with React, TailwindCSS."
                        imageUrl="/assets/images/to-do-app.png"
                        techStack={["React", "TailwindCSS"]}
                        liveDemoUrl="https://todo-app-zero-five.vercel.app/"
                        codeUrl="https://github.com/Arief-alt/Todo-App"
                    />
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
