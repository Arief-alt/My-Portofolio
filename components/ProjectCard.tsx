import React from 'react'

const ProjectCard = ({title, description, imageUrl, techStack, liveDemoUrl, codeUrl}: ProjectCardProps) => {
    return (
        <article className="mt-4 max-w-sm h-full flex flex-col rounded-lg overflow-hidden bg-dark border border-gray-400 bg-dark shadow-[0_0_0_2px_#3b82f6]">
            <div
                className="hover:scale-105 w-full h-48 bg-cover bg-center"
                style={{ backgroundImage: `url('${imageUrl}')` }}
            />

            <div className="flex flex-col gap-4 p-6 flex-grow">
                <h3 className="text-2xl font-bold project-gradient-text">{title}</h3>

                <p className="me-gradient-text text-left">{description}</p>

                <div className="flex flex-wrap gap-2">
                    {techStack.map((tech) => (
                        <span
                            key={tech}
                            className="text-white cursor-pointer px-2 py-1 rounded-full media-background sleek-white transition-all duration-200"
                        >
                          {tech}
                        </span>
                    ))}
                </div>

            </div>

            <div className="px-6 pb-6 flex gap-4">
                <a
                    href={liveDemoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex px-4 py-2 project-background rounded-md items-center gap-2 sleek-white"
                >
                    <img src="/assets/icons/link.png" alt="link" className="size-5" />
                    <h1 className="text-md text-white">Live Demo</h1>
                </a>

                {codeUrl && (
                    <a
                        href={codeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex px-4 py-2 border border-gray-500 rounded-md items-center gap-2 sleek-white"
                    >
                        <img
                            src="/assets/icons/github.png"
                            alt="github"
                            className="size-5"
                        />
                        <h1 className="text-md text-white">Code</h1>
                    </a>
                )}
            </div>
        </article>
    );
}
export default ProjectCard
