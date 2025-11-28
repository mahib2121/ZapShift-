// import React from 'react';
// import { Link, NavLink, Outlet } from 'react-router-dom';

// const DashbordLayout = () => {
//     return (
//         <div>
//             <div className="drawer lg:drawer-open">
//                 <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
//                 <div className="drawer-content">
//                     {/* Navbar */}
//                     <nav className="navbar w-full bg-base-300">
//                         <label htmlFor="my-drawer-4" aria-label="open sidebar" className="btn btn-square btn-ghost">
//                             {/* Sidebar toggle icon */}
//                             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor" className="my-1.5 inline-block size-4"><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path><path d="M9 4v16"></path><path d="M14 10l2 2l-2 2"></path></svg>
//                         </label>
//                         <div className="px-4">Navbar Title</div>
//                     </nav>
//                     {/* Page content here */}
//                     <Outlet></Outlet>
//                     <div className="p-4">Page Content</div>
//                 </div>

//                 <div className="drawer-side is-drawer-close:overflow-visible">
//                     <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
//                     <div className="flex min-h-full flex-col items-start bg-base-200 is-drawer-close:w-14 is-drawer-open:w-64">
//                         {/* Sidebar content here */}
//                         <ul className="menu w-full grow">
//                             {/* List item */}
//                             <li>
//                                 <Link to="/" className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Homepage">
//                                     {/* Home icon */}
//                                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor" className="my-1.5 inline-block size-4"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
//                                     <span className="is-drawer-close:hidden">Homepage</span>
//                                 </Link>
//                             </li>
//                             <li>
//                                 <NavLink to='/dashboard/my-parcel'>
//                                     My parcels
//                                 </NavLink>
//                             </li>

//                             {/* List item */}
//                             <li>
//                                 <button className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Settings">
//                                     {/* Settings icon */}
//                                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor" className="my-1.5 inline-block size-4"><path d="M20 7h-9"></path><path d="M14 17H5"></path><circle cx="17" cy="17" r="3"></circle><circle cx="7" cy="7" r="3"></circle></svg>
//                                     <span className="is-drawer-close:hidden">Settings</span>
//                                 </button>
//                             </li>
//                         </ul>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default DashbordLayout;



import React from "react";
import { FaTruck } from "react-icons/fa";
import { Link, NavLink, Outlet } from "react-router-dom";

const DashboardLayout = () => {
    return (
        <div className="drawer lg:drawer-open">
            <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />

            {/* Main Content */}
            <div className="drawer-content flex flex-col">
                {/* Top Navbar */}
                <nav className="navbar bg-base-300 px-4 shadow-sm">
                    <label
                        htmlFor="dashboard-drawer"
                        aria-label="open sidebar"
                        className="btn btn-square btn-ghost lg:hidden"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            strokeLinejoin="round"
                            strokeLinecap="round"
                            strokeWidth="2"
                            fill="none"
                            stroke="currentColor"
                            className="size-5"
                        >
                            <path d="M4 4h16M4 12h16M4 20h16" />
                        </svg>
                    </label>

                    <h1 className="text-lg font-semibold">Dashboard</h1>
                </nav>

                {/* Page Body */}
                <div className="p-4">
                    <Outlet />
                </div>
            </div>

            {/* Sidebar */}
            <div className="drawer-side">
                <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>

                <aside className="w-64 bg-base-200 min-h-full flex flex-col">
                    <ul className="menu p-4 text-base-content">
                        {/* Home */}
                        <li>
                            <Link to="/" className="flex items-center gap-3">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    strokeLinejoin="round"
                                    strokeLinecap="round"
                                    strokeWidth="2"
                                    fill="none"
                                    stroke="currentColor"
                                    className="size-5"
                                >
                                    <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path>
                                    <path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                                </svg>
                                Homepage
                            </Link>
                        </li>

                        {/* My Parcels */}
                        <li>
                            <NavLink
                                to="/dashboard/my-parcel"
                                className={({ isActive }) =>
                                    isActive ? "active font-medium" : ""
                                }
                            >
                                <FaTruck />
                                My Parcels
                            </NavLink>
                        </li>

                        {/* Settings */}
                        <li>
                            <button className="flex items-center gap-3">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    strokeLinejoin="round"
                                    strokeLinecap="round"
                                    strokeWidth="2"
                                    fill="none"
                                    stroke="currentColor"
                                    className="size-5"
                                >
                                    <path d="M20 7h-9"></path>
                                    <path d="M14 17H5"></path>
                                    <circle cx="17" cy="17" r="3"></circle>
                                    <circle cx="7" cy="7" r="3"></circle>
                                </svg>
                                Settings
                            </button>
                        </li>
                    </ul>
                </aside>
            </div>
        </div>
    );
};

export default DashboardLayout;
