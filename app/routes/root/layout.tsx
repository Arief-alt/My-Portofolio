import React from 'react'
import {Outlet} from 'react-router'
import {Navbar, ThreeDBackground } from 'components'

const Layout = () => {
    return (
        <div className="portfolio-background dark-mode">

            <ThreeDBackground/>

            <div style={{ position: 'relative', zIndex: 1 }}>
                <Navbar />
                <Outlet />
            </div>
        </div>
    );
};

export default Layout;