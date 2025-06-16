import { useRef } from 'react';
import emails from '@emailjs/browser';

const Contact = () => {
    const form = useRef<HTMLFormElement>(null);

    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault();

        if (!form.current) return;

        console.log({
            service: import.meta.env.VITE_EMAILJS_SERVICE_ID,
            template: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            key: import.meta.env.VITE_EMAILJS_PUBLIC_KEY?.substring(0, 3) + '...'
        });

        emails
            .sendForm(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                form.current,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            )
            .then(
                (result) => {
                    alert('Message sent successfully!');
                    form.current?.reset();
                },
                (error) => {
                    alert('Failed to send message. Please try again.');
                }
            );
    };

    return (
        <main className="w-full pt-40 wrapper">
            <header className="text-center items-center flex flex-col gap-2 fade-in-up">
                <h1 className="font-bold text-4xl profesional-gradient-text">
                    Let's Connect
                </h1>
                <p className="me-gradient-text text-[22px]">
                    Have a project in mind or just want to chat? I'd love to hear from you. Let's discuss how we can work together to bring your ideas to life.
                </p>
            </header>

            <section className="gap-8 grid md:grid-cols-2">
                <div className="pt-15 fade-in-up">
                    <form
                        ref={form}
                        onSubmit={sendEmail}
                        className="gap-3 mt-4 p-5 rounded-lg border border-gray-400 bg-dark shadow-[0_0_0_2px_#3b82f6]"
                    >
                        <h1 className="font-bold text-2xl introduction-gradient-text">
                            Send me a message
                        </h1>

                        <section className="grid md:grid-cols-2 gap-4">
                            <div className="mt-4 flex flex-col gap-2">
                                <h1 className="font-bold text-md me-gradient-text">Full Name</h1>
                                <input
                                    type="text"
                                    name="from_name"
                                    maxLength={30}
                                    placeholder="Your Name...."
                                    className="text-white w-full p-2 rounded-lg bg-black border border-gray-600 focus:outline-none focus:ring-1 focus:ring-gray-100 cursor-pointer"
                                    required
                                />
                            </div>

                            <div className="mt-4 flex flex-col gap-2">
                                <h1 className="font-bold text-md me-gradient-text">Email Address</h1>
                                <input
                                    type="email"
                                    name="email"
                                    maxLength={30}
                                    placeholder="Your Email...."
                                    className="text-white w-full p-2 rounded-lg bg-black border border-gray-600 focus:outline-none focus:ring-1 focus:ring-gray-100 cursor-pointer"
                                    required
                                />
                            </div>
                        </section>

                        <section className="mt-4 flex flex-col gap-2">
                            <h1 className="font-bold text-md me-gradient-text">Subject</h1>
                            <input
                                type="text"
                                name="subject"
                                maxLength={50}
                                placeholder="Project Discussion...."
                                className="text-white w-full p-2 rounded-lg bg-black border border-gray-600 focus:outline-none focus:ring-1 focus:ring-gray-100 cursor-pointer"
                                required
                            />
                        </section>

                        <section className="mt-4 flex flex-col gap-2">
                            <h1 className="font-bold text-md me-gradient-text">Message</h1>
                            <textarea
                                name="message"
                                placeholder="Add your description (Up to 1000 characters)..."
                                maxLength={1000}
                                className="text-white w-full p-2 rounded-lg bg-black border border-gray-600 focus:outline-none focus:ring-1 focus:ring-gray-100 cursor-pointer resize-none"
                                rows={1}
                                style={{ minHeight: '44px' }}
                                onInput={(e) => {
                                    const target = e.target as HTMLTextAreaElement;
                                    target.style.height = 'auto';
                                    target.style.height = target.scrollHeight + 'px';
                                }}
                                required
                            />
                        </section>

                        <section className="mt-10">
                            <button
                                type="submit"
                                className="cursor-pointer w-full justify-center flex px-4 py-2 project-background rounded-md items-center gap-2 sleek-white"
                            >
                                <img
                                    src="/assets/icons/airplane.png"
                                    alt="airplane"
                                    className="size-5"
                                />
                                <h1 className="text-md text-white">Send Message</h1>
                            </button>
                        </section>
                    </form>
                </div>

                <div className="flex flex-col md:pt-15 gap-8 fade-in-up">
                    <section className="gap-3 mt-4 p-5 rounded-lg border border-gray-400 bg-dark shadow-[0_0_0_2px_#3b82f6]">
                        <h1 className="font-bold text-2xl introduction-gradient-text">
                            Get in touch
                        </h1>

                        <a
                            href="mailto:farief673@gmail.com"
                            className="items-center mt-4 flex gap-2 cursor-pointer px-3 py-2 rounded-lg hover:bg-blue-200/80 sleek-white transition-all duration-200"
                        >
                            <div className="rounded-lg p-2 icon-background">
                                <img
                                    src="/assets/icons/contact.png"
                                    alt="contact"
                                    className="size-8"
                                />
                            </div>

                            <div
                               className="flex flex-col"
                            >
                                <h1 className="text-md me-gradient-text">
                                    Email
                                </h1>

                                <p className="text-white text-md">
                                    farief673@gmail.com
                                </p>
                            </div>
                        </a>

                        <a
                            href="https://wa.me/6289609111188"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="items-center mt-4 flex gap-2 cursor-pointer px-3 py-2 rounded-lg hover:bg-blue-200/80 sleek-white transition-all duration-200"
                        >
                            <div className="rounded-lg p-2 icon-background">
                                <img
                                    src="/assets/icons/telephone.png"
                                    alt="telephone"
                                    className="size-8"
                                />
                            </div>

                            <div
                                className="flex flex-col"
                            >
                                <h1 className="text-md me-gradient-text">
                                    Phone
                                </h1>

                                <p className="text-white text-md">
                                    +62 89609111188
                                </p>
                            </div>
                        </a>

                        <a
                            href="https://www.google.com/maps/place/Malang,+Malang+City,+East+Java,+Indonesia"
                            target="_blank"
                            className="items-center mt-4 flex gap-2 cursor-pointer px-3 py-2 rounded-lg hover:bg-blue-200/80 sleek-white transition-all duration-200"
                        >
                            <div className="rounded-lg p-2 icon-background">
                                <img
                                    src="/assets/icons/location.png"
                                    alt="location"
                                    className="size-8"
                                />
                            </div>

                            <div className="flex flex-col">
                                <h1 className="text-md me-gradient-text">
                                    Location
                                </h1>

                                <p className="text-white text-md">
                                    Malang, Indonesia
                                </p>
                            </div>
                        </a>
                    </section>

                    <section className="gap-3 mt-4 p-5 rounded-lg border border-gray-400 bg-dark shadow-[0_0_0_2px_#3b82f6]">
                        <h1 className="font-bold text-2xl introduction-gradient-text">
                            Follow me
                        </h1>

                        <div className="flex gap-4 mt-4">
                            <a
                                href="https://github.com/Arief-alt"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="cursor-pointer px-3 py-2 sosial-media-background rounded-lg sleek-white transition-all duration-200"
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
                                className="cursor-pointer px-3 py-2 sosial-media-background rounded-lg sleek-white transition-all duration-200"
                            >
                                <img
                                    src="/assets/icons/linkedin.png"
                                    alt="linkedin"
                                    className="size-9"
                                />
                            </a>
                        </div>
                    </section>

                    <section className="flex flex-col gap-3 mt-4 p-5 rounded-lg border border-gray-400 bg-dark shadow-[0_0_0_2px_#3b82f6]">
                        <h1 className="font-bold text-2xl introduction-gradient-text">
                            Availability
                        </h1>

                        <div className="flex gap-2 items-center">
                            {/* Little green circle with opacity animation */}
                            <div className="w-3 h-3 rounded-full bg-green-300 animate-pulse opacity-0"
                                 style={{ animation: 'pulse 3s infinite' }}></div>

                            <p className="font-bold available-gradient-text">
                                Available for new projects
                            </p>
                        </div>

                        <p className="text-md me-gradient-text">
                            I'm currently available for freelance work and exciting new opportunities. Let's discuss your project!
                        </p>
                    </section>
                </div>
            </section>

            <section className="pt-15 gap-2 fade-in-up">
                <div className="text-center gap-2 items-center flex flex-col p-5 rounded-lg border border-gray-400 bg-dark shadow-[0_0_0_2px_#3b82f6]">
                    <h1 className="font-bold text-2xl introduction-gradient-text">
                        Ready to start a project?
                    </h1>

                    <p className="me-gradient-text text-lg">
                        Whether you have a detailed project brief or just an idea, I'd love to discuss how we can work together to make it happen.
                    </p>

                    <a
                        href="mailto:farief673@gmail.com"
                        className="flex px-8 py-2 project-background rounded-md items-center gap-2 sleek-white"
                    >
                        <img
                            src="/assets/icons/contact.png"
                            alt="contact"
                            className="size-5"
                        />

                        <h1 className="text-md text-white">
                            Email Me
                        </h1>
                    </a>
                </div>
            </section>
        </main>
    )
}
export default Contact
