import React, {useEffect, useRef} from 'react';
import { Outlet, useLocation } from 'react-router';
import { MobileNavbar, Navbar, SparkleCursor, ThreeDBackground } from 'components';

const Layout = () => {
    const mainRef = useRef<HTMLDivElement>(null);
    const location = useLocation();

    useEffect(() => {
        document.documentElement.classList.remove('dark');
        document.documentElement.style.colorScheme = 'light';
        localStorage.setItem('theme', 'light');
        const toggleButton = document.querySelector('.theme-toggle');
        if (toggleButton) toggleButton.remove();
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0);

        document.documentElement.style.height = '';
        document.body.style.height = '';

        const html = document.documentElement;
        const body = document.body;

        html.style.overflowY = 'hidden';
        body.style.overflowY = 'hidden';

        void html.offsetHeight;
        void body.offsetHeight;


        requestAnimationFrame(() => {
            html.style.overflowY = '';
            body.style.overflowY = '';
        });

    }, [location]);

    return (
        <div className="portfolio-background relative min-h-screen flex flex-col">
            <div className="fixed inset-0 z-0">
                <ThreeDBackground />
            </div>

            <SparkleCursor />

            <div className="relative z-10 flex flex-col flex-grow">
                <div className="fixed top-0 left-0 w-full z-40">
                    <MobileNavbar />
                </div>

                <div className="hidden lg:block w-full z-30">
                    <Navbar />
                </div>

                <main ref={mainRef} className="pb-8 z-20 flex-grow pt-[56px] lg:pt-[80px]">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default Layout;