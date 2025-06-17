import React, {useEffect} from 'react';
import { Outlet } from 'react-router';
import { MobileNavbar, Navbar, SparkleCursor, ThreeDBackground } from 'components';

const Layout = () => {
    useEffect(() => {
        document.documentElement.classList.remove('dark');
        document.documentElement.style.colorScheme = 'light';
        localStorage.setItem('theme', 'light');
        const toggleButton = document.querySelector('.theme-toggle');
        if (toggleButton) toggleButton.remove();
    }, []);

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

                <main className="pb-8 z-20 flex-grow pt-[56px] lg:pt-[80px]">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default Layout;