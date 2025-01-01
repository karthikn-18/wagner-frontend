import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../UserLayout/Header';
import Footer from '../UserLayout/Footer';

const UserLayout = () => {
    return (
        <div className="userLayout">
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}

export default UserLayout;
