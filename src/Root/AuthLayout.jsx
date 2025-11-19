import React from 'react';
import Logo from '../components/logo';
import { Outlet } from 'react-router-dom';
import LpageImg from '../assets/authImage.png';

const AuthLayout = () => {
    return (
        <div className="max-w-7xl mx-auto px-4">
            <Logo />

            {/* Responsive Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center min-h-screen">

                {/* Left: Login / Signup Form */}
                <div className="flex justify-center md:justify-start">
                    <Outlet />
                </div>

                {/* Right: Image */}
                <div className="flex justify-center md:justify-end">
                    <img
                        src={LpageImg}
                        alt="Auth"
                        className="w-full max-w-md md:max-w-full object-contain"
                    />
                </div>
            </div>
        </div>
    );
};

export default AuthLayout;
