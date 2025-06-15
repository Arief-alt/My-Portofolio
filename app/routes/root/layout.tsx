import React from 'react'
import {Outlet} from 'react-router'
import {MobileNavbar, Navbar, SparkleCursor, ThreeDBackground} from 'components'

const Layout = () => {
    return (
        <div className="portfolio-background dark-mode">

            <ThreeDBackground/>
            <SparkleCursor />

            <div
                style={{ position: 'relative', zIndex: 1 }}
            >
                <MobileNavbar />

                <div className="hidden lg:block w-full">
                    <Navbar />
                </div>

                <Outlet />
            </div>
        </div>
    );
};

export default Layout;