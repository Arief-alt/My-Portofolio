import React, { useState, useEffect } from 'react';

const About = () => {
    const [progress, setProgress] = useState({
        react: 0,
        typescript: 0,
        tailwind: 0,
        api: 0,
        threejs: 0
    });

    useEffect(() => {
        const duration = 1500;
        const startTime = performance.now();

        const animate = (currentTime: any) => {
            const elapsedTime = currentTime - startTime;
            const progressFraction = Math.min(elapsedTime / duration, 1);

            setProgress({
                react: 60 * progressFraction,
                typescript: 55 * progressFraction,
                tailwind: 70 * progressFraction,
                api: 60 * progressFraction,
                threejs: 55 * progressFraction
            });

            if (progressFraction < 1) {
                requestAnimationFrame(animate);
            }
        };

        requestAnimationFrame(animate);
    }, []);

    return (
        <main className="w-full pt-40 wrapper">
            <header className="items-center flex flex-col gap-2 fade-in-up">
                <h1 className="font-bold text-4xl profesional-gradient-text">
                    About Me
                </h1>
                <p className="me-gradient-text text-[22px]">
                    I'm a Passionate beginner developer crafting my path in web development
                </p>
            </header>

            <div className="grid lg:gap-12 lg:grid-cols-2">
                <section className="pt-15 flex flex-col gap-2 fade-in-up">
                    <h1 className="font-bold text-3xl introduction-gradient-text">
                        My Journey
                    </h1>

                    <div className="hover:scale-105 gap-3 mt-4 p-5 rounded-lg border border-gray-400 bg-dark shadow-[0_0_0_2px_#3b82f6]">
                        <div className="space-y-3 text-gray-200">
                            <p>
                                <span className="font-semibold introduction-gradient-text">Arief Firmansyah</span>
                                <span className="text-gray-400"> • 18 y/o • Aspiring Full-stack Dev</span>
                            </p>

                            <p>🌱 <span className="italic">Currently:</span> Building foundations with
                                <span className="font-mono ml-1 px-1.5 py-0.5 bg-blue-900/30 text-blue-300 rounded">
                                    React + TypeScript
                                </span>
                            </p>

                            <p>💡 <span className="italic">Fascinated by:</span>
                                <span className="ml-1 px-2 py-0.5 bg-purple-900/20 text-purple-300 rounded-full text-sm">
                                    How frontend and backend communicate
                                </span>
                            </p>

                            <p>🛠️ <span className="text-gray-300">Learning:</span>
                                <span className="ml-2 font-mono text-sm bg-gray-800 px-2 py-1 rounded text-gray-200">
                                    React | Tailwind | Firebase | Appwrite | Three.js
                                </span>
                            </p>

                            <p className="pt-2">🚀 <span className="text-blue-400">Goal:</span>
                                <span className="ml-1">To contribute meaningfully to open-source in 2025</span>
                            </p>
                        </div>
                    </div>
                </section>

                <section className="pt-15 flex flex-col gap-2 fade-in-up">
                    <h1 className="font-bold text-3xl introduction-gradient-text">
                        Skills & Expertise
                    </h1>

                    <div className="hover:scale-105 flex flex-col p-5 mt-4 gap-4 rounded-lg border border-gray-400 bg-dark shadow-[0_0_0_2px_#3b82f6]">
                        {/* React */}
                        <div>
                            <div className="flex justify-between mb-1">
                                <span className="font-medium text-gray-300">React</span>
                                <span className="text-sm text-blue-400">{Math.round(progress.react)}%</span>
                            </div>
                            <div className="w-full bg-gray-700 rounded-full h-2.5">
                                <div
                                    className="h-2.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 transition-[width] duration-1500 ease-out"
                                    style={{ width: `${progress.react}%` }}
                                ></div>
                            </div>
                        </div>

                        {/* TypeScript */}
                        <div>
                            <div className="flex justify-between mb-1">
                                <span className="font-medium text-gray-300">TypeScript</span>
                                <span className="text-sm text-blue-400">{Math.round(progress.typescript)}%</span>
                            </div>
                            <div className="w-full bg-gray-700 rounded-full h-2.5">
                                <div
                                    className="h-2.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 transition-[width] duration-1500 ease-out"
                                    style={{ width: `${progress.typescript}%` }}
                                ></div>
                            </div>
                        </div>

                        {/* Tailwind CSS */}
                        <div>
                            <div className="flex justify-between mb-1">
                                <span className="font-medium text-gray-300">Tailwind CSS</span>
                                <span className="text-sm text-blue-400">{Math.round(progress.tailwind)}%</span>
                            </div>
                            <div className="w-full bg-gray-700 rounded-full h-2.5">
                                <div
                                    className="h-2.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 transition-[width] duration-1500 ease-out"
                                    style={{ width: `${progress.tailwind}%` }}
                                ></div>
                            </div>
                        </div>

                        {/* API Integration */}
                        <div>
                            <div className="flex justify-between mb-1">
                                <span className="font-medium text-gray-300">API Integration</span>
                                <span className="text-sm text-blue-400">{Math.round(progress.api)}%</span>
                            </div>
                            <div className="w-full bg-gray-700 rounded-full h-2.5">
                                <div
                                    className="h-2.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 transition-[width] duration-1500 ease-out"
                                    style={{ width: `${progress.api}%` }}
                                ></div>
                            </div>
                        </div>

                        {/* Three.js */}
                        <div>
                            <div className="flex justify-between mb-1">
                                <span className="font-medium text-gray-300">Three.js</span>
                                <span className="text-sm text-blue-400">{Math.round(progress.threejs)}%</span>
                            </div>
                            <div className="w-full bg-gray-700 rounded-full h-2.5">
                                <div
                                    className="h-2.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 transition-[width] duration-1500 ease-out"
                                    style={{ width: `${progress.threejs}%` }}
                                ></div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <section className="flex items-center pt-15 gap-2 fade-in-up">
                <div className="w-full grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
                    <div className="hover:scale-105 items-center flex flex-col py-5 rounded-lg border border-gray-400 bg-dark shadow-[0_0_0_2px_#3b82f6]">
                        <img
                            src="/assets/icons/brackets.png"
                            alt="brackets"
                            className="size-10"
                        />

                        <h1 className="font-bold text-3xl introduction-gradient-text">
                            3
                        </h1>

                        <p className="me-gradient-text text-lg">
                            Projects Completed
                        </p>
                    </div>

                    <div className="hover:scale-105 items-center flex flex-col p-5 rounded-lg border border-gray-400 bg-dark shadow-[0_0_0_2px_#3b82f6]">
                        <img
                            src="/assets/icons/repository.png"
                            alt="repository"
                            className="size-10"
                        />

                        <h1 className="font-bold text-3xl introduction-gradient-text">
                            3
                        </h1>

                        <p className="me-gradient-text text-lg">
                            Public Repositories
                        </p>
                    </div>
                    <div className="hover:scale-105 items-center flex flex-col p-5 rounded-lg border border-gray-400 bg-dark shadow-[0_0_0_2px_#3b82f6]">
                        <img
                            src="/assets/icons/coffee.png"
                            alt="coffee"
                            className="size-10"
                        />

                        <h1 className="font-bold text-3xl introduction-gradient-text">
                            100+
                        </h1>

                        <p className="me-gradient-text text-lg">
                            Cups of Coffee
                        </p>
                    </div>

                    <div className="hover:scale-105 items-center flex flex-col p-5 rounded-lg border border-gray-400 bg-dark shadow-[0_0_0_2px_#3b82f6]">
                        <img
                            src="/assets/icons/contributions.png"
                            alt="contributions"
                            className="size-10"
                        />

                        <h1 className="font-bold text-3xl introduction-gradient-text">
                            218
                        </h1>

                        <p className="me-gradient-text text-lg">
                            Yearly Contributions
                        </p>
                    </div>
                </div>
            </section>

            <section className="flex flex-col items-center pt-15 gap-2 fade-in-up">
                <h1 className="font-bold text-4xl profesional-gradient-text">
                    What I Value
                </h1>

                <div className="mt-4 gap-8 w-full grid md:grid-cols-3">
                    <div className="hover:scale-105 text-center gap-2 items-center flex flex-col p-5 rounded-lg border border-gray-400 bg-dark shadow-[0_0_0_2px_#3b82f6]">
                        <img
                            src="/assets/icons/blue-brackets.png"
                            alt="blue-brackets"
                            className="size-10"
                        />

                        <h1 className="font-bold text-2xl introduction-gradient-text">
                            Clean Code
                        </h1>

                        <p className="me-gradient-text text-lg">
                            Writing maintainable, readable code that scales and stands the test of time.
                        </p>
                    </div>
                    <div className="hover:scale-105 text-center gap-2 items-center flex flex-col p-5 rounded-lg border border-gray-400 bg-dark shadow-[0_0_0_2px_#3b82f6]">
                        <img
                            src="/assets/icons/pallete.png"
                            alt="pallete"
                            className="size-10"
                        />

                        <h1 className="font-bold text-2xl introduction-gradient-text">
                            Design Focus
                        </h1>

                        <p className="me-gradient-text text-lg">
                            Creating beautiful, intuitive interfaces that provide exceptional user experiences.
                        </p>
                    </div>
                    <div className="hover:scale-105 text-center gap-2 items-center flex flex-col p-5 rounded-lg border border-gray-400 bg-dark shadow-[0_0_0_2px_#3b82f6]">
                        <img
                            src="/assets/icons/performance.png"
                            alt="performance"
                            className="size-10"
                        />

                        <h1 className="font-bold text-2xl introduction-gradient-text">
                            Performance
                        </h1>

                        <p className="me-gradient-text text-lg">
                            Optimizing applications for speed, efficiency, and seamless user interactions.
                        </p>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default About