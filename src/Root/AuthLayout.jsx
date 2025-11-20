import React from "react";
import Logo from "../components/logo";
import { Link, Outlet } from "react-router-dom";
import LpageImg from "../assets/authImage.png";

const AuthLayout = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 py-6">
            <Link to='/'>  <Logo /></Link>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center min-h-[80vh]">

                {/* Left: Form */}
                <div className="flex justify-center md:justify-start">
                    <div className="w-full max-w-sm">
                        <Outlet />
                    </div>
                </div>

                {/* Right: Illustration */}
                <div className="hidden md:flex justify-end">
                    <img
                        src={LpageImg}
                        alt="Auth"
                        className="w-full max-w-lg object-contain select-none"
                    />
                </div>
            </div>
        </div>
    );
};

export default AuthLayout;
