import React, {useEffect} from 'react';
import { Outlet, useLocation } from 'react-router';
import { MobileNavbar, Navbar, SparkleCursor, ThreeDBackground } from 'components';

const PersistentBackground = ({ children }: { children: React.ReactNode })=> {
    return (
        <>
            <div className="fixed inset-0 z-0">
                <ThreeDBackground />
            </div>
            {children}
        </>
    );
};

const Layout = () => {
    const location = useLocation();

    useEffect(() => {
        document.documentElement.classList.remove('dark');
        document.documentElement.style.colorScheme = 'light';
        localStorage.setItem('theme', 'light');
        const toggleButton = document.querySelector('.theme-toggle');
        if (toggleButton) toggleButton.remove();
    }, []);

    return (
        <div className="bg-no-repeat bg-cover bg-center bg-fixed portfolio-background min-h-screen flex flex-col w-full">
            <PersistentBackground key={location.pathname}>
                <div className="fixed inset-0 z-1 pointer-events-none overflow-hidden">
                    <SparkleCursor />
                </div>

                <div className="relative z-10 flex flex-col flex-grow">
                    <MobileNavbar />

                    <Navbar />

                    <Outlet />
                </div>
            </PersistentBackground>
        </div>
    );
};

export default Layout;