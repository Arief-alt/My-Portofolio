import React from 'react';
import { Outlet } from 'react-router';
import {BouncingMouse, MobileNavbar, Navbar, SparkleCursor, ThreeDBackground} from 'components';

const Layout = () => {
    return (
        <div className="portfolio-background dark-mode relative min-h-screen">
            <div className="fixed inset-0 z-0">
                <ThreeDBackground />
            </div>

            <SparkleCursor />

            <div className="hidden lg:block">
                <BouncingMouse />
            </div>

            <div className="relative z-10 min-h-screen">
                <div className="fixed top-0 left-0 w-full z-50">
                    <MobileNavbar />
                </div>

                <div className="hidden lg:block w-full z-40">
                    <Navbar />
                </div>

                <main className="px-4 pb-8">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default Layout;